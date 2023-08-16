function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("当前时间").textContent = timeString;
}

setInterval(updateTime, 1000);
