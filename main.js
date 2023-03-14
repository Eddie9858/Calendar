
const days = ["일", "월", "화", "수", "목", "금", "토"];

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const today = date.getDate();


const lastDate = new Date(year, month, 0);
const lastDateMonth = lastDate.getDate();


const startDay = new Date(year,month-1,1);
const startDayMonth = startDay.getDay();


const calendarWeekCount = Math.ceil((startDayMonth + lastDateMonth) / 7);

const body = document.querySelector("body");

const table = document.createElement("table");

body.appendChild(table);

const thead = document.createElement("thead");

const tableElement = document.querySelector("table");

tableElement.appendChild (thead);

const theadElement = document.querySelector("thead");

const trElement = document.querySelector("tr");


for(var i = 0; i < calendarWeekCount + 1; i++){
  const trElement = document.createElement("tr");
  theadElement.appendChild(trElement);
  for(let j =0; j < 7; j++){
    const thElement = document.createElement("th");
    trElement.appendChild(thElement);
  }
}

const day = document.querySelectorAll("th");

for(let i =0; i<days.length;i++){
  day[i].textContent = days[i];  
}

for(let i =0; i < lastDate.getDate(); i++){
  day[startDay.getDay() + 7 + i].textContent = startDay.getDate() + i;
}
