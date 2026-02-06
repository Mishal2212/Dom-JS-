var main=document.querySelector("main");
var crsr=document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
   crsr.style.opacity=1
   crsr.style.left=dets.x+"px";
   crsr.style.top=dets.y+"px";
})