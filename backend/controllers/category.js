import Category from '../models/category';
export const create = (req, res) => {
const category = new Category(req.body);
category.save((err, data) => {
    if (err) {
        return res.status(400).json({
            error: "không thêm được danh mục "
        })
    }
    res.json({data})
});
}
////////////////////////////////////////////////////////////////
export const list = (req, res) => {
    Category.find((err, categories) => {
        if(err) {
            return res.status(400).json({
                error: "Danh mục không tồn tại"
            })
        }
        res.json(categories)
    })
}

////////////////////////////

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err || !category){
            res.status(400).json({
                error: "Không tìm thấy danh mục"
            })
        }
        req.category = category;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.category);
}
/////////////////////
export const update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if(err || !category) {
           res.status(400).json({
               error: "Danh mục này không tồn tại"
           })
        }
        res.json(data);
    });
}


export const remove = (req, res) => {
     let category = req.category;
     category.remove((err, deletedCategory) => {
         if (err || !category){
             res.status(400).json({
                 error: "Danh mục không tồn tại "
             })
         }
         res.json({
            deletedCategory,
            message: "Xóa danh mục thành công "
         })
     })
}