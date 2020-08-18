<template>
  <div class="row mx-5">
    <div class="col-lg-3">
      <div class="list-group">
        <a
          v-for="(link, index) in links"
          :key="index"
          class="list-group-item list-group-item-action"
          :class="{ active: link.active }"
          @click="changeTab(index)"
        >{{ link.title }}</a>
      </div>
    </div>
    <div v-show="links[0].visible" class="extend col-lg-9 pl-5 mt-5">
      <div class="row">
        <h1 class="mb-4 col-sm-11">{{ links[0].title }}</h1>
        <div
          @click="toggleEdit"
          class="cursor d-flex flex-row-reverse col-sm-1 align-items-start h3 text-warning"
        >
          <span v-show="editable">
            <i class="far fa-eye"></i>
          </span>
          <span v-show="!editable">
            <i class="fas fa-pen-nib"></i>
          </span>
        </div>
      </div>
      <GeneralInfo></GeneralInfo>
    </div>
    <div v-show="links[1].visible" class="extend col-lg-9 pl-5 mt-5">
      <div class="row">
        <h1 class="mb-4 col-sm-11">{{ links[1].title }}</h1>
        <div
          @click="toggleEdit"
          class="cursor d-flex flex-row-reverse col-sm-1 align-items-start h3 text-warning"
        >
          <span v-show="editable">
            <i class="far fa-eye"></i>
          </span>
          <span v-show="!editable">
            <i class="fas fa-pen-nib"></i>
          </span>
        </div>
      </div>
      <PersonalInfo></PersonalInfo>
    </div>
    <div v-show="links[2].visible" class="extend col-lg-9 pl-5 mt-5">
      <div class="row">
        <h1 class="mb-4 col-sm-11">{{ links[2].title }}</h1>
        <div
          @click="toggleEdit"
          class="cursor d-flex flex-row-reverse col-sm-1 align-items-start h3 text-warning"
        >
          <span v-show="editable">
            <i class="far fa-eye"></i>
          </span>
          <span v-show="!editable">
            <i class="fas fa-pen-nib"></i>
          </span>
        </div>
      </div>
      <ContactInfo></ContactInfo>
    </div>
    <div v-show="links[3].visible" class="extend col-lg-9 pl-5 mt-5">
      <h1 class="mb-4">{{ links[3].title }}</h1>
      <CompanyPolicy></CompanyPolicy>
    </div>
    <div class="mt-5 alert alert-warning" role="alert">Last Updated: 20/20/2020 at 3:00 PM</div>
  </div>
</template>

<script>
import GeneralInfo from "../components/userInfo/GeneralInfo";
import PersonalInfo from "../components/userInfo/PersonalInfo";
import ContactInfo from "../components/userInfo/ContactInfo";
import CompanyPolicy from "../components/userInfo/CompanyPolicy";
export default {
  components: {
    GeneralInfo,
    PersonalInfo,
    ContactInfo,
    CompanyPolicy
  },
  data() {
    return {
      links: [
        { title: "General Information", visible: true, active: true },
        { title: "Personal Information", visible: false, active: false },
        { title: "Contact Information", visible: false, active: false },
        { title: "Company Policy", visible: false, active: false }
      ]
    };
  },
  methods: {
    changeTab(index) {
      for (var i = 0; i < this.links.length; i++) {
        this.links[i].visible = false;
        this.links[i].active = false;
      }
      this.links[index].visible = true;
      this.links[index].active = true;
    },
    toggleEdit() {
      console.log(this.editable);
      this.editable = !this.editable;
      this.$store.commit("set_editable");
    },
    toggleExtend() {
      var e = document.querySelector(".extend");
      if (window.innerWidth < 750) {
        e.classList.remove("pl-5");
      } else {
        e.classList.add("pl-5");
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.toggleExtend);
  },
  computed: {
    editable() {
      return this.$store.getters.get_editable;
    }
  }
};
</script>

<style scoped>
a,
.cursor {
  cursor: pointer !important;
}
</style>
