import ProductAPI from "../api/productAPI";
import { parseRequestUrl } from "../utils";

const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: products } = await ProductAPI.getAll(); 
        const result = products.filter(product => product.categoryId == id).map(product => { 
            return `
                             <div class="col">   
                                 <div class="card" ">
                                        <img class="card-img-top" src="${product.image}" alt="${product.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">${product.price} đ</p>
              <a href="/#/products/${product.id}" class="btn btn-primary">Chi tiết sản phẩm</a>
              </div>
            </div>
            
          </div>`
        }).join("");
        return `
        <div class="row">
        ${result}
        </div>
        `
    }
}
export default CategoryPage;