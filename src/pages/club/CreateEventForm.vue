<template>
  <the-search-bar />
  <section>
    <div class="container mx-auto"></div>
  </section>

  <div class="container mx-auto">
    <div class="row">
      <div id="sample">
        <!-- Event Name: <input  style="border:1px black solid" type="" > <br> -->
        <!-- Event Description : <input  style="border:1px black solid" type="" > <br> -->
        <!-- Event Date: <input style="border:1px black solid" type="" v-model="items[0].eventDateTime"> <br> -->
        <form>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Event Name:
            </label>
            <input
              id="eventName"
              v-model="newItems.eventName"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Date:
            </label>
            <input
              v-model="newItems.eventDateTime"
              type="date"
              id="eventDate"
              name="eventDate"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Event Location:
            </label>
            <input
              id="eventName"
              v-model="newItems.eventLocation"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Event Contact:
            </label>
            <input
              id="eventName"
              v-model="newItems.eventContact"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Event Description:
            </label>
            <input
              id="eventDescription"
              v-model="newItems.eventDescription"
              class="h-60 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />

            <input type="file" @change="onFileSelected" />
          </div>
        </form>

        <base-button style="margin: 20px" v-on="createEvent()"
          >Update</base-button
        >

        <br /><br /><br /><br /><br />
        <hr />
        <div class="col-10" id="sample2">
          {{ items[fromTheDashboard].eventAttendees.length }} person applied
        </div>

        <div class="col-10" id="sample2">zz: {{ fromTheDashboard }}</div>
        {{ items[fromTheDashboard].image }}
      </div>
    </div>
  </div>
</template>

<script>
//   import BaseButton from '../UI/BaseButton.vue';

export default {
  // components: {BaseButton }, //for parent to child

  data() {
    return {
      items: [
        {
          eventId: "c1ebf24a-1e40-4792-af1e-46e2aec45345",
          eventName: "Tech Series",
          eventDescription: "Tech Series is a...",
          eventDateTime: "2022-09-02",
          eventCreatedBy: "ellpsis",
          eventTags: ["networking", "tech"],
          eventAttendees: ["1", "2"],
          eventLocation: "SCIS",
          eventContact: "contact@smu.edu.sg",
          image: "image/SCISDay.jpg",
        },
        {
          eventId: "c1ebf24a-1e40-4792-af1e-46e2aec45346",
          eventName: "SCIS Day",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02",
          eventCreatedBy: "ellpsis",
          eventTags: ["networking", "tech"],
          eventAttendees: ["1", "2"],
          eventLocation: "SCIS",
          eventContact: "contact@smu.edu.sg",
          image: "image/SCISDay.jpg",
        },
        {
          eventId: "c1ebf24a-1e40-4792-af1e-46e2aec45347",
          eventName: "Networking",
          eventDescription:
            "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          eventDateTime: "2022-09-02",
          image: "image/SCISDay.jpg",
          eventContact: "contact@smu.edu.sg",
          eventLocation: "SCIS",
          eventCreatedBy: "ellpsis",
          eventTags: ["networking", "tech"],
          eventAttendees: ["1", "2"],
        },
      ],
      items2: [
        {
          userId: "c1ebf24a-1e40-4792-af1e-46e2aec4534533",
          userName: "jd",
          userFullName: "John Doe",
          userEmail: "123@gmail.com",
          userAssociatedEmail: "123@scis.smu.edu.sg",
          userPassword: "###",
          userRegisteredEvent: [
            "c1ebf24a-1e40-4792-af1e-46e2aec45345",
            "b29b64ea-cdce-4679-951b-23c9c03d374b",
          ],
        },
        {
          userId: "c1ebf24a-1e40-4792-af1e-46e2aec4534544",
          userName: "sd",
          userFullName: "Sam Doe",
          userEmail: "456@gmail.com",
          userAssociatedEmail: "456@scis.smu.edu.sg",
          userPassword: "###",
          userRegisteredEvent: [
            "c1ebf24a-1e40-4792-af1e-46e2aec45345",
            "b29b64ea-cdce-4679-951b-23c9c03d374b",
          ],
        },
        {
          userId: "c1ebf24a-1e40-4792-af1e-46e2aec4534555",
          userName: "ld",
          userFullName: "Lim Doe",
          userEmail: "789@gmail.com",
          userAssociatedEmail: "789@scis.smu.edu.sg",
          userPassword: "###",
          userRegisteredEvent: [],
        },
      ],
      greeting: "HELLO",
      title: "Child to parent",
      fromTheDashboard: localStorage.getItem("selectedEvent"),
      newItems: {
        eventId: "c1ebf24a-1e40-4792-af1e-46e2aec4534588",
        eventName: "",
        eventDescription: "",
        eventDateTime: "",
        eventCreatedBy: "NEW EVENT",
        eventTags: ["networking", "tech"],
        eventAttendees: [],
        eventLocation: "",
        eventContact: "",
        image: "",
      },
      //greeting for parent to child
      //title for child to parent
    };
  },
  provide: {
    //no need props
    samplename: "Swinnerton",
  },
  methods: {
    updateTitlrText(title) {
      //for child to parent
      this.title = title;
    },
    updateEvent() {
      //for child to parent

      console.log(this.items[this.fromTheDashboard].eventName);

      console.log(this.items[this.fromTheDashboard]);
    },
    createEvent() {
      console.log("create");

      this.items.unshift({
        eventId: "c1ebf24a-1e40-4792-af1e-46e2aec4534588",
        image: this.newItems.image,
        eventLocation: this.newItems.eventLocation,
        eventContact: this.newItems.eventContact,

        eventName: this.newItems.eventName,
        eventDescription: this.newItems.eventDescription,
        eventDateTime: this.newItems.eventDateTime,
        eventCreatedBy: "NEW EVENT",
        eventTags: ["networking", "tech"],
        eventAttendees: [],
      });
      console.log(this.items[0]);
    },
    onFileSelected(event) {
      // console.log(event.target.files[0].name)
      this.newItems.image = event.target.files[0].name;
    },
  },
};
</script>

<style scoped>
* {
  margin: 20px;
}

div#sample2 {
  border: black solid 2px;
  /* width: 400px; */
}
</style>
