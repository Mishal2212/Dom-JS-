var arr = [
    {
        team: "CSK",
        primary: "#F9CD05",   // rich yellow
        secondary: "#1C1C1C", // charcoal black
        captain: "Ruturaj Gaikwad",
        trophies: 5
    },
    {
        team: "RCB",
        primary: "#D71920",   // bold red
        secondary: "#111111", // deep black
        captain: "Rajat Patidar",
        trophies: 1
    },
    {
        team: "DC",
        primary: "#17479E",   // deep royal blue
        secondary: "#E11C2A", // sharp red
        captain: "Rishabh Pant",
        trophies: 0
    },
    {
        team: "MI",
        primary: "#004BA0",   // iconic MI blue
        secondary: "#D4AF37", // metallic gold
        captain: "Hardik Pandya",
        trophies: 5
    },
    {
        team: "KKR",
        primary: "#3A225D",   // dark purple
        secondary: "#F3C300", // bright gold
        captain: "Shreyas Iyer",
        trophies: 2
    },
    {
        team: "SRH",
        primary: "#FB643E",   // vibrant orange
        secondary: "#1A1A1A", // soft black
        captain: "Pat Cummins",
        trophies: 1
    },
    {
        team: "PBKS",
        primary: "#C41E3A",   // strong red
        secondary: "#BFC0C0", // clean silver
        captain: "Shikhar Dhawan",
        trophies: 0
    }
];




var btn=document.querySelector("button");
var box=document.querySelector("#box");
var main=document.querySelector("main");
var h1=document.querySelector("h1");

btn.addEventListener("click",function(){
    var num=Math.floor(Math.random()*arr.length);
    h1.innerHTML=arr[num].team+"<br>Captain: "+arr[num].captain+"<br>Trophies won: "+arr[num].trophies;
    box.style.backgroundColor=arr[num].primary;
    main.style.backgroundColor=arr[num].secondary;
    
})

