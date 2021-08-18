var word = document.querySelector(".word");
var url = document.querySelector(".url");
var zh = document.querySelector(".zh");
var massage = document.querySelectorAll(".massage");
var btn = document.querySelector("button");

//十六进制颜色代码
//获得焦点  文本框清空，文字变黑
word.onfocus = function()
{
    if(this.value == "请输入颜色的代码")
    {
        this.value = "";
    }
    this.style = "color:#333";
}
//失去焦点  文本框恢复默认值，文字变灰
word.onblur = function()
{
    if(this.value == "")
    {
        this.value = "请输入颜色的代码"; 
        this.style = "color:#999";
    }
    else
    {
        jug1();
    }
}
//判断颜色代码是否正确
//十六进制颜色代码：以 “ # ” 开头，由0~9、A~F（或a~f，不区分大小写）组成（3位或6位）
//                     #          [0-9a-f]             i             {3}|{6}
var jug1 = function()
{
    var reg = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
    if(reg.test(word.value) == true)
    {
        massage[0].style = "color:green";
        massage[0].innerHTML = "代码合法";
        word.style.background = word.value;
    }
    else
    {
        massage[0].style = "color:red";
        massage[0].innerHTML = "代码不合法";
    }
}

//URL
url.onfocus = function()
{
    if(this.value == "请输入网址")
    {
        this.value = "";
    }
    this.style = "color:#333";
}
url.onblur = function()
{
    if(this.value == "")
    {
        this.value = "请输入网址"; 
        this.style = "color:#999";
    }
    else
    {
        jug2();
    }
}
//判断URL是否正确
var jug2 = function()
{
    var reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
    if(reg.test(url.value) == true)
    {
        massage[1].style = "color:green";
        massage[1].innerHTML = "网址合法";
    }
    else
    {
        massage[1].style = "color:red";
        massage[1].innerHTML = "网址不合法";
    }
}

//中文
zh.onfocus = function()
{
    if(this.value == "请输入字符")
    {
        this.value = "";
    }
    this.style = "color:#333";
}
zh.onblur = function()
{
    if(this.value == "")
    {
        this.value = "请输入字符"; 
        this.style = "color:#999";
    }
    else
    {
        jug3();
    }
}
//判断是否包含中文
var jug3 = function()
{
    var reg = /[\u4e00-\u9fa5]/i;
    if(reg.test(zh.value) == true)
    {
        massage[2].style = "color:green";
        massage[2].innerHTML = "包含中文";
    }
    else
    {
        massage[2].style = "color:red";
        massage[2].innerHTML = "不包含中文";
    }
}