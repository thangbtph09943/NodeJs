const SidebarMenu = {
    render(){
        return /*html*/`
        <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/products">
              <span data-feather="file"></span>
              products
            </a>
            <a class="nav-link" href="/#/listcategory">
            <span data-feather="file"></span>
            Category
          </a>
          </li>
        </ul>
      </div>
        `
    }
}
export default SidebarMenu;