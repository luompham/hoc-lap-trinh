const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]


const timeLeftTitle = document.querySelector('div.content h3');
const deadlineDiv = document.querySelector('div.time-left')
const timeBoxElement = document.querySelectorAll('div.time-left h4')

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const fultureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = fultureDate.getFullYear();
const month = months[fultureDate.getMonth()];
const date = fultureDate.getDate();
const hour = fultureDate.getHours();
const minute = fultureDate.getMinutes();
const day = weekdays[fultureDate.getDay()];

timeLeftTitle.textContent = `Giveaway Ends On ${day}, ${date} ${month} ${year} ${hour} : ${minute} am`;

function getRemainingTime() {

    //future time in miliseconds
    const futureTime = fultureDate.getTime()

    //current time in miliseconds
    const currentDate = new Date().getTime();

    const t = futureTime - currentDate;

    //1s = 1000ms
    //1min = 60s
    //1hr = 60min
    //1day = 24hr

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor(t % oneDay / oneHour);
    let minutes = Math.floor(t % oneHour / oneMinute);
    let seconds = Math.floor(t % oneMinute / 1000);

    const timeArray = [days, hours, minutes, seconds];

    timeBoxElement.forEach((item, index) => {
        item.innerHTML = formatTime(timeArray[index])
    })

    function formatTime(time) {
        if (time < 10) {
            return `0${time}`
        }
        return time
    }

    if (t < 0) {
        clearInterval(timerId)
        deadlineDiv.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
    }

}



const timerId = setInterval(getRemainingTime, 1000)

getRemainingTime();


