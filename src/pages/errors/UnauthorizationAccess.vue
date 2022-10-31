<template>
  <div>You Are Here</div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.back();
    }, 500);
  },
};
</script>
