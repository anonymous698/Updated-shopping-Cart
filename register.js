const text=document.querySelector(".text");
const registerit=document.querySelector(".register");
const back=document.querySelector(".back");

const registerIt=()=>{
    registerit.addEventListener("click",()=>{
        const username=document.querySelector(".username").value.trim();
        const email=document.querySelector(".email").value.trim();
        const password=document.querySelector(".password").value.trim();
        const confirmPassword=document.querySelector(".confirm-password").value.trim();
        if(username===""||email===""||password===""||confirmPassword===""){
            text.innerHTML="<b>please fill up all the boxes.</b>";
            text.style.color="red";
            setTimeout(()=>{
                text.innerHTML="";
            },4000)

        }
        else{
            text.innerHTML="<b>Successfully Registered...</b>"
            text.style.color="white";
            setTimeout(()=>{
                window.location.href="login.html";
            },1000)
            

        }

    })
}
const backIt=()=>{
    back.addEventListener("click",()=>{
        window.location.href="login.html";
    })
}
registerIt();
backIt();

