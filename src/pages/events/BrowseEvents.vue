<template>
  <section>
    <div class="jumbotron container w10/12 mx-auto rounded-xl">
      <div>
        <p class="header text-8xl font-black text-left bg-white"> Connect through </p>
        <p> </p>
        <p class="header text-8xl font-black text-right  bg-white"> campus events.  </p>
      </div>
    </div>
        <the-search-bar v-model="search"/>
    <div class="container mx-auto py-3 w-10/12">
      <p class="header text-2xl font-bold"> Upcoming Events</p>
    </div>
    <div v-if="events.length === 0" class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-5">
      <div v-for="n in 6" :key="n">
        <EventCardSkeleton/>
      </div>
    </div>
    <div class="w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-5" v-else>
      <div v-for="event in filteredPost" :key="event.eventId">
        <EventCard
          :eventname="event.eventName"
          :description="event.eventDescription.substr(0,30)"
          :id="event.eventId"
          :dateTime="event.eventDateTime"
          :location="event.eventLocation"
        />
      </div>
    </div>
    <br>

  </section>
</template>

<script>
import TheSearchBar from "../../components/Events/TheSearchBar.vue";
import EventCard from "../../components/Events/EventCard.vue";
import EventCardSkeleton from "../../components/Events/EventCardSkeleton.vue";

export default {
  components: { TheSearchBar, EventCard, EventCardSkeleton},
  methods: {
    test(){
      console.log(Object.values(JSON.parse(JSON.stringify(this.events))));
    }
  },
  computed: {
    filteredPost() {
      let event_array =  Object.values(JSON.parse(JSON.stringify(this.events)));

      // remember join tags inside
      return event_array.filter((event) =>
        (event.eventName)
          .toLowerCase()
          .includes(this.search.toLowerCase())
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
      setTimeout(() =>{
        this.events = this.$store.getters.getAllEvents;
      }, 1000);
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }
  },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  .jumbotron{
    background-image: url("../../images/smu-connexion.jpeg");
    background-size: cover;
    padding-top: 125px;
    padding-bottom: 125px;
  }
  .background{
    background-image: linear-gradient(#EC9F05, #FF4E00);
  }
  .header{
    font-family: 'DM Sans', sans-serif;
    color: #ff6e00;
    -webkit-text-stroke: white;
  }
</style>
