<template>
  <section>
    <div class="jumbotron py-10 md:py-20 px-2">
      <div class="container w10/12 mx-auto">
        <p
          class="header text-4xl md:text-6xl lg:text-8xl text-white text-left animate__animated animate__fadeInLeft"
        >
          Connect through
        </p>
        <p></p>
        <p
          class="header text-4xl md:text-6xl lg:text-8xl text-white text-right animate__animated animate__fadeInRight"
        >
          campus events.
        </p>
      </div>
    </div>
    <the-search-bar v-model="search" />
    <div
      class="flex items-center justify-between container mx-auto py-3 w-10/12 mt-10"
    >
      <p class="header text-2xl font-bold">Events</p>
      <div class="flex">
        <button
          type="button"
          class="border border-zinc-300 hover:border-zinc-400 font-medium rounded-lg text-sm px-5 py-2.5 mx-1 mb-2"
        >
          A to Z
        </button>
        <button
          type="button"
          class="border border-zinc-300 hover:border-zinc-400 font-medium rounded-lg text-sm px-5 py-2.5 ml-1 mb-2"
        >
          Z to A
        </button>
      </div>
    </div>
    <div
      v-if="events.length === 0"
      class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 mb-10 gap-5"
    >
      <div v-for="n in 6" :key="n">
        <EventCardSkeleton />
      </div>
    </div>
    <div
      class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 mb-10 gap-5"
      v-else
    >
      <div v-for="event in filteredPost" :key="event.eventId">
        <EventCard
          :eventname="event.eventName"
          :description="event.eventDescription.substr(0, 30)"
          :id="event.eventId"
          :dateTime="event.eventDateTime"
          :location="event.eventLocation"
          :image="event.eventImage"
        />
      </div>
    </div>
    <br />
  </section>
</template>

<script>
import TheSearchBar from "../../components/Events/TheSearchBar.vue";
import EventCard from "../../components/Events/EventCard.vue";
import EventCardSkeleton from "../../components/Events/EventCardSkeleton.vue";

export default {
  components: { TheSearchBar, EventCard, EventCardSkeleton },
  methods: {
    test() {
      console.log(Object.values(JSON.parse(JSON.stringify(this.events))));
    },
  },
  computed: {
    filteredPost() {
      let event_array = Object.values(JSON.parse(JSON.stringify(this.events)));

      // remember join tags inside
      return event_array.filter((event) =>
        event.eventName.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  data() {
    return {
      search: "",
      events: [],
    };
  },
  async mounted() {
    try {
      await this.$store.dispatch("loadAllEvent");
      setTimeout(() => {
        this.events = this.$store.getters.getAllEvents;
      }, 500);
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
.jumbotron {
  background-image: linear-gradient(
      to top,
      rgba(255, 78, 0, 0.2),
      rgba(117, 19, 93, 0.4)
    ),
    url("../../images/smu-connexion.jpeg");
  /* background-image: url("../../images/smu-connexion.jpeg"); */
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
}
.background {
  background-image: linear-gradient(#ec9f05, #ff4e00);
}
.header {
  font-family: "DM Sans", sans-serif;
  -webkit-text-stroke: white;
}
</style>
