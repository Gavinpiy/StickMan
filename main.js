// // Get references to the input elements and stick figure parts
// const heightInput = document.getElementById("heightInput");
// const weightInput = document.getElementById("weightInput");
// const head = document.querySelector(".head");
// const body = document.querySelector(".body");
// const arms = document.querySelectorAll(".arm");
// const legs = document.querySelectorAll(".leg");

// // Event listeners to detect changes in input fields
// heightInput.addEventListener("input", updateStickFigureSize);
// weightInput.addEventListener("input", updateStickFigureSize);

let slider = document.getElementById("height");
let output = document.getElementById("heightValue");

let body = document.querySelector(".body");
let legs = document.querySelectorAll(".leg");
let arms = document.querySelectorAll(".arm");
let rightLeg = document.querySelector(".right-leg");
let leftLeg = document.querySelector(".left-leg");
let rightArm = document.querySelector(".right-arm");
let leftArm = document.querySelector(".left-arm");

output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
  //slider.value is the value of the slider in cm
  // console.log(slider.value)
  body.style.height = slider.value - 80 + "px";
  rightLeg.style.top = slider.value - 35 + "px";
  leftLeg.style.top = slider.value - 35 + "px";
  //This code is using the forEach method to iterate over each element
  //in the legs NodeList, which contains all the elements with the class "leg."
  //The forEach method takes a callback function as an argument, and this function
  //is executed for each element in the NodeList.
  legs.forEach((leg) => {
    leg.style.width = this.value / 2.5 + "px";
  });
  arms.forEach((arm) => {
    arm.style.width = this.value / 3 + "px";
  });
};

let slider2 = document.getElementById("weight");
let output2 = document.getElementById("weightValue");
output2.innerHTML = slider2.value;
slider2.oninput = function () {
  output2.innerHTML = this.value;
  //slider2.value is the weight in kg
  body.style.width = slider2.value / 4 + "px";
  body.style.left = slider2.value /  + "px";
};
