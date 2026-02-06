var img=document.querySelector('img');
var love=document.getElementById('love');

img.addEventListener('dblclick',()=>{
    
    love.style.opacity="1";
    love.style.transform="translate(-50%,-50%) scale(1) rotate(0deg)";

    setTimeout(()=>{
       love.style.transform="translate(-50%,-400%) scale(0) rotate(60deg)";
       love.style.opacity="0";
    },800)

    setTimeout(()=>{
       love.style.transform="translate(-50%,-50%) scale(0) rotate(-60deg)";
       love.style.opacity="0";
    },1000)
})