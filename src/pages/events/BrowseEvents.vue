<template>
  <section>
    <div class="jumbotron py-10 md:py-20 px-2">
      <div class="container w10/12 mx-auto">
        <p
          class="jumbo_header text-white text-4xl md:text-6xl lg:text-8xl text-left animate__animated animate__fadeInRight"
        >
          Connect through
          <br />
          campus events.
        </p>
      </div>
    </div>

    <the-search-bar :getSchoolName="getSchoolNameFilter" v-model="search" />

    <div
      class="flex items-center justify-between container mx-auto py-3 w-10/12 mt-10"
    >
      <p class="header text-2xl font-bold">Events</p>
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
      <div v-for="event in filteredEvents" :key="event.eventId">
        <EventCard
          :id="event.eventId"
          :eventname="event.eventName"
          :description="event.eventDescription"
          :dateTime="event.eventDateTime"
          :location="event.eventLocation"
          :image="event.eventImage"
        />
      </div>
    </div>

    <div
      class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-5"
      v-if="filteredEvents.length === 0 && events.length !== 0"
    >
      <div class="col-start-2">
        <img src="../../images/search.gif" id="no_search" class="mx-auto" />
        <h2 class="header text-2xl inline-block text-center">
          We couldn't find anything matching your search!
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import TheSearchBar from "../../components/Events/TheSearchBar.vue";
import EventCard from "../../components/Events/EventCard.vue";
import EventCardSkeleton from "../../components/Events/EventCardSkeleton.vue";

export default {
  components: { TheSearchBar, EventCard, EventCardSkeleton },
  computed: {
    filteredEvents() {
      let tempEvents = Object.values(JSON.parse(JSON.stringify(this.events)));

      if (this.schoolFilter != "") {
        tempEvents = tempEvents.filter((event) => {
          return event.eventLocation
            .toUpperCase()
            .includes(this.schoolFilter.toUpperCase());
        });
      } else if (this.search != "" && this.search) {
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
  data() {
    return {
      search: "",
      events: [],
      schoolFilter: "",
    };
  },
  methods: {
    getSchoolNameFilter(schoolName) {
      this.schoolFilter = schoolName;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("loadAllEvent");
      setTimeout(() => {
        this.events = this.$store.getters.getAllEventOrderByDate;
      }, 1000);
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
  background-image: url("../../images/smu-connexion.jpeg");
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
}
.jumbo_header {
  background-color: white;
  width: fit-content;
  color: #f56a01;
  border-radius: 20px;
  padding: 50px;
}
.header {
  font-family: "DM Sans", sans-serif;
  -webkit-text-stroke: white;
}
#no_search {
  width: 150px;
}
</style>
