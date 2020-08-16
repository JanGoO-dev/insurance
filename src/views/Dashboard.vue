<template>
  <div>
    <div @mouseenter="openNav" id="mySidenav" class="sidenav">
      <span v-show="!isOpen" @click="openNav" class="hangburger">
        <i class="fas fa-chevron-right"></i>
      </span>
      <a v-show="isOpen" href="javascript:void(0)" class="closebtn" @click="closeNav">
        <i class="fas fa-chevron-left"></i>
      </a>
      <div class="mt-5"></div>
      <router-link
        to="/dashboard"
        v-for="(sideLink, index) in 10"
        :key="index"
        :class="{ 'pl150': isSmall }"
        class="btn btn-outline-primary round-right border-0 mr-5 my-2 py-3 text-left"
        href="#"
      >
        <span class="ml-2 pr-4">
          <i class="fas fa-th-large"></i>
        </span>
        <span v-show="isOpen">Lorem - {{ index + 1 }}</span>
      </router-link>
    </div>
    <div id="main">
      <PrimaryNavbar></PrimaryNavbar>
      <div id="dashboard-wrap" class="m-5">
        <div v-for="(panel, index) in 18" :key="index">Panel - {{ index + 1 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryNavbar from "../components/PrimaryNavbar";
export default {
  data() {
    return {
      isOpen: false,
      isSmall: false
    };
  },
  components: {
    PrimaryNavbar
  },
  methods: {
    openNav() {
      if (!this.isOpen) {
        setTimeout(() => {
          this.isOpen = true;
        }, 300);
        if (window.innerWidth > 729) {
          document.getElementById("mySidenav").style.width = "260px";
          document.getElementById("main").style.marginLeft = "260px";
        } else {
          this.isSmall = true;
          document.getElementById("mySidenav").style.width = "100%";
        }
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        // document.body.style.filter = "grayscale(1)";
      }
    },
    closeNav() {
      if (this.isOpen) {
        this.isOpen = false;
        if (window.innerWidth > 729) {
          document.getElementById("mySidenav").style.width = "100px";
          document.getElementById("main").style.marginLeft = "100px";
        } else {
          this.isSmall = false;
          document.getElementById("mySidenav").style.width = "62px";
        }
        // document.body.style.backgroundColor = "white";
        // document.body.style.filter = "grayscale(0)";
      }
    }
  }
};
</script>

<style scoped>
.pl150 {
  padding-left: 150px !important;
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

#dashboard-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
  row-gap: 40px;
  column-gap: 20px;
}

@media screen and (max-width: 1250px) {
  #dashboard-wrap {
    grid-template-columns: repeat(auto-fill, minmax(330px, 2fr));
  }
}

@media screen and (max-width: 950px) {
  #dashboard-wrap {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}

@media screen and (max-width: 478px) {
  #dashboard-wrap {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

#dashboard-wrap > div {
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 16px #00000030;
  border-radius: 10px;
}

.hangburger {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
  color: #2271dd;
}

.hangburger:hover {
  color: #fff;
}
/* The side navigation menu */
.sidenav {
  height: 100vh; /* 100% Full-height */
  width: 100px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #464646;
  /* background-color: #32332f; */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  /* border-right: solid 4px #ffc107; */
  box-shadow: 0px 0px 20px #000;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #2271dd;
  display: block;
  transition: 0.3s ease-in-out;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  margin-left: 100px;
  margin-right: 20px;
  transition: margin-left 0.5s;
  padding: 0px 0px 0px 0px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 16px;
  }
}

@media screen and (max-width: 729px) {
  #main {
    margin-left: 50px !important;
    margin-right: 0px !important;
  }
  .sidenav {
    width: 62px;
  }
  .sidenav a {
    margin-left: -18px;
  }
  .hangburger {
    right: 19px;
  }
}
</style>