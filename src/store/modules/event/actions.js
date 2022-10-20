export default {
  async createEvent(context, payload) {
    const eventId = new Date().getTime().toString();
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://bojio-6872d-default-rtdb.asia-southeast1.firebasedatabase.app/events/${eventId}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify({
          eventId: eventId,
          eventName: payload.eventName,
          eventDateTime: payload.eventDateTime,
          eventLocation: payload.eventLocation,
          eventContact: payload.eventContact,
          eventDescription: payload.eventDescription,
          eventTags: payload.eventTags,
          //eventAttendees: payload.eventAttendees,
          eventCreatedByClubId: payload.eventCreatedByClubId,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || "Failed to create event. Try again later"
      );
      throw error;
    }
    console.log(responseData);
    return response.ok;
  },

  async loadAllEvent(context) {
    const response = await fetch(
      `https://bojio-6872d-default-rtdb.asia-southeast1.firebasedatabase.app/events.json`,
      {
        method: "GET",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || "Failed to load event data. Try again later"
      );
      throw error;
    }
    context.commit("setEventData", responseData);
    console.log(responseData);
    return response.ok;
  },
};
