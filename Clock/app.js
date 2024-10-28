let main = document.querySelector(".main")
setInterval(
    ()=>{
        let date = new Date()
       let mdate= date.toLocaleTimeString()
      main.innerHTML = mdate
    },1000
)
