import Product from '../models/product';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';

export const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Thêm sản phẩm thất bại"
            })
        }
        const { name, description, price } = fields;
        if (!name || !description || !price) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        let product = new Product(fields);
        if (files.photo) {
            if (files.photo.size > 100000) {
                return res.status(400).json({
                    error: "Bạn nên Upload ảnh dưới 1MB"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contenType = files.photo.type;

        }
        product.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Không thêm được sản phẩm"
                })
            }
            res.json(data);
        });
    });
}
////////////////////////////////////////////////////////////////
export const productById = (req, res, next, id) => {

    Product.findById(id).exec((err, product) => {
        if (err || !product) {
          return  res.status(400).json({
                error: "không tìm thấy sản phẩm "
            })
        }
        req.product = product;
        next();
    })
}
////////////////////////////////////////////////////////////////
export const read = (req, res) => {
    return res.json(req.product);
}

///////////////////////////////////

export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deleteProduct) => {
        if (err) {
            return res, status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            deleteProduct,
            message: "Sản phẩm đã được xóa thành công"
        })
    });
}

export const list = (req, res) => {
    Product.find((err, data) => {
        if (err) {
            error: "Không tìm thấy sản phẩm";
        }
        res.json(data )
    })
}
///////////////////////////////

export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "sua sản phẩm thất bại"
            })
        }
        const { name, description, price } = fields;
        if (!name || !description || !price) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        let product = req.product;
        product = _.assignIn(product, fields);
        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: "Bạn nên Upload ảnh dưới 1MB"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contenType = files.photo.type;

        }
        product.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sua được sản phẩm"
                })
            }
            res.json(data);
        });
    });
}
// router.get("/product/photo/:productId", photo)
export const photo = (req, res, next) => {
    console.log(req.product)
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
}