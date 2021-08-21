import CategoryAPI from '../api/categoryAPI';
import {$} from '../utils';
import swal from "sweetalert";
const CategoryAddpage = {
    async render() {
        return /*html*/`<form id="form-addcategory" >
        <div class = "form-group mb-3">
            <label class = "">Category</label>
            <input type= "text" placeholder=" Tên Category" id="name" class =" form-control" />
        </div>   
        <a href = ""><button class = "btn btn-success">submit</button></a>
    </form>
        `
    },
    afterRender() {
        $('#form-addcategory').addEventListener('submit', (e) => {
            e.preventDefault();
               const category = new FormData();
               category.append('name', $("#name").value),
                CategoryAPI.add(category);
                console.log(category)
                swal("Chúc mừng", "Thêm danh mục thành công ", "success");
                window.location.hash = '/listcategory';

        })
    }
}
export default CategoryAddpage;