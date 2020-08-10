<template>
  <div id="card-wrap" class="container mt-5">
    <div v-for="(card, index) in planCards" :key="index" class="card m-3">
      <img class="card-img-top" :src="require(`@/assets/${card.imageLink}`)" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title text-warning">
          {{ card.title }} -
          <small>{{ card.id }}</small>
        </h5>
        <p v-if="card.text[0].length < 160" class="card-text text-secondary">{{ card.text[0] }}</p>
        <p v-else class="card-text text-secondary">{{ card.text[0].substring(0, 160) + ' ...' }}</p>
        <router-link :to="'/plan/' + card.id" class="btn btn-warning round-right round-right px-4">
          See Plan Details
          <span class="pl-3">
            <i class="fas fa-arrow-right"></i>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    planCards() {
      return this.$store.getters.getAllPlans;
    }
  },
  mounted() {
    window.addEventListener("onload", this.limitNumWords);
  },
  methods: {
    limitNumWords() {
      let elem = this.$el.querySelector(".limit-words");
      let len = elem.innerText.length;
      if (len > 20) {
        elem.innerText = elem.innerText.substr(0, 20) + "...";
      }
    }
  }
};
</script>

<style scoped>
.round-left {
  -webkit-border-top-left-radius: 354px;
  -webkit-border-bottom-left-radius: 354px;
  -moz-border-radius-topleft: 354px;
  -moz-border-radius-bottomleft: 354px;
  border-top-left-radius: 354px;
  border-bottom-left-radius: 354px;
}

.round-right {
  -webkit-border-top-right-radius: 354px;
  -webkit-border-bottom-right-radius: 354px;
  -moz-border-radius-topright: 354px;
  -moz-border-radius-bottomright: 354px;
  border-top-right-radius: 354px;
  border-bottom-right-radius: 354px;
}

.card-img-top {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}

#card-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}

@media screen and (max-width: 1000px) {
  #card-wrap {
    grid-template-columns: 1fr;
  }
  .card-img-top {
    min-block-size: 40vw;
  }
}
</style>
