
const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const enteredDay = document.querySelector("#day"); 
const enteredMonth = document.querySelector("#month"); 
const enteredYear = document.querySelector("#year"); 
const body = document.querySelector("h3");
const output = document.querySelector(".output");

const seconds = 1000,
minutes = 60 * seconds,
hours = 60 * minutes, 
days = 24 * hours;

const timer= () =>{
    let now = new Date(),
    dd=String(now.getDate()).padStart(2,"0");
    mm=String(now.getMonth()+1).padStart(2,"0");
    yyyy=String(now.getFullYear()).padStart(2,"0");

    now =`${mm}/${dd}/${yyyy}`;


    let targetDate= `${(enteredMonth.value).padStart(2,"0")}/${(enteredDay.value).padStart(2,"0")}/${enteredYear.value}`;
    console.log(targetDate)

    if(Date.parse(targetDate)==NaN) alert("Enter a valid Date");
    if(now > targetDate) alert("Enter a valid Date");

    
    

    const interval = setInterval(()=>{
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();

        const difference = timer-today;

        const daysLeft = (Math.floor(difference/days));
        const hoursLeft = (Math.floor((difference%days)/hours));
        const minutesLeft = (Math.floor((difference%hours)/minutes));
        const secondsLeft = (Math.floor((difference%minutes)/seconds));

    
        day.innerText = daysLeft;
        hour.innerText = hoursLeft;
        minute.innerText = minutesLeft;
        second.innerText = secondsLeft;

        if((difference < 0) )
        {
            body.innerText="Time's Up";
            body.style.color = "green";
            body.style.fontSize="3rem";
            output.style.display= "none";
            clearInterval(interval);
        }

    },0
    );
};





