var ClapBufferNode = new AudioBufferSourceNode(ctx)
var KickBufferNode = new AudioBufferSourceNode(ctx)
var SnareBufferNode = new AudioBufferSourceNode(ctx)
var HitHatBufferNode = new AudioBufferSourceNode(ctx)
// 按这个顺序
var kick_buffer
var clap_buffer
var hiHat_buffer
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
        // ClapBufferNode.buffer=data
        console.log(data);
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
        // ClapBufferNode.buffer=data
        console.log(data);
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
        hiHat_buffer = data
        // ClapBufferNode.buffer=data
        console.log(data);
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
        // ClapBufferNode.buffer=data
        console.log(data);
    })
}
snare_rq.send()

const browser = document.getElementsByClassName("browser").item(0)
const file_wrapper = browser.children.item(0)
for(var i=0;i<file_wrapper.children.length;i++)
{
    var e = file_wrapper.children.item(i)
    // console.log(e)
    e.addEventListener("mousedown",(event)=>
    {
        // console.log(event.target.innerText)
        var c = event.target.innerText
        if(c == "Basic 808 Kick")
        {
            KickBufferNode = ctx.createBufferSource()
            KickBufferNode.buffer = kick_buffer
            KickBufferNode.connect(ctx.destination)
            KickBufferNode.start()
        }
        if(c == "Basic 808 Clap")
        {
            ClapBufferNode = ctx.createBufferSource()
            ClapBufferNode.buffer = clap_buffer
            ClapBufferNode.connect(ctx.destination)
            ClapBufferNode.start()
        }
        if(c == "Basic 808 HiHat")
        {
            HitHatBufferNode = ctx.createBufferSource()
            HitHatBufferNode.buffer = hiHat_buffer
            HitHatBufferNode.connect(ctx.destination)
            HitHatBufferNode.start()
        }
        if(c == "Basic 808 Snare")
        {
            SnareBufferNode = ctx.createBufferSource()
            SnareBufferNode.buffer = snare_buffer
            SnareBufferNode.connect(ctx.destination)
            SnareBufferNode.start()
        }
        
    })
}
