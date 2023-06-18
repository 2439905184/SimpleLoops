var ClapBufferNode = new AudioBufferSourceNode(ctx)
var KickBufferNode = new AudioBufferSourceNode(ctx)
var SnareBufferNode = new AudioBufferSourceNode(ctx)
var HitHatBufferNode = new AudioBufferSourceNode(ctx)

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
            HitHatBufferNode.buffer = hihat_buffer
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
