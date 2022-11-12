<template>
  <base-dialog v-if="openUploadDialog" classes="w-3/4">
    <template #default>
      <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-4"
      >
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block px-4 pb-2 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active"
              aria-current="page"
              >Link</a
            >
          </li>
        </ul>
      </div>

      <input
        type="text"
        id="eventImage"
        name="eventImage"
        placeholder="Paste any image link from the web"
        v-model="events[index].eventImage"
      />

      <base-button class="w-full py-2.5 my-4" @click="submitCover"
        >Submit</base-button
      >
    </template>

    <template #actions>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 cursor-pointer"
        @click="closeUploadDialog"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </template>
  </base-dialog>

  <section :style="defaultForCover" class="cover">
    <div class="container mx-auto py-1 px-4 relative">
      <button
        class="absolute bottom-0 right-0 text-sm bg-neutral-200 hover:bg-neutral-300 py-1.5 px-4 mt-4 rounded-lg"
        @click="changeCover()"
      >
        Change Cover
      </button>
    </div>
  </section>

  <div id="sample" class="my-10 px-4 md:px-0">
    <h1 class="text-center text-xl mb-5">Edit Event</h1>

    <div class="container mx-auto">
      <form @submit.prevent="submitForm" class="grid gap-4 grid-cols-3">
        <div class="col-span-3 sm:col-span-2">
          <div class="form-control">
            <label for="eventName"
              >Name<span class="text-xs text-rose-600 mx-0.5">*</span></label
            >
            <input
              type="text"
              id="eventName"
              v-model="events[index].eventName"
            />
            <div style="color: red" v-if="eventNameErrorMessage_">
              {{ eventNameErrorMessage }}
            </div>
          </div>

          <div class="form-control">
            <label for="eventDescription"
              >Description<span class="text-xs text-rose-600 mx-0.5"
                >*</span
              ></label
            >
            <QuillEditor
              style="
                min-height: 200px !important;
                border: 1px solid #eee;
                border-radius: 5px;
              "
              :options="options"
              v-model:content="events[index].eventDescription"
              contentType="html"
            />
            <div style="color: red" v-if="eventDescriptionErrorMessage_">
              {{ eventDescriptionErrorMessage }}
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
            <label for="participantsLimit"
              >Participants Limit<span class="text-xs text-rose-600 mx-0.5"
                >*</span
              ></label
            >
            <input
              type="number"
              name="participantsLimit"
              v-model="events[index].participantsLimit"
              @blur="participantLimitValidation"
            />
          </div>

          <div class="form-control">
            <label for="eventTags">Event Tags (Separate by Commas)</label>
            <input
              type="text"
              id="eventTags"
              v-model="events[index].eventTags"
            />
          </div>

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
            >Save Changes</base-button
          >
        </div>

        <div class="col-span-3 sm:col-span-1">
          <div class="form-control">
            <label for="eventLocation"
              >Location<span class="text-xs text-rose-600 mx-0.5 mb-1"
                >*</span
              ></label
            >
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              :src="getMapAddress()"
            ></iframe>
            <select
              name="select"
              id="select"
              class="mt-5"
              v-model="events[index].eventLocation"
            >
              <option>SMU School of Accountancy</option>
              <option>SMU Lee Kong Chian School of Business</option>
              <option>SMU School of Economics</option>
              <option>SMU School of Computing and Information Systems 1</option>
              <option>SMU Yong Pung How School of Law</option>
              <option>School of Social Sciences</option>
            </select>
          </div>

          <base-button
            mode="secondary"
            class="w-full py-2.5 my-4 cursor-pointer"
            @click="downloadDetails()"
          >
            Download Participants Details
          </base-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import formCover from "@/assets/form-cover.jpg";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { utils, writeFileXLSX } from "xlsx";

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      options: {
        placeholder: "Write something interesting here",
        theme: "snow",
      },
      openUploadDialog: false,
      defaultForCover: {
        display: "flex",
        alignItems: "center",
        background: `url('${formCover}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "25vh",
      },
      id: this.$route.params.id,
      index: null,
      events: [],
      users: [],
      excelDeets: [],
      eventNameErrorMessage: "Field cannot be empty",
      eventLocationErrorMessage:
        "** Event location should be more than one character",
      eventContactErrorMessage:
        "** Event contact should be more than one character",
      eventDescriptionErrorMessage:
        "** Event description should be more than 10 words",
    };
  },
  methods: {
    downloadDetails() {
      console.log(this.usersInformation);
      const ws = utils.json_to_sheet(this.usersInformation);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Data");
      writeFileXLSX(
        wb,
        `${this.events[this.index].eventName}_Participants.xlsx`
      );
    },
    getMapAddress() {
      const params = this.events[this.index].eventLocation;
      return `https://maps.google.com/maps?q=${params}&z=14&ie=UTF8&output=embed`;
    },
    backgroundImage() {
      console.log(this.events);
      this.defaultForCover = {
        display: "flex",
        alignItems: "center",
        background: `url('${this.events[this.index].eventImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "25vh",
      };
    },
    changeCover() {
      this.openUploadDialog = !this.openUploadDialog;
    },
    submitCover() {
      this.backgroundImage(this.events[this.index].eventImage);
      this.closeUploadDialog();
    },
    closeUploadDialog() {
      this.openUploadDialog = false;
    },
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
          eventImage: this.events[this.index].eventImage,
          participantsLimit: this.events[this.index].participantsLimit,
          //eventAttendees: ["0"] //comment out no need to edit
        });
        if (resultStatus) {
          this.$router.replace("/dashboard");
        }
      } catch (err) {
        this.error = err.message;
        console.log(this.error);
      }
    },
  },
  async created() {
    try {
      await this.$store.dispatch("loadAllEvent");
      this.events = this.$store.getters.getEventDataByClubId;
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }

    for (let i = 0; i < this.events.length; i++) {
      if (this.id == this.events[i].eventId) {
        this.index = i;
      }
    }
  },
  async mounted() {
    try {
      this.users = await this.$store.dispatch("loadAllUserdata");
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }
    for (let i = 0; i < this.events.length; i++) {
      if (this.id == this.events[i].eventId) {
        this.index = i;
      }
    }
  },
  computed: {
    usersInformation() {
      let userAttendeeDetailsObj = [];
      let eventAttendees = Object.values(
        this.events[this.index].eventAttendees
      );
      eventAttendees = eventAttendees.filter(
        (eventAttendee) => eventAttendee != 0
      );
      let allUsers = this.users;

      for (let eventAttendee of eventAttendees) {
        let attendeeDetails = {};
        let eventAttendeeObject = allUsers[`${eventAttendee}`];
        eventAttendeeObject = { ...eventAttendeeObject };
        let userName = eventAttendeeObject.userName;
        let userEmail = eventAttendeeObject.userEmail;
        attendeeDetails["Username"] = userName;
        attendeeDetails["Email"] = userEmail;
        userAttendeeDetailsObj.push(attendeeDetails);
      }

      return userAttendeeDetailsObj;
    },

    eventNameErrorMessage_() {
      let status = true;
      if (this.events[this.index].eventName.length != 0) {
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
      let descArray = this.events[this.index].eventDescription.split("");
      if (descArray.length > 10) {
        status = false;
      }
      return status;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.8rem 0;
}

label {
  font-weight: 400;
  color: #787878;
}

select,
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
