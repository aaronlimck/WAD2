<template style="color: black; width: 100%">
  <div class="container mx-auto">
    <div class="grid ld:grid-cols-4 md:grid-cols-4 sm:grid-cols-12 gap-4">
      <div>
        <div
          class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5 text-center"
        >
          <h2 class="font-bold uppercase text-gray-600">Total Events</h2>

          <p class="font-bold text-3xl">{{ events.length }}</p>
        </div>
      </div>

      <div>
        <div
          class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5 text-center"
        >
          <h2 class="font-bold uppercase text-gray-600">Newly Created Event</h2>
          <p class="font-bold text-3xl" style="display: 'flex'">
            {{ newlyCreated }}
          </p>
        </div>
      </div>
      <div>
        <div
          class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5 text-center"
        >
          <h2 class="font-bold uppercase text-gray-600">Upcoming event</h2>
          <p class="font-bold text-3xl">{{ upComingEvent }}</p>
        </div>
      </div>
      <div>
        <div
          class="bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-600 rounded-lg shadow-xl p-5 text-center"
        >
          <h2 class="font-bold uppercase text-gray-600">Total Club members</h2>
          <p class="font-bold text-3xl">30</p>
        </div>
      </div>
    </div>
  </div>

  <!-- graph ===== -->
  <canvas id="myChart" width="400" height="50"> </canvas>
  <!-- graph ====== -->

  <div
    v-if="events.length === 0"
    class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-5"
  >
    <div v-for="n in 6" :key="n">
      <EventCardSkeleton />
    </div>
  </div>
  <div
    v-else
    class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-5"
  >
    <div v-for="event of events" :key="event.eventName">
      <!-- Current Event ID is not in the vueX Store -->
      <event-card
        :id="event.eventId"
        :eventname="event.eventName"
        :description="event.eventDescription"
        :dateTime="event.eventDateTime"
        :location="event.eventLocation"
      ></event-card>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import EventCard from "../../components/Events/EventCard.vue";
import EventCardSkeleton from "../../components/Events/EventCardSkeleton.vue";

export default {
  components: { EventCard, EventCardSkeleton },
  data() {
    return {
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
      }, 500);
      console.log(this.events);
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }

    let tempEvents = JSON.parse(JSON.stringify(this.events)); //assign to items after filtering
    let allDate = [];
    let allDate2 = [];

    //split all the dates and add into allDate. Now items and items_filter is the same
    for (let i = 0; i < tempEvents.length; i++) {
      allDate.push(tempEvents[i].eventDateTime.split("T")[0]);
      allDate2.push(tempEvents[i].eventDateTime.split("T")[0]);
      console.log("***");
    }
    //to get the nearest event
    var tempDate = allDate.map((date) =>
      Math.abs(new Date() - new Date(date).getTime())
    );
    var index = tempDate.indexOf(Math.min(...tempDate));
    console.log(allDate[index]);
    console.log(tempEvents[index]);
    this.upComingEvent = tempEvents[index].eventName;
    console.log(tempEvents[index]);

    //to get the nearest 6
    let nearestSix = [];
    //tempEvents.splice(index, 1)

    while (nearestSix.length < 6) {
      console.log(allDate2);
      var tempDate2 = allDate2.map((date) =>
        Math.abs(new Date() - new Date(date).getTime())
      );
      var index2 = tempDate2.indexOf(Math.min(...tempDate2));
      console.log(allDate2[index2]);

      nearestSix.push(tempEvents[index2]);
      allDate2.splice(index2, 1);
      tempEvents.splice(index2, 1);

      this.nearestSixEvent = nearestSix;
      console.log(allDate2);
      console.log(nearestSix);
    }

    console.log(this.nearestSixEvent[5] + "****");
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
              this.nearestSixEvent[0].eventAttendees.length,
              this.nearestSixEvent[1].eventAttendees.length,
              this.nearestSixEvent[2].eventAttendees.length,
              this.nearestSixEvent[3].eventAttendees.length,
              this.nearestSixEvent[4].eventAttendees.length,
              this.nearestSixEvent[5].eventAttendees.length,
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
  },
  computed: {
    newlyCreated() {
      let theEvents = this.events[this.events.length - 1];
      let returnNewlyCreated = "";
      for (let item in theEvents) {
        console.log(print[item]);
        if (item == "eventName") {
          returnNewlyCreated = theEvents[item];
        }
      }

      return returnNewlyCreated;
    },
  },
  created() {},
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
