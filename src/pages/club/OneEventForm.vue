<template>
  <div id="sample" class="mt-5">
    <h1 class="text-center text-xl mb-5">Edit Event</h1>
    <form @submit.prevent="submitForm" class="container mx-auto">
      <div class="form-control">
        <label for="eventName">Event Name</label>
        <input type="text" id="eventName" v-model="events[index].eventName" />
        <div style="color: red" v-if="eventNameErrorMessage_">
          {{ eventNameErrorMessage }}
        </div>
      </div>

      <div class="form-control">
        <label for="eventDate">Event Date</label>
        <input
          type="datetime-local"
          id="eventDateTime"
          name="eventDateTime"
          v-model="events[index].eventDateTime"
        />
      </div>

      

      <div class="form-control">
        <label for="eventLocation">Event Location</label>
        <input
          type="text"
          id="eventLocation"
          v-model="events[index].eventLocation"
        />
        <div style="color: red" v-if="eventLocationErrorMessage_">
          {{ eventLocationErrorMessage }}
        </div>
      </div>


      <div class="form-control">


      <label for="eventLocation"
        >Location<span class="text-xs text-rose-600 mx-0.5">*</span></label>


      <label for="eventLocation">Event Location</label>
      <select  name="select" id="select" v-model="events[index].eventLocation">
            
            <option>SMU School of Accountancy</option>
            <option>SMU Lee Kong Chian School of Business</option>
            <option>SMU School of Economics</option>
            <option>SMU School of Computing and Information Systems 1</option>
            <option>SMU Yong Pung How School of Law</option>
            <option>School of Social Sciences</option>
          
            </select>
      </div>

      <div class="form-control">
        <label for="eventContact">Event Contact Person</label>
        <input
          type="text"
          id="eventContact"
          v-model="events[index].eventContact"
        />
        <div style="color: red" v-if="eventContactErrorMessage_">
          {{ eventContactErrorMessage }}
        </div>
      </div>

      <div class="form-control">
        <label for="eventDescription">Event Participants Limit</label>
        <select
          name="select"
          id="select"
          v-model="events[index].participantsLimit"
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>50</option>
          <option>56</option>
          <option>70</option>
          <option>80</option>
          <option>90</option>
          <option>100</option>
        </select>
      </div>

      <div class="form-control">
        <label for="eventDescription">Event Description</label>
        <textarea
          id="eventDescription"
          v-model="events[index].eventDescription"
        />
        <div style="color: red" v-if="eventDescriptionErrorMessage_">
          {{ eventDescriptionErrorMessage }}
        </div>
      </div>

      <div class="form-control">
        <label for="eventTags">Event Tags (Separate by Commas)</label>
        <input type="text" id="eventTags" v-model="events[index].eventTags" />
      </div>

      <input type="file" @change="onFileSelected" />
      <base-button
        class="w-full py-2.5 my-4"
        :disabled="
          eventNameErrorMessage_ ||
          eventLocationErrorMessage_ ||
          eventContactErrorMessage_ ||
          eventDescriptionErrorMessage_
        "
        :class="[
          eventNameErrorMessage_ ||
          eventLocationErrorMessage_ ||
          eventContactErrorMessage_ ||
          eventDescriptionErrorMessage_
            ? 'grey'
            : '',
        ]"
        >Edit Event</base-button
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      index: null,
      events: [],
      newItems: {
        eventName: "",
        eventDateTime: "",
        eventLocation: "",
        eventContact: "",
        eventDescription: "",
        eventTags: [],
        eventAttendees: [],
        eventCreatedByClubId: localStorage.getItem("userClub"),
        Image: "",
        participantsLimit: 10,
      },
      eventNameErrorMessage: "** Event name should be more than one character",
      eventLocationErrorMessage:
        "** Event location should be more than one character",
      eventContactErrorMessage:
        "** Event contact should be more than one character",
      eventDescriptionErrorMessage:
        "** Event description should be more than 10 words",
    };
  },
  methods: {
    async submitForm() {
      try {
        const resultStatus = await this.$store.dispatch("editEvent", {
          eventId: this.events[this.index].eventId, // include id to fetch over
          eventName: this.events[this.index].eventName,
          eventDateTime: this.events[this.index].eventDateTime,
          eventLocation: this.events[this.index].eventLocation,
          eventContact: this.events[this.index].eventContact,
          eventDescription: this.events[this.index].eventDescription,
          eventTags:
            this.events[this.index].eventTags.length != 0
              ? this.events[this.index].eventTags
              : null,
          eventCreatedByClubId: this.events[this.index].eventCreatedByClubId,
          image: this.events[this.index].image,
          participantsLimit: this.events[this.index].participantsLimit,
          //eventAttendees: ["0"] //comment out no need to edit
        });
        if (resultStatus) {
          this.$router.replace("dashboard");
        }
      } catch (err) {
        this.error = err.message;
        console.log(this.error);
      }
    },
    onFileSelected(event) {
      // console.log(event.target.files[0].name)
      this.items[this.fromTheDashboard].image = event.target.files[0].name;
    },
  },
  async created() {
    try {
      await this.$store.dispatch("loadAllEvent");
      this.events = this.$store.getters.getEventDataByClubId;
      console.log(this.events);
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }

    for (let i = 0; i < this.events.length; i++) {
      if (this.id == this.events[i].eventId) {
        this.index = i;
      }
    }

    console.log(this.events[this.index].eventName);
    console.log(this.index + "...");
  },
  computed: {
    eventNameErrorMessage_() {
      let status = true;
      if (this.events[this.index].eventName.length > 0) {
        status = false;
      }
      return status;
    },
    eventLocationErrorMessage_() {
      let status = true;
      if (this.events[this.index].eventLocation.length > 0) {
        status = false;
      }
      return status;
    },
    eventContactErrorMessage_() {
      let status = true;
      if (this.events[this.index].eventContact.length > 0) {
        status = false;
      }
      return status;
    },
    eventDescriptionErrorMessage_() {
      let status = true;
      let descArray = this.events[this.index].eventDescription.split(" ");
      if (descArray.length > 10) {
        status = false;
      }
      return status;
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
.grey {
  background-color: grey;
  opacity: 0.1;
  border-radius: 20px;
}
</style>
