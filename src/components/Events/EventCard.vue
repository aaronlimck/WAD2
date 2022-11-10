<template>
  <!-- ======= EventCard ======= -->
  <div
    class="bg-gray-50 rounded-lg border customShadow h-full"
    :class="classes"
  >
    <router-link :to="eventLink">
      <p
        v-show="this.$route.path === '/dashboard'"
        class="absolute py-2 px-5 m-3 right-0 top-0 custom-bg text-white rounded-full"
      >
        Edit
      </p>
      <img class="h-48 w-full object-cover rounded-t-lg" :src="image" />
      <div class="flex px-3 py-6">
        <div class="w-1/6 pl-2">
          <p class="flex flex-col dateTime">
            <span class="text-base">{{ getMonth }}</span>
            <span class="text-xl font-medium">{{ getDate }}</span>
          </p>
        </div>
        <div class="w-5/6">
          <h2 class="text-lg font-medium mb-1">{{ eventname }}</h2>
          <div id="textContent" v-html="description.slice(0, 120)"></div>
        </div>
      </div>

      <div v-show="this.$route.path === '/dashboard'">
        <!-- <p :class="participantsClass" >{{ eventAttendees.length - 1}} of {{participantsLimit}} participants</p>
      {{howManyDaysLeft}} days left -->
      </div>
    </router-link>
  </div>
  <!--  ========== -->
</template>

<script>
export default {
  props: [
    "classes",
    "eventname",
    "description",
    "id",
    "dateTime",
    "location",
    "image",
    "eventAttendees",
    "participantsLimit",
  ],
  data() {
    return {};
  },
  computed: {
    eventLink() {
      if (this.$route.path === "/dashboard") {
        return "/edit-event/" + this.id;
      } else {
        return "events" + "/" + this.id;
      }
    },
    getDate() {
      let date = new Date(this.dateTime);
      return date.getDate();
    },
    getMonth() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let date = new Date(this.dateTime);
      return monthNames[date.getMonth()].toUpperCase().slice(0, 3);
    },
    getYear() {
      let date = new Date(this.dateTime);
      return date.getYear();
    },
    howManyDaysLeft() {
      let todaysDate = new Date();
      let day = String(todaysDate.getDate()).padStart(2, "0");
      let month = String(todaysDate.getMonth() + 1).padStart(2, "0"); //January is 0!
      let year = todaysDate.getFullYear();

      todaysDate = month + "/" + day + "/" + year;

      let str = this.dateTime;
      let dateTimeArray = str.split("T");
      let date_ = dateTimeArray[0];
      let eventDate = date_.replaceAll("-", "/");

      let todaysDate_ = new Date(todaysDate);
      let eventDate_ = new Date(eventDate);

      // To calculate the time difference of two dates
      var Difference_Time = eventDate_.getTime() - todaysDate_.getTime();

      // To calculate the no. of days between two dates
      var howManyDaysLeft = Difference_Time / (1000 * 3600 * 24);

      console.log(howManyDaysLeft);
      //To display the final no. of days (result)

      return howManyDaysLeft;
    },
    // participantsClass() {
    //   let checkParticipants = (this.participantsLimit / 2).toFixed(0);
    //   let eventAttendeesLength = this.eventAttendees.length;
    //   // console.log("=====")
    //   // console.log(checkParticipants)
    //   // console.log(eventAttendeesLength)
    //   if (eventAttendeesLength >= checkParticipants) {
    //     return "green text-sm";
    //   }

    //   return "red text-sm";
    //   //text-sm
    // },
  },
};
</script>

<style scoped>
button {
  font-family: inherit;
  font-weight: 500;
  background-color: #f56a01;
  border: 2px solid #f56a01;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  min-width: 40px;
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}
button:hover,
button:active {
  background-color: rgba(255, 99, 71, 0.8);
  color: #ffffff;
}
.secondary {
  border: 2px solid #f56a01 !important;
  background-color: transparent;
  color: #f56a01;
  border: none;
}
.secondary:hover,
.secondary:active {
  background-color: rgba(255, 99, 71, 0.8);
  color: #ffffff;
}
.dateTime,
#location {
  color: #f56a01;
}
.custom-bg {
  background: #f56a01;
}

.red {
  color: red;
}

.green {
  color: green;
}

.customShadow:hover {
  box-shadow: 0 8px 24px 0 rgb(0 0 0 / 16%);
}
</style>
