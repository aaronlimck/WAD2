<template>
  <div :class="classes">
    <div class="searchContainer">
      <div class="container mx-auto flex items-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          class="ml-3 searchbar"
          type="text"
          placeholder="Search event name, location"
          :value="modelValue"
          @input.prevent="$emit('update:modelValue', $event.target.value)"
          @input="$emit('update:modelValue', $event.target.value)"
          @focus="showDropdown"
          @keydown.esc="closeDropdown"
          @keydown.enter="closeDropdown"
        />
      </div>
    </div>
    <div
      v-if="searchFocus && this.$route.path != '/dashboard'"
      id="dropdown"
      class="py-10 px-4 sm:px-0"
    >
      <div class="container mx-auto flex flex-col">
        <div>
          <p class="mx-3 mb-2 font-medium uppercase text-sm">Location</p>
          <ul class="flex flex-wrap">
            <li
              class="customPill text-sm hover:drop-shadow-md bg-white"
              v-for="filter in filtersBySchool"
              :key="filter"
              @click="
                getSchoolName(filter);
                closeDropdown();
              "
            >
              {{ filter }}
            </li>
          </ul>
        </div>
        <div>
          <p class="mx-3 mb-2 font-medium uppercase text-sm pt-8">Others</p>
          <ul class="flex flex-wrap">
            <li
              class="customPill text-sm hover:drop-shadow-md bg-white"
              v-for="filter in filtersByDate"
              :key="filter"
              @click="
                getSchoolName(filter);
                closeDropdown();
              "
            >
              {{ filter }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    getSchoolName: Function,
    classes: String,
  },
  data() {
    return {
      filtersBySchool: [
        `SMU School of Accountancy`,
        `SMU Lee Kong Chian School of Business`,
        `SMU School of Economics`,
        `SMU School of Computing and Information Systems 1`,
        `SMU Yong Pung How School of Law`,
        `School of Social Sciences`,
      ],
      filtersByDate: [`Today`, `Tommorrow`],
      searchFocus: false,
    };
  },
  methods: {
    showDropdown() {
      this.searchFocus = !this.searchFocus;
    },
    closeDropdown() {
      this.searchFocus = false;
    },
  },
};
</script>

<style scoped>
.searchContainer,
#dropdown {
  border-bottom: 1px solid #eee;
}

#dropdown {
  position: absolute;
  background: white;
  width: 100%;
  z-index: 100;
}

.customPill {
  padding: 0 16px;
  border-radius: 8px;
  margin: 4px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15 ease;
  height: 36px;
  white-space: nowrap;
  text-decoration: none;
  box-shadow: inset rgb(0 0 0 / 15%) 0 0 0 1px;
}

.searchbar {
  font-weight: 300;
  height: 60px;
  width: 100%;
  border-radius: none;
  outline: none;
}
</style>
