<style>
.vertialSliderRoot
{
    /* border: solid 1px black; */
}
.tuizi
{
    background-color: grey;
    border: solid 1px black;
    width: 40px;
    height: 20px;
    margin-top: 200px;
}
.tuizi:hover
{
    cursor: pointer;
}
.bg
{
    background-color: black;
    height: 200px;
    width: 10px;
    margin-left: 15px;
}
.tuizi,.bg
{
    display: inline-block;
    position:fixed;
}
</style>
<script>
var screenY = window.screenY
export default {
  data() {
    return {
      bpm: 130,
      start_y: 0,
      move_y:0,
      precent:0, // 移动百分比
      pt:0,
    }
  },
  methods:
  {
    down(event)
    {
        this.start_y = event.screenY
        // console.log(this.start_y);
    },
    move_tuizi(event)
    {
        this.move_y = event.screenY
        this.precent = (this.move_y-this.start_y)/screenY
        console.log(this.move_y);
        // 180是硬编码推算的
        // this.pt = 180*this.precent
        // console.log(this.pt);
        // console.log(event);
        // console.log(event)
        // this.pt = event.movementY
        // tg.style = "margin-top:" + event.clientX
    }
    // add(event)
    // {
    //     this.pt+=1
    // }
  }
}
</script>
<template>
    
    <!-- <button @click="add">{{ pt }}</button> -->
    <div class="vertialSliderRoot">
        <div class="bg"></div>
        <!-- <div :style="{'margin-top': pt + 'px'}" class="tuizi" @mousemove="move_tuizi" @mousedown="down"></div> -->
        <!-- <div :style="{margin-top: pt}" class="tuizi" @mousedown="click_tuizi" @mousemove="move_tuizi"></div> -->
    </div>

    
</template>