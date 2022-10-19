<template>
  <section>
    <the-search-bar v-model="search" />
    <div class="container mx-auto my-10">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 gap-y-4">
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
  </section>
</template>

<script>
import TheSearchBar from "../../components/Events/TheSearchBar.vue";
import EventCard from "../../components/Events/EventCard.vue";

export default {
  components: { TheSearchBar, EventCard },
  computed: {
    filteredPost() {
      return this.events.filter((event) =>
        (event.eventName + event.eventTags.join(" "))
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
    },
  },
  data() {
    return {
      search: "",
      events: [
        {
          eventId: "eventId1",
          eventName: "Event 1",
          eventDescription:
            "'Event 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02T18:25:43.511Z",
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
          eventDateTime: "2022-09-02T18:25:43.511Z",
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
          eventDateTime: "2022-09-02T18:25:43.511Z",
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
          eventDateTime: "2022-09-02T18:25:43.511Z",
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
          eventDateTime: "2022-09-02T18:25:43.511Z",
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
          eventDateTime: "2022-09-02T18:25:43.511Z",
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
  methods: {
    // convertDateTime(dateTime){
    //   const week = {'0' : "Sun",
    //               '1' : "Mon",
    //               '2' : "Tues",
    //               '3' : "Wed",
    //               '4' : "Thur",
    //               '5' : "Fri",
    //               '6' : "Sat",}
    //   let date = new Date(dateTime);
    //   return `${date.getDate()} ${week[date.getDay()]} ${date.getMonth()} ${date.getTime()}`
    // }
  },
};
</script>
