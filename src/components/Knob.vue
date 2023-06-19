<style>
    .knob
    {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-color: gray;
        cursor: pointer;
    }
    .knob > .cursor
    {
        background-color: red;
        width: 5px;
        height: 20px;
        margin-left: 10px;
    }
</style>
<template>
    <div class="knob"> 
        <div class="cursor"></div>
    </div>
</template>
