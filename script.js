"use strict";
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
//Quires
const dayInput = document.querySelector(".dayInput");
const monthInput = document.querySelector(".monthInput");
const yearInput = document.querySelector(".yearInput");

const dayLabel = document.querySelector(".dayLabel");
const monthLabel = document.querySelector(".monthLabel");
const yearLabel = document.querySelector(".yearLabel");

const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const alert3 = document.querySelector(".alert3");

const invalid1 = document.querySelector(".invalid1");
const invalid2 = document.querySelector(".invalid2");
const invalid3 = document.querySelector(".invalid3");

const shownDay = document.querySelector(".shownDay");
const shownMonth = document.querySelector(".shownMonth");
const shownYear = document.querySelector(".shownYear");

const inputsArr = [dayInput, monthInput, yearInput];
const labelsArr = [dayLabel, monthLabel, yearLabel];
const alertsArr = [alert1, alert2, alert3];

const subButton = document.querySelector(".subButton");

let validDay;
let validMonth;
let validYear;
let x, y, z;

const cday = Number(dd);
const cmonth = Number(mm);
const cyear = Number(yyyy);

let ageCalc = function (year, month, day) {

let days = 0;
let months = 0;
let years = 0;
let finDays = 0;



  days += (cyear - year) * 365.25 + (cmonth - month) * 30 + (cday - day);
  years = Math.trunc(days / 365.25);
  //   console.log(days);
  //   console.log(days / 365.25 - Math.trunc(days / 365.25));
  if (days / 365.25 - Math.trunc(days / 365.25) !== 0) {
    let restDays = (days / 365.25 - Math.trunc(days / 365.25)) * 365.25;
    // console.log(restDays);
    if (restDays / 30 - Math.trunc(restDays / 30) !== 0) {
      months = Math.trunc(restDays / 30);
      //   console.log(months);
      //   console.log(restDays / 30 - Math.trunc(restDays / 30));
    }
    finDays = Math.trunc((restDays / 30 - Math.trunc(restDays / 30)) * 30);
  }
  return [years, months, finDays];
};

subButton.addEventListener("click", function (e) {
  for (let i = 0; i < inputsArr.length; i++) {
    if (!inputsArr[i].value) {
      e.preventDefault();
      inputsArr[i].classList.replace("outline-gray-300", "outline-red-600");
      labelsArr[i].classList.replace("text-gray-600", "text-red-600");
      alertsArr[i].classList.remove("hidden");
      inputsArr[i].addEventListener("focus", function () {
        onkeydown = function () {
          inputsArr[i].classList.replace("outline-red-600", "outline-gray-300");
          labelsArr[i].classList.replace("text-red-600", "text-gray-600");
          alertsArr[i].classList.add("hidden");
        };
      });
    }
    else if (dayInput.value > 31 || (dayInput.value < 1 && dayInput.value)) {
      invalid1.classList.remove("hidden");
      dayLabel.classList.replace("text-gray-600", "text-red-600");
      dayInput.classList.replace("outline-gray-300", "outline-red-600");
      dayInput.addEventListener("focus", function () {
        onkeydown = function () {
          dayInput.classList.replace("outline-red-600", "outline-gray-300");
          dayInput.classList.replace("text-red-600", "text-gray-600");
          dayLabel.classList.replace("text-red-600", "text-gray-600");
          invalid1.classList.add("hidden");
        };
      });
    }
    else if (!inputsArr[i+1].value) {
      e.preventDefault();
      inputsArr[i+1].classList.replace("outline-gray-300", "outline-red-600");
      labelsArr[i+1].classList.replace("text-gray-600", "text-red-600");
      alertsArr[i+1].classList.remove("hidden");
      inputsArr[i+1].addEventListener("focus", function () {
        onkeydown = function () {
          inputsArr[i+1].classList.replace("outline-red-600", "outline-gray-300");
          labelsArr[i+1].classList.replace("text-red-600", "text-gray-600");
          alertsArr[i+1].classList.add("hidden");
        };
      });
    }
    else if (
      monthInput.value > 12 ||
      (monthInput.value < 1 && monthInput.value)
    ) {
      invalid2.classList.remove("hidden");
      monthInput.classList.replace("outline-gray-300", "outline-red-600");
      monthLabel.classList.replace("text-gray-600", "text-red-600");
      monthInput.addEventListener("focus", function () {
        onkeydown = function () {
          monthInput.classList.replace("outline-red-600", "outline-gray-300");
          monthInput.classList.replace("text-red-600", "text-gray-600");
          monthLabel.classList.replace("text-red-600", "text-gray-600");
          invalid2.classList.add("hidden");
        };
      });
    }
    else if (!inputsArr[i+2].value) {
      e.preventDefault();
      inputsArr[i+2].classList.replace("outline-gray-300", "outline-red-600");
      labelsArr[i+2].classList.replace("text-gray-600", "text-red-600");
      alertsArr[i+2].classList.remove("hidden");
      inputsArr[i+2].addEventListener("focus", function () {
        onkeydown = function () {
          inputsArr[i+2].classList.replace("outline-red-600", "outline-gray-300");
          labelsArr[i+2].classList.replace("text-red-600", "text-gray-600");
          alertsArr[i+2].classList.add("hidden");
        };
      });
    }
       else if (
      yearInput.value > 2024 ||
      (yearInput.value < 1900 && yearInput.value)
    ) {
      invalid3.classList.remove("hidden");
      yearInput.classList.replace("outline-gray-300", "outline-red-600");
      yearLabel.classList.replace("text-gray-600", "text-red-600");
      yearInput.addEventListener("focus", function () {
        onkeydown = function () {
          yearInput.classList.replace("outline-red-600", "outline-gray-300");
          yearInput.classList.replace("text-red-600", "text-gray-600");
          yearLabel.classList.replace("text-red-600", "text-gray-600");
          invalid3.classList.add("hidden");
        };
      });
    } else {
      subButton.classList.replace('bg-black' , 'bg-purple-500');
      [shownYear.textContent , shownMonth.textContent , shownDay.textContent] =
      ageCalc(yearInput.value,monthInput.value , dayInput.value);
      break;
    }
  }
});