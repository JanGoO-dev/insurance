<template>
  <div>
    <div class="extend-size card h5 p-5 border-0 shadow text-justify">
      <div v-for="(info, index) in information" :key="index" class="my-2">
        <span class="text-warning">{{ info.feild }}:</span>
        <span
          v-show="!editable"
          :contenteditable="editable"
          @input="onInput"
          class="ml-3 text-secondary"
        >{{ info.data }}</span>
        <p
          v-show="editable"
          :contenteditable="editable"
          @input="onInput"
          class="ml-3 p-3 mt-2 text-dark bg-light"
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
        { feild: "User Name", data: "@MuhammadBinShahzad" },
        { feild: "Email", data: "muhammad@companyname.com" },
        {
          feild: "Description",
          data:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dicta quisquam accusantium commodi optio, consectetur repellendus similique, nulla, doloremque expedita incidunt. Amet, numquam praesentium doloremque veniam eligendi ea, ex adipisci ab qui error repellendus alias expedita libero iste corrupti sed asperiores optio. Natus nisi suscipit sed possimus veritatis iure, in odit numquam laboriosam obcaecati dolorum voluptatem nostrum porro enim distinctio!"
        },
        { feild: "Account Created: ", data: "12/04/2018" }
      ]
    };
  },
  mounted() {
    window.addEventListener("resize", this.toggleSize);
  },
  methods: {
    onInput(e) {
      console.log(e.target.innerText);
    },
    toggleSize() {
      var e = document.querySelector(".extend-size");
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
  letter-spacing: 2px;
}

@media screen and (max-width: 750px) {
  span {
    letter-spacing: 0px !important;
  }
}
</style>