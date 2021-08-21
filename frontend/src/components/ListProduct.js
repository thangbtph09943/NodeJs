import ProductAPI from "../api/productAPI";
import { reRender, $ } from "../utils.js"

const ListProduct = {
    async render() {
        const { data: products } = await ProductAPI.getAll();
   
        return /*html*/ `
        <a  href="/#/addproduct" class="btn btn-primary w-200" type="button">Add Product</a> 
    <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>image</th>
              <th>Price</th>
              
              <th width="200">Action</th>
            
            </tr>
          </thead>
          <tbody>
          ${products.map((product, index) => {
            
            return /*html*/ `
           <tr>
           <td>${index}</td>
           <td>${product.name}</td>
           <td><img src="http://localhost:4000/api/products/photo/${product._id}" width="80" height="80"/></td>
           <td>${product.price}</td>
            
           <td>
           <a href="/#/editproduct/${product._id}" class="btn btn-primary">Update</a>
           <button class="btn btn-danger btn-remove" data-id="${product._id}">Remove</button>
           </td>
         </tr>
           `
        }).join("")}
           
          </tbody>
        </table>
    `
    },
   async afterRender() {
    const btns = $('#list-products .btn');
    btns.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async function () {
        if (btn.classList.contains('btn-remove')) {
          const question = confirm('bạn có muốn xóa hay không?')
          if (question) {
            await ProductAPI.remove(id);
            await reRender (ListProduct, '#list-products');
          }
        }


      })
    })
  }

}
export default ListProduct;