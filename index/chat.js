$(function(){
    //获得焦点  文本框清空，文字变黑
    $('.textbox').on('focus',function(){
        if($('.textbox').val().trim() == "在这里输入文字")
        {
            $('.textbox').val("");
        }
        $(this).css("color","#333");
    });
    //失去焦点  文本框恢复默认值，文字变灰
    $('.textbox').on('blur',function(){
        if($('.textbox').val().trim() == "")
        {
            $('.textbox').val("在这里输入文字");
        }
        $(this).css("color","#999");
    });
    //给发送按钮设置点击事件
    $('.btn').on('click',function(){
        //删除队列中所有的语音，如果正在播放,则直接停止
        speechSynthesis.cancel();
        //获取文本框内容
        var userInfo = $('.textbox').val().trim();
        //非空判断
        if(userInfo == "在这里输入文字")
        {
            //语言播报回复内容
            var u = new SpeechSynthesisUtterance;
            u.text = '死鬼，怎么不说话'; //语言合成的文字内容
            u.lang = 'zh'; //使用的语言——中文
            u.rate = 1.5; //语速
            u.pitch = 1.5; // 说话的音调高低
            speechSynthesis.speak(u);
            alert('死鬼，怎么不说话 ？！'); //弹出警告窗
            return;
        }
        //通过模板引擎，将用户说的话渲染到聊天框中
        let userRes = template('user_mould',{userInfo});
        $('.word').append(userRes);  //向每个匹配元素内部的末尾位置追加指定的内容
        //发送Ajax请求，获取机器人的回复
        $.ajax({
            type: 'post',
            url:'https://api.ownthink.com/bot',
            data:{
                spoken: userInfo 
            },
            success:(response)=>{
                //通过模板引擎，将机器人的回复渲染到聊天框中
                let robotRes = template('robot_mould',response);
                $('.word').append(robotRes); 
                //语言播报回复内容
                var u = new SpeechSynthesisUtterance;
                u.text = response.data.info.text; //语言合成的文字内容
                u.lang = 'zh'; //使用的语言——中文
                u.rate = 1.5; //语速
                u.pitch = 1.8; // 说话的音调高低
                speechSynthesis.speak(u);
            }
        });
        //文本框内容恢复默认值
        $('.textbox').val("在这里输入文字");
    })
    //给文本框设设置回车键事件
    $('.textbox').on('keyup',function(event){
        if(event.keyCode == 13)
        {
            //如果是回车键，则调用按钮点击事件
            $('.btn').trigger('click');
            $('.textbox').val("");
        }
    });
})
