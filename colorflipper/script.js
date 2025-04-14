let btn = document.getElementById("btn")

btn.addEventListener("click", (next)=>{
    console.log("Button clicked")
    let random1 = Math.ceil(Math.random() * 255 )
    let random2 = Math.ceil(Math.random() * 255 )
    let random3 = Math.ceil(Math.random() * 255 )
    let body = document.body
    body.style.backgroundColor = `rgb(${random1},${random2},${random3})`
})
