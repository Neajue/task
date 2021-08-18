var user = document.querySelector(".user");
var code = document.querySelector(".code");
var cfm = document.querySelector(".confirm");
var number = document.querySelector(".number");
var massage = document.querySelectorAll(".massage");
var btm = document.querySelector("button");

//用户名文本框
//获得焦点  文本框清空，文字变黑
user.onfocus = function()
{
    if(this.value == "请输入用户名")
    {
        this.value = "";
    }
    this.style = "color:#333";
}
//失去焦点  文本框恢复默认值，文字变灰
user.onblur = function()
{
    if(this.value == "")
    {
        this.value = "请输入用户名"; 
    }
    this.style = "color:#999";
}
            
//密码文本框
code.onfocus = function()
{
    if(this.value == "请输入密码")
    {
        this.value = "";
    }
    this.style = "color:#333";
}
code.onblur = function()
{
    if(this.value == "")
    {
        this.value = "请输入密码";   
    }
    this.style = "color:#999";
}
            
 //确认密码文本框
cfm.onfocus = function()
{
    if(this.value == "请再次输入密码")
    {
        this.value = "";
    }
    this.style = "color:#333";
}
cfm.onblur = function()
{
    if(this.value == "")
    {
        this.value = "请再次输入密码"; 
    }
    this.style = "color:#999";
}

//手机号码文本框
number.onfocus = function()
{
    if(this.value == "请输入手机号码")
    {
        this.value = "";
    }
    this.style = "color:#333";
}
number.onblur = function()
{
    if(this.value == "")
    {
        this.value = "请输入手机号码"; 
    }
    this.style = "color:#999";
}

//判断用户名是否输入正确
//长度应在4~16位(字母、数字、下划线、减号均可)
//      {4，16}          /w         -
var jug1 = function()
{   
    var reg = /^(\w|-){4,16}$/;
    if(reg.test(user.value) == true)
    {
        massage[0].style = "color:green";
        massage[0].innerHTML = "用户名合法";
    }
    else
    {
        massage[0].style = "color:red";
        massage[0].innerHTML = "用户名不合法";
    }    
}

//判断密码是否输入正确
//长度8位，第1位为1，2到3位为0~5的任意数，4到6位为6~9的任意数，8到9位为a~d之间的字母（大小写均可）
//           1       [0-5]{2}           [6-9]{3}            [a-d]{2}             i
var jug2 = function()
{
    var reg = /^1[0-5]{2}[6-9]{3}[a-d]{2}$/i;
    if(reg.test(code.value) == true)
    {
        massage[1].style = "color:green";
        massage[1].innerHTML = "密码合法";                    
    }
    else
    {
        massage[1].style = "color:red";
        massage[1].innerHTML = "密码不合法";                    
    }
}

//判断密码是否输入正确且一致
var jug3 = function()
{
    if(cfm.value == code.value)
    {
        var reg = /^1[0-5]{2}[6-9]{3}[a-d]{2}$/;
        if(reg.test(code.value) == true)
        {
            massage[2].style = "color:green";
            massage[2].innerHTML = "密码一致";                    
        }
        else
        {
            massage[2].style = "color:red";
            massage[2].innerHTML = "密码输入不合法或不一致";                    
        }
    }
    else
    {
        massage[2].style = "color:red";
        massage[2].innerHTML = "密码输入不合法或不一致";
    }
}

//判断手机号码是否输入正确
//长度为11位，第一位为1，第二位为3~9任意数字，第三位以后任意数字9位
//            1         [3-9]               [0-9]{9} 
var jug4 = function()
{
    var reg = /^1[3-9][0-9]{9}$/;
    if(reg.test(number.value) == true)
    {
        massage[3].style = "color:green";
        massage[3].innerHTML = "手机号码合法";
    }
    else
    {
        massage[3].style = "color:red";
        massage[3].innerHTML = "手机号码不合法";
    }
}

//点击提交后，校验是否合法
btm.onclick = function()
{
    jug1();
    jug2();
    jug3();
    jug4();
}