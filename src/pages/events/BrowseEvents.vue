<template>
  <section>
    <div class="jumbotron py-10 md:py-20 px-2">
      <div class="container w10/12 mx-auto">
        <div>
          <h1 class="jumbo_header animate__animated animate__fadeInRight">
            <span class="text-2xl md:text-4xl lg:text-6xl text-left font-bold"
              >Connect campus events</span
            ><br />
            <span class="text-base md:text-1xl lg:text-2xl">with Bojio</span>
          </h1>
        </div>
      </div>
    </div>

    <the-search-bar
      :getSchoolName="getSchoolNameFilter"
      v-model="search"
      classes="mb-10"
    />

    <!-- <div
      class="flex items-center justify-between container mx-auto py-3 w-10/12 mt-10"
    >
      <p class="header text-2xl font-bold">Events</p>
    </div> -->
    <div>
      <div class="flex flex-wrap w-10/12 mx-auto items-center">
        <p class="mr-2 font-medium">Filter By:</p>
        <ul class="flex flex-wrap cursor-pointer">
          <li
            class="customPill text-sm hover:drop-shadow-md bg-white cursor-pointer"
            v-for="filter in filterDataOptions"
            :key="filter"
            @click="this.filterOptions = filter"
          >
            {{ filter }}
          </li>
        </ul>
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
    </div>
  </section>
</template>

<script>
import TheSearchBar from "../../components/Events/TheSearchBar.vue";
import EventCard from "../../components/Events/EventCard.vue";
import EventCardSkeleton from "../../components/Events/EventCardSkeleton.vue";

export default {
  components: { TheSearchBar, EventCard, EventCardSkeleton },
  data() {
    return {
      filterDataOptions: [`All`, `Today`, `Tommorrow`],
      search: "",
      events: [],
      filterOptions: "",
    };
  },
  computed: {
    filteredEvents() {
      let tempEvents = Object.values(JSON.parse(JSON.stringify(this.events)));

      if (this.filterOptions != "") {
        if (
          this.filterOptions == "All" ||
          this.filterOptions == "Today" ||
          this.filterOptions == "Tommorrow"
        ) {
          if (this.filterOptions == "All") {
            return this.events;
          }
          if (this.filterOptions == "Today") {
            const date = new Date();
            const todayDate = new Date(
              date.getTime() - date.getTimezoneOffset() * 60000
            )
              .toISOString()
              .split("T")[0];

            tempEvents = tempEvents.filter((event) => {
              return event.eventDateTime.split("T")[0] == todayDate;
            });
          }
          if (this.filterOptions == "Tommorrow") {
            const date = new Date();
            date.setDate(date.getDate() + 1);
            const tmrDate = new Date(
              date.getTime() - date.getTimezoneOffset() * 60000
            )
              .toISOString()
              .split("T")[0];

            tempEvents = tempEvents.filter((event) => {
              return event.eventDateTime.split("T")[0] == tmrDate;
            });
          }
        } else {
          tempEvents = tempEvents.filter((event) => {
            return event.eventLocation
              .toUpperCase()
              .includes(this.filterOptions.toUpperCase());
          });
        }
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
  methods: {
    getSchoolNameFilter(schoolName) {
      this.filterOptions = schoolName;
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

.customPill {
  padding: 0 16px;
  border-radius: 8px;
  margin: 4px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15 ease;
  height: 36px;
  white-space: nowrap;
  text-decoration: none;
  box-shadow: inset rgb(0 0 0 / 15%) 0 0 0 1px;
}
</style>
