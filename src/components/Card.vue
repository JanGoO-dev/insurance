<template>
  <div>
    <div class="card m-3">
      <img class="card-img-top" src="@/assets/card.jpg" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title text-warning">Card title</h5>
        <p class="card-text text-secondary">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-warning round-right round-right px-4"
          >Go somewhere
          <span class="pl-3"><i class="fas fa-arrow-right"></i></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.round-left {
  -webkit-border-top-left-radius: 354px;
  -webkit-border-bottom-left-radius: 354px;
  -moz-border-radius-topleft: 354px;
  -moz-border-radius-bottomleft: 354px;
  border-top-left-radius: 354px;
  border-bottom-left-radius: 354px;
}

.round-right {
  -webkit-border-top-right-radius: 354px;
  -webkit-border-bottom-right-radius: 354px;
  -moz-border-radius-topright: 354px;
  -moz-border-radius-bottomright: 354px;
  border-top-right-radius: 354px;
  border-bottom-right-radius: 354px;
}
</style>
