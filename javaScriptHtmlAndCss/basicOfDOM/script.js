let x = document.getElementById("ele1");
let y=document.getElementById("ele2");
let z=document.getElementById("ele3");

x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
})

y.addEventListener("mousemove",function(){
    y.style.color="blue";
    y.style.backgroundColor="lightblue"
})

z.addEventListener("click",function(){
      z.style.color="yellow";
    z.style.backgroundColor="red";
})


y.addEventListener("click",function(){
      z.style.color="white";
    z.style.backgroundColor="puple";
})