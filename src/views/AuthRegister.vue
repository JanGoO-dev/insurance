<template>
  <div>
    <primary-navbar></primary-navbar>
    <Registration></Registration>
    <Footer></Footer>
  </div>
</template>

<script>
import Registration from "../components/Registeration";
import PrimaryNavbar from "../components/PrimaryNavbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Registration,
    PrimaryNavbar,
    Footer
  }
};
</script>