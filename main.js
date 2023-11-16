let slider = document.getElementById("height");
let output = document.getElementById("heightValue");
let body = document.querySelector(".body");
let legs = document.querySelectorAll(".leg");
let arms = document.querySelectorAll(".arm");
let rightLeg = document.querySelector(".right-leg");
let leftLeg = document.querySelector(".left-leg");
let rightArm = document.querySelector(".right-arm");
let leftArm = document.querySelector(".left-arm");
let head = document.querySelector(".head");
const text = document.getElementById("youaretext");
// Set initial value and output
let heightValue = slider.value;
output.innerHTML = heightValue;

slider.addEventListener("input", function () {
  // Update current value and output
  heightValue = slider.value;
  output.innerHTML = heightValue;
  body.style.height = heightValue - 80 + "px";
  rightLeg.style.top = heightValue - 35 + "px";
  leftLeg.style.top = heightValue - 35 + "px";

  // Use forEach to iterate over legs and set width
  legs.forEach((leg) => {
    leg.style.width = heightValue / 2.5 + "px";
  });

  // Use forEach to iterate over arms and set width
  arms.forEach((arm) => {
    arm.style.width = heightValue / 3 + "px";
  });
  sausagePic();
  chairPic();
  twigPic();
  youAreText();
});

let slider2 = document.getElementById("weight");
let output2 = document.getElementById("weightValue");

// Set initial value and output
let weightValue = slider2.value;
output2.innerHTML = weightValue;

slider2.addEventListener("input", function () {
  // Update current value and output
  weightValue = slider2.value;
  output2.innerHTML = weightValue;
  body.style.width = weightValue / 4 + "px";
  body.style.left = 50 - weightValue / 8 + "px";
  sausagePic();
  chairPic();
  twigPic();
  youAreText();
});

const sausage = document.getElementById("sausageImage");

function sausagePic() {
  if (heightValue == 250 && weightValue == 300) {
    sausage.style.display = "flex";
  } else {
    sausage.style.display = "none";
  }
}

const chair = document.getElementById("chairImage");

function chairPic() {
  if (heightValue == 110 && weightValue == 300) {
    chair.style.display = "flex";
  } else {
    chair.style.display = "none";
  }
}

const twig = document.getElementById("twigImage");

function twigPic() {
  if (heightValue == 250 && weightValue == 40) {
    twig.style.display = "flex";
    // text.innerHTML = "You are a twig";
  } else {
    twig.style.display = "none";
    // text.innerHTML = "Loading...";
  }
}

// function youAreText() {
//   if (heightValue == 170 && weightValue == 80) {
//     text.innerHTML=("You are an average male")
//   }
// }
function youAreText() {
  if (heightValue >= 160 && heightValue <= 180 && weightValue >= 70 && weightValue <= 90) {
    text.innerHTML = "You are an average male";
  } else {
    text.innerHTML = "You are a"; // Clear the text if the condition is not met
  }
}

