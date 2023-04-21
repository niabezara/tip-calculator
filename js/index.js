const bills = document.getElementById("bills");
const tips = document.querySelectorAll(".tips");
const custom = document.querySelector(".custom");
const numberOfPeople = document.querySelector(".second-input");
const error = document.getElementById("error"); //error paragraph
const amount1 = document.querySelector(".amount1"); //tip per person
const amount2 = document.querySelector(".amount2"); // total per person
const reset = document.querySelector(".reset"); //button to reset everything

//event listeners to buttons
bills.addEventListener("input", billsvalues);
numberOfPeople.addEventListener("input", numberOfPeoplevalues);
tips.forEach(function (tip) {
  tip.addEventListener("click", handleClick);
});
custom.addEventListener("input", tippers);
reset.addEventListener("click", resetAll);

let billvalue = 0.0;
let numberOfPeoplevalue = 1;
let tipValue = "";

// function for bill amount
function billsvalues() {
  billvalue = parseFloat(bills.value);
  calculatetip();
}

// function for people amount

function numberOfPeoplevalues() {
  numberOfPeoplevalue = parseFloat(numberOfPeople.value);
  if (numberOfPeoplevalue < 1) {
    error.classList.add("visible");
  } else {
    error.classList.remove("visible");
    calculatetip();
  }
}

// function for tips
function handleClick(event) {
  tips.forEach(function (tip) {
    tip.classList.remove("active");
    if (event.target.innerHTML == tip.innerHTML) {
      tip.classList.add("active");
      tipValue = parseFloat(tip.innerHTML) / 100;
      console.log(tipValue);
    }
  });
  calculatetip();
}

// function for custom tippers
function tippers() {
  tipValue = parseFloat(custom.value / 100);
  calculatetip();
}

// calculate tip amount and total amount per person
function calculatetip() {
  if (numberOfPeoplevalue >= 1) {
    let tipAmount = (billvalue * tipValue) / numberOfPeoplevalue;
    let totalAmount = (billvalue + tipAmount) / numberOfPeoplevalue;
    amount1.innerHTML = "$" + tipAmount.toFixed(2);
    amount2.innerHTML = "$" + totalAmount.toFixed(2);
  }
}

// reset everything function
function resetAll() {
  amount1.innerHTML = "$ 0.00";
  amount2.innerHTML = "$ 0.00";
  bills.value = "0";
  numberOfPeople.value = "0";
}
