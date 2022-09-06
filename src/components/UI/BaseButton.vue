<template>
  <button :class="mode">
    <slot>Button Fallback Text</slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.625rem 1.25rem;
  font-family: inherit;
  font-weight: 500;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  border-radius: 12px;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  border: 2px solid #3a0061 !important;
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
