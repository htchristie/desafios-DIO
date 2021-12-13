let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const SUBTRACT_BUTTON = document.getElementById("btnSub");
const ADD_BUTTON = document.getElementById("btnAdd");

SUBTRACT_BUTTON.addEventListener("click", decrement);
ADD_BUTTON.addEventListener("click", increment);

function increment() {
	count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function updateDisplay() {
  CURRENT_NUMBER.innerHTML = count;

  if (count < 0) {
    CURRENT_NUMBER.style.color = "red";
  } else {
    CURRENT_NUMBER.style.color = "black";
  }
}






