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
    <div id="intro">
      <div
        class="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 flex-row-reverse items-center py-10 sm:py-0"
      >
        <div class="textContent order-last sm:order-first">
          <div class="heading sm:text-left wrapper">
            <h1 class="text-2xl sm:text-4xl">
              <span class="typed-text" v-html="typeValue"></span>
              <span class="blinking-cursor">|</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
          </div>
        </div>
        <div id="imgContent">
          <img
            class="object-cover p-10"
            src="../../assets/chilling.svg"
            alt="chilling"
          />
        </div>
      </div>
    </div>

    <div class="w-10/12 mx-auto pt-20 pb-6">
      <h2 class="heading text-center text-2xl text-red-600 pb-3">
        Upcoming Events
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
        <div v-for="event in events" :key="event.eventId">
          <event-card
            classes="animate__animated animate__fadeInUp"
            :id="event.eventId"
            :eventname="event.eventName"
            :description="event.eventDescription"
            :dateTime="event.eventDateTime"
            :location="event.eventLocation"
            :image="event.eventImage"
          ></event-card>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <router-link to="/events"
        ><base-button class="p-2">See more</base-button></router-link
      >
    </div>

    <div class="w-10/12 mx-auto pt-20 pb-10">
      <h2 class="heading text-center text-2xl text-red-600 pb-6">
        We offer a complete range of exciting features
      </h2>

      <div id="whyUs" class="grid md:grid-cols-2 lg:grid-cols-3 mb-10 gap-5">
        <div
          class="reason mb-5 sm:mb-0 sm:pr-6 animate__animated animate__fadeIn"
        >
          <img class="h12 w-12 mb-3" src="../../assets/calendar.gif" />
          <h3 class="text-xl mb-2">Event Tracking</h3>
          <p>
            Having to constantly keep track of your events sure is an exhausting
            task! Keep track of all the latest and upcoming events with just a
            simple click of a button! You will never have to worry about
            clashing dates ever again!
          </p>
        </div>

        <div
          class="reason mb-5 sm:mb-0 sm:pr-6 animate__animated animate__fadeIn"
        >
          <img class="h12 w-12 mb-3" src="../../assets/filter.gif" />
          <h3 class="text-xl mb-2">Filter System</h3>
          <p>
            Having to constantly keep track of your events sure is an exhausting
            task! Keep track of all the latest and upcoming events with just a
            simple click of a button! You will never have to worry about
            clashing dates ever again!
          </p>
        </div>

        <div
          class="reason mb-5 sm:mb-0 sm:pr-6 animate__animated animate__fadeIn"
        >
          <img class="h12 w-12 mb-3" src="../../assets/key.gif" />
          <h3 class="text-xl mb-2">Ease of Access</h3>
          <p>
            Having to constantly keep track of your events sure is an exhausting
            task! Keep track of all the latest and upcoming events with just a
            simple click of a button! You will never have to worry about
            clashing dates ever again!
          </p>
        </div>
      </div>
    </div>

    <div class="p-9 md:flex bg-gray-100">
      <div
        class="md:w-2/5 md:flex md:flex-col md:justify-center md:mb-12 md:mr-8"
      >
        <p class="heading text-4xl text-left mb-6">
          Check out some of our top reviews from our
          <span class="happy">happy</span> visitors
        </p>

        <p class="pr-3 text-lg mb-10 sm:mb-0">
          As a representative of all SMU students, it is our responsibility to
          uphold the highest standards of excellence. Therefore, any critique
          will be taken into consideration as we strive to not only better your
          experience but exceed your expectations.
        </p>
      </div>
      <div class="md:w-3/5">
        <div
          class="p-7 md:w-11/12 mb-5 border shadow-xl relative rounded-lg z-20 bg-white"
        >
          <div class="text-base mb-3">
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
          class="p-7 md:w-11/12 border shadow-xl rounded-lg z-10 bg-white md:float-right"
        >
          <div class="text-base mb-3">
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
  name: "typeWiriter",
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Create meaningful experiences",
        "Forge deep connections",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 1000,
      displayTextArrayIndex: 0,
      charIndex: 0,

      showDialog: false,
      events: [],
    };
  },
  created() {
    window.addEventListener("scroll", this.reveal);
    setTimeout(this.typeText, this.newTextDelay);
  },
  methods: {
    clickButton() {
      this.showDialog = true;
      return;
    },
    confirmDialogMsg() {
      this.showDialog = false;
    },
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("loadAllEvent");
      this.events = Object.entries(this.$store.getters.getAllEventOrderByDate)
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
#intro {
  background: url("../../assets/shapebg.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.heading {
  font-family: "Fredoka One";
}

.happy {
  color: #f56b01;
}

.blinking-cursor {
  /* font-size: 6rem; */
  color: orange;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: orange;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: orange;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: orange;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: orange;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: orange;
  }
}
</style>
