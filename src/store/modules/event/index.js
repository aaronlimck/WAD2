import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      events: [
        {
          eventId: "eventId1",
          eventName: "Event 1",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02T18:25:43.511Z",
          eventCreatedById: "SMU Club",
          eventTags: ["tag1", "tag2", "tag3"],
          eventAttendees: [
            "1NWUs7TTWvYXfVDdlQd49NWRCRh2",
            "studentId2",
            "studentId3",
            "studentId4",
          ],
          eventImage: "",
          eventParticipantsLimit: "",
        },
        {
          eventId: "eventId2",
          eventName: "Event 2",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02T18:25:43.511Z",
          eventCreatedBy: "SMU Club",
          eventTags: ["tag2", "tag4", "tag1"],
          eventAttendees: [
            "1NWUs7TTWvYXfVDdlQd49NWRCRh2",
            "studentId3",
            "studentId5",
          ],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
