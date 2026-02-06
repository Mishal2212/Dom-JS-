var istatus=document.querySelector("h5");
var btn=document.querySelector("button");
var check=0

btn.addEventListener("click",function(){
   if(check===0){
      istatus.innerHTML="Friends";
      btn.innerHTML="Remove Friend";
      istatus.style.color="green";
      btn.style.backgroundColor="white";
      check=1;
   }else{
      istatus.innerHTML="Stranger";
      btn.innerHTML="Add Friend";
      istatus.style.color="red";
      btn.style.backgroundColor="rgb(2, 201, 2)";
      check=0;

   }
})