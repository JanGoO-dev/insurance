<template>
  <div>
    <div class="mt-5 alert alert-success">
      <h1 class="alert-heading text-center">
        <i class="fas fa-exclamation-circle"></i>
      </h1>
      <div class="container text-center d-flex flex-column justify-content-center h4">
        <p>
          This page is only for those users, who already don't have account on
          <span
            class="text-warning font-weight-bolder"
          >Company Name</span> and want to register as a new user and make your life spark
        </p>
        <p class="mt-2 mb-0">
          If you do have an account then,
          <router-link to="/Auth/Login">Login</router-link>
        </p>
      </div>
    </div>
    <div class="page-content">
      <div class="form-v10-content">
        <form class="form-detail" action="#" method="#" id="myform">
          <div class="form-left">
            <h2 class="text-warning mt-5">
              <button
                disabled
                class="btn btn-outline-warning border-left-0 rounded-left-0 round-right py-3 pr-4 mb-3"
              >
                <span class="h4">General Infomation</span>
              </button>
            </h2>
            <div class="form-row form-group">
              <select v-model="jobTitle">
                <option>Job Title</option>
                <option>Businessman</option>
                <option>Reporter</option>
                <option>Secretary</option>
              </select>
              <span class="select-btn">
                <i class="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div class="form-group">
              <div class="form-row form-row-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  class="input-text"
                  placeholder="First Name"
                  v-model="firstName"
                  required
                />
              </div>
              <div class="form-row form-row-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  class="input-text"
                  placeholder="Last Name"
                  v-model="lastName"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <select v-model="position" name="position">
                <option value="position">Position</option>
                <option value="director">Director</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
              <span class="select-btn">
                <i class="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div class="form-row">
              <input
                type="text"
                name="company"
                class="company"
                id="company"
                placeholder="Company"
                v-model="companyName"
                required
              />
            </div>
            <div class="form-group">
              <div class="form-row form-row-3">
                <input
                  type="text"
                  name="business"
                  class="business"
                  id="business"
                  placeholder="Business Arena"
                  v-model="businessArena"
                  required
                />
              </div>
              <div class="form-row form-row-4">
                <select v-model="employees" name="employees">
                  <option value="employees">Employees</option>
                  <option value="trainee">Trainee</option>
                  <option value="colleague">Colleague</option>
                  <option value="associate">Associate</option>
                </select>
                <span class="select-btn">
                  <i class="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="form-right bg-primary">
            <h2 class="mt-5">
              <button
                disabled
                class="btn btn-outline-light border-left-0 rounded-left-0 round-right py-3 pr-4 mb-3"
              >
                <span class="h4">Contact Details</span>
              </button>
            </h2>
            <div class="form-row">
              <input
                type="text"
                name="street"
                class="street"
                id="street"
                placeholder="Street + Nr"
                v-model="street"
                required
              />
            </div>
            <div class="form-row">
              <input
                type="text"
                name="additional"
                class="additional"
                id="additional"
                placeholder="Additional Information"
                v-model="additionalInfo"
                required
              />
            </div>
            <div class="form-group">
              <div class="form-row form-row-1">
                <input
                  v-model="zipCode"
                  type="text"
                  name="zip"
                  class="zip"
                  id="zip"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div class="form-row form-row-2">
                <select v-model="place" name="place">
                  <option value="place">Place</option>
                  <option value="Street">Street</option>
                  <option value="District">District</option>
                  <option value="City">City</option>
                </select>
                <span class="select-btn">
                  <i class="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div class="form-row">
              <select v-model="country" name="country">
                <option value="country">Country</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Malaysia">Malaysia</option>
                <option value="India">India</option>
              </select>
              <span class="select-btn">
                <i class="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div class="form-group">
              <div class="form-row form-row-1">
                <input
                  v-model="countryCode"
                  type="text"
                  name="code"
                  class="code"
                  id="code"
                  placeholder="Code +"
                  required
                />
              </div>
              <div class="form-row form-row-2">
                <input
                  type="text"
                  name="phone"
                  class="phone"
                  id="phone"
                  placeholder="Phone Number"
                  v-model="phone"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <input
                type="text"
                name="your_email"
                id="your_email"
                class="input-text"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                placeholder="Your Email"
                v-model="email"
              />
            </div>
            <div class="form-checkbox">
              <label class="container">
                <p>
                  I do accept the
                  <a href="#" class="text">Terms and Conditions</a> of your
                  site.
                </p>
                <input v-model="acceptTermsConditions" type="checkbox" name="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="form-row-last">
              <button @click="register" type="button" name="register" class="btn register py-2">
                <span v-if="!loading">Register</span>
                <span
                  class="spinner-border spinner-border-sm"
                  v-else
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
              <div v-show="registered">
                <small
                  class="text-white py-2"
                >Accound created. You are being redirected to Login Page</small>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div>
      <span class="text-center d-flex flex-row justify-content-center h3">
        Already have an account then,
        <router-link to="/Auth/Login">Login</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      registered: false,
      jobTitle: "Job Title",
      firstName: "",
      lastName: "",
      position: "Position",
      companyName: "",
      businessArena: "",
      employees: "Employees",
      street: "",
      additionalInfo: "",
      zipCode: "",
      place: "Place",
      countery: "Country",
      countryCode: "",
      phone: "",
      email: "",
      acceptTermsConditions: false
    };
  },
  methods: {
    register() {
      this.loading = true;
      setTimeout(() => {
        this.registered = true;
        this.loading = false;
      }, 600);
      setTimeout(() => {
        this.$router.push({ path: "/Auth/Login" });
      }, 3000);
    }
  }
};
</script>

