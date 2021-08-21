import ProductAPI from '../api/productAPI';
import CategoryAPI from '../api/categoryAPI';
import { $ } from '../utils.js';
import swal from 'sweetalert';

const ProductAddPage = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        return   /*html*/`<form id="form-add" >
                <div class = "form-group mb-3">
                    <input type= "text" placeholder=" Tên sản phẩm" id="name" class =" form-control" />
                </div>
                <div class = "form-group mb-3">
                    <input  type= "text" placeholder=" Chi tiết sản phẩm" id="description" class =" form-control" />
                </div>
                <div class = "form-group mb-3">
                    <input type= "number" placeholder=" price" id="price" class =" form-control" />
                </div>
                <div class = "form-group mb-3">
                    <input type= "file"  id="photo" class =" form-control" />
                </div>
                <div class = "form-group mb-3">
                    <select id="category">
                        <option> Danh mục</option>
                        ${categories.map(category => {
            return `<option value="${category._id}">${category.name}</option>`
        }).join("")
            }
                    </select> 
                </div>
                <a href = ""><button class = "btn btn-success">submit</button></a>
            </form>`
    },
    afterRender() {
        $('#form-add').addEventListener('submit', (e) => {
            e.preventDefault();
            if ($("#name").value == "") {
                swal("Cảnh báo", "bạn chưa nhập tên sản phẩm", "warning");
                return false;
            }
            if ($("#description").value == "") {
                swal("Cảnh báo", "bạn chưa nhập chi tiết sản phẩm", "warning");
                return false;
            }
            if ($("#price").value == "") {
                swal("Cảnh báo", "bạn chưa nhập giá sản phẩm", "warning");
                return false;
            }
            if ($("#photo").value == "") {
                swal("Cảnh báo", "bạn chưa nhập ảnh sản phẩm", "warning");
                return false;
            }
            if ($("#category").value == "") {
                swal("Cảnh báo", "bạn chưa nhập danh mục sản phẩm", "warning");
                return false;
            }
            const product = new FormData();
                product.append('name', $("#name").value),
                product.append('price', $("#price").value),
                product.append('description', $("#description").value),
                product.append('category', $("#category").value),
                product.append('photo', $("#photo").files[0]),
                ProductAPI.add(product)
            swal("Chúc mừng", "thêm sản phẩm thành công", "success");
            window.location.hash = '/listproduct';

        })
    }
}
export default ProductAddPage;

