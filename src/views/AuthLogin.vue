<template>
  <div>
    <primary-navbar></primary-navbar>
    <Login></Login>
    <Footer></Footer>
  </div>
</template>

<script>
import Login from "../components/Login";
import PrimaryNavbar from "../components/PrimaryNavbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Login,
    PrimaryNavbar,
    Footer
  }
};
</script>