let min = 1;
let max = 10;
let targetNumber = generateNumber();

let attempts = 0;
const maxAttempts = 4;

const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const newGameBtn = document.getElementById("newGame");

function generateNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = "Enter a valid number!";
    return;
  }

  //  limit check
  if (attempts >= maxAttempts) {
    message.textContent = " Limit khatam! New Game start karo.";
    return;
  }
  attempts++;

  
  if (guess === targetNumber) {
    message.textContent = `Correct! You guessed it!`;
  } else if (guess < targetNumber) {
    message.textContent = `Greater than ${guess} | Left: ${maxAttempts - attempts}`;
  } else {
    message.textContent = `Less than ${guess} | Left: ${maxAttempts - attempts}`;
  }


  //  last attempt pe game over
  if (attempts === maxAttempts && guess !== targetNumber) {
    message.textContent = ` Limit khatam! Number was ${targetNumber}`;
  }

  guessInput.value = "";
});

newGameBtn.addEventListener("click", () => {
  targetNumber = generateNumber();
  attempts = 0; //reset attempts
  message.textContent = "New number generated. Start guessing!";
});