import ProductAPI from "../api/productAPI";
import banner from "../components/banner";
const ProductsPage = {
  async render() {

    const { data: products } = await ProductAPI.getAll();

    const result = products.map(product => {
      return /*html */ `
      <div class="col-3 p-3">   
        <div class="card" >
          <img class="image" src="http://localhost:4000/api/products/photo/${product._id}" >
          <div class="card-body">
          <h5 id="cName" class="card-title">${product.name}</h5>
          <p class="card-text">${product.categories}</p>
          <p class="card-text">${product.description}</p>
          <p class="card-text">${product.price} đ</p>
          <a href="/#/products/${product._id}" class="btn btn-primary">Chi tiết sản phẩm</a>
          </div>
        </div>
      </div> `
    }).join("");

    return `
       <div class="banner">
       ${banner.render()}
       </div>
           <div class="row">
           ${result}
          </div>
          `
  }
}
export default ProductsPage;