<template>
  <div>
    <header id="mini-nav-wrap" class="py-2">
      <section id="mini-nav-links">
        <ul class="nav">
          <li v-for="(link, index) in 6" :key="index" class="mx-2">
            <button
              type="submit"
              class="btn btn-outline-secondary btn-sm px-3 round-left round-right"
            >
              Link {{ index }}
            </button>
          </li>
        </ul>
      </section>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
#mini-nav-wrap {
  background-color: #ececec;
  display: grid;
  place-items: center;
  -webkit-box-shadow: inset 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: inset 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px 5px 29px -9px rgba(0, 0, 0, 0.25);
}

button[type="submit"] {
  opacity: 0.5;
}

@media screen and (max-width: 630px) {
  button[type="submit"] {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
