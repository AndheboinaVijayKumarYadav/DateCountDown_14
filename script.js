// variables
const countDown = document.getElementById('count-down');
const countTo = "1 Sep 2023";

// Interval which calculates the remaining time from countTo time
const Interval = setInterval(() => {

    const currentDate = new Date();
    const endDate = new Date(countTo);
    const totalSeconds = (endDate - currentDate)/1000;

    const days = Math.floor((totalSeconds/3600/24));
    const hours = Math.floor((totalSeconds/3600) % 24);
    const minutes = Math.floor((totalSeconds/60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    countDown.textContent = `${days}Days ${format(hours)}Hrs ${format(minutes)}Mins ${format(seconds)}Secs`;

    if(totalSeconds < 0){
        clearInterval(Interval);
        countDown.textContent = "Happy New Year";
    }

},1000);

// changing the format of hours ,minutes and seconds if its less than 10 
function format(d){
    return (d < 10 ? `0${d}`:d );
}