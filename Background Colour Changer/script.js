let body = document.querySelector("body")
let main = document.querySelector(".main")
let elems = main.querySelectorAll("div")
 elems.forEach((elem)=>{
     elem.addEventListener(
         "click",()=>{
             body.style.backgroundColor = elem.className 
             
         }
     )
 }) 
