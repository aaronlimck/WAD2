export default {
  getAllEvents(state) {
    console.log(state.events);
    return state.events;
  },

  getEventDataByClubId(state) {
    const clubId = localStorage.getItem("userClub");
    const eventData = JSON.parse(JSON.stringify(state.events));

    const result = Object.values(eventData).filter(
      (event) => event.eventCreatedByClubId == clubId
    );
    console.log(result);
    return result;
  },
};