<style>
.round-right {
  -webkit-border-top-right-radius: 354px !important;
  -webkit-border-bottom-right-radius: 354px !important;
  -moz-border-radius-topright: 354px !important;
  -moz-border-radius-bottomright: 354px !important;
  border-top-right-radius: 354px !important;
  border-bottom-right-radius: 354px !important;
}
.page-content {
  width: 100%;
  margin: 0 auto;
  /* background: #75e2e9; */
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
}
.form-v10-content {
  background: #fff;
  width: 1100px;
  border-radius: 30px;
  -o-border-radius: 30px;
  -ms-border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  margin: 95px 0;
  position: relative;
  font-family: "Montserrat", sans-serif;
}
.form-v10-content .form-detail {
  position: relative;
  width: 100%;
  display: flex;
  display: -webkit-flex;
}
.form-v10-content .form-detail h2 {
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 34px;
  padding: 33px 50px 0px 60px;
}
.form-v10-content .form-detail .form-left {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 100%;
  background: #2a2b26;
  border-right: solid 10px #ffc107;
}
.form-v10-content .form-detail .form-left h2 {
  color: #2271dd;
}
.form-v10-content .form-detail .form-right {
  width: 100%;
  background: #4835d4;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.form-v10-content .form-detail .form-right h2 {
  color: #fff;
}
.form-v10-content .form-detail .form-group {
  display: flex;
  display: -webkit-flex;
}
.form-v10-content .form-detail .form-row {
  position: relative;
  margin-bottom: 24px;
  padding-left: 60px;
  padding-right: 50px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-1 {
  width: 50%;
  padding: 0 12px 0 60px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-2 {
  width: 50%;
  padding: 0 50px 0 12px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-3 {
  width: 73%;
  padding: 0 12px 0 60px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 {
  width: 50%;
  padding: 0 50px 0 12px;
}
.form-v10-content .form-detail .form-right .form-group .form-row.form-row-1 {
  width: 50%;
  padding: 0 12px 0 60px;
}
.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
  width: 100%;
  padding: 0 50px 0 12px;
}
.form-v10-content .form-detail select,
.form-v10-content .form-detail input {
  width: 100%;
  padding: 11.5px 15px 15px 15px;
  border: 1px solid transparent;
  background: transparent;
  appearance: unset;
  -moz-appearance: unset;
  -webkit-appearance: unset;
  -o-appearance: unset;
  -ms-appearance: unset;
  outline: none;
  -moz-outline: none;
  -webkit-outline: none;
  -o-outline: none;
  -ms-outline: none;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
.form-v10-content .form-detail select {
  background: 0 0;
  position: relative;
  z-index: 9;
  cursor: pointer;
}
.form-v10-content .form-detail .form-left select {
  color: #666;
}
.form-v10-content .form-detail .form-right select {
  color: #f2f2f2;
}
.form-v10-content .form-detail .select-btn {
  z-index: 0;
  position: absolute;
  top: 30%;
  right: 11.5%;
  font-size: 18px;
}
.form-v10-content .form-detail .form-left .select-btn {
  color: #666;
}
.form-v10-content .form-detail .form-right .select-btn {
  color: #f2f2f2;
}
.form-v10-content .form-detail .form-group .form-row.form-row-4 .select-btn {
  top: 20%;
  right: 26%;
}
.form-v10-content
  .form-detail
  .form-right
  .form-group
  .form-row.form-row-2
  .select-btn {
  top: 20%;
  right: 19%;
}
.form-v10-content .form-detail .form-left input {
  color: #000;
}
.form-v10-content .form-detail .form-right input {
  color: #fff;
}
.form-v10-content .form-detail .form-left input,
.form-v10-content .form-detail .form-left select {
  border-bottom: 1px solid #ccc;
}
.form-v10-content .form-detail .form-left input:focus,
.form-v10-content .form-detail .form-left select:focus {
  border-bottom: 1px solid #999;
}
.form-v10-content .form-detail .form-right input,
.form-v10-content .form-detail .form-right select {
  border-bottom: 1px solid;
  border-bottom-color: rgba(255, 255, 255, 0.3);
}
.form-v10-content .form-detail .form-right input:focus,
.form-v10-content .form-detail .form-right select:focus {
  border-bottom: 1px solid #ccc;
}
.form-v10-content .form-detail .form-right select option {
  background: #4835d4;
}
.form-v10-content .form-detail .form-checkbox {
  margin-top: 37px;
  padding: 0 50px 0 60px;
  position: relative;
}
.form-v10-content .form-detail .form-checkbox input {
  position: absolute;
  opacity: 0;
}
.form-v10-content .form-detail .form-checkbox .checkmark {
  position: absolute;
  top: 1px;
  left: 60px;
  height: 15px;
  width: 15px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
}
.form-v10-content .form-detail .form-checkbox .checkmark::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 1px;
  width: 3px;
  height: 8px;
  border: 1px solid #fff;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  display: none;
}
.form-v10-content
  .form-detail
  .form-checkbox
  input:checked
  ~ .checkmark::after {
  display: block;
}
.form-v10-content .form-detail .form-checkbox p {
  margin-left: 34px;
  color: #e5e5e5;
  font-size: 14px;
  font-weight: 400;
}
.form-v10-content .form-detail .form-checkbox .text {
  font-weight: 400;
  color: #fff;
  text-decoration: underline;
}
.form-v10-content .form-detail .form-right .form-row-last {
  padding-left: 60px;
  margin: 44px 0 10px;
}
.form-v10-content .form-detail .form-right .register {
  background: #fff;
  border-radius: 25px;
  -o-border-radius: 25px;
  -ms-border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
  width: 180px;
  border: none;
  margin: 6px 0 50px 0px;
  cursor: pointer;
  color: #333;
  font-weight: 700;
  font-size: 15px;
}
.form-v10-content .form-detail .form-right .register:hover {
  background: #ccc;
}
.form-v10-content .form-detail .form-right .form-row-last input {
  padding: 12.5px;
}
.form-v10-content .form-detail .form-left input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-left input::-moz-placeholder {
  /* Firefox 19+ */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-left input:-ms-input-placeholder {
  /* IE 10+ */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-left input:-moz-placeholder {
  /* Firefox 18- */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #f2f2f2;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input::-moz-placeholder {
  /* Firefox 19+ */
  color: #f2f2f2;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input:-ms-input-placeholder {
  /* IE 10+ */
  color: #f2f2f2;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input:-moz-placeholder {
  /* Firefox 18- */
  color: #f2f2f2;
  font-size: 16px;
}

/* Responsive */
@media screen and (max-width: 1199px) {
  .form-v10-content {
    margin: 95px 20px;
  }
}
@media screen and (max-width: 991px) and (min-width: 768px) {
  .form-v10-content .form-detail .form-group {
    flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
  }
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,
  .form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,
  .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
    width: auto;
    padding: 0 50px 0 60px;
  }
  .form-v10-content .form-detail .select-btn,
  .form-v10-content
    .form-detail
    .form-left
    .form-group
    .form-row.form-row-4
    .select-btn,
  .form-v10-content
    .form-detail
    .form-right
    .form-group
    .form-row.form-row-2
    .select-btn {
    right: 15%;
  }
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
    border-top-right-radius: 0px;
    border-bottom-left-radius: 30px;
  }
  .form-v10-content .form-detail .form-left {
    padding-bottom: 50px;
    border-radius: 0px;
    border: none;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
}
@media screen and (max-width: 575px) {
  .form-v10-content .form-detail .form-group {
    flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
  }
  .form-v10-content .form-detail .form-row,
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,
  .form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,
  .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
    width: auto;
    padding: 0 30px;
  }
  .form-v10-content .form-detail .select-btn,
  .form-v10-content
    .form-detail
    .form-left
    .form-group
    .form-row.form-row-4
    .select-btn,
  .form-v10-content
    .form-detail
    .form-right
    .form-group
    .form-row.form-row-2
    .select-btn {
    right: 15%;
  }
  .form-v10-content .form-detail h2 {
    padding: 33px 30px 0px 30px;
  }
  .form-v10-content .form-detail .form-checkbox {
    padding: 0 30px;
  }
  .form-v10-content .form-detail .form-checkbox .checkmark {
    left: 30px;
  }
  .form-v10-content .form-detail .form-right .form-row-last {
    padding-left: 0;
    text-align: center;
    margin: 44px 0 30px;
  }
}
</style>