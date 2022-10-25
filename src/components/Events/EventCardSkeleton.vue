<template>
        <div class="">
        <div class="img h-40 w-full object-cover rounded-lg"> </div>
        <div class="px-3 py-6">
            <div class="w-5/6">
                <span class="rounded-md"></span>
                <span class="rounded-md"></span>
            </div>
        </div>
        <!-- <p class="text-md text-sl bg-slate-50 flex" id="dateTime">

        </p> -->
    </div>
    </template>
    
    <script>
    export default {

    };
    </script>
    
<style scoped>
    .img{
        animation: bg-pulse 1s  infinite linear alternate;
    }

    span{
        animation: bg-pulse 1s infinite linear alternate;
        width: 80%;
        height: 20px;
        margin: 2px;
        margin-bottom: 5px;
        margin-top: 5px;
        display: block;
    }

    @keyframes bg-pulse{
        0%{
            background: #eee;
        }
        100%{
            background: rgb(203, 203, 203);
        }

    }
</style>