// 手写组件插入库
function load_component(url)
{
    var rq = new XMLHttpRequest()
    rq.open("GET",url)
    rq.onload=function(event)
    {
        console.log(rq.response)
        document.write(rq.response)
    }
    rq.send()
}