import ProductAPI from "../api/productAPI";
import banner from "../components/banner";
import footer from "../components/footer";

const HomePage = {
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
    }).join("")

    return /*html*/`
          <div class="banner">
          ${banner.render()}
          </div>
          <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Iphone</a></li>
              <li class="breadcrumb-item"><a href="#">SamSung</a></li>
              <li class="breadcrumb-item"><a href="#">lapTop</a></li>
          
          </ol>
      </nav>
           <div class="row container">
           ${result}
           </div>
           ${footer.render()}
     </h1>
          `
  }
}
export default HomePage;