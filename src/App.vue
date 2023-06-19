<script>
    import Bpm from "./components/bpm.vue"
    import Timer from "./components/timer.vue"
    import InstrumentTrack from "./components/instrumentTrack.vue"
    import Knob from "./components/Knob.vue"
    import VerticalSlider from "./components/verticalSlider.vue"
    export default
    {
    components: 
        {
            Bpm,Timer,InstrumentTrack,Knob,VerticalSlider
        }
    }
  function start_play()
        {
            play()
            start_timer()
        }
        function start_timer()
        {
            startTimes+=1
            // 60倍数
            if(startTimes%60 ==0)
            {
                startTimes = 0
                calcuated_min+=1
            }
            main_timer = setTimeout(() => {
                timer.innerText = calcuated_min + ":" + startTimes
                start_timer()
            }, 1000);
        }
  function play()
        {
            // console.log(index)
            // console.log("times: " + index  +" on/off: " + drum_on_off[index])
            // console.log("times: " + index  +" on/off: " + drum_on_off2[index])
            // console.log("times: " + index  +" on/off: " + drum_on_off3[index])
            // console.log("times: " + index  +" on/off: " + drum_on_off4[index])
            if(drum_on_off[index] == 1)
            {
                console.log(kick_buffer);
                kickBufferNode.buffer = kick_buffer
                kickBufferNode.connect(ctx.destination)
                kickBufferNode.start()
            }
            if(drum_on_off2[index] == 1)
            {
                
                clapBufferNoed.buffer = clap_buffer
                clapBufferNoed.connect(ctx.destination)
                clapBufferNoed.start()
            }
            if(drum_on_off3[index] == 1)
            {
                
                hihatBufferNode.buffer = hihat_buffer
                hihatBufferNode.connect(ctx.destination)
                hihatBufferNode.start()
            }
            if(drum_on_off4[index] == 1)
            {
                
                snareBufferNode.buffer = snare_buffer
                snareBufferNode.connect(ctx.destination)
                snareBufferNode.start()
            }
            if(index > 14)
            {
                index = -1
            }
            index += 1
            main_looper = setTimeout(play, interval);
            
        }

</script>
<template>
    <div class="hbox">
                <!-- <button>音频浏览器开关</button> -->
                <button onclick="start_play()">开始</button>
                <button onclick="stop()">停止</button>
                <Bpm/>
                <Timer/>
                <!-- <button onclick="trig()">触发测试</button>
                <button onclick="stop_trig()">停止触发测试</button> -->
                <!-- <button>调音台开关</button> -->
                
            </div>
    <InstrumentTrack name="kick"/>
    <InstrumentTrack name="slap"/>
    <InstrumentTrack name="hihat"/>
    <InstrumentTrack name="snare"/>
    <Knob/>
    <VerticalSlider/>
</template>
