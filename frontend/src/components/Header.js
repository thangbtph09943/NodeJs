import CategoryAPI from "../api/categoryAPI";


const Header = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();

        return /*html*/ `<div class="wrapper">
    <div class="">
    <nav class="menu">
    <ul class="clearfix">
        <li><a href="#">Trang chủ</a></li>
        <li>
            <a href="">Danh mục <span class="arrow">&#9660;</span></a>

            <ul class="sub-menu">
               <li>
                <a href="">
                ${categories.map(category => {
           return `
                <a href="/#/category/${category._id}">${category.name}</a>`
        })}
                  </a>
                </li>    
            </ul>
        </li>
        <li><a href="/#/products">Sản phẩm</a></li>
        <li><a href="#">Liên hệ</a></li>

    </ul>
    
</nav>
    </div>
    <div class="signin">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <a href="/#/signup"><button type="button" class="btn btn-danger">Signup</button></a>
  <a href="/#/listproduct"><button type="button" class="btn btn-success">Signin</button></a>
  
</div>
    </div>
</div>
        `

    }
}
export default Header;
