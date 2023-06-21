<style>
button
{
    height: 20px;
}
.bt-wrapper
{
    display: inline-block;
}
</style>
<script>
export default {
  data() {
    return {
      on_off: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      clicks: 0,
    }
  },
  methods:
  {
    // 鼠标事件
    // MouseRight:2,
    // MouseLeft:0,
    set_style(p_index_at,p_tg)
    {
      if(p_index_at == 4 || p_index_at == 5 || p_index_at == 6 || p_index_at == 7)
        {
          p_tg.style = "background-color:green"
        }
        else if(p_index_at == 12 || p_index_at == 13 || p_index_at == 14 || p_index_at == 15)
        {
          p_tg.style = "background-color:green"
        }
        else
        {
          p_tg.style = "background-color:red"
        }
    },
    get_index(p_children,p_tg)
    {
      return Array.prototype.indexOf.call(p_children,p_tg)
    },
    on_off_set(event){
      if(this.clicks==0)
      {
        this.clicks=1

        var tg = event.target
        var parent = tg.parentNode
        // var index_at = Array.prototype.indexOf.call(parent.children,tg)
        var index_at = this.get_index(parent.children,tg)
        this.set_style(index_at,tg)
        this.on_off[index_at] = 1
        // 同步导出变量
        // console.log(this.on_off);
      }
      else
      {
        this.clicks=0
        var tg = event.target
        var parent = tg.parentNode
        
        event.target.style = "background-color:none"
        // var index_at = Array.prototype.indexOf.call(parent.children,tg)
        var index_at = this.get_index(parent.children,tg)
        this.on_off[index_at] = 0
        // console.log(this.on_off)
      }
        
    },
  },
}
</script>
<template>
    <div class="track">
        <span></span>
        <span>音量</span>
        <input type="number" value="100" min="0" max="1" onchange="change_vol(this)"/>
        <div class="bt-wrapper">
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>

            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>

            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>

            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>
            <button @click="on_off_set"></button>

        </div>
    </div>
</template>