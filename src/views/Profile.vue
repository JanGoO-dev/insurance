<template>
  <div>
    <PrimaryNavbar class="header" :style="`backgroundColor: ${ curColor }10`"></PrimaryNavbar>
    <div id="profile-wrap">
      <section id="profile-showcase">
        <div class="profile-bg" :style="`backgroundColor: ${ curColor }`"></div>
        <div class="profile-pic">
          <img src="@/assets/avatar.svg" alt="Avatar SVG" />
        </div>
        <span class="profile-name">{{ user.name }}</span>
      </section>
      <button
        @click="toggleColor"
        class="color-change btn btn-transparent"
        :style="`backgroundColor: ${ curColor }`"
      >
        <span style="visibility: hidden">$</span>
      </button>
    </div>
  </div>
</template>

<script>
import PrimaryNavbar from "../components/PrimaryNavbar.vue";
export default {
  data() {
    return {
      colors: [
        { color: "#4f8a8b" },
        { color: "#f09ae9" },
        { color: "#261132" },
        { color: "#DB162F" },
        { color: "#EEBA0B" },
        { color: "#ffa5b0" },
        { color: "#6a197d" },
        { color: "#1C2833" },
        { color: "#515A5A" },
        { color: "#B3B6B7" },
        { color: "#BA4A00" },
        { color: "#CA6F1E" },
        { color: "#F39C12" },
        { color: "#28B463" },
        { color: "#138D75" },
        { color: "#2E86C1" },
        { color: "#1F618D" },
        { color: "#8E44AD" },
        { color: "#CB4335" },
        { color: "#A93226" }
      ],
      index: 0
    };
  },
  components: {
    PrimaryNavbar
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    curColor() {
      return this.colors[this.index].color;
    }
  },
  methods: {
    toggleColor() {
      if (this.index < 19) {
        this.index = this.index + 1;
      } else {
        this.index = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#profile-wrap {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: stretch;
  position: relative;
  #profile-showcase {
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0px 20px 60px #00000040;
    .profile-bg {
      height: 280px;
      border-bottom: solid 8px #ffc107;
    }
    .profile-pic {
      align-self: center;
      height: 200px;
      width: 200px;
      background-color: gray;
      border-radius: 100%;
      position: absolute;
      top: 170px;
      border: solid 10px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 40px #00000050;
    }
    .profile-name {
      align-self: center;
      position: absolute;
      top: 90px;
      font-size: 1.2em;
      text-align: center;
      background-color: #ffc107;
      padding: 10px 30px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      box-shadow: 0px 0px 40px #00000050;
    }
  }
  .color-change {
    position: absolute;
    top: 1.6rem;
    right: 1rem;
    color: white;
    border: solid 6px white;
  }
}
</style>