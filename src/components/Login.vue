<template>
  <div>
    <div class="mt-5 alert alert-success">
      <h1 class="alert-heading text-center">
        <i class="fas fa-exclamation-circle"></i>
      </h1>
      <div class="container text-center d-flex flex-column justify-content-center h4">
        <p>
          This page is only for those users, who already have account on
          <span
            class="text-warning font-weight-bolder"
          >Company Name</span> and have made their life spark
        </p>
        <p class="mt-2 mb-0">
          If you don't have an account then,
          <router-link to="/Auth/Register">Register</router-link>
        </p>
      </div>
    </div>
    <div class="page-content">
      <div class="form-v10-content">
        <form class="form-detail" action="#" method="#" id="myform">
          <div class="form-left">
            <img src="@/assets/login.svg" class="img-fluid mt-5" alt="Welcome Back SVG" />
          </div>
          <div class="form-right bg-primary">
            <h2 class="mt-5">
              <button
                disabled
                class="btn btn-outline-light border-left-0 rounded-left-0 round-right py-3 pr-4 mb-3"
              >
                <span class="h4">Login</span>
              </button>
            </h2>
            <div class="form-row">
              <input
                type="text"
                name="street"
                class="street"
                id="street"
                placeholder="Your Name Here (Optional)"
                v-model="userFullName"
                required
              />
            </div>
            <div class="form-row">
              <input
                type="email"
                name="your_email"
                id="your_email"
                class="input-text"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                placeholder="Your Email Here"
                v-model="userEmail"
              />
            </div>
            <div class="form-row">
              <input
                type="password"
                name="additional"
                class="additional"
                id="additional"
                placeholder="Your Password Here"
                v-model="userPassword"
                required
              />
            </div>
            <div class="form-row-last">
              <button @click="login" type="button" name="register" class="btn register py-2">
                <span v-if="!loading">Login</span>
                <span
                  class="spinner-border spinner-border-sm"
                  v-else
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
              <div v-show="!isValid" class="error p-3 mb-5">
                <small class="text-danger">
                  Name, Email, Password are required.
                  <br />Please provide every single information.
                </small>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div>
      <span class="text-center d-flex flex-row justify-content-center h3">
        Don't have an account then,
        <router-link to="/Auth/Register">Register</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userFullName: "",
      userEmail: "",
      userPassword: "",
      loading: false,
      isValid: true
    };
  },
  watch: {
    userFullName() {
      this.isValid = true;
    },
    userEmail() {
      this.isValid = true;
    },
    userPassword() {
      this.isValid = true;
    }
  },
  methods: {
    login() {
      this.loading = true;
      if (
        this.userFullName !== "" &&
        this.userEmail !== "" &&
        this.userPassword !== ""
      ) {
        this.isValid = true;
        setTimeout(() => {
          this.loading = false;
          this.$router.push({ path: "/dashboard" });
        }, 5000);
      } else {
        this.isValid = false;
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.error {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 8px;
}

@media screen and (max-width: 767px) {
  .form-v10-content .form-detail {
    flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
  }
  .form-v10-content .form-detail .form-right {
    border-radius: 30px;
  }
  .form-v10-content .form-detail .form-left {
    display: none;
    /* padding-bottom: 50px; */
  }
}
.form-left {
  display: grid;
  place-items: center;
}
</style>