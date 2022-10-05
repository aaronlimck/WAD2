<template>
  <div class="form-group my-2">
    <label :for="name">{{ labelText }}</label>
    <input
      :id="name"
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      @:blur="printConsole"
    />
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    printConsole() {
      //console.log(`${this.inputValue} input component`);
      this.$emit("input-value", this.inputValue.trim());
    },
  },
};
</script>

<style scoped>
label {
  font-weight: 400;
  color: #787878;
}

input {
  display: block;
  width: 100%;
  font-weight: 300;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}
</style>
