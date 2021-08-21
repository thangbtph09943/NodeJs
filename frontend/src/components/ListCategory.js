import CategoryAPI from "../api/categoryAPI";
import { reRender, $ } from '../utils.js';

const ListCaregory = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();

    return /*html */ `
    <a  href="/#/addcategory" class="btn btn-primary w-200" type="button">Add category</a> 
    <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th width="200">Action</th>
            
            </tr>
          </thead>
          <tbody>
          ${categories.map((category, index) => {
            
            return /*html*/ `
           <tr>
           <td>${index}</td>
           <td>${category.name}</td>
            
           <td>
           <a href="/#/editproduct/${category._id}" class="btn btn-primary">Update</a>
           <button class="btn btn-danger btn-remove" data-id="${category._id}">Remove</button>
           </td>
         </tr>
           `
        }).join("")}
           
          </tbody>
        </table>
        `
  },
  async afterRender() {
    const btns = $('#list-category .btn');
    btns.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async function () {
        if (btn.classList.contains('btn-remove')) {
          const question = confirm('bạn có muốn xóa hay không?')
          if (question) {
            await CategoryAPI.remove(id);
            await reRender (ListCaregory, '#list-category');
          }
        }
      })
    })
  }
}
export default ListCaregory;