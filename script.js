let secDiv = document.getElementById('second');
let minDiv = document.getElementById('minute');
let hourDiv=document.getElementById('hour');

setInterval(()=>{
    let date = new Date;
    let second = date.getSeconds()/60;
    let minute = (date.getMinutes()+second) / 60;
    let hour = (date.getHours()+minute)/12;
    secDiv.style.transform = `rotate(${second*360}deg)`;
    minDiv.style.transform = `rotate(${minute*360}deg)`;
    hourDiv.style.transform = `rotate(${hour*360}deg)`;
},1000)