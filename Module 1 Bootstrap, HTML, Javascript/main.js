console.log("Community Portal Loaded");

let totalRegistrations = 500;

const events = [
{
    id:1,
    name:"Music Festival",
    category:"music",
    seats:20,
    fee:500,
    image:"images/event1.png",
    description:"Enjoy live music and entertainment."
},
{
    id:2,
    name:"Workshop",
    category:"workshop",
    seats:15,
    fee:300,
    image:"images/event2.png",
    description:"Learn new skills from experts."
},
{
    id:3,
    name:"Sports Meet",
    category:"sports",
    seats:10,
    fee:200,
    image:"images/event3.png",
    description:"Participate in exciting sports activities."
}
];

const eventContainer =
document.getElementById("eventContainer");

function displayEvents(eventList){

    if(!eventContainer) return;

    eventContainer.innerHTML = "";

    eventList.forEach((event,index)=>{

        eventContainer.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="event-card">

                <img src="${event.image}" alt="${event.name}">

                <div class="event-card-body">

                    <h4>${event.name}</h4>

                    <p>${event.description}</p>

                    <p><strong>Seats:</strong> ${event.seats}</p>

                    <p><strong>Fee:</strong> ₹${event.fee}</p>

                    <button
                    class="btn btn-primary"
                    onclick="registerEvent(${index})">

                    Register

                    </button>

                </div>

            </div>
        </div>
        `;
    });

}

displayEvents(events);

function registerEvent(index){

    if(events[index].seats > 0){

        events[index].seats--;

        totalRegistrations++;

        const registrationCounter =
        document.getElementById("registrations");

        if(registrationCounter){
            registrationCounter.innerText =
            totalRegistrations + "+";
        }

        showToast(
        "Registration Successful ✅"
        );

        displayEvents(events);

    }else{

        showToast(
        "Event Full ❌"
        );

    }
}

const searchBox =
document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener(
"keyup",
function(){

    const value =
    this.value.toLowerCase();

    const filtered =
    events.filter(event =>
    event.name
    .toLowerCase()
    .includes(value));

    displayEvents(filtered);

});

}

const categoryFilter =
document.getElementById("categoryFilter");

if(categoryFilter){

categoryFilter.addEventListener(
"change",
function(){

    const value = this.value;

    if(value === "all"){

        displayEvents(events);
        return;
    }

    const filtered =
    events.filter(event =>
    event.category === value);

    displayEvents(filtered);

});

}

const eventType =
document.getElementById("eventType");

if(eventType){

eventType.addEventListener(
"change",
function(){

    let feeText = "";

    switch(this.value){

        case "Music Festival":
        feeText = "Fee: ₹500";
        break;

        case "Workshop":
        feeText = "Fee: ₹300";
        break;

        case "Sports Meet":
        feeText = "Fee: ₹200";
        break;

        default:
        feeText = "";
    }

    const feeDisplay =
    document.getElementById(
    "feeDisplay"
    );

    if(feeDisplay){
        feeDisplay.innerText =
        feeText;
    }

    localStorage.setItem(
    "preferredEvent",
    this.value
    );

});

}
window.addEventListener(
"load",
()=>{

const savedEvent =
localStorage.getItem(
"preferredEvent"
);

if(savedEvent &&
document.getElementById(
"eventType"
)){

document.getElementById(
"eventType"
).value = savedEvent;

}

});

const registrationForm =
document.getElementById(
"registrationForm"
);

if(registrationForm){

registrationForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const output =
document.getElementById(
"output"
);

if(output){

output.innerHTML =
"Registration Successful 🎉";

}

showToast(
"Form Submitted Successfully"
);

this.reset();

});

}

const feedback =
document.getElementById(
"feedback"
);

if(feedback){

feedback.addEventListener(
"input",
function(){

document.getElementById(
"charCount"
).innerText =
this.value.length;

});

}


const promoVideo =
document.getElementById(
"promoVideo"
);

if(promoVideo){

promoVideo.oncanplay =
function(){

document.getElementById(
"videoStatus"
).innerText =
"Video Ready To Play ▶";

};

}

function findLocation(){

if(navigator.geolocation){

navigator.geolocation
.getCurrentPosition(

(position)=>{

document.getElementById(
"location"
).innerHTML =

`Latitude:
${position.coords.latitude}
<br>

Longitude:
${position.coords.longitude}`;

},

(error)=>{

showToast(
"Location Permission Denied"
);

}

);

}else{

showToast(
"Geolocation Not Supported"
);

}

}

function showToast(message){

const toast =
document.getElementById(
"toast"
);

if(!toast) return;

toast.innerText =
message;

toast.style.display =
"block";

setTimeout(()=>{

toast.style.display =
"none";

},3000);

}

const themeBtn =
document.getElementById(
"themeBtn"
);

if(themeBtn){

themeBtn.addEventListener(
"click",
()=>{

document.body.classList
.toggle("dark");

const isDark =
document.body.classList
.contains("dark");

localStorage.setItem(
"darkMode",
isDark
);

});

}



window.addEventListener(
"load",
()=>{

const darkMode =
localStorage.getItem(
"darkMode"
);

if(darkMode === "true"){

document.body.classList
.add("dark");

}

});



const galleryImages =
document.querySelectorAll(
".gallery-img"
);

galleryImages.forEach(img=>{

img.addEventListener(
"click",
()=>{

document.getElementById(
"imageModal"
).style.display =
"block";

document.getElementById(
"modalImg"
).src =
img.src;

});

});

const closeModal =
document.getElementById(
"closeModal"
);

if(closeModal){

closeModal.addEventListener(
"click",
()=>{

document.getElementById(
"imageModal"
).style.display =
"none";

});

}



const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 300){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

});

if(topBtn){

topBtn.addEventListener(
"click",
()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}


function animateCounter(
id,
target){

const element =
document.getElementById(id);

if(!element) return;

let count = 0;

const speed = 20;

const update = ()=>{

if(count < target){

count++;

element.innerText =
count + "+";

setTimeout(
update,
speed
);

}

};

update();

}

window.addEventListener(
"load",
()=>{

animateCounter(
"members",
100
);

animateCounter(
"eventsCount",
25
);

animateCounter(
"registrations",
500
);

});

console.log(
"All Features Loaded Successfully"
);
