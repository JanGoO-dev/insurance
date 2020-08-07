<template>
  <div>
    <PrimaryNavbar></PrimaryNavbar>
  </div>
</template>

<script>
import PrimaryNavbar from "../components/PrimaryNavbar";
export default {
  components: {
    PrimaryNavbar,
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
