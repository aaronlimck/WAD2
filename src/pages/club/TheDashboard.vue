<template>
  <div>
    <the-search-bar :getSchoolName="getSchoolNameFilter" v-model="search" />

    <div class="container mx-auto py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div>
          <div class="p-6 bg-white rounded-lg border border-gray-200 h-full">
            <h2 class="uppercase text-gray-500 text-sm mb-2">Total Events</h2>
            <p class="font-medium text-xl">{{ events.length }}</p>
          </div>
        </div>
        <div>
          <div class="p-6 bg-white rounded-lg border border-gray-200 h-full">
            <h2 class="uppercase text-gray-500 text-sm mb-2">
              Newly Created Event
            </h2>
            <p class="font-medium text-xl">
              {{ newlyCreated }}
            </p>
          </div>
        </div>
        <div>
          <div class="p-6 bg-white rounded-lg border border-gray-200 h-full">
            <h2 class="uppercase text-gray-500 text-sm mb-2">Upcoming event</h2>
            <p class="font-medium text-xl">{{ upComingEvent }}</p>
          </div>
        </div>
        <div>
          <div class="p-6 bg-white rounded-lg border border-gray-200 h-full">
            <h2 class="uppercase text-gray-500 text-sm mb-2">
              Total Club member
            </h2>
            <p class="font-medium text-xl">30</p>
          </div>
        </div>
      </div>
    </div>

    <!-- graph ===== -->
    <div class="container mx-auto pb-10 hidden md:block">
      <canvas id="myChart" width="400" height="50"> </canvas>
    </div>
    <!-- graph ====== -->

    <div
      v-if="events.length === 0"
      class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-5 pb-10"
    >
      <div v-for="n in 6" :key="n">
        <EventCardSkeleton />
      </div>
    </div>
    <div
      v-else
      class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-5 pb-10"
    >
      <div v-for="event of filteredEvents" :key="event.eventName">
        <!-- Current Event ID is not in the vueX Store -->
        <event-card
          :id="event.eventId"
          :eventname="event.eventName"
          :description="event.eventDescription"
          :dateTime="event.eventDateTime"
          :location="event.eventLocation"
          :eventAttendees="event.eventAttendees"
          :image="event.eventImage"
          :participantsLimit="event.participantsLimit"
        ></event-card>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import EventCard from "../../components/Events/EventCard.vue";
import EventCardSkeleton from "../../components/Events/EventCardSkeleton.vue";
import TheSearchBar from "../../components/Events/TheSearchBar.vue";

export default {
  components: { EventCard, EventCardSkeleton, TheSearchBar },
  data() {
    return {
      search: "",
      events: [],
      error: "",
      upComingEvent: "",
      nearestSixEvent: [],
    };
  },
  async mounted() {
    try {
      await this.$store.dispatch("loadAllEvent");
      setTimeout(() => {
        this.events = this.$store.getters.getEventDataByClubId;

        let tempEvents = JSON.parse(JSON.stringify(this.events)); //assign to items after filtering
        let allDate = [];
        let allDate2 = [];

        //split all the dates and add into allDate. Now items and items_filter is the same
        for (let i = 0; i < tempEvents.length; i++) {
          allDate.push(tempEvents[i].eventDateTime.split("T")[0]);
          allDate2.push(tempEvents[i].eventDateTime.split("T")[0]);
          // console.log("***");
        }
        //to get the nearest event
        var tempDate = allDate.map((date) =>
          Math.abs(new Date() - new Date(date).getTime())
        );
        var index = tempDate.indexOf(Math.min(...tempDate));

        for (let item in tempEvents[index]) {
          if (item == "eventName") {
            this.upComingEvent = tempEvents[index][item];
          }
        }

        //to get the nearest 6
        let nearestSix = [];
        //tempEvents.splice(index, 1)

        while (nearestSix.length < 6) {
          // console.log(allDate2);
          var tempDate2 = allDate2.map((date) =>
            Math.abs(new Date() - new Date(date).getTime())
          );
          var index2 = tempDate2.indexOf(Math.min(...tempDate2));
          // console.log(allDate2[index2]);

          nearestSix.push(tempEvents[index2]);
          allDate2.splice(index2, 1);
          tempEvents.splice(index2, 1);

          this.nearestSixEvent = nearestSix;
          // console.log(allDate2);
          // console.log(nearestSix);
        }

        // console.log(this.nearestSixEvent[5] + "****");
        const ctx = document.getElementById("myChart");
        const myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              this.nearestSixEvent[0].eventName,
              this.nearestSixEvent[1].eventName,
              this.nearestSixEvent[2].eventName,
              this.nearestSixEvent[3].eventName,
              this.nearestSixEvent[4].eventName,
              this.nearestSixEvent[5].eventName,
            ],
            datasets: [
              {
                label: "Number of Participants",
                data: [
                  this.nearestSixEvent[0].eventAttendees.length - 1,
                  this.nearestSixEvent[1].eventAttendees.length - 1,
                  this.nearestSixEvent[2].eventAttendees.length - 1,
                  this.nearestSixEvent[3].eventAttendees.length - 1,
                  this.nearestSixEvent[4].eventAttendees.length - 1,
                  this.nearestSixEvent[5].eventAttendees.length - 1,
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
        });
        myChart;
      }, 500);
      // console.log(this.events);
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }
  },
  computed: {
    newlyCreated() {
      let theEvents = this.events[this.events.length - 1];
      let returnNewlyCreated = "";
      for (let item in theEvents) {
        // console.log(print[item]);
        if (item == "eventName") {
          returnNewlyCreated = theEvents[item];
        }
      }
      return returnNewlyCreated;
    },
    filteredEvents() {
      let tempEvents = Object.values(JSON.parse(JSON.stringify(this.events)));

      if (this.search != "" && this.search) {
        tempEvents = tempEvents.filter((event) => {
          return (
            event.eventName.toUpperCase().includes(this.search.toUpperCase()) ||
            event.eventLocation
              .toUpperCase()
              .includes(this.search.toUpperCase())
          );
        });
      }
      return tempEvents;
    },
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
</style>
