<style>
    .synth
    {
      border: solid 2px black;
    }
    .synth >h2
    {
      display: inline;
    }
    .synth >#led
    {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: red;
    }
    .octave-start
    {
      background-color: grey;

    }
    .black
    {
      background-color: black;
      color: white;
    }
    .white
    {
      background-color: #a5cfd5;
    }
    .piano-window >div
    {
      display: inline-block;
      width: 30px;
      height: 40px;
    }
    .piano-window >div:hover
    {
      cursor: pointer;
    }
    #audio-title
    {
      border: solid 1px black;
      width: 100px
    }
    h1,h2,h3
    {
      margin: 0;
    }
    </style>
    <template>
    <div class="synth">
      <h2>PcmSynth</h2>
      <div>
        <h3>音色选择</h3>
        <div id="audio-title">{{ audio_title }}</div>
        <button id="sound-add" @click="sound_choose">+</button>
        <button id="sound-min">-</button>
        <button id="play-preview" @click="play">播放采样</button>
      </div>
      <div>
        <div class="piano-window">
          <div class="octave-start">c3</div>
          <div class="black">c3#</div>
          <div class="white">d3</div>
          <div class="black">d3#</div>
          <div class="white">e3</div>
          <div class="white">f3</div>
          <div class="black">f3#</div>
          <div class="white">g3</div>
          <div class="black">g3#</div>
          <div class="white">a3</div>
          <div class="black">a3#</div>
          <div class="white">b3</div>

          <div class="octave-start">c4</div>
          <div class="black">c4#</div>
          <div class="white">d4</div>
          <div class="black">d4#</div>
          <div class="white">e4</div>
          <div class="white">f4</div>
          <div class="black">f4#</div>
          <div class="white">g4</div>
          <div class="black">g4#</div>
          <div class="white">a4</div>
          <div class="black">a4#</div>
          <div class="white">b4</div>

          <div class="octave-start">c5</div>
          <div class="black">c5#</div>
          <div class="white">d5</div>
          <div class="black">d5#</div>
          <div class="white">e5</div>
          <div class="white">f5</div>
          <div class="black">f5#</div>
          <div class="white">g5</div>
          <div class="black">g5#</div>
          <div class="white">a5</div>
          <div class="black">a5#</div>
          <div class="white">b5</div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        ctx: new AudioContext(),
        sampler: ctx.createBufferSource(),
        sounds: ["PianoC3.wav","Basic 808 Clap.wav","Basic 808 HiHat.wav","Basic 808 Kick.wav", "Basic 808 Snare.wav"],
        sound_index: 0,
        audio_title: "pianoC3.wav",
    }
  },methods:
  {
    request_sound(url)
    {
        var rq = new XMLHttpRequest()
        rq.responseType="arraybuffer"
        rq.open("GET",url)
        rq.onload = function(event)
        {
            this.ctx.decodeAudioData(rq.response,function(data)
            {
              this.sampler_buffer = data
              console.log(data);
            })
          // console.log(rq.response)
        }
        rq.send()
    },
    sound_choose(event)
    {
        var tg = event.target
        if(tg.id == "sound-add")
        {
          if(this.sound_index<this.sounds.length-1)
          {
            this.sound_index +=1
            var t = this.sounds[this.sound_index]
            this.audio_title = t
            // console.log(sounds);
            request_sound("/SimpleLoops/src/assets/" + t)
          }
        }
    },
    play()
    {
        this.sampler = this.ctx.createBufferSource()
        this.sampler.connect(this.ctx.destination)
        this.sampler.buffer = this.sampler_buffer
        this.sampler.start()
        // var status = {
        // "title":"replayed",
        // "playbackValue":sampler_rate,
        // "buffer":sampler_buffer
        // }
        console.log(this.sampler);
    }
  }
}
</script>