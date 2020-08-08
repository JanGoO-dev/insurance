<template>
  <div>
    <PrimaryNavbar></PrimaryNavbar>
    <SecondaryNavbar></SecondaryNavbar>
    <Carousel></Carousel>
    <ListingFilter></ListingFilter>
    <div class="container mt-5" id="card-wrap">
      <Card v-for="(card, index) in 10" :key="index"></Card>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import PrimaryNavbar from "../components/PrimaryNavbar";
import SecondaryNavbar from "../components/SecondaryNavbar";
import Carousel from "../components/Carousel";
import ListingFilter from "../components/ListingFilter";
import Card from "../components/Card";
import Footer from "../components/Footer";
export default {
  components: {
    PrimaryNavbar,
    SecondaryNavbar,
    Carousel,
    ListingFilter,
    Card,
    Footer,
  },
};
</script>

<style lang="scss">
.custom-shadow {
  -webkit-box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
}

#card-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}

@media screen and (max-width: 1000px) {
  #card-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
