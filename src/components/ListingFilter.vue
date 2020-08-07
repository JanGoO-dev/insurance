<template>
  <div>
    <section id="listing-filter-wrap" class="mt-5">
      <div id="listing-title" class="container pl-5">
        <span class="h1">Listings</span>
      </div>
      <div
        id="listing-filter-nav"
        class="round-left round-right container custom-shadow p-2"
      >
        <div class="title h4 text-secondary">Filter</div>
        <div
          v-for="(selector, index) in 4"
          :key="index"
          class="form-group mx-3"
        >
          <select class="minimal form-control round-left round-right">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="filter-btn">
          <button class="btn btn-warning round-left round-right">
            <span class="px-4">Apply Filter</span>
            <i class="fas fa-filter"></i>
          </button>
        </div>
      </div>
    </section>
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

select {
  /* styling */
  background-color: white;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  /* reset */

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select.minimal {
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}

select.minimal:focus {
  background-image: linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  border-color: green;
  outline: 0;
}

#listing-filter-wrap {
  display: grid;
  grid-template-columns: 1fr;
  #listing-filter-nav {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    div.title {
      place-self: center;
      padding-bottom: 0px;
    }
    .form-group {
      margin-bottom: 0px;
    }
    div.filter-btn {
      place-self: end;
    }
  }
}
</style>
