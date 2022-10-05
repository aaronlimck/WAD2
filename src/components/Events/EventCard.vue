<template>

        <div class="w-80 p-2 bg-gray-50 rounded-xl border hover:drop-shadow-2xl m-0">
            <img class="h-40 w-80 object-cover rounded-xl" src="../../images/bailey-zindel-NRQV-hBF10M-unsplash.jpg">
                <h2 class="font-bold text-lg"> Heading </h2>

                <p class="text-sm text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci exercitationem delectus natus nobis eum est explicabo dolorum ipsum aliquam quasi voluptas fugiat? </p>
            

            <div class="m-2 hover">
                <button> Read More </button>
            </div>
        </div>

</template>

<script>
    export default {
    }
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
</style>