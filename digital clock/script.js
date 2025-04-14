function updateclock(){
    const now = new Date();

    let hours = now.getHours()
    let minutes = String(now.getMinutes()).padStart(2, '0')
    let seconds = String(now.getSeconds()).padStart(2, '0')
    let ampm = now.getHours() >= 12 ? ' PM' : 'AM'
  
    hours = hours % 12
    hours = hours ? hours : 12
    hours = String(hours).padStart(2, "0")
    console.log(hours);
    
document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}<span class = "periods">${ampm}</span>`

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateString = now.toLocaleDateString(undefined, options);
document.getElementById('date').textContent = dateString;
}
updateclock();

setInterval(updateclock, 1000)