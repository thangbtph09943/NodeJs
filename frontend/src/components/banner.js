const banner = {
    render(){
        return /*html*/`<div class="row" id="slide">
        <div class="col-sm-8">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../images/slide 1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../images/slide2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../images/slide3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        </div>
        <div class="col-sm">
            <br>
            <a href="#"><img class="imet" src="images/300-90-300x90.png" alt="" width="390px"></a>
            <hr>
            <a href="#"><img class="imet" src="images/aiku-300x90.png" alt="" width="390px"></a>
        </div>
    </div>
        `
    }
}
export default banner;