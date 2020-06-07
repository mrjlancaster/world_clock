const currentTimezone = new Date();

// new york UTC: -4
// tokyo UTC: +9
// london UTC: +1
// sao paulo UTC: -3


//---------------------
// NEW YORK TIMEZONE
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

const utc_timezone = currentTimezone.getTimezoneOffset();

// console.log('UTC offset: ' + utc_timezone);

currentTimezone.setMinutes(currentTimezone.getMinutes() + utc_timezone);

// console.log('UTC: ' + timeNow);




//---------------------
//   LONDON TIME
//---------------------


function londonTime() {
    //store current date/time in a variable
    const time = new Date();

    //get current time
    const hour = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    
    //add time to document
    document.querySelector('.london_clock').innerHTML = hour + ':' + mins + ':' + sec;
}

setInterval(londonTime, 1000);




//---------------------
//   TOKYO TIME
//---------------------


function tokyoTime() {
    //store current date/time in a variable
    const time = new Date();

    //get current time
    const hour = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    
    //add time to document
    document.querySelector('.tokyo_clock').innerHTML = hour + ':' + mins + ':' + sec;
}

setInterval(tokyoTime, 1000);



