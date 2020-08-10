<template>
  <div>
    <header @click="rotateArrow" id="mini-nav-wrap" class="py-2">
      <section id="mini-nav-links">
        <transition name="fade">
          <ul v-show="miniVisible" class="nav">
            <li v-for="(link, index) in 6" :key="index" class="mx-1">
              <button type="submit" class="btn btn-outline-info btn-sm px-5">Link {{ index }}</button>
            </li>
          </ul>
        </transition>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniVisible: false
    };
  },
  methods: {
    rotateArrow() {
      this.miniVisible = !this.miniVisible;
    }
  }
};
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

#mini-nav-wrap::after {
  display: block;
  content: " ";
  background-image: url("../assets/dot.svg");
  background-position: 50%;
  background-size: 22px 22px;
  background-repeat: no-repeat;
  height: 28px;
  width: 28px;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  // border-left: solid 1px #ffc107;
  // border-right: solid 1px #ffc107;
  // border-bottom: solid 1px #ffc107;
  position: sticky;
  margin-top: 10px;
  z-index: 999;
  background-color: #ffc107;
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

header#mini-nav-wrap:hover:after {
  background-size: 28px 28px;
}

button[type="submit"] {
  opacity: 0.5;
}

// transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 630px) {
  button[type="submit"] {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
