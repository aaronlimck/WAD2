<template>
    <div class="alert opacity-90 w-2/12 rounded-lg">
        <div class="p-4 text-lg text-white " role="alert"> 
            <p class="text-center"> Copied to Clipboard! </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
        title: {
            type: String,
            required: false,
        },
        classes: {
            type: String,
            required: false,
        },
        },
    };
    </script>
    
<style scoped>
    .alert{
        background-color: #f56a01;
        position: fixed;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    menu {
        display: flex;
        justify-content: flex-end;
        margin: 0;
    }
</style>