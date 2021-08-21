import ProductAPI from '../api/productAPI';
import CategoryAPI from "../api/categoryAPI";
import { parseRequestUrl, $ } from '../utils';

const ProducEditPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductAPI.get(id);
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/ `
        <form id="form-update-product" >
        <div class="mb-3">
          <label for="product-name" class="form-label">Product Name</label>
          <input type="text" class="form-control" id="name" value="${product.name}" aria-describedby="emailHelp">
          <label for="product-price" class="form-label">price</label>
          <input type="number" class="form-control" id="price" value="${product.price}" aria-describedby="emailHelp">
          <label for="product-detail" class="form-label">Detail</label>
          <input type="text" class="form-control" id="description" value="${product.description}" aria-describedby="emailHelp">
          <input type="file" id="photo"  >
                <input type="hidden" value="${product.image}" id="olds-images">
                <img class="w-400 pt-2" src="http://localhost:4000/api/products/photo/${product._id}" alt="">
        </div>
        <div class = "form-group mb-3">
            <select id="category">
                <option>Category</option>
                ${categories.map(category => {
                        return `<option value="${category._id}">${category.name}</option>`
                    }).join("")
                }
            </select> 
        </div>
        
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        $('#form-update-product').addEventListener('submit', (e) => {
            console.log($("#photo").files[0])
            e.preventDefault();
            const product = new FormData();
            product.append('name', $("#name").value),
                product.append('price', $("#price").value),
                product.append('description', $("#description").value),
                product.append('category', $("#category").value),
                product.append('photo', $("#photo").files[0])
                console.log(product)
            ProductAPI.update(id, product)
            alert("Sửa sản phẩm thành công");
            window.location.hash = '/listproduct';

        })
    }
};
export default ProducEditPage;

