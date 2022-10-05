<template>
  <base-dialog v-if="showDialog" title="Invalid Input">
    <template #default>
      <p>Just Another Lame Text</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        obcaecati repudiandae perferendis repellendus nobis harum aut neque
        numquam ipsum aliquid facere possimus earum atque voluptates est,
        tempore quaerat nesciunt provident.
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmDialogMsg" class="py-1 px-3 sm:mr-0 md:mr-3">
        Okay</base-button
      >
    </template>
  </base-dialog>

  <section style="height: 3000px">
    <div class="container mx-auto">
      <h1>This is Home Page</h1>
      <base-button @click="clickButton" class="py-1 px-3 sm:mr-0 md:mr-3"
        >Click Me</base-button
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    clickButton() {
      this.showDialog = true;
      return;
    },
    confirmDialogMsg() {
      this.showDialog = false;
    },
  },
};
</script>
