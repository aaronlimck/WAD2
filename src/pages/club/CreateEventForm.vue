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
        v-model="newItems.eventImage"
      />

      <div
        v-if="imageErrorMessage != ''"
        class="flex p-4 my-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
        role="alert"
      >
        <svg
          aria-hidden="true"
          class="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">{{ imageErrorMessage }}</span>
        </div>
      </div>

      <base-button
        class="w-full py-2.5 my-4"
        @click="submitCover"
        :disabled="!imageValidation()"
        :class="[!imageValidation() ? 'grey' : '']"
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

  <div class="mt-5">
    <!-- <h1 class="text-center text-xl mb-5">Create Event</h1> -->
    <form @submit.prevent="submitForm" class="container mx-auto px-4 py-10">
      <h2 class="text-xl font-medium mb-3">Event Information</h2>
      <div class="form-control">
        <label for="eventName"
          >Name<span class="text-xs text-rose-600 mx-0.5">*</span></label
        >
        <input
          type="text"
          id="eventName"
          v-model="newItems.eventName"
          @blur="nameValidation"
        />
        <base-info-error :errorMsg="eventNameErrorMessage"></base-info-error>
      </div>

      <div class="form-control">
        <label for="eventDescription"
          >Description<span class="text-xs text-rose-600 mx-0.5">*</span></label
        >
        <QuillEditor
          style="
            min-height: 200px !important;
            border: 1px solid #eee;
            border-radius: 5px;
          "
          :options="options"
          v-model:content="newItems.eventDescription"
          contentType="html"
        />
      </div>

      <div class="form-control">
        <label for="eventDate"
          >Event Date<span class="text-xs text-rose-600 mx-0.5">*</span></label
        >
        <input
          type="datetime-local"
          id="eventDateTime"
          name="eventDateTime"
          v-model="newItems.eventDateTime"
          @blur="dateValidation"
        />
        <base-info-error :errorMsg="eventDateErrorMessage"></base-info-error>
      </div>

      <div class="form-control">
        <label for="eventLocation"
          >Location<span class="text-xs text-rose-600 mx-0.5">*</span></label
        >
        <select name="select" id="select" v-model="newItems.eventLocation">
          <option>SMU School of Accountancy</option>
          <option>SMU Lee Kong Chian School of Business</option>
          <option>SMU School of Economics</option>
          <option>SMU School of Computing and Information Systems 1</option>
          <option>SMU Yong Pung How School of Law</option>
          <option>School of Social Sciences</option>
        </select>
      </div>

      <div class="form-control">
        <label for="eventContact"
          >Contact Person<span class="text-xs text-rose-600 mx-0.5"
            >*</span
          ></label
        >
        <input
          type="text"
          id="eventContact"
          v-model="newItems.eventContact"
          @blur="contactValidation"
        />

        <base-info-error :errorMsg="eventContactErrorMessage"></base-info-error>
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
          v-model="newItems.participantsLimit"
          @blur="participantLimitValidation"
        />

        <base-info-error
          :errorMsg="eventParticipantLimitErrorMessage"
        ></base-info-error>
      </div>

      <div class="form-control">
        <label for="eventTags">Event Tags (Separate by Commas)</label>
        <input type="text" id="eventTags" v-model="newItems.eventTags" />
      </div>

      <base-button class="w-full py-2.5 my-4" :disabled="allErrorValidator()"
        >Create Event</base-button
      >
    </form>
  </div>
</template>

