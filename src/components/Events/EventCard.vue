<template>

<<<<<<< HEAD
        <div class="p-4 bg-gray-50 rounded-xl border hover:drop-shadow-2xl m-0">
            <img class="h-40 w-full bject-cover rounded-xl" src="../../images/background.jpg">
                <h2 class="font-bold text-lg mt-1"> {{name}} </h2>
                <p class="text-sm text-gray-600 mb-2"> {{description}} </p>
                <img class="inline w-5" src="../../images/date.png" /><span class="text-gray-600 text-sm ml-1 mr-10">{{timing}}</span>
                <img class="inline w-5" src="../../images/location.png" /><span class="text-gray-600 text-sm ml-1">{{location}}</span>
            <div class="hover">
                <base-button>Click here</base-button>
            </div>
        </div>

</template>

<script>
    import BaseButton from '../UI/BaseButton.vue';
    export default {
        components: {BaseButton},
        props: {
            name: String,
            description: String,
            location: String,
            timing: String,
=======
        <!-- ======= EventCard ======= -->
            <div class="p-2 bg-gray-50 rounded-xl border hover:drop-shadow-2xl m-5">
                <img class="h-40 w-full bject-cover rounded-xl" src="../../images/bailey-zindel-NRQV-hBF10M-unsplash.jpg">
                    <h2 class="font-bold text-lg p-2 text-center">  {{eventname}}</h2>
                    <p class = "text-md text-sl bg-slate-50 rounded-lg flex" id = "dateTime" > 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {{dateTime}}
                    </p>
                    <p class = "text-md text-sl bg-slate-50 rounded-lg flex" id = "dateTime" > 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {{location}}
                    </p>
                    <p class="text-sm" >  {{description}}</p>
                <div class="m-2 hover">
                    <button> 
                            <router-link :to="{name: 'TheEventProfilePage', params:{id: id}}"> 
                                Read More 
                            </router-link>
                    </button>
                </div>
            </div>
        <!--  ========== -->
</template>

<script>
    export default {
        props: ['eventname', 'description', 'id', 'dateTime', 'location'],
        data(){
        return{
            }
>>>>>>> master
        }
    }
</script>

<style scoped>
button {
<<<<<<< HEAD
    margin-top: 10px;
=======
>>>>>>> master
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
<<<<<<< HEAD
=======
#dateTime, #location{
    color: #f56a01;
    margin-bottom: 5px;
}
>>>>>>> master
</style>