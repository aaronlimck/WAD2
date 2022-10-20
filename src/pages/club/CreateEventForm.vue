<template>
  <div id="sample" class="mt-5">
    <h1 class="text-center text-xl mb-5">Create Event</h1>
    <form @submit.prevent="submitForm" class="container mx-auto">
      <div class="form-control">
        <label for="eventName">Event Name</label>
        <input type="text" id="eventName" v-model="newItems.eventName" />
      </div>

      <div class="form-control">
        <label for="eventDate">Event Date</label>
        <input type="date" id="eventDate" v-model="newItems.eventDateTime" />
      </div>

      <div class="form-control">
        <label for="eventLocation">Event Location</label>
        <input
          type="text"
          id="eventLocation"
          v-model="newItems.eventLocation"
        />
      </div>

      <div class="form-control">
        <label for="eventContact">Event Contact Person</label>
        <input type="text" id="eventContact" v-model="newItems.eventContact" />
      </div>

      <div class="form-control">
        <label for="eventDescription">Event Description</label>
        <textarea id="eventDescription" v-model="newItems.eventDescription" />
      </div>

      <div class="form-control">
        <label for="eventTags">Event Tags (Separate by Commas)</label>
        <input type="text" id="eventTags" v-model="newItems.eventTags" />
      </div>

      <input type="file" @change="onFileSelected" />
      <base-button class="w-full py-2.5 my-4">Create Event</base-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItems: {
        eventName: "",
        eventDateTime: "",
        eventLocation: "",
        eventContact: "",
        eventDescription: "",
        eventTags: [],
        //eventAttendees: [],
        eventCreatedByClubId: localStorage.getItem("userClub"),
        //eventImage: "",
      },
    };
  },
  methods: {
    onFileSelected(event) {
      // console.log(event.target.files[0].name)
      this.newItems.image = event.target.files[0].name;
    },
    async submitForm() {
      try {
        const resultStatus = await this.$store.dispatch("createEvent", {
          eventName: this.newItems.eventName,
          eventDateTime: this.newItems.eventDateTime,
          eventLocation: this.newItems.eventLocation,
          eventContact: this.newItems.eventContact,
          eventDescription: this.newItems.eventDescription,
          eventTags:
            this.newItems.eventTags.length != 0
              ? this.newItems.eventTags.split(",")
              : null,
          //eventAttendees: this.newItems.eventAttendees,
          eventCreatedByClubId: this.newItems.eventCreatedByClubId,
        });
        if (resultStatus) {
          this.$router.replace("dashboard");
        }
      } catch (err) {
        this.error = err.message;
        console.log(this.error);
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 520px;
}

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
