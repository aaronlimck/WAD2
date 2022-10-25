<template>
  <section>
    <div class="jumbotron container w10/12 mx-auto rounded-xl">
      <div>
        <p class="header text-8xl font-black text-left bg-white"> Connect through </p>
        <p> </p>
        <p class="header text-8xl font-black text-right  bg-white"> campus events.  </p>
    <the-search-bar v-model="search" />
    <div class="container mx-auto my-10 px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="event in filteredPost" :key="event.eventId">
          <EventCard
            :eventname="event.eventName"
            :description="event.eventDescription"
            :id="event.eventId"
            :dateTime="event.eventDateTime"
            :location="event.eventLocation"
          />
        </div>
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
      // events: [],
      events: [
        {
          eventId: "eventId1",
          eventName: "Event 1",
          eventDescription:
            "'Event 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-10-20T13:12",
          eventCreatedBy: "SMU Club",
          // TAGS SHOULD INCLUDE WHO CREATED
          eventTags: ["scis", "tag2", "tag3"],
          eventAttendees: [
            "studentId1",
            "studentId2",
            "studentId3",
            "studentId4",
          ],
          // new data to incude
          eventLocation: "SCIS, SR01-02",
          eventContact: "contact@smu.edu.sg",
          image: "...url",
        },
        {
          eventId: "eventId2",
          eventName: "Event 2",
          eventDescription:
            "'Event 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-10-09T13:12",
          eventCreatedBy: "SMU Club",
          eventTags: ["smusa", "tag2", "tag3"],
          eventAttendees: ["studentId1", "studentId3", "studentId5"],
          eventLocation: "SOB, SR01-02",
          eventContact: "contact@smu.edu.sg",
        },
        {
          eventId: "eventId3",
          eventName: "Event 3",
          eventDescription:
            "'Event 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-10-16T13:12",
          eventCreatedBy: "SMU",
          eventTags: ["smusa", "tag4", "tag1"],
          eventAttendees: [
            "studentId1",
            "studentId3",
            "studentId4",
            "studentId5",
          ],
          eventLocation: "SOSS, SR01-02",
          eventContact: "contact@smu.edu.sg",
        },
        {
          eventId: "eventId4",
          eventName: "Event 4",
          eventDescription:
            "'Event 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-20T13:12",
          eventCreatedBy: "SMU",
          eventTags: ["smusa", "tag4", "tag2"],
          eventAttendees: [
            "studentId1",
            "studentId3",
            "studentId4",
            "studentId5",
          ],
          eventLocation: "SOA, SR01-02",
          eventContact: "contact@smu.edu.sg",
        },
        {
          eventId: "eventId5",
          eventName: "Event 5",
          eventDescription:
            "'Event 5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-08-20T13:12",
          eventCreatedBy: "SMU",
          eventTags: ["smusa", "tag4", "tag2"],
          eventAttendees: [
            "studentId1",
            "studentId3",
            "studentId4",
            "studentId5",
          ],
          eventLocation: "SCIS, SR01-02",
          eventContact: "contact@smu.edu.sg",
        },
        {
          eventId: "eventId6",
          eventName: "Event 6",
          eventDescription:
            "'Event 6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-10-21T13:12",
          eventCreatedBy: "SMU",
          eventTags: ["SMUSA", "tag4", "tag2"],
          eventAttendees: [
            "studentId1",
            "studentId3",
            "studentId4",
            "studentId5",
          ],
          eventLocation: "SCIS, SR01-02",
          eventContact: "contact@smu.edu.sg",
        },
      ],
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
