<template>
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
        placeholder="Search events, tags"
        :value="modelValue"
        @input.prevent="$emit('update:modelValue',$event.target.value)"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
.searchContainer {
  border-bottom: 1px solid #eee;
}

.searchbar {
  font-weight: 300;
  height: 60px;
  width: 100%;
  border-radius: none;
  outline: none;
}
</style>
