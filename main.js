// LOGIC
// store current timezone in variable
// get current timezone and convert it into UTC time and store in new variable
// Then get the UTC time variable and convert it into any timezone

// current timezone stored
const currentTimezone = new Date();


//----------------------------------------------
//   UTC TIMEZONE (reset timezone back to 0)
//----------------------------------------------

const utc = currentTimezone.getTimezoneOffset(); //utc timezone stored

// reset current time back to UTC time (0)
currentTimezone.setMinutes(currentTimezone.getMinutes() + utc);

console.log('UTC: ' + utc); //result: 300 in minutes. Divide 300 / 60 (minutes)



//---------------------
// NEW YORK TIMEZONE
//---------------------

function newYorkTime() {
    //store current date/time in a variable
    const currentTime = new Date();

    //get utc time and store it
    const utc = currentTime.getTimezoneOffset();

    //reset current time to utc
    currentTime.setMinutes(currentTime.getMinutes() + utc);

    //store new york offset to variable for use
    const newYorkTimezone = -4 * 60;

    //set utc to new york timezone
    currentTime.setMinutes(currentTime.getMinutes() + newYorkTimezone);

    //get current time
    const hour = currentTime.getHours();
    const mins = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    
    //add time to document
    document.querySelector('.newyork_clock').innerHTML = hour + ':' + mins + ':' + sec;
}


//---------------------
//   LONDON TIME
//---------------------

function londonTime() {
    //store current date/time in a variable
    const currentTime = new Date();
    const utc = currentTime.getTimezoneOffset();
    const londonTimezone = +1 * 60;

    currentTime.setMinutes(currentTime.getMinutes() + utc);
    currentTime.setMinutes(currentTime.getMinutes() + londonTimezone);

    //get current time
    const hour = currentTime.getHours();
    const mins = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    
    //add time to document
    document.querySelector('.london_clock').innerHTML = hour + ':' + mins + ':' + sec;
}


//---------------------
//  SAO PAULO TIME
//---------------------

function saoPauloTime() {
    //store current date/time in a variable
    const currentTime = new Date();
    const utc = currentTime.getTimezoneOffset();
    const saoPauloTimezone = -3 * 60;

    currentTime.setMinutes(currentTime.getMinutes() + utc);
    currentTime.setMinutes(currentTime.getUTCMinutes() + saoPauloTimezone);

    //get current time
    const hour = currentTime.getHours();
    const mins = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    
    //add time to document
    document.querySelector('.saopaulo_clock').innerHTML = hour + ':' + mins + ':' + sec;
}


//---------------------
//   TOKYO TIME
//---------------------

// new york is +9 hours from UTC

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


setInterval(newYorkTime, 1000);
setInterval(londonTime, 1000);
setInterval(saoPauloTime, 1000);
setInterval(tokyoTime, 1000);
