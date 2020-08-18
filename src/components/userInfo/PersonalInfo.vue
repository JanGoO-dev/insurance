<template>
  <div>
    <div class="extend-size-P card p-5 h5 border-0 shadow">
      <div v-for="(info, index) in information" :key="index" class="my-2">
        <span class="text-warning">{{ info.feild }}:</span>
        <span
          v-show="!editable"
          :contenteditable="editable"
          @input="onInput"
          class="h5 ml-3 text-secondary"
        >{{ info.data }}</span>
        <p
          v-show="editable"
          :contenteditable="editable"
          @input="onInput"
          class="h5 ml-3 p-3 mt-2 text-dark bg-light"
        >{{ info.data }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      information: [
        { feild: "Name", data: "Muhammad Bin Shehzad" },
        { feild: "Father's Name", data: "Shazad Yousaf" },
        { feild: "Age", data: "26" },
        { feild: "Date of Birth", data: "12/04/2018" },
        { feild: "Gender", data: "Male" },
        { feild: "Number of Siblings", data: "3" },
        { feild: "Marital Status", data: "Single" }
      ]
    };
  },
  mounted() {
    window.addEventListener("resize", this.toggleSizeP);
  },
  methods: {
    onInput(e) {
      console.log(e.target.innerText);
    },
    toggleSizeP() {
      var e = document.querySelector(".extend-size-P");
      if (window.innerWidth < 750) {
        e.classList.remove("h5", "shadow", "p-5");
        e.classList.add("h6");
      } else {
        e.classList.add("h5", "shadow", "p-5");
        e.classList.remove("h6");
      }
    }
  },
  computed: {
    editable() {
      return this.$store.getters.get_editable;
    }
  }
};
</script>

<style scoped>
span {
  letter-spacing: 2px !important;
}

@media screen and (max-width: 750px) {
  span {
    letter-spacing: 0px !important;
  }
}
</style>