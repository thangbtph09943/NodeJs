import ListCaregory from "../components/ListCategory.js";
import SidebarMenu from "../components/SidebarMenu.js";

const AdminCategory ={
   async render(){
        return /*html*/ `
        <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
           ${SidebarMenu.render()}
          </nav>
      
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              
            </div>
            <div class="table-responsive" id="list-products">
              ${await ListCaregory.render()}
            </div>
          </main>
        </div>
      </div>
        `
    },
    async afterRender(){
        return `${await ListCaregory.afterRender()}`
    }
};
export default AdminCategory;