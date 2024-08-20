$(document).ready(function(){
    $("#name").on('keyup',function(){
        let uname = $(this).val();
        let regex_name = /^[a-z]{3,16}$/;
        if(!regex_name.test(uname)){
            $(this).css('border-bottom','1px solid red');
            $(this).next('span').html('please enter the valid data').css({
                'color':"red",
                "font-weight":"bold",
                "margin-top":"2px"
            })
        }else{

            $(this).css('border-bottom','1px solid green');
            $(this).next('span').html('valid data done').css({
                'color':"green",
                "font-weight":"bold",
                "margin-top":"2px"
            }) 
        }
    })
    $("#email").on("keyup", function () {
        let email = $(this).val();
        let emailRE = /^[\w]{2,}[@][a-z]{5,9}[.][a-z]{3}$/;
        if (!emailRE.test(email)) {
            $(this).css("border-bottom", "1px solid red");
            $(this).next("span").html("please enter the valid email eg. a1@gmail.com").css({
                "color": "red",
                "font-weight": "bold",
                "margin-top": "2px"
    
            })
        } else {
            $(this).css("border-bottom", "1px solid green");
            $(this).next("span").html("valid email").css({
                "color": "green",
                "font-weight": "bold",
                "margin-top": "2px"
    
            });
        }
    })
    $("#subject").on('keyup',function(){
        let usubject = $(this).val();
        let regex_subject = /^[a-z]{3,26}$/;
        if(!regex_subject.test(usubject)){
            $(this).css('border-bottom','1px solid red');
            $(this).next('span').html('please enter the valid data').css({
                'color':"red",
                "font-weight":"bold",
                "margin-top":"2px"
            })
        }else{

            $(this).css('border-bottom','1px solid green');
            $(this).next('span').html('valid data done').css({
                'color':"green",
                "font-weight":"bold",
                "margin-top":"2px"
            }) 
        }
    })
    $("#message").on('keyup',function(){
        let umessage = $(this).val();
        let regex_message = /^[a-z]{3,66}$/;
        if(!regex_message.test(umessage)){
            $(this).css('border-bottom','1px solid red');
            $(this).next('span').html('please enter the valid data').css({
                'color':"red",
                "font-weight":"bold",
                "margin-top":"2px"
            })
        }else{

            $(this).css('border-bottom','1px solid green');
            $(this).next('span').html('valid data done').css({
                'color':"green",
                "font-weight":"bold",
                "margin-top":"2px"
            }) 
        }
    })

})