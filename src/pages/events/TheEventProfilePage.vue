<template>
    <div id="img" class="py-1">
        <img class="w-full object-cover h-80" src="../../images/bailey-zindel-NRQV-hBF10M-unsplash.jpg">
    </div>
    <div class="content container mx-auto py-10">
        <div class="grid gap-4 grid-cols-3">
            <div class="col-span-3 sm:col-span-2 p-5">
                <p></p>
                <p class="font-bold text-5xl pb-10"> {{event.eventName}}</p>
                <p>
                    {{event.eventDescription}}
                </p>
            </div>
            <div class="col-span-3 sm:col-span-1 p-9">

                <div class="detail-tab border-solid border-2 border-gray-500 p-9 rounded-lg mb-10 mx-auto">
                    <div class="mb-3">
                        <div class="flex pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p class="text-1x font-semibold"> Date and Time </p>
                        </div>
                        <p class=" text-gray-500">
                            {{event.eventDateTime}}
                        </p>
                    </div>

                    <div class = "mb-3">
                        <div class="flex pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p class="text-1x font-semibold"> Location </p>
                        </div>
                        <p class=" text-gray-500">
                            {{event.eventLocation}}
                        </p>
                    </div>
                    <div class = "mb-3">
                        <div class="flex pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <p class="text-1x font-semibold"> Contact </p>
                        </div>
                        <p class=" text-gray-500">
                            {{event.eventContact}}
                        </p>
                    </div>
                </div>

                <div class="button mb-10">
                    <button class="rounded py-3" id="button" @click="showAndClosePopUp()">Jio Me For this</button>
                </div>

                <div class="link mb-10">
                    <p class= "heading text-gray-500"> Spread the word </p>
                    <div class="border-solid border-2 border-gray-500 p-2 rounded-lg text-gray-500 flex items-center">
                            <input type="text" class="w-full bg-white items-center" :value="text" disabled> 

                            <button id="copy-button" class="" @click="copyText()">
                            <font-awesome-icon icon="fa-solid fa-copy" class="fa-xl" v-if= "!copied"/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                            </button>
                    </div>
                </div>

                <div class="tag">
                    <p class="tags text-gray-500"> Tags </p>
                    <div v-for="tag in eventTags" :key="tag">
                        <p>{{tag}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CopiedAlert v-if="copied"/>
    <!-- MODAL WINDOW -->

    <div id="popup-modal" tabindex="-1" class="z-40" v-if="showPopUpValue">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow ">
                <div class="p-6 text-center">
                    <svg v-if="!failed && !alreadyRegistered" id="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="mx-auto mb-4 w-14 h-14">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <svg v-if="failed || alreadyRegistered" id = "icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto mb-4 w-14 h-14 text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <h3 class="mb-5 text-lg font-normal text-black">
                        {{notificationMessage}}
                    </h3>
                    <div v-if="!failed && !alreadyRegistered && !successfullyRegistered">
                        <button type="button" class="modal-button-accept" @click="registerUserId()">
                            Yes, I'm sure
                        </button>
                        <button type="button" class="modal-button-reject" @click="showAndClosePopUp()">
                            No, cancel
                        </button>        
                    </div>
                    <div v-if="failed">
                        <!-- Link to log in router -->
                        <router-link to="/login">
                            <button type="button" class="modal-button-accept" @click="registerUserId()">
                                Proceed to Log In 
                            </button>
                        </router-link>
                        <button type="button" class="modal-button-reject" @click="showAndClosePopUp()">
                            No, cancel
                        </button>    
                    </div>
                    <div v-if="alreadyRegistered  || successfullyRegistered">
                        <button type="button" class="modal-button-reject" @click="showAndClosePopUp()">
                            Close Window
                        </button>  
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="overlay" v-if="showPopUpValue" @click="showAndClosePopUp()" class="z-30">
    </div>

</template>

<script>
    import CopiedAlert from "../../components/UI/CopiedAlert.vue"
    export default{
    components: {CopiedAlert},
    data() {
        return{
            id: this.$route.params.id,
            text: "http://samplelink.com",
            copied: false,
            event: [],
            showPopUpValue: false,
            notificationMessage: "Are you sure you want to register for this event?",
            failed: false,
            alreadyRegistered: false, 
            successfullyRegistered: false,
        }
    },
    methods: {
        registerUserId(){ 
            if(localStorage.getItem("userId")){
                const userId = localStorage.getItem("userId");
                const eventAttendees = this.event.eventAttendees;

                if(eventAttendees.includes(userId)){
                    this.notificationMessage = "Oops! It looks like you have already registered for the event!";
                    this.alreadyRegistered = true;
                }
                else{
                    eventAttendees.push(localStorage.getItem("userId"));
                    console.log(eventAttendees);
                    this.submitUserId(Object.values(eventAttendees));
                    this.successfullyRegistered = true;
                    this.notificationMessage = "You have successfully registered for the event!";
                }
            }
            else{
                console.log(" Please Login First!");
                this.notificationMessage = `Oops! It looks like you aren't logged in. 
                Please log in first before registering!`
                this.failed = true;
            }
        },
        copyText(){
            navigator.clipboard.writeText(this.text);
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            },1500);
        },
        async submitUserId(eventAttendees){
            try {
                const result = await this.$store.dispatch("addParticipants", {
                eventId: this.id,
                eventAttendees: eventAttendees,
                });
                console.log(result);
            } catch (err) {
                console.log(err)
            }
        },
        showAndClosePopUp(){
            this.successfullyRegistered = false;
            this.alreadyRegistered = false;
            this.failed = false;
            
            this.notificationMessage = "Are you sure you want to register for this event?";
            this.showPopUpValue = !this.showPopUpValue;
        }
    },
    async mounted() {
            try {
                await this.$store.dispatch("loadAllEvent");
                let event = Object.values(this.$store.getters.getEventDataById(this.id));
                this.event = event[0]
                console.log(this.event);
            } catch (err) {
                this.error = err.message || "Failed to load events, try later";
                console.log(this.error);
            }
        }
    }
</script>

<style scoped>
#icon{
    color:  #f56a01;
}
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
#popup-modal{
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.modal-button-accept{
    background-color: #f56a01;
    color: white;
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
}
.modal-button-reject{
    background-color: white;
    color: #f56a01;
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
    border: #f56a01 2px solid;
}

.modal-button-accept:hover {
    background-color: rgba(255, 99, 71, 0.8);
    color: #ffffff;
}
.modal-button-reject:hover {
    background-color: rgba(255, 99, 71, 0.8);
    color: #ffffff;
}
#overlay {
    position: fixed; 
    width: 100%; 
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);  
    cursor: pointer; 
}

</style>

<!-- localstrong.getitems  -->