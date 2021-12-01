let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName('li');

// create a function to add element on click button click
function timer(){
    const d= new Date();
    document.querySelector('#hour').innerHTML=d.getHours();
    document.querySelector('#minutes').innerHTML=d.getMinutes();
    document.querySelector('#seconds').innerHTML=d.getSeconds();
}
setInterval(timer,1000);
btn.addEventListener("click",() => {
    let txt = input.value;
    if(txt === "")
    {
        alert("Please enter something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = `${txt}
         <button class="cross" onclick="deleteNote(this.parentElement)" alt="remove">
         <i class="fas fa-trash">-</i>
         </button>
         `;
        list.insertBefore(li, list.childNodes[0]);
        input.value ="";
    }
})

// create a function to mark the done work

list.addEventListener("click", e => {
    if(e.target.tagName == 'LI')
    {
         e.target.classList.toggle('checked');
        }
    })
    window.onload = function(){
        document.getElementById("download").addEventListener("click",()=>
    {
        const invoice = this.document.getElementById("invoice");
        console.log(invoice);
        console.log(window);
        html2pdf().from(invoice).save();
    })
}

// That function use for creating alarm 
const  alarmsubmit = document.getElementById('alarmsubmit');
alarmsubmit.addEventListener('click',setAlarm);
var audio = new Audio('twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3');
	
function ringBell(){
    audio.play(); 
} 

function setAlarm(){
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    
    let timeToalarm = alarmDate - now;
    console.log(timeToalarm);
    if(timeToalarm>=0)
    setTimeout(() => {
        ringBell();
    }, timeToalarm);
}

// delete element
function deleteNote(note)
{
    note.parentElement.removeChild(note);
} 