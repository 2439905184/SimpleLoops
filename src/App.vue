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

            var snareSample = window.ctx.createBufferSource()
            snareSample.buffer = window.snare_buffer
            snareSample.connect(ctx.destination)

            var clapSample = window.ctx.createBufferSource()
            clapSample.buffer = window.clap_buffer
            clapSample.connect(ctx.destination)

            var hihatSample = window.ctx.createBufferSource()
            hihatSample.buffer = window.hihat_buffer
            hihatSample.connect(ctx.destination)
            // kickSample.start()
            
            
            var kick_on_off = this.$refs.KickSampleTrack.on_off
            var snare_on_off = this.$refs.SnareSampleTrack.on_off
            var hihat_on_off = this.$refs.HihatSampleTrack.on_off
            var clap_on_off = this.$refs.ClapSampleTrack.on_off
            console.log("index:" + window.tick_index +  " : "+ clap_on_off)
            
            if(kick_on_off[window.tick_index] == 1)
            {
                kickSample.start()
            }
            if(snare_on_off[window.tick_index] == 1)
            {
                snareSample.start()
            }
            if(hihat_on_off[window.tick_index] == 1)
            {
                hihatSample.start()
            }
            if(clap_on_off[window.tick_index] == 1)
            {
                clapSample.start()
            }

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
    <SampleTrack ref="KickSampleTrack"/>
    <SampleTrack ref="SnareSampleTrack"/>
    <SampleTrack ref="HihatSampleTrack"/>
    <SampleTrack ref="ClapSampleTrack"/>
</div>
</template>
