<template>

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
        }
    }
</script>

<style scoped>
button {
    margin-top: 10px;
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
</style>