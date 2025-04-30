const signin=document.querySelector(".signIn");
const registerit=document.querySelector(".register");
const text=document.querySelector(".text");



const signIt=()=>{
    signin.addEventListener("click",()=>{
        const username=document.querySelector(".username").value.trim();
    const password=document.querySelector(".password").value.trim();
        if(username===""||password===""){
            text.style.color="red";
            text.innerHTML="<b>please fill up both crediantials.</b>";
            setTimeout(()=>{
                text.innerHTML="";
            },4000)
            
        }
        else{
            text.style.color="green";
            text.innerHTML="<b>logging in...</b>";
            setTimeout(() => {
                window.location.href="web.html";
            }, 250);
            
        }
    })
}

const registerIt=()=>{
    registerit.addEventListener("click",()=>{
        text.innerHTML="<b>redirecting...</b>";
        text.style.color="white";
        setTimeout(() => {
            window.location.href="register.html";
            text.innerHTML=""
        },1000);
        
    })
}

signIt();
registerIt();