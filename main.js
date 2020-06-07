const currentTimezone = new Date();


//---------------------
//   UTC TIMEZONE
//---------------------

function newYorkTime() {
    //store current date/time in a variable
    const time = new Date();

    //get current time
    const hour = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    
    //add time to document
    document.querySelector('.clock').innerHTML = hour + ':' + mins + ':' + sec;
}

setInterval(newYorkTime, 1000);





//---------------------
//   UTC TIMEZONE
//---------------------

const utc_timezone = timeNow.getTimezoneOffset();

// console.log('UTC offset: ' + utc_timezone);

timeNow.setMinutes(timeNow.getMinutes() + utc_timezone);

// console.log('UTC: ' + timeNow);







//---------------------
//   LONDON TIME
//---------------------


function currentTime() {
    //store current date/time in a variable
    const time = new Date();

    //get current time
    const hour = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    
    //add time to document
    document.querySelector('.london_clock').innerHTML = hour + ':' + mins + ':' + sec;
}

setInterval(currentTime, 1000);

