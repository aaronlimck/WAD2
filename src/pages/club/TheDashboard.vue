<template>
  <div class="container mx-auto">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="eventName">Event Name</label>
        <input
          type="type"
          id="eventName"
          placeholder="Event Name"
          v-model.trim="eventName"
        />
      </div>

      <div class="form-control">
        <label for="eventStartDate">Event Start Date</label>
        <input type="date" id="eventStartDate" v-model.trim="eventStartDate" />
      </div>

      <div class="form-control">
        <label for="eventDescription">Event Description</label>
        <textarea id="eventDescription" v-model.trim="eventDescription" />
      </div>
      <base-button class="w-full py-2.5 my-4">Create Event</base-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventName: "",
      eventStartDate: "",
      eventDescription: "",
    };
  },
  methods: {
    submitForm() {
      let data = {
        eventName: this.eventName,
        eventStartDate: this.eventStartDate,
        eventDescription: this.eventDescription,
      };
      this.$store.dispatch("registerEvent", data);
    },
  },
};
</script>

<style scoped>
form {
  max-width: 520px;
}

.form-control {
  margin: 0.8rem 0;
}

label {
  font-weight: 400;
  color: #787878;
}

input,
textarea {
  display: block;
  width: 100%;
  font-weight: 400;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}
</style>
