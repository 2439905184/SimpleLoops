var sound_loaded_status = [0,0,0,0]
var kick_buffer
var clap_buffer
var hihat_buffer
var snare_buffer

var kick_rq = new XMLHttpRequest()
kick_rq.responseType="arraybuffer"
kick_rq.open("GET","media/Basic 808 Kick.wav")
kick_rq.onload = function(event)
{
    // console.log(event)
    ctx.decodeAudioData(kick_rq.response,(data)=>
    {
        kick_buffer = data
        sound_loaded_status[0] = 1
        // console.log(kick_buffer);
        // ClapBufferNode.buffer=data
        // console.log(data);
    })
}
kick_rq.send()

var clap_rq = new XMLHttpRequest()
clap_rq.responseType="arraybuffer"
clap_rq.open("GET","media/Basic 808 Clap.wav")
clap_rq.onload = function(event)
{
    // console.log(event)
    ctx.decodeAudioData(clap_rq.response,(data)=>
    {
        clap_buffer = data
        sound_loaded_status[1] = 1
        // ClapBufferNode.buffer=data
        // console.log(data);
    })
}
clap_rq.send()

var hihat_rq = new XMLHttpRequest()
hihat_rq.responseType="arraybuffer"
hihat_rq.open("GET","media/Basic 808 HiHat.wav")
hihat_rq.onload = function(event)
{
    // console.log(event)
    ctx.decodeAudioData(hihat_rq.response,(data)=>
    {
        hihat_buffer = data
        sound_loaded_status[2] = 1
        // ClapBufferNode.buffer=data
        // console.log(data);
    })
}
hihat_rq.send()

var snare_rq = new XMLHttpRequest()
snare_rq.responseType="arraybuffer"
snare_rq.open("GET","media/Basic 808 Snare.wav")
snare_rq.onload = function(event)
{
    // console.log(event)
    ctx.decodeAudioData(snare_rq.response,(data)=>
    {
        snare_buffer = data
        sound_loaded_status[3] = 1
        // ClapBufferNode.buffer=data
        // console.log(data);
    })
}
snare_rq.send()
console.log(sound_loaded_status);