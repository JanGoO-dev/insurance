<template>
  <div>
    <PrimaryNavbar></PrimaryNavbar>
    <SecondaryNavbar></SecondaryNavbar>
    <Carousel></Carousel>
    <ListingFilter></ListingFilter>
    <Card></Card>
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
    Footer
  },
  data() {
    return {
      cards: [
        { link: "@/assets/card1.jpg" },
        { link: "@/assets/card2.jpg" },
        { link: "@/assets/card3.jpg" },
        { link: "@/assets/card4.jpg" },
        { link: "@/assets/card5.jpg" },
        { link: "@/assets/card6.jpg" }
      ]
    };
  }
};
</script>

<style lang="scss">
.custom-shadow {
  -webkit-box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
}
</style>
