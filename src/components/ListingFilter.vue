<template>
  <div>
    <section id="listing-filter-wrap" class="mt-5">
      <div id="listing-title" class="container pl-5">
        <span class="h1">Listings</span>
      </div>
      <div id="listing-filter-nav" class="round container custom-shadow p-2">
        <div class="title">
          <button class="btn btn-block border-info round-left">
            <span class="px-4 letter-space text-secondary">
              <span class="invisible">##</span>Filter
            </span>
            <span class="pr-2 invisible">.</span>
          </button>
        </div>
        <div v-for="(selector, index) in 4" :key="index" class="filter-select form-group mx-1">
          <select class="minimal border-info form-control rounded-0">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="filter-btn">
          <button class="btn btn-warning btn-block round-right">
            <span class="px-4">Apply Filter</span>
            <span class="pr-2">
              <i class="fas fa-filter"></i>
            </span>
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

.round {
  -webkit-border-radius: 45px;
  -moz-border-radius: 45px;
  border-radius: 45px;
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

span.letter-space {
  letter-spacing: 4px;
}

#listing-filter-wrap {
  display: grid;
  grid-template-columns: 1fr;
  #listing-filter-nav {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    div.title {
      place-self: start;
    }
    .form-group {
      margin-bottom: 0px;
    }
    div.filter-btn {
      place-self: end;
    }
  }
}

@media screen and (max-width: 1270px) {
  #listing-filter-wrap {
    #listing-filter-nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      div.title {
        margin-top: 5px;
        place-self: stretch;
        margin-left: 20px;
        margin-right: 20px;
        grid-row: 1 / span 1;
        grid-column: 1 / span 2;
        button {
          font-size: 14pt;
          border-radius: 0px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
      div.filter-select {
        padding: 5px 17px;
      }
      div.filter-btn {
        margin-top: 10px;
        margin-bottom: 20px;
        width: calc(100% - 40px);
        place-self: center;
        grid-row: 4 / span 1;
        grid-column: 1 / span 2;
        button {
          border-radius: 0px !important;
          border-bottom-left-radius: 20px !important;
          border-bottom-right-radius: 20px !important;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  #listing-filter-wrap {
    #listing-filter-nav {
      grid-template-columns: 1fr;
      box-shadow: none !important;
      div.title {
        grid-row: 1 / span 1;
        grid-column: 1 / span 2;
        button {
          border-radius: 30px !important;
        }
      }
      div.filter-select {
        grid-column: 1 / span 1;
        select {
          border-radius: 30px !important;
        }
      }
      div.filter-btn {
        grid-column: 1 / span 1;
        grid-row: 6 / span 1;
        button {
          border-radius: 30px !important;
        }
      }
    }
  }
}
</style>
