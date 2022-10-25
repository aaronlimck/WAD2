<template>
  <!-- ======= EventCard ======= -->
  <div class="bg-gray-50 rounded-lg border hover:drop-shadow-2xl">
    <router-link :to="eventLink">
      <img
        class="h-40 w-full object-cover rounded-t-lg"
        src="../../images/bailey-zindel-NRQV-hBF10M-unsplash.jpg"
      />
      <div class="flex px-3 py-6">
        <div class="w-1/6 pl-2">
          <p class="flex flex-col dateTime">
            <span class="text-base">{{ getMonth }}</span>
            <span class="text-xl font-medium">{{ getDate }}</span>
          </p>
        </div>
        <div class="w-5/6">
          <h2 class="text-lg font-medium mb-1 truncate">{{ eventname }}</h2>
          <p class="text-base text-slate-600">
            {{ description.slice(0, 120) }}
          </p>
        </div>
      </div>
      <!-- <p class="text-md text-sl bg-slate-50 flex" id="dateTime">
        {{ location }}
      </p> -->
    </router-link>
  </div>
  <!--  ========== -->
</template>

<script>
export default {
  props: ["eventname", "description", "id", "dateTime", "location"],
  data() {
    return {};
  },
  computed: {
    eventLink() {
      if (this.$route.path === "/dashboard") {
        return "/edit-event/" + this.id;
      } else {
        return this.$route.path + "/" + this.id;
      }
    },
    getDate() {
      let date = new Date(this.dateTime);
      return date.getDate();
    },
    getMonth() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let date = new Date(this.dateTime);
      return monthNames[date.getMonth()].toUpperCase().slice(0, 3);
    },
    getYear() {
      let date = new Date(this.dateTime);
      return date.getYear();
    },
  },
};
</script>

<style scoped>
button {
  font-family: inherit;
  font-weight: 500;
  background-color: #f56a01;
  border: 2px solid #f56a01;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  min-width: 40px;
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}
button:hover,
button:active {
  background-color: rgba(255, 99, 71, 0.8);
  color: #ffffff;
}
.secondary {
  border: 2px solid #f56a01 !important;
  background-color: transparent;
  color: #f56a01;
  border: none;
}
.secondary:hover,
.secondary:active {
  background-color: rgba(255, 99, 71, 0.8);
  color: #ffffff;
}
.dateTime,
#location {
  color: #f56a01;
}
</style>
