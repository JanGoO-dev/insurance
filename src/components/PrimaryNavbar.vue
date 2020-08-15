<template>
  <div>
    <header id="nav-wrap" class="navbar navbar-light border-bottom">
      <section @click="$router.push('/')" id="nav-logo" style="cursor: pointer">
        <span class="text-primary">brand</span>
        <span class="text-warning font-weight-bolder">LOGO</span>
      </section>
      <section id="nav-search" class="custom-shadow round-left round-right">
        <div class="input-group" v-show="this.$route.path == '/'">
          <input
            type="search"
            class="form-control round-left border-0 pl-4"
            placeholder="Search..."
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn border-0 round-right pr-4" type="button" id="button-addon2">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </section>
      <section id="nav-btn">
        <!-- <button
          @click="$router.push('/Auth/Login')"
          type="submit"
          class="btn btn-primary round-left round-right px-4"
          v-show="this.$route.path == '/Auth/Register'"
        >
          <span>Login</span>
          <span class="pl-2">
            <i class="fas fa-sign-in-alt"></i>
          </span>
        </button>-->
        <button
          @click="$router.push('/Auth/Login')"
          type="submit"
          class="btn btn-outline-primary round-left pl-4 pr-3"
          v-show="!isDashboard"
        >
          <!-- <span class="pr-2">
            <i class="fas fa-sign-in-alt"></i>
          </span>-->
          <span>Login</span>
        </button>
        <button
          @click="$router.push('/Auth/Register')"
          type="submit"
          class="btn btn-outline-warning round-right pl-3 pr-4 ml-1"
          v-show="!isDashboard"
        >
          <span>Register</span>
          <!-- <span class="pl-2">
            <i class="fas fa-sign-in-alt"></i>
          </span>-->
        </button>
        <div v-show="isDashboard">
          <router-link to="/" class="profile d-flex flex-row align-items-center">
            <span class="text-warning mr-3">User Name</span>
            <img src="@/assets/avatar.svg" width="40" height="40" alt="Avatar SVG" />
          </router-link>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    isDashboard() {
      return this.$route.path === "/dashboard";
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  text-decoration: none;
}
.profile:hover {
  background-color: rgb(247, 247, 247);
}

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
.navbar-brand > span,
button[type="button"],
input[type="search"] {
  color: #c6c6c6;
  background: #fff;
}

button[type="button"]:focus,
input[type="search"]:focus {
  border: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -moz-transition: none;
  -webkit-transition: none;
}

input[type="search"] {
  width: 400px;
  height: 50px;
}

.form-control::-webkit-input-placeholder {
  color: #c6c6c6;
}
.form-control:-moz-placeholder {
  color: #c6c6c6;
}
.form-control::-moz-placeholder {
  color: #c6c6c6;
}
.form-control::placeholder {
  color: #c6c6c6;
}
.form-control:-ms-input-placeholder {
  color: #c6c6c6;
}

// Grid Implimetation with responsiveness
#nav-wrap {
  height: 75px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-items: center;
  #nav-logo {
    font-size: 20pt;
  }
}

@media screen and (max-width: 1030px) {
  #nav-wrap {
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    #nav-logo {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
    }
    #nav-search {
      input[type="search"] {
        margin-top: 20px;
      }
      width: 80%;
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
    }
    #nav-btn {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
    }
  }
}

@media screen and (max-width: 630px) {
  #nav-wrap {
    height: 75px;
    grid-template-columns: repeat(2, 1fr);
    #nav-logo {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
      font-size: 14pt;
    }
    #nav-search {
      background-color: #fff;
      z-index: 999 !important;
      opacity: 1;
      border-top: solid 4px #ffc107;
      border-radius: 0px !important;
      input[type="search"] {
        width: 200px;
        border-radius: 0px !important;
        background-color: #fff;
        z-index: 999 !important;
        opacity: 1;
      }
      button {
        border-radius: 0px !important;
        background-color: #fff;
        z-index: 999 !important;
        opacity: 1;
      }
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 0px;
    }
    #nav-btn {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
    }
  }
}

@media screen and (max-width: 410px) {
  #nav-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #nav-btn {
    button {
      height: 30px;
      padding: 0px;
    }
  }
}
</style>