<script>
import BaseInfoError from "../../components/UI/BaseInfoError.vue";
import formCover from "@/assets/form-cover.jpg";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
    BaseInfoError,
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
      newItems: {
        eventImage: "",
        eventName: "",
        eventDescription: "",
        eventDateTime: "",
        eventContact: "",
        participantsLimit: 0,
        eventTags: [],
        eventLocation: "",
        eventAttendees: [],
        eventCreatedByClubId: localStorage.getItem("userClub"),
      },
      imageErrorMessage: "",
      eventNameErrorMessage: "",
      eventLocationErrorMessage: "",
      eventDateErrorMessage: "",
      eventContactErrorMessage: "",
      eventDescriptionErrorMessage: "",
      eventParticipantLimitErrorMessage: "",
    };
  },
  methods: {
    backgroundImage() {
      this.defaultForCover = {
        display: "flex",
        alignItems: "center",
        background: `url('${this.newItems.eventImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "25vh",
      };
    },
    changeCover() {
      this.openUploadDialog = !this.openUploadDialog;
    },
    submitCover() {
      this.backgroundImage(this.newItems.eventImage);
      this.closeUploadDialog();
    },
    closeUploadDialog() {
      this.openUploadDialog = false;
    },
    // ERROR VALIDATION
    imageValidation() {
      if (
        this.newItems.eventImage.includes(".jpg") ||
        this.newItems.eventImage.includes(".JPG") ||
        this.newItems.eventImage.includes(".png") ||
        this.newItems.eventImage.includes("PNG") ||
        this.newItems.eventImage.includes("jpeg") ||
        this.newItems.eventImage.includes("JPEG")
      ) {
        this.imageErrorMessage = "";
        return true;
      } else {
        this.imageErrorMessage = "Should be in JPG or PNG format";
        return false;
      }
    },
    nameValidation() {
      if (this.newItems.eventName.length == 0) {
        this.eventNameErrorMessage = "Field cannot be empty";
        return false;
      } else if (this.newItems.eventName.length > 120) {
        this.eventNameErrorMessage = "Max 120 characters";
        return false;
      }
      this.eventNameErrorMessage = "";
      return true;
    },
    descriptionValidation() {
      if (this.newItems.eventDescription.length == 0) {
        this.eventDescriptionErrorMessage = "Field cannot be empty";
        return false;
      }
      this.eventDescriptionErrorMessage = "";
      return true;
    },
    dateValidation() {
      const dateTime = this.newItems.eventDateTime;
      const selectedDate = dateTime.split("T")[0];
      const currentDate = new Date().toISOString().split("T")[0];

      if (Date.parse(selectedDate) < Date.parse(currentDate)) {
        this.eventDateErrorMessage = "Date cannot be in the past";
        return false;
      }
      this.eventDateErrorMessage = "";
      return true;
    },
    locationValidation() {
      if (this.newItems.eventLocation.length == 0) {
        this.eventLocationErrorMessage = "Field cannot be empty";
        return false;
      }
      this.eventLocationErrorMessage = "";
      return true;
    },
    contactValidation() {
      if (this.newItems.eventContact.length == 0) {
        this.eventContactErrorMessage = "Field cannot be empty";
        return false;
      }
      this.eventContactErrorMessage = "";
      return true;
    },
    participantLimitValidation() {
      if (this.newItems.participantsLimit == 0) {
        this.eventParticipantLimitErrorMessage =
          "Participants limit must be more than 0";
        return false;
      }
      this.eventParticipantLimitErrorMessage = "";
      return true;
    },
    allErrorValidator() {
      if (
        this.imageValidation &&
        this.nameValidation &&
        this.descriptionValidation &&
        this.dateValidation &&
        this.locationValidation &&
        this.contactValidation &&
        this.participantLimitValidation
      ) {
        return true; // DISABLE BUTTON
      } else {
        return false; // DO NOT DISABLE BUTTON
      }
    },
    // async submitForm() {
    //   try {
    //     const resultStatus = await this.$store.dispatch("createEvent", {
    //       eventName: this.newItems.eventName,
    //       eventDateTime: this.newItems.eventDateTime,
    //       eventLocation: this.newItems.eventLocation,
    //       eventContact: this.newItems.eventContact,
    //       eventDescription: this.newItems.eventDescription,
    //       eventTags:
    //         this.newItems.eventTags.length != 0
    //           ? this.newItems.eventTags
    //               .split(",")
    //               .map((element) => element.trim())
    //           : null,
    //       eventImage: this.newItems.eventImage,
    //       eventAttendees: ["0"], //default
    //       eventCreatedByClubId: this.newItems.eventCreatedByClubId,
    //       participantsLimit: this.newItems.participantsLimit,
    //     });
    //     if (resultStatus) {
    //       this.$router.replace("/dashboard");
    //     }
    //   } catch (err) {
    //     this.error = err.message;
    //     console.log(this.error);
    //   }
    // },
    submitForm() {
      console.log("Form Submitted");
    },
  },
};
</script>

<style scoped>
form {
  max-width: 800px;
}

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
  font-size: 16px;
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
