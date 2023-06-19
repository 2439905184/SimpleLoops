<style>
button
{
    height: 20px;
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
      name: ""
    }
  },
  methods:
  {
    // 鼠标事件
    // MouseRight:2,
    // MouseLeft:0,
    set(event){
        event.target.style = "background-color:red"
    },
    // on_pad_down(event)
    //         {
    //             if(event.button == this.MouseLeft)
    //             {
                    
    //                 var children = event.target.parentNode.children
    //                 for(var index=0; index < children.length; index++)
    //                 {
    //                     children.item(index).addEventListener("mousedown",(event)=>
    //                     {
    //                         var cur_child = event.target
    //                         var index = Array.prototype.indexOf.call(children,cur_child)
    //                         if(index == 4)
    //                         {
    //                             event.target.style = "background-color:green"
    //                         }
    //                         else if(index == 12)
    //                         {
    //                             event.target.style = "background-color:green"
    //                         }
    //                         else
    //                         {
    //                             event.target.style = "background-color:red"
    //                         }
    //                         // console.log(index);
    //                         drum_on_off2[index] = 1
    //                         test_view.innerText = drum_on_off2
    //                     })
    //                 }
    //             }
    //         }
  }
}
</script>
<template>
    <div class="instrack">
        <span>{{ name }}</span>
        <span>音量</span>
        <input type="number" value="100" min="0" max="1" onchange="change_vol(this)"/>
        <div id="bt-wrapper" @click="on_pad_down">
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            <button @click="set"></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div>
</template>