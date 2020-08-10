<template>
  <div id="hero-image">
    <div
      class="image"
      :style="{backgroundImage: 'url('+require('@/assets/'+curPlan.imageLink)+')'}"
    >
      <div class="button btn border-left-0 rounded-left-0 round-right pt-4 pb-3 pr-5 mb-3 mt-5">
        <h4 class="text-white">{{ curPlan.title }} - {{ curPlan.id }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["curPlan"]
};
</script>

<style lang="scss" scoped>
div.button {
  opacity: 1;
  background-color: #ffc107 !important;
  cursor: none !important;
}
#hero-image {
  margin: 50px auto;
  display: grid;
  grid-template-columns: 9% 1fr 9%;
  div.image {
    grid-column: 2 / span 1;
    width: 100%;
    height: 400px;
    // background-image: url("../assets/card1.jpg");
    background-size: 100%;
    background-position: center;
    border-left: solid 10px #ffc107;
  }
}
</style>