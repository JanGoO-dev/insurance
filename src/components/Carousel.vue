<template>
  <div id="carousel-wrap">
    <div id="carouselCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#carouselCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselCaptions" data-slide-to="1"></li>
        <li data-target="#carouselCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/slide1.png"
            class="d-block w-100 gray-filter"
            alt="Slide1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/slide1.png"
            class="d-block w-100 gray-filter"
            alt="Slide2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/slide1.png"
            class="d-block w-100 gray-filter"
            alt="Slide3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tales {
  width: 100%;
}
.carousel-inner {
  width: 100%;
  max-height: 344px !important;
}
.carousel-caption {
  left: 9%;
  text-align: left;
  background-color: #0749ff96;
  max-width: 500px;
  right: auto;
  padding: 20px;
  backdrop-filter: blur(2px);
}
</style>
