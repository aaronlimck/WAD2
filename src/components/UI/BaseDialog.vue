<template>
  <teleport to="body">
    <div></div>
    <dialog open class="flex flex-col items-center w-full sm:w-1/2">
      <header>
        <slot name="header">
          <!-- THIS WILL APPEAR AS DEFAULT IF NO HTML IS INPUT -->
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <!-- THIS IS THE DEFAULT SLOT WHICH SHOW THE MSG INFO-->
        <slot></slot>
      </section>
      <menu>
        <slot name="actions"></slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 99;
}

dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px (0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: 1000;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
</style>
