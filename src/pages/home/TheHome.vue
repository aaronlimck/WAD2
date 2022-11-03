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

  <section>
    <div class="intro desktop-md-max:text-center">
      <div class="flex flex-col">
        <p class="leading-12 mb-3 p-9">
          <span class="text-3xl">Don't say...</span><br /><span class="text-6xl"
            >BOJIO</span
          >
        </p>
        <p
          class="desktop-md-max:mb-4 text-xl desktop-md-min:self-end px-8 py-3 desktop-md-min:rounded-l-full bg-white"
        >
          Join now to browse a wide range of events!<br />
          Create
          <span class="text-red-500 text-2xl">meaningful experiences</span> and
          forge <span class="text-red-500 text-2xl">deep connections</span>
        </p>
      </div>
      <div class="w-11/12 mx-auto p-8">
        <img src="../../assets/happy.jpg" />
      </div>
    </div>
    <div class="text-2xl w-8/12 m-auto text-center p-10 text-red-600">
      We offer a complete range of exciting features
    </div>
    <div class="w-11/12 mx-auto events-md:flex text-center mb-12">
      <div
        class="events-md:mr-10 events-md-max:mb-10 events-md:w-4/12 bg-orange-100 reveal-one reveal rounded-3xl p-6"
      >
        <img
          class="inline w-20"
          src="../../assets/calendar.svg"
          alt="calendar"
        />
        <div class="mt-3 text-xl leading-5">Event Tracking</div>
        <br />
        <div class="leading-5 opacity-80">
          Having to constantly keep track of your events sure is an exhausting
          task!<br /><br />
          Keep track of all the latest and upcoming events with just a simple
          click of a button! You will never have to worry about clashing dates
          ever again!
        </div>
      </div>
      <div
        class="events-md:mr-10 events-md-max:mb-10 events-md:w-4/12 bg-orange-100 reveal reveal-sec rounded-3xl p-6"
      >
        <img class="inline w-20" src="../../assets/filter.svg" alt="filter" />
        <div class="mt-3 text-xl leading-5">Filter System</div>
        <br />
        <div class="leading-5 opacity-80">
          Tired of having to manually search through your entire inbox just to
          find one event?<br /><br />
          Explore a wide variety of events and choose those of your liking
          through our customisable filter system!
        </div>
      </div>
      <div
        class="events-md-max:mb-8 events-md:w-4/12 bg-orange-100 reveal reveal-thi rounded-3xl p-6"
      >
        <img class="inline w-20" src="../../assets/write.svg" alt="write" />
        <div class="mt-3 text-xl leading-5">Ease of Access</div>
        <br />
        <div class="leading-5 opacity-80">
          Wanna create your very own event but you just can't find the tool to
          do so?<br /><br />
          Here, you can be both a participant AND an organiser at the same time!
          Simply sign up, fill in your event details in our specially-crafted
          template and you're good to go!
        </div>
      </div>
    </div>

    <div
      class="w-10/12 mx-auto grid events-md:grid-cols-2 events-lg:grid-cols-3 mt-4 gap-5"
    >
      <div v-for="event in events" :key="event.eventId">
        <event-card
          :image="event.eventImage"
          :id="event.eventId"
          :eventname="event.eventName"
          :description="event.eventDescription"
          :dateTime="event.eventDateTime"
          :location="event.eventLocation"
        ></event-card>
      </div>
      <div
        class="first-card flex flex-col justify-evenly events-lg:hidden  p-8 rounded-xl border"
      >
        <p class="text-center font-mono text-xl events-md-max:mb-5">
          Just 3 events?
        </p>
        <p class="text-center font-mono text-xl events-md-max:mb-5">
          Disappointed and wanting more?
        </p>
        <p class="text-center font-mono text-xl">
          Click the button below right now to explore more events!
        </p>
      </div>
    </div>

    <div class="mt-8 mb-10 text-center">
      <router-link to="/events"
        ><base-button
          class="p-2 text-sm active:translate-y-2 active:[box-shadow:0_0px_0_0_#f7a663,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_5px_0_0_#f7a663,0_5px_0_0_#1b70f841]"
          >Click for more</base-button
        ></router-link
      >
    </div>
    <div class="p-9 bottom-md-min:flex bg-gray-100">
      <div
        class="bottom-md-min:w-2/5 bottom-md-min:flex bottom-md-min:flex-col bottom-md-min:justify-center bottom-md-max:mb-12 bottom-md-min:mr-8"
      >
        <p class="text-4xl mb-8 bottom-md-max:text-center leading-12">
          Check out some of our top reviews from our
          <span class="happy">happy</span> visitors
        </p>
        <p class="pr-3 bottom-md-max:text-center">
          As a representative of all SMU students, it is our responsibility to
          uphold the highest standards of excellence. Therefore, any critique
          will be taken into consideration as we strive to not only better your
          experience but exceed your expectations.
        </p>
      </div>
      <div class="bottom-md-min:w-3/5">
        <div
          class="p-7 bottom-md-min:w-11/12 mb-5 border shadow-xl relative rounded z-20 bg-white"
        >
          <div class="text-md leading-5 mb-3">
            I was initially skeptical when I first heard of BOJIO. However, at
            that time, I had to constantly rummage through my entire school
            inbox and filter out the events that attracted me. This was quite
            time-consuming. Therefore, I decided to give BOJIO a try! Imagine my
            surprise when I realised just how efficient it was in finding the
            perfect event for me!
          </div>
          <div class="flex">
            <div class="mr-3">
              <img class="rounded-full w-10" src="../../assets/klement.jpg" />
            </div>
            <div>
              <div class="font-bold">Klement Goh</div>
              <div class="opacity-70">2nd Year Student at SCIS</div>
            </div>
          </div>
        </div>
        <div
          class="p-7 bottom-md-min:w-11/12 border shadow-xl z-10 bg-white bottom-md-min:float-right"
        >
          <div class="text-md leading-5 mb-3">
            I was very excited when I first heard of BOJIO. Being a freshman at
            SMU, I am not used to searching for particular events or activities
            through my inbox. After spending a few minutes on BOJIO, I must say,
            this is the perfect tool for any freshies who might face the same
            troubles as I had.
          </div>
          <div class="flex">
            <div class="mr-3">
              <img class="rounded-full w-10" src="../../assets/friend.jpg" />
            </div>
            <div>
              <div class="font-bold">Michael Lee</div>
              <div class="opacity-70">1st Year Student at SOB</div>
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
      events: [],
    };
  },
  created() {
    window.addEventListener("scroll", this.reveal);
  },
  methods: {
    clickButton() {
      this.showDialog = true;
      return;
    },
    confirmDialogMsg() {
      this.showDialog = false;
    },
    reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("loadAllEvent");
      this.events = Object.entries(this.$store.getters.getAllEvents)
        .slice(0, 3)
        .map((entry) => entry[1]);
    } catch (err) {
      this.error = err.message || "Failed to load events, try later";
      console.log(this.error);
    }
  },
};
</script>

<style scoped>
.intro {
  background-color: #eddcd6;
  font-family: "Fredoka One";
}
section {
  font-family: "Fredoka One";
}
.happy {
  color: #f56b01;
}
.first-card {
  background-color: #f56b01dd;
}
.reveal-one {
  position: relative;
  transform: translateY(60px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal-sec {
  position: relative;
  transform: translateY(120px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal-thi {
  position: relative;
  transform: translateY(180px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
</style>
