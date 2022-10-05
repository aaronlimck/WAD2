<template>
  <the-search-bar />
  <section>
    <div class="container mx-auto my-10"></div>
  </section>
</template>

<script>
import TheSearchBar from "./TheSearchBar.vue";

export default {
  components: { TheSearchBar },
  data() {
    return {
      events: [
        {
          eventId: "eventId1",
          eventName: "Event 1",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02T18:25:43.511Z",
          eventCreatedBy: "SMU Club",
          eventTags: ["tag1", "tag2", "tag3"],
          eventAttendees: [
            "studentId1",
            "studentId2",
            "studentId3",
            "studentId4",
          ],
        },
        {
          eventId: "eventId2",
          eventName: "Event 2",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02T18:25:43.511Z",
          eventCreatedBy: "SMU Club",
          eventTags: ["tag2", "tag4", "tag1"],
          eventAttendees: ["studentId1", "studentId3", "studentId5"],
        },
        {
          eventId: "eventId3",
          eventName: "Event 3",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02T18:25:43.511Z",
          eventCreatedBy: "SMU",
          eventTags: ["tag2", "tag4", "tag1"],
          eventAttendees: [
            "studentId1",
            "studentId3",
            "studentId4",
            "studentId5",
          ],
        },
        {
          eventId: "eventId4",
          eventName: "Event 4",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02T18:25:43.511Z",
          eventCreatedBy: "SMU",
          eventTags: ["tag2", "tag4", "tag2"],
          eventAttendees: [
            "studentId1",
            "studentId3",
            "studentId4",
            "studentId5",
          ],
        },
      ],
    };
  },
};
</script>
