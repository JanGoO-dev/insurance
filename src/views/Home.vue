<template>
  <div>
    <PrimaryNavbar></PrimaryNavbar>
    <SecondaryNavbar></SecondaryNavbar>
    <Carousel></Carousel>
    <ListingFilter></ListingFilter>
  </div>
</template>

<script>
import PrimaryNavbar from "../components/PrimaryNavbar";
import SecondaryNavbar from "../components/SecondaryNavbar";
import Carousel from "../components/Carousel";
import ListingFilter from "../components/ListingFilter";
export default {
  components: {
    PrimaryNavbar,
    SecondaryNavbar,
    Carousel,
    ListingFilter,
  },
};
</script>

<style lang="scss">
.custom-shadow {
  -webkit-box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
}
</style>
