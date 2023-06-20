<style>
.track-wrapper
{
    border: solid 1px black;
}
</style>
<script>
    import Bpm from "./components/bpm.vue"
    import Timer from "./components/timer.vue"
    import SampleTrack from "./components/SampleTrack.vue"
    import Knob from "./components/Knob.vue"
    import VerticalSlider from "./components/verticalSlider.vue"
    export default
    {
    components: 
        {
            Bpm,Timer,SampleTrack,Knob,VerticalSlider
        },
    methods:
    {
        start()
        {
            var bpm = this.$refs.b1.value
            var tick = bpm/(60*4)
            // 明天重构到组件里面
            var kickSample = window.ctx.createBufferSource()
            kickSample.buffer = window.kick_buffer
            kickSample.connect(ctx.destination)
            kickSample.start()
            console.log(window.tick_index)
            if(window.tick_index ==15)
            {
                window.tick_index = -1
            }
            window.tick_index+=1
            var t1 = setTimeout(() => {
                this.start()
            }, tick*1000);
            // console.log(this.$refs.b1.value)
        },
        stop()
        {
            // clearTimeout(t1)
        }
    }
    }
</script>
<template>
    <div class="hbox">
                <!-- <button>音频浏览器开关</button> -->
                <button @click="start">开始</button>
                <button @click="stop">停止</button>
                <Bpm ref="b1" value="60"/>
                <Timer/>
            </div>
<div class="track-wrapper">
    <SampleTrack name="kick"/>
    <SampleTrack name="slap"/>
    <SampleTrack name="hihat"/>
    <SampleTrack name="snare"/>
</div>
</template>
