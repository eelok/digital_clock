


function clock(){
    const fullDate = new Date();
    const hour = fullDate.getHours();
    const minute = fullDate.getMinutes();
    const second = fullDate.getSeconds();

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

}
setInterval(clock, 10)
