
// // current timezone stored
// const currentTimezone = new Date();


// //----------------------------------------------
// //   reseting current timezone to UTC (0)
// //----------------------------------------------
// const currentTimezone = new Date();
// const utc = currentTimezone.getTimezoneOffset();

// now set current timezone to UTC
// currentTimezone.setMinutes(currentTimezone.getMinutes() + utc);


//---------------------
// NEW YORK TIMEZONE
//---------------------

function newYorkTime() {
    //store current date/time in a variable
    const currentTime = new Date();

    //get utc time and store it
    const utc = currentTime.getTimezoneOffset();

    //set current time to utc time
    currentTime.setMinutes(currentTime.getMinutes() + utc);

    //store new york offset to variable for use
    const newYorkTimezone = -4 * 60;

    //set current time (UTC now) to New York timezone
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

function tokyoTime() {
    //store current date/time in a variable
    const currentTime = new Date();
    const utc = currentTime.getTimezoneOffset();
    const tokyoTimezone = +9 * 60;

    currentTime.setMinutes(currentTime.getMinutes() + utc);
    currentTime.setMinutes(currentTime.getMinutes() + tokyoTimezone);

    //get current time
    const hour = currentTime.getHours();
    const mins = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    
    //add time to document
    document.querySelector('.tokyo_clock').innerHTML = hour + ':' + mins + ':' + sec;
}


setInterval(newYorkTime, 1000);
setInterval(londonTime, 1000);
setInterval(saoPauloTime, 1000);
setInterval(tokyoTime, 1000);


//--------DISPLAY TIME----------//   

const changeTime = function() {

    const newYorkNow = document.querySelector('.newyork-time');
    const londonNow = document.querySelector('.london-time');
    const saoPauloNow = document.querySelector('.saopaulo-time');
    const tokyoNow = document.querySelector('.tokyo-time');

    newYorkNow.addEventListener('click', displayNewYork);
    londonNow.addEventListener('click', displayLondon);
    saoPauloNow.addEventListener('click', displaySaoPaulo);
    tokyoNow.addEventListener('click', displayTokyo);

    let newYork = document.querySelector('.new-york');
    let london = document.querySelector('.london');
    let saoPaulo = document.querySelector('.sao-paulo');
    let tokyo = document.querySelector('.tokyo');


    function displayNewYork() {
        newYork.style.display = 'block';
        london.style.display = 'none';
        saoPaulo.style.display = 'none';
        tokyo.style.display = 'none';
    }

   
    function displayLondon() {
        newYork.style.display = 'none';
        london.style.display = 'block';
        saoPaulo.style.display = 'none';
        tokyo.style.display = 'none';
    }

    function displaySaoPaulo() {
        newYork.style.display = 'none';
        london.style.display = 'none';
        saoPaulo.style.display = 'block';
        tokyo.style.display = 'none';
    }

    function displayTokyo() {
        newYork.style.display = 'none';
        london.style.display = 'none';
        saoPaulo.style.display = 'none';
        tokyo.style.display = 'block';
    }
}

changeTime();