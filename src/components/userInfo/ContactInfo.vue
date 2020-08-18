<template>
  <div>
    <div class="extend-size-C card h5 p-5 border-0 shadow">
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
  mounted() {
    window.addEventListener("resize", this.toggleSizeC);
  },
  methods: {
    onInput(e) {
      console.log(e.target.innerText);
    },
    toggleSizeC() {
      var e = document.querySelector(".extend-size-C");
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