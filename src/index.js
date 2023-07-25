let subscribe = document.getElementsByClassName("Subscribe")[0];
let validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let succesEmail = document.getElementsByClassName("successEmail");
let dismiss = document.getElementsByClassName("dismiss")[0];
let email = document.getElementsByClassName("email_input")[0];
$(".modal2").css("display","none");

let validateEmail = () =>{
    
    if(validate.test(email.value)){
        $(".modal2").css("display","flex");
        $(".modal").css("display","none");
        succesEmail[0].innerHTML = email.value;
    }
    else{
        $(".verify").css("display","inline");
    }
}
let dismissMessage = () =>{
    $(".modal2").css("display","none");
    $(".modal").css("display","flex");
    email.value="";
    $(".verify").css("display","none");
}

subscribe.addEventListener("click",validateEmail);
console.log(dismiss);
dismiss.addEventListener("click",dismissMessage);
