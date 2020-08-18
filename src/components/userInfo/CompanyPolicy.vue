<template>
  <div class="extend-size-policy wrap text-justify h5">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolor ab nemo deserunt debitis, nihil deleniti aut voluptates consequatur. Sed consequuntur accusantium suscipit architecto voluptatibus est quo perspiciatis provident id quod, reprehenderit quis rerum harum mollitia! Deserunt rem aperiam natus nulla, at provident repellat ipsam numquam qui beatae iste fugiat nostrum eius vel amet consequuntur perspiciatis facere in quae. Repellendus assumenda quo illo reprehenderit ipsa temporibus earum natus ipsum minus quos, magnam accusantium ratione tempora provident possimus molestias harum, deserunt nemo optio dignissimos. Pariatur atque corporis molestiae ratione! Ullam nisi nihil delectus odit quos corporis perspiciatis repellendus a, sequi aliquid!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis a saepe cumque! Explicabo nam ullam mollitia. Ipsa voluptatem a sint animi totam, aut quos, porro quod incidunt quisquam maxime id quae est vel magni, fugiat labore iure! Ullam molestias accusantium cupiditate quidem dolorum adipisci, quas voluptatem natus possimus iusto? In.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi sapiente harum nisi explicabo aspernatur, ab hic at nam. Distinctio reprehenderit quas eveniet illum doloribus dolorem, ullam recusandae dicta sapiente nostrum dolore. Quisquam, ab rem. Delectus aliquam dicta eligendi beatae itaque facere officiis odio debitis, quod adipisci cum velit aspernatur nisi totam modi saepe culpa ea temporibus eaque voluptates. Magni officia dolore quo quae distinctio delectus repellendus. Delectus corporis eos, dignissimos, officiis provident debitis nulla deleniti dolorum iusto, omnis amet?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis a saepe cumque! Explicabo nam ullam mollitia. Ipsa voluptatem a sint animi totam, aut quos, porro quod incidunt quisquam maxime id quae est vel magni, fugiat labore iure! Ullam molestias accusantium cupiditate quidem dolorum adipisci, quas voluptatem natus possimus iusto? In.</p>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("resize", this.toggleSizePolicy);
  },
  methods: {
    toggleSizePolicy() {
      var e = document.querySelector(".extend-size-policy");
      if (window.innerWidth < 750) {
        e.classList.remove("h5");
      } else {
        e.classList.add("h5");
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  max-width: 80ch;
  letter-spacing: 2px;
}

@media screen and (max-width: 750px) {
  .wrap {
    letter-spacing: 0px !important;
    margin: 0 !important;
  }
}
</style>