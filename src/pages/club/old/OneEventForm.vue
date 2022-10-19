<template>
 
    <the-search-bar />
    
    <section>
      <div class="container mx-auto">
      </div>
    </section>
    
    <div class="container" >
      
      <div class="row">
        <!-- <div class ="col-3" id="sample2">Hi</div><div  class ="col-3" id="sample2">Hi</div> -->
        <div   id="sample">
        
          <base-button  style="margin: 20px; "><router-link to="/OneEventProfilePage">Back</router-link></base-button>
         
          
  
          <!-- Event Name: <input  style="border:1px black solid" type="" > <br> -->
          <!-- Event Description : <input  style="border:1px black solid" type="" > <br> -->
          <!-- Event Date: <input style="border:1px black solid" type="" v-model="items[0].eventDateTime"> <br> -->
  
          <form action=""  style=" width:2700px; margin: auto;">
            
            <div class="w-full md:w-1/2 px-3">
              {{items[fromTheDashboard].image}}
              <img class="h-40 w-full bject-cover rounded-xl" :src="items[fromTheDashboard].image"> 
              
              <img src="/image/SCISDay.JPG">
              <!-- v-bind:src="image/SCISDay.jpg" -->

             
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Event Name:
              </label>
              <input id="eventName" v-model="items[fromTheDashboard].eventName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" >
            
              <div style="color: red" v-if="eventNameErrorMessage_">{{eventNameErrorMessage}}</div>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Date:
              </label>
              <input type="datetime-local" id="eventDateTime" name="eventDateTime" v-model="items[fromTheDashboard].eventDateTime">
              <!-- <input v-model="items[fromTheDashboard].eventDateTime" type="date" id="eventDate" name="eventDate"> -->
            </div>
            <div class="w-full md:w-1/2 px-3">
              
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Event Location:
              </label>
              <input id="eventName" v-model="items[fromTheDashboard].eventLocation" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" >
              <div style="color: red" v-if="eventLocationErrorMessage_">{{eventLocationErrorMessage}}</div>
           
            </div>
            <div class="w-full md:w-1/2 px-3">
              
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Event Contact:
              </label>
              <input id="eventName" v-model="items[fromTheDashboard].eventContact" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" >
              <div style="color: red" v-if="eventContactErrorMessage_">{{eventContactErrorMessage}}</div>
           
            </div>
            <div class="w-full md:w-1/2 px-3">

              <select  name="select" id="select" v-model="items[fromTheDashboard].participantsLimit">
                <!-- <option
                v-for="participantLimit in participantLimitList"
                :value="participantLimitList[participantLimit]" 
                >{{participantLimitList[participantLimit]}}
              </option> -->
             
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
            


              </select>
            </div>

            
            

            

            
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Event Description:
              </label>
              <textarea wrap="soft" id="eventDescription" v-model="items[fromTheDashboard].eventDescription" class="h-60 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" >
              </textarea>
                <div style="color: red" v-if="eventDescriptionErrorMessage_">{{eventDescriptionErrorMessage}}</div>
           
              <input type="file" @change="onFileSelected">
            </div>
            
            
           
          </form>
          
          
          
          <base-button  style="margin: 20px;" @click="updateEvent()" 
          :disabled="eventNameErrorMessage_ || eventLocationErrorMessage_ || eventContactErrorMessage_ || eventDescriptionErrorMessage_"
          :class="[eventNameErrorMessage_ || eventLocationErrorMessage_ || eventContactErrorMessage_ || eventDescriptionErrorMessage_ ? 'grey' : '']"
          >Update</base-button>
          
          
          <br><br><br><br><br><hr>
          <div class="col-10" id="sample2">{{items[fromTheDashboard].eventAttendees.length}} person applied</div>
          
          <div class="col-10" id="sample2">zz: {{fromTheDashboard}}</div>
          
          
  
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
            
            "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec45345",
            "eventName":"Tech Series",
            "eventDescription":"Tech Series is a...",
            "eventDateTime":"2022-12-12T13:12",
            "eventCreatedBy":"ellpsis",
            "eventTags":["networking", "tech"],
            "eventAttendees":["1", "2"],
            "eventLocation" :"SCIS",
            "eventContact" : "contact@smu.edu.sg",
            "image" : "./image/SCISDay.JPG",
            "participantsLimit": 20
            
          },
          {
            "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec45346",
            "eventName":"SCIS Day",
            "eventDescription":"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "eventDateTime":"2022-12-12T13:12",
            "eventCreatedBy":"ellpsis",
            "eventTags":["networking", "tech"],
            "eventAttendees":["1", "2"],
            "eventLocation" :"SCIS",
            "eventContact" : "contact@smu.edu.sg",
            "image" : "./image/SCISDay.jpg",
            "participantsLimit": 10
          },
          {
            "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec45347",
            "eventName":"Networking",
            "eventDescription":"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "eventDateTime":"2022-12-12T13:12",
            "image" : "image/SCISDay.jpg",
            "eventContact" : "contact@smu.edu.sg",
            "eventLocation" :"SCIS",
            "eventCreatedBy":"ellpsis",
            "eventTags":["networking", "tech"],
            "eventAttendees":["1", "2"],
            "participantsLimit": 10
            
            
          }],
          items2:[
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
          ],greeting: "HELLO", 
          title: "Child to parent",
          fromTheDashboard: localStorage.getItem("selectedEvent"),
          newItems:{
            "eventId":"",
            "eventName":"",
            "eventDescription":"",
            "eventDateTime":"2022-12-12T13:12",
            "eventCreatedBy":"",
            "eventTags":["networking", "tech"],
            "eventAttendees":[],
            "participantsLimit": 0
  
          },eventNameErrorMessage: "** Event name should be more than one character",
          eventLocationErrorMessage: "** Event location should be more than one character",
          eventContactErrorMessage: "** Event contact should be more than one character",
          eventDescriptionErrorMessage: "** Event description should be more than 300 words",
          participantLimitList: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          
          buttonStatus: "true",
          //greeting for parent to child
          //title for child to parent
      };
    }, provide:{ //no need props
      samplename: "Swinnerton",
      
  
    },methods: {
          updateTitlrText(title){ //for child to parent
            this.title = title
  
          },
          updateEvent(){ //for child to parent
            
            console.log(this.items[this.fromTheDashboard].eventName)
  
            console.log(this.items[this.fromTheDashboard])
          },
          createEvent(){
            console.log("create")
  
            this.items.push(
            {
            "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec4534588",
            "eventName": this.newItems.eventName,
            "eventDescription":"Laa",
            "eventDateTime":"2022-09-02T18:25:43.511Z",
            "eventCreatedBy":"NEW EVENT",
            "eventTags":["networking", "tech"],
            "eventAttendees":[]
            }
            
            )
            console.log(this.items.length+ "***")
            
  
          }, onFileSelected(event){
           // console.log(event.target.files[0].name)
            this.items[this.fromTheDashboard].image = event.target.files[0].name
          }
      },
      computed:{

        eventNameErrorMessage_(){
          let status = true
          if(this.items[this.fromTheDashboard].eventName.length > 0 ){
            status = false
            
          
          }
          return status

        },
        eventLocationErrorMessage_(){
          let status = true
          if(this.items[this.fromTheDashboard].eventLocation.length > 0){
            status = false
          }
          return status

        },
        eventContactErrorMessage_(){
          let status = true
          if(this.items[this.fromTheDashboard].eventContact.length > 0){
            status = false
          }
          return status
        },
        eventDescriptionErrorMessage_(){
          let status = true
          let descArray = this.items[this.fromTheDashboard].eventDescription.split(" ")
          if(descArray.length >300){
            status = false
          }
          

          return status
        }
      }
      
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

    .grey{
      background-color: grey;
      opacity : 0.10;
      border-radius: 20px;

    }
  
    </style>
  