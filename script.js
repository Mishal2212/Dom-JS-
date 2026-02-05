var quotes=[ "Keep going.",
  "Code. Learn. Repeat.",
  "Small steps daily.",
  "Debug, don't quit.",
  "Dream big.",
  "Stay consistent.",
  "Errors teach best.",
  "Think. Code.",
  "Focus matters.",
  "Progress > perfection."
];

var btn=document.querySelector("button");
var main=document.querySelector("main");

btn.addEventListener("click",function(){


    var a=Math.floor(Math.random()*quotes.length);
    let h1=document.createElement("h1");
    main.appendChild(h1);

    h1.style.fontSize="30px";
    h1.style.position="absolute";
    h1.style.top=Math.floor(Math.random()*90)+"%";
    h1.style.left=Math.floor(Math.random()*90)+"%";
    h1.style.transform="translate(-50%,-50%)";
    h1.style.color="hsl("+Math.floor(Math.random()*360)+",100%,50%)";
    h1.style.scale=Math.floor(Math.random()*4);
    h1.style.rotate=Math.floor(Math.random()*360)+"deg";
    h1.innerText=quotes[a];
})