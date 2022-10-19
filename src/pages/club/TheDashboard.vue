<template style="color:black; width:100%">
   
   
  <ellipsis-event-dashboard v-on:changeTitle="updateTitlrText($event)"/>

 <!-- <div class="container-fluid bg-danger text-white position-fixed  h-20 top-0 m-0">Hiii </div>--> 
 
 <div class="grid ld:grid-cols-4 md:grid-cols-4 sm:grid-cols-12 gap-4">
                   <div >

                       <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5 text-center">
                      
                          
                                   <h2 class="font-bold uppercase text-gray-600">Total Events</h2>
                             
                                  <p class="font-bold text-3xl" >{{items.length}} </p>
                            
                          
                       </div>
                     
                   </div>


                   <div >
                  
                       <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5 text-center">
                           
                 
                                  <h2 class="font-bold uppercase text-gray-600">Newly Created Event</h2>
                                   <p class="font-bold text-3xl">{{items[items.length]}} </p>
                            
                       
                       </div>
                   
                   </div>
                   <div >
                
                       <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5 text-center">
                           
                              
                               
                                   <h2 class="font-bold uppercase text-gray-600">Total Club members</h2>
                                   <p class="font-bold text-3xl ">30</p>
                   
                       </div>
                     
                   </div>
                   <div >
              
                       <div class="bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-600 rounded-lg shadow-xl p-5 text-center">
                           
                              
                               
                                  <h2 class="font-bold uppercase text-gray-600">Total Club members</h2>
                                   <p class="font-bold text-3xl ">{{fromTheDashboard}}</p>
                   
                       </div>
                   
                   </div>
                
                  
                   
 </div>


 <!-- graph ===== -->
 <div class="grid ld:grid-cols-4 md:grid-cols-4 sm:grid-cols-12 gap-4">


 </div> 
 <canvas id="myChart" width="400" height="50">
  
 </canvas>
 <div id="trytry"></div>
 


 <!-- graph ====== -->
 <div >

  
   <div >
     <div  style="display:flex; justify-content: right; ">
       <base-button style="margin: 20px;"><router-link to="/CreateEventForm">Create Event</router-link></base-button>
     
      </div>
     
     <!-- <div class ="col-3" id="sample2">Hi</div><div  class ="col-3" id="sample2">Hi</div> -->
     <div id="sample">
       
       
       
       
        <div class="container mx-auto my-10">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 gap-y-4">
                <div v-for="(item, index) in items" :key = "item.eventId">
                  <EventCard2 :index="index" :eventname= "item.eventName" :description="item.eventDescription" :id="item.eventId" :dateTime="item.eventDateTime" 
                  :location="item.eventLocation"  :eventAttendees="item.eventAttendees.length" :participantsLimit="item.participantsLimit"/>
                </div>
          </div>
        </div>

         
      
       
     </div>
   </div>
   
 </div>

</template>

 

<script>
// import BaseButton from '../UI/BaseButton.vue';
import Chart from 'chart.js/auto';
import EventCard2 from "../../pages/club/EventCard2.vue";

export default {
 // components: {BaseButton }, //for parent to child
 components: {EventCard2},
 data() {
   return {
     items: [
       {
         "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec45345",
         "eventName":"Tech Series",
         "eventDescription":"Tech series is a...",
         "eventDateTime":"2022-09-02",
         "eventCreatedBy":"ellpsis",
         "eventTags":["networking", "tech"],
         "eventAttendees":["1","2","3"],
          "eventLocation" :"SCIS",
          "eventContact" : "contact@smu.edu.sg",
          "image" : "image/SCISDay.jpg",
          "participantsLimit": 10
       },
       {
         "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec45346",
         "eventName":"SCIS Day",
         "eventDescription":"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
         "eventDateTime":"2022-09-02",
         "eventCreatedBy":"ellpsis",
         "eventTags":["networking", "tech"],
         "eventAttendees":["1","2","3", "4"],
          "eventLocation" :"SCIS",
          "eventContact" : "contact@smu.edu.sg",
          "image" : "image/SCISDay.jpg",
          "participantsLimit": 10
       },
       {
         "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec45347",
         "eventName":"Networking",
         "eventDescription":"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
         "eventDateTime":"2022-09-02",
         "eventCreatedBy":"ellpsis",
         "eventTags":["networking", "tech"],
         "eventAttendees":["1","2","3", "4", "5"],
          "eventLocation" :"SCIS",
          "eventContact" : "contact@smu.edu.sg",
          "image" : "image/SCISDay.jpg",
          "participantsLimit": 10
       }], items2:[
       {
         "userId":"c1ebf24a-1e40-4792-af1e-46e2aec4534533",
         "userName":"jd",
         "userFullName":"John Doe",
         "userEmail":"123@gmail.com",
         "userAssociatedEmail":"123@scis.smu.edu.sg",
         "userPassword":"###",
         "userRegisteredEvent":[
         "c1ebf24a-1e40-4792-af1e-46e2aec45345",
         "b29b64ea-cdce-4679-951b-23c9c03d374b"
       ]
       },
       {
         "userId":"c1ebf24a-1e40-4792-af1e-46e2aec4534544",
         "userName":"sd",
         "userFullName":"Sam Doe",
         "userEmail":"456@gmail.com",
         "userAssociatedEmail":"456@scis.smu.edu.sg",
         "userPassword":"###",
         "userRegisteredEvent":[
         "c1ebf24a-1e40-4792-af1e-46e2aec45345",
         "b29b64ea-cdce-4679-951b-23c9c03d374b"
       ]
       },
       {
         "userId":"c1ebf24a-1e40-4792-af1e-46e2aec4534555",
         "userName":"ld",
         "userFullName":"Lim Doe",
         "userEmail":"789@gmail.com",
         "userAssociatedEmail":"789@scis.smu.edu.sg",
         "userPassword":"###",
         "userRegisteredEvent":[
       ] 
       }
       ],greeting: "HELLO", title: "Child to parent",  fromTheDashboard: localStorage.getItem("selectedEvent"),
       //greeting for parent to child
       //title for child to parent
   };
 }, provide:{ //no need props
   samplename: "Swinnerton"

 },methods: {
   updateTitlrText(title){ //for child to parent
         this.title = title

   },
   selectEvent(input) {
     
         // Signed in
         console.log(input + "**8")
         console.log("Successfully login!");
         localStorage.setItem("selectedEvent", input);
         console.log(localStorage.getItem("selectedEvent"));
 
   },

   
   },mounted(){
    // let theDiv = document.getElementById("trytry")
    // theDiv.innerText = "hiiii"
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }})
    myChart;
}
 
 
}



</script>

<style scoped>
 * {
   margin: 20px;
   color: black;
 }
 
 div#sample2 {
   border: black solid 2px;
   /* width: 400px; */
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
 </style>
 
 
 
