<template>
  <div>
    <div class="card p-5 border-0 shadow">
      <div v-for="(info, index) in information" :key="index" class="my-2">
        <span class="h5 text-warning">{{ info.feild }}:</span>
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
  methods: {
    onInput(e) {
      console.log(e.target.innerText);
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
</style>