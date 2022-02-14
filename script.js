"use strict";

// Declaring all our variables
const display = document.querySelector(".display");
const calcButton = document.querySelectorAll(".calc-button");
const clearDisplay = document.querySelector(".ac");
const displayCalculation = document.querySelector(".calc-result");
const spaceBtwOper = document.querySelectorAll(".operator");
const evaluate = document.querySelector(".equals");
const calcResult = document.querySelector(".calculation");
const percentage = document.querySelector(".percentage");

// Looping through the value of the calculator buttons
for (let i = 0; i < calcButton.length; i++) {
  calcButton[i].addEventListener("click", function () {
    if (!displayCalculation.textContent.includes(" + ")) {
      // Displaying calculation on display
      displayCalculation.textContent += calcButton[i].textContent;
      //   let prevNos = displayCalculation.textContent;
      // console.log(prevNos);
    }
    displayCalculation.textContent.replace(/\s/g, "");
  });
}

let prevNos, myNumbers;
let numbers = [];

for (let i = 0; i < spaceBtwOper.length; i++) {
  if (!displayCalculation.textContent.includes("=")) {
    spaceBtwOper[i].addEventListener("click", () => {
      numbers.push(displayCalculation.textContent);
      // console.log(numbers);

      // When our result is not evaluated
      if (displayCalculation.textContent !== calcResult.textContent)
        calcResult.textContent += displayCalculation.textContent;

      calcResult.classList.add("padding-top");
      displayCalculation.textContent = "";

      myNumbers = numbers.map((i) => Number(i));
      // console.log(myNumbers);

      calcResult.textContent += " " + spaceBtwOper[i].textContent + " ";
      // console.log(i);

      console.log(myNumbers);
    });
  }
}
// console.log(myNumbers);
// Calculator sum function
const sumOfNums = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
};

// Calculator difference function
const diffOfNums = (nums) => {
  let diff = nums[0];
  for (let i = 1; i < nums.length; i++) {
    diff = diff - nums[i];
  }
  return diff;
};

// Calculator product function
const productOfNums = (nums) => {
  let product = nums[0];
  for (let i = 1; i < nums.length; i++) {
    product = product * nums[i];
  }
  return product;
};

// Calculator division function
const quotientOfNums = (nums) => {
  let quotient = nums[0];
  for (let i = 1; i < nums.length; i++) {
    quotient = quotient / nums[i];
  }
  return quotient;
};

const percent = (nums) => {
  let perCent = nums[0];
  for (let i = 1; i < nums.length; i++) {
    perCent = perCent / 100;
  }
  return perCent;
};

// When the user clicks AC
clearDisplay.addEventListener("click", function () {
  numbers = [];
  displayCalculation.textContent = "";
  calcResult.textContent = "";
});

// When the user clicks '='
evaluate.addEventListener("click", function () {
  numbers = [];
  // Evalute summation expressions
  if (calcResult.textContent.includes(" + ")) {
    displayCalculation.textContent = sumOfNums(myNumbers);
  }
  // Evaluate substraction expressions
  else if (calcResult.textContent.includes(" - ")) {
    displayCalculation.textContent = diffOfNums(myNumbers);
  }
  // Evalute multiplication expression
  else if (calcResult.textContent.includes(" × ")) {
    displayCalculation.textContent = productOfNums(myNumbers);
  }
  // Evaluate division expression
  else if (calcResult.textContent.includes(" ÷ ")) {
    displayCalculation.textContent = quotientOfNums(myNumbers);
  }
  // When user clicks %
  else if (calcResult.textContent.includes(" % ")) {
    console.log("hi");
    displayCalculation.textContent = percent(myNumbers);
  }
  // Approximating recurring decimals
  let decimal = String(displayCalculation.textContent % 1);
  if (decimal.length >= 7) {
    displayCalculation.textContent = Number(
      displayCalculation.textContent
    ).toFixed(2);
  }

  calcResult.textContent = displayCalculation.textContent;
});

// displayCalculation.classList.add("hidden");
//   prevNos = Number(displayCalculation.textContent);
//   console.log(prevNos);
// }
// calculate.sum();
// });
