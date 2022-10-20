<template style="color: black; width: 100%">
  <!-- <ellipsis-event-dashboard v-on:changeTitle="updateTitlrText($event)" /> -->

  <!-- <div class="grid ld:grid-cols-4 md:grid-cols-4 sm:grid-cols-12 gap-4">
    <div>
      <div
        class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5 text-center"
      >
        <h2 class="font-bold uppercase text-gray-600">Total Events</h2>

        <p class="font-bold text-3xl">{{ items.length }}</p>
      </div>
    </div>

    <div>
      <div
        class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5 text-center"
      >
        <h2 class="font-bold uppercase text-gray-600">Newly Created Event</h2>
        <p class="font-bold text-3xl">{{ items[items.length] }}</p>
      </div>
    </div>
    <div>
      <div
        class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5 text-center"
      >
        <h2 class="font-bold uppercase text-gray-600">Total Club members</h2>
        <p class="font-bold text-3xl">30</p>
      </div>
    </div>
    <div>
      <div
        class="bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-600 rounded-lg shadow-xl p-5 text-center"
      >
        <h2 class="font-bold uppercase text-gray-600">Total Club members</h2>
        <p class="font-bold text-3xl">{{ fromTheDashboard }}</p>
      </div>
    </div>
  </div> -->
  <div>
    <div>
      <div style="display: flex; justify-content: right">
        <base-button style="margin: 20px"
          ><router-link to="/create-event"
            >Create Event</router-link
          ></base-button
        >
      </div>

      <div v-for="event of events" :key="event.eventName">
        <!-- Current Event ID is not in the vueX Store -->
        <event-card
          :id="event.eventId"
          :name="event.eventName"
          :description="event.eventDescription"
          :timing="event.eventDateTime"
          :location="event.eventLocation"
        ></event-card>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "../../components/Events/EventCard.vue";

export default {
  components: { EventCard },
  data() {
    return {
      events: [],
      error: "",
    };
  },
  methods: {},
  async mounted() {
    try {
      await this.$store.dispatch("loadAllEvent");
      this.events = this.$store.getters.getEventDataByClubId;
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }
  },
};
</script>

<style scoped>
* {
  margin: 20px;
  color: black;
}

div#sample2 {
  border: black solid 2px;
  /* width: 400px; */
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
</style>
