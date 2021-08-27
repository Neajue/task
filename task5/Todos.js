var text = document.querySelector(".text");
var btn = document.querySelector(".btn");

//文本框
//获得焦点
text.onfocus = function()
{
    this.value = "";
    this.style = "color:#333";
    this.style = "text-align: left";
    btn.style = "backgroundColor:#f48c7c";
}
//失去焦点
text.onblur = function()
{
    this.value = "别玩了懒狗"; 
    this.style = "color:#999";
    btn.style = "backgroundColor:white";
}

//add按钮 btn
//按下 add按钮,颜色变深
btn.mousedown = function()
{
    this.style = "backgroundColor:#f05d46";
}
//松开 add按钮，恢复颜色
btn.mouseup = function()
{
    this.style = "backgroundColor:#f48c7c";
}
//点击 add按钮，添加事项
btn.onclick = function()
{
    //创建异步对象
    var xhr = new XMLHTTPRequest();
    //设置请求行 .open
    xhr.open("POST","http://47.113.187.45:8989/todo/index/create");
    //设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //注册回调函数
    xhr.onreadystatechange = function()
    {
        if(xhr.readystate == 4)
        {
            if(xhr.status >= 200 && xhr.status < 300)
            {
                //添加li标签
                var myLi = document.createElement("li");
                document.querySelector("ul").appendChild(myLi);
                //添加div标签
                var myDiv = document.createElement("div");
                myDiv.setAttribute("class","items");
                myDiv.innerHTML = text.value;
                myLi.appendChild(myDiv);
                //添加button标签
                var myBtn = document.createElement("button");
                myBtn.setAttribute("class","state");
                myLi.appendChild(myBtn);
            }
        }
    }
    xhr.send(null);
    text.value = "别玩了懒虫";
}

//橙色小圆圈 state
//按下 橙色小圆圈,颜色变深
state.mousedown = function()
{
    this.style = "backgroundColor:#f48c7c";
}
//松开 橙色小圆圈，恢复颜色
state.mouseup = function()
{
    this.style = "backgroundColor:#425069";
}
//点击 橙色小圆圈，删除该条事项
state.onclick = function()
{
    //获取该标签的父节点————对应li标签
    var p = this.parentNode; 
    //创建异步对象
    var xhr = new XMLHTTPRequest();
    //设置请求行
    xhr.open("DELETE","http://47.113.187.45:8989/todo/index/delete");
    //设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //注册回调函数
    xhr.onreadystatechange = function()
    {
        if(xhr.readystate == 4)
        {
            if(xhr.status >= 200 && xhr.status < 300)
            {
                //删除该条事项
                p.remove();
            }
        }
    }
    xhr.send(null);
}