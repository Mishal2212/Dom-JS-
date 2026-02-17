var allelems=document.querySelectorAll(".elem")
allelems.forEach(function(elem){
  elem.childNodes[3].addEventListener('click',function(){
    if(elem.childNodes[3].innerHTML=="Add friend"){
      elem.childNodes[3].innerHTML="Remove friend"
    }
    else{
      elem.childNodes[3].innerHTML="Add friend"
    
    }
  })
})