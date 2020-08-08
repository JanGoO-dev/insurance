<template>
  <div>
    <header id="nav-wrap" class="navbar navbar-light border-bottom">
      <section id="nav-logo">
        <span class="text-primary">brand</span
        ><span class="text-warning font-weight-bolder">LOGO</span>
      </section>
      <section id="nav-search" class="custom-shadow round-left round-right">
        <div class="input-group">
          <input
            type="search"
            class="form-control round-left border-0 pl-4"
            placeholder="Search..."
            aria-label="Search"
          />
          <div class="input-group-append">
            <button
              class="btn border-0 round-right pr-4"
              type="button"
              id="button-addon2"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </section>
      <section id="nav-btn">
        <button
          type="submit"
          class="btn btn-primary round-left round-right px-4"
        >
          Login
          <span class="pl-2"><i class="fas fa-sign-in-alt"></i></span>
        </button>
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
    height: 150px;
    grid-template-columns: repeat(2, 1fr);
    #nav-logo {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
    }
    #nav-search {
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
    }
    #nav-search {
      input[type="search"] {
        width: 200px;
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
</style>
