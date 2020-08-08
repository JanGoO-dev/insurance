<template>
  <div>
    <header id="mini-nav-wrap" class="py-2">
      <section id="mini-nav-links">
        <ul class="nav">
          <li v-for="(link, index) in 6" :key="index" class="mx-1">
            <button type="submit" class="btn btn-outline-info btn-sm px-5">
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
.nav li:first-child {
  button {
    -webkit-border-top-left-radius: 354px;
    -webkit-border-bottom-left-radius: 354px;
    -moz-border-radius-topleft: 354px;
    -moz-border-radius-bottomleft: 354px;
    border-top-left-radius: 354px;
    border-bottom-left-radius: 354px;
  }
}
.nav li:last-child {
  button {
    -webkit-border-top-right-radius: 354px;
    -webkit-border-bottom-right-radius: 354px;
    -moz-border-radius-topright: 354px;
    -moz-border-radius-bottomright: 354px;
    border-top-right-radius: 354px;
    border-bottom-right-radius: 354px;
  }
}
#mini-nav-wrap {
  // background-color: #ececec;
  // background-color: rgba(95, 255, 3, 0.151);
  // background-color: rgba(255, 3, 3, 0.075);
  display: grid;
  place-items: center;
  // -webkit-box-shadow: inset 0px 0px 29px -9px #0ec6cc60;
  // -moz-box-shadow: inset 0px 0px 29px -9px #0ec6cc60;
  // box-shadow: inset 0px 0px 29px -9px #0ec6cc60;
  -webkit-box-shadow: inset 0px 0px 69px -39px #0059ff60;
  -moz-box-shadow: inset 0px 0px 69px -39px #0059ff60;
  box-shadow: inset 0px 0px 69px -39px #0059ff60;
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
