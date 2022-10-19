<template>
    <base-button  style="margin: 20px; "><router-link to="/Dashboard">Back</router-link></base-button>
    <div id="img" class="py-1">
        {{getFromTheDashboard()}}
        <img class="w-full object-cover h-80" :src="items[fromTheDashboard].image" >
        <!-- src="./image/SCISDay.JPG" -->
    </div>
    <div class="content container mx-auto py-10">
        <div class="grid gap-4 grid-cols-3">
            <div class="col-span-3 sm:col-span-2 p-5">
                <p></p>
                <p class="font-bold text-5xl pb-10"> {{items[fromTheDashboard].eventName}}</p>
             
                <p>
                    {{items[fromTheDashboard].eventDescription}}
                </p>
            </div>
            <div class="col-span-3 sm:col-span-1 p-9">

                <div class="detail-tab border-solid border-2 border-gray-500 p-9 rounded-lg mb-10 mx-auto">
                    <div class="mb-3">
                        <div class="flex pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p class="text-1x font-semibold"> {{displayEventDateTime}} </p>
                        </div>
                        <!-- <p class=" text-gray-500">
                            Test
                        </p> -->
                    </div>

                    <div class = "mb-3">
                        <div class="flex pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p class="text-1x font-semibold"> {{items[fromTheDashboard].eventLocation}} </p>
                        </div>
                        <!-- <p class=" text-gray-500">
                            Test
                        </p> -->
                    </div>
                    <div class = "mb-3">
                        <div class="flex pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <p class="text-1x font-semibold"> {{items[fromTheDashboard].eventContact}} </p>
                        </div>
                        <!-- <p class=" text-gray-500">
                            Test
                        </p> -->
                    </div>

                    <div class = "mb-3">
                        <div class="flex pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <p class="text-1x font-semibold">{{ items[fromTheDashboard].eventAttendees.length }} of {{items[fromTheDashboard].participantsLimit}} participants</p>
              
                        </div>
                        <!-- <p class=" text-gray-500">
                            Test
                        </p> -->
                    </div>

                    
                </div>

                <div class="button mb-10">
                    <!-- Incomplete will send profile into database -->
                    <button class="rounded py-3" id="button"><router-link to="/OneEventForm">Edit</router-link></button>
                </div>
                {{id}} HIIII

                <div class="link mb-10">
                    
                </div>

            {{fromTheDashboard}}
            </div>
        </div>
    </div>
    <CopiedAlert v-if="copied"/>




</template>

<script>
    
    export default{
        mutations:{
            
            // console.log("111")
            // this.$store.commit('selectedEvent');
            // this.fromTheDashboard = localStorage.getItem("selectedEvent")
            // console.log(localStorage.getItem("selectedEvent"))
            // console.log(this.fromTheDashboard)
            // this.renderComponent = localStorage.getItem("selectedEvent")
            // console.log("222")
            
        },
        
        data() {
            return{
              
                // id: this.$route.params.id,
                text: "http://samplelink.com",
                copied: false,
                fromTheDashboard: '',
                items: [
                {
                    "eventDateTime":"2022-12-12T13:12",
                    "eventId":"c1ebf24a-1e40-4792-af1e-46e2aec45345",
                    "eventName":"Tech Series",
                    "eventDescription":"Tech Series is a...",
                    
                    "eventCreatedBy":"ellpsis",
                    "eventTags":["networking", "tech"],
                    "eventAttendees":["1", "2"],
                    "eventLocation" :"SCIS",
                    "eventContact" : "contact@smu.edu.sg",
                    "image" : "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png",
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
            }
        },
        methods: {
            copyText(){
                navigator.clipboard.writeText(this.text);
                this.copied = true;
                setTimeout(() => {
                    this.copied = false;
                },1500);
            },
            async getFromTheDashboard(){
                console.log("333")
                localStorage.getItem("selectedEvent")
                this.$store.commit('selectedEvent');
                this.fromTheDashboard = localStorage.getItem("selectedEvent")
                await this.$nextTick();
                this.renderComponent = localStorage.getItem("selectedEvent")
                console.log("444")
            }
            

        },
        computed:{
            displayEventDateTime(){
                let str = this.items[this.fromTheDashboard].eventDateTime
                let dateTimeArray = str.split("T")
                let date_ = dateTimeArray[0]
                let time_ = dateTimeArray[1]
                let dateTime = date_ + ' ' + time_
                return dateTime   
            }
        },
    
}
</script>

<style scoped>
#button{
    background-color: #f56a01;
    color: white;
    width: 100%;
}
#button:hover,
#button:active {
    background-color: rgba(255, 99, 71, 0.8);
    color: #ffffff;
}
p, input[text]{
    overflow-wrap: break-word;
}
#copy-button:hover{
    color: rgba(151, 148, 148, 0.8);
}
#copy-button:active{
    color: rgba(255, 255, 255, 0.8);
}
.icon{
    margin-right: 10px;
}
.test{
    width: 100%;
}
</style>