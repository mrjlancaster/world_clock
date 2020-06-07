//clock
function currentTime() {
    //store current date/time in a variable
    const time = new Date();

    //get current time
    const hour = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    
    //add time to document
    document.querySelector('.clock').innerHTML = hour + ':' + mins + ':' + sec;

}

setInterval(currentTime, 1000);