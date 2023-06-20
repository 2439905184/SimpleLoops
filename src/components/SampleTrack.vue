<style>
button
{
    height: 20px;
    /* user-select: none; */
}
#bt-wrapper
{
    display: inline-block;
}
</style>
<script>
export default {
  data() {
    return {
      name: "",
      on_off: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      clicks: 0,
    }
  },
  methods:
  {
    // 鼠标事件
    // MouseRight:2,
    // MouseLeft:0,
    set(event){
      if(this.clicks==0)
      {
        event.target.style = "background-color:red"
        this.clicks=1
        // console.log(this.clicks);
      }
      else
      {
        event.target.style = "background-color:none"
        this.clicks=0
        // console.log(this.clicks);
      }
        
    },
  }
}
</script>
<template>
    <div class="track">
        <span>{{ name }}</span>
        <span>音量</span>
        <input type="number" value="100" min="0" max="1" onchange="change_vol(this)"/>
        <div id="bt-wrapper" @click="on_pad_down">
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
  
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
        </div>
    </div>
</template>