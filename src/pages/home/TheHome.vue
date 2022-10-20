<template>
  <base-dialog v-if="showDialog" title="Invalid Input">
    <template #default>
      <p>Just Another Lame Text</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        obcaecati repudiandae perferendis repellendus nobis harum aut neque
        numquam ipsum aliquid facere possimus earum atque voluptates est,
        tempore quaerat nesciunt provident.
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmDialogMsg" class="py-1 px-3 sm:mr-0 md:mr-3">
        Okay</base-button
      >
    </template>
  </base-dialog>

  <section style="height: 3000px">
    <div class="p-9 flex justify-center bg-slate-100">
      <div class="w-2/5 flex flex-col justify-evenly mr-3">
        <p class="text-4xl leading-12">Check what's happening around you</p>
        <p class="pr-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          praesentium quasi adipisci sit velit dolor hic eius illo!
          Reprehenderit harum accusamus iure tempora repellendus nihil nulla nam
          eaque. Voluptate, ipsam!
        </p>
        <div><base-button class="px-6">Start Free Trial</base-button></div>
      </div>
      <div>
        <img src="../../assets/desktop.png" class="w-full" />
      </div>
    </div>
    <div class="text-2xl w-3/12 m-auto text-center p-10">
      We offer a complete range of features
    </div>
    <div class="w-10/12 mx-auto flex text-center p-3 mb-12">
      <div>
        <img class="inline" src="../../assets/cart.png" alt="cart" />
        <div class="mt-3 text-lg">Event Integration</div>
        <div class="leading-5 opacity-70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          tempora itaque omnis quam, id excepturi animi iure velit enim at
          reiciendis consequuntur explicabo quaerat illum laudantium nemo
          architecto, illo non?
        </div>
      </div>
      <div>
        <img class="inline" src="../../assets/shield.png" alt="shield" />
        <div class="mt-3 text-lg">Data Privacy</div>
        <div class="leading-5 opacity-70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          tempora itaque omnis quam, id excepturi animi iure velit enim at
          reiciendis consequuntur explicabo quaerat illum laudantium nemo
          architecto, illo non?
        </div>
      </div>
      <div>
        <img class="inline" src="../../assets/pointer.png" alt="pointer" />
        <div class="mt-3 text-lg">Ease of Access</div>
        <div class="leading-5 opacity-70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          tempora itaque omnis quam, id excepturi animi iure velit enim at
          reiciendis consequuntur explicabo quaerat illum laudantium nemo
          architecto, illo non?
        </div>
      </div>
    </div>
    <div class="w-10/12 mx-auto grid grid-cols-3 mt-4 gap-5">
      <div v-for="event in events" :key="event.eventId">
        <event-card
          :name="event.eventName"
          :description="event.eventDescription"
          :timing="event.eventDateTime"
          :location="event.eventLocation"
        ></event-card>
      </div>
    </div>
    <div class="mt-8 mb-10 text-center">
      <base-button class="p-2 text-sm">Click for more</base-button>
    </div>
    <div class="p-9 flex bg-slate-100">
      <div class="w-2/5 flex flex-col justify-center mr-8">
        <p class="text-4xl mb-8 leading-12">
          Check out some cool events we have
        </p>
        <p class="pr-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          praesentium quasi adipisci sit velit dolor hic eius illo!
          Reprehenderit harum accusamus iure tempora repellendus nihil nulla nam
          eaque. Voluptate, ipsam!
        </p>
      </div>
      <div class="w-3/5 relative h-72">
        <div class="p-7 bg-white w-9/12 border z-10 shadow-md relative rounded">
          <div class="text-md leading-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            eveniet quae molestias, deleniti itaque, minima doloribus harum,
            quaerat fuga nisi impedit perspiciatis? Dignissimos, iste! Facere
            fugiat minus veniam! Corporis, quae!
          </div>
          <div class="flex">
            <div class="mr-3"><img src="../../assets/ellipse.png" /></div>
            <div>
              <div class="font-bold">John Doe</div>
              <div class="opacity-70">Student</div>
            </div>
          </div>
        </div>
        <div class="p-7 w-9/12 absolute right-12 border bottom-0 shadow-md">
          <div class="text-md leading-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            eveniet quae molestias, deleniti itaque, minima doloribus harum,
            quaerat fuga nisi impedit perspiciatis? Dignissimos, iste! Facere
            fugiat minus veniam! Corporis, quae!
          </div>
          <div class="flex">
            <div class="mr-3"><img src="../../assets/ellipse.png" /></div>
            <div>
              <div class="font-bold">John Doe</div>
              <div class="opacity-70">Student</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EventCard from "../../components/Events/EventCard.vue";

export default {
  components: { EventCard },
  data() {
    return {
      showDialog: false,
      events: [
        {
          eventId: "eventId1",
          eventName: "Event 1",
          eventDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet quae molestias, deleniti itaque, minima doloribus harum, quaerat fuga nisi impedit perspiciatis?",
          eventDateTime: "2022-09-02",
          eventCreatedBy: "SMU Club",
          eventTags: ["scis", "tag2", "tag3"],
          eventAttendees: ["StudentId1", "StudentId2"],
          eventLocation: "SCIS, SR01-02",
          eventContact: "contact@smu.edu.sg",
          image: "...",
        },
        {
          eventId: "eventId2",
          eventName: "Event 2",
          eventDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet quae molestias, deleniti itaque, minima doloribus harum, quaerat fuga nisi impedit perspiciatis?",
          eventDateTime: "2022-08-02",
          eventCreatedBy: "SMU Club",
          eventTags: ["scis", "tag2", "tag3"],
          eventAttendees: ["StudentId1", "StudentId2"],
          eventLocation: "SCIS, SR01-03",
          eventContact: "contact@smu.edu.sg",
          image: "...",
        },
        {
          eventId: "eventId3",
          eventName: "Event 3",
          eventDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet quae molestias, deleniti itaque, minima doloribus harum, quaerat fuga nisi impedit perspiciatis?",
          eventDateTime: "2022-09-05",
          eventCreatedBy: "SMU Club",
          eventTags: ["scis", "tag2", "tag3"],
          eventAttendees: ["StudentId1", "StudentId2"],
          eventLocation: "SCIS, SR01-04",
          eventContact: "contact@smu.edu.sg",
          image: "...",
        },
        {
          eventId: "eventId4",
          eventName: "Event 4",
          eventDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet quae molestias, deleniti itaque, minima doloribus harum, quaerat fuga nisi impedit perspiciatis?",
          eventDateTime: "2022-10-02",
          eventCreatedBy: "SMU Club",
          eventTags: ["scis", "tag2", "tag3"],
          eventAttendees: ["StudentId1", "StudentId2"],
          eventLocation: "SCIS, SR02-02",
          eventContact: "contact@smu.edu.sg",
          image: "...",
        },
        {
          eventId: "eventId5",
          eventName: "Event 5",
          eventDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet quae molestias, deleniti itaque, minima doloribus harum, quaerat fuga nisi impedit perspiciatis?",
          eventDateTime: "2022-11-02",
          eventCreatedBy: "SMU Club",
          eventTags: ["scis", "tag2", "tag3"],
          eventAttendees: ["StudentId1", "StudentId2"],
          eventLocation: "SCIS, SR02-06",
          eventContact: "contact@smu.edu.sg",
          image: "...",
        },
        {
          eventId: "eventId6",
          eventName: "Event 6",
          eventDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet quae molestias, deleniti itaque, minima doloribus harum, quaerat fuga nisi impedit perspiciatis?",
          eventDateTime: "2022-09-22",
          eventCreatedBy: "SMU Club",
          eventTags: ["scis", "tag2", "tag3"],
          eventAttendees: ["StudentId1", "StudentId2"],
          eventLocation: "SCIS, SR01-01",
          eventContact: "contact@smu.edu.sg",
          image: "...",
        },
      ],
    };
  },
  methods: {
    clickButton() {
      this.showDialog = true;
      return;
    },
    confirmDialogMsg() {
      this.showDialog = false;
    },
  },
};
</script>
