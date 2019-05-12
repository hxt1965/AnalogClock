const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//to rerun the following script every second to update the hands, wrap the code inside a function 

function runTheClock() {
    //date is pulled off of the browser
    var date = new Date();
    console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: "+hr+" Minutes: "+min+" Seconds: "+sec);

    //will eventually set the degrees we set the arms 
    let hrPosition = ((hr%12) * 360/12) + (min * (360/60)/12);
    let minPosition = (min * 360/60)+(sec*(360/60)/60);
    let secPosition = sec * (360/60);

    //we need to pply these degrees on the inline form on each of these objects

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

/**
    setInterval repeatedly calls a function or executes a code 
    snippet with a fixed time delay between each call. Returns 
    an intervalID 
    Delay is in milliseconds 
*/

var interval = setInterval(runTheClock, 1000);

//the animation of moving hand occurs due to the 'transition' defined in the css in the last function (easi-in-out)
/**
    we see however, that when the second hand reaches zero, 
    
*/