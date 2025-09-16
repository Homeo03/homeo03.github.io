function showTime(){
    const time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
    document.getElementById("time").textContent = time;
    setTimeout(showTime, 100);
}

showTime();