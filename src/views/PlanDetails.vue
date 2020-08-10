<template>
  <div>
    <primary-navbar></primary-navbar>
    <hero-image :curPlan="plan"></hero-image>
    <div class="container plan-txt">
      <p
        class="text-justify h5 mb-5"
        v-for="(paragraph, index) in plan.text"
        :key="index"
      >{{ paragraph }}</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import PrimaryNavbar from "../components/PrimaryNavbar.vue";
import Footer from "../components/Footer.vue";
import HeroImage from "../components/HeroImage.vue";
export default {
  components: {
    PrimaryNavbar,
    HeroImage,
    Footer
  },
  computed: {
    plan() {
      console.log(this.$route.params.id);
      return this.$store.getters.getCurPlan(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
p {
  letter-spacing: 0.7px;
  line-height: 36px;
}
</style>