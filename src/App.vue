<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #111400;
    }
  }
}

// Custom Scroll Bar
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(1, 29, 32, 0.377);
  border-radius: 20px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(1, 29, 32, 0.616);
}
</style>
