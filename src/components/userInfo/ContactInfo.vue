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
        { feild: "Country Code", data: "+92" },
        { feild: "Phone Number", data: "03040002202" },
        { feild: "Email", data: "muhammad@companyname.com" },
        {
          feild: "Current Address",
          data: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
          feild: "Working Address",
          data: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
          feild: "Postal Address",
          data: "Lorem ipsum dolor sit amet, consectetur"
        },
        { feild: "Area Code", data: "5400" },
        {
          feild: "Facebook",
          data: "@facebook.com"
        },
        {
          feild: "Twitter",
          data: "@twitter.com"
        },
        {
          feild: "Instagram",
          data: "@instagram.com"
        }
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