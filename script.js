var arr=[
    {
        team:"CSK",
        primary:"Yellow",
        secondary:"blue"
    },
    {
        team:"RCB",
        primary:"red",
        secondary:"Black"
    },
    {
        team:"DC",
        primary:"blue",
        secondary:"black"
    },
    {
        team:"MI",
        primary:"blue",
        secondary:"gold"
    },
    {
        team:"KKR",
        primary:"purple",
        secondary:"gold"
    },
    {
        team:"SRH",
        primary:"orange",
        secondary:"black"
    },
    {
        team:"PBKS",
        primary:"red",
        secondary:"white"
    }
]


var btn=document.querySelector("button");
var box=document.querySelector("#box");
var main=document.querySelector("main");
var h1=document.querySelector("h1");

btn.addEventListener("click",function(){
    var num=Math.floor(Math.random()*arr.length);
    h1.innerHTML=arr[num].team
    box.style.backgroundColor=arr[num].primary;
    main.style.backgroundColor=arr[num].secondary;
    
})