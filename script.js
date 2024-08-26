// JavaScript code for modal and game logic

// Get the modal element
var modal = document.getElementById("coffee-modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Variable to track game steps
var currentStep = 0;

var coffeeCup = document.getElementById("coffeeCup");
var message = document.getElementById("message");

// Example steps for a specific drink (Sunrise Brew in this case)
var gameSteps = [
    "Step 1: Add a shot of espresso",
    "Step 2: Pour pulpy orange juice over ice",
    "Step 3: Stir well",
    "Your Sunrise Brew is ready!"
];

// Function to show the modal when a drink is clicked
function showGame(drinkName, steps) {
    document.getElementById("game-title").innerText = `Make a ${drinkName}`;
    currentStep = 0;
    document.getElementById("game-steps").innerHTML = `
        <p>${steps[currentStep]}</p>
        <button id="game-next" onclick="nextStep()">Next</button>
    `;
    modal.style.display = "block";
}

// Function to move to the next step in the game
function nextStep() {
    currentStep++;
    if (currentStep < gameSteps.length) {
        document.getElementById("game-steps").innerHTML = `
            <p>${gameSteps[currentStep]}</p>
            <button id="game-next" onclick="nextStep()">Next</button>
        `;
    } else {
        document.getElementById("game-steps").innerHTML = `
            <p>${gameSteps[currentStep - 1]}</p>
            <button id="game-close" onclick="closeModal()">Close</button>
        `;
    }
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when the user clicks on <span> (x)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// Variables to track game progress
var espressoAdded = false;
var milkAdded = false;
var sugarAdded = false;

// Open modal and start game (this function would be called when a drink is clicked)
function openGameModal() {
  modal.style.display = "block";
  resetGame();
}

// Close modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal if clicked outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Game logic functions
document.getElementById("addEspresso").onclick = function() {
  if (!espressoAdded) {
    addIngredient('espresso');
    espressoAdded = true;
    checkCompletion();
  }
};

document.getElementById("addMilk").onclick = function() {
  if (!milkAdded) {
    addIngredient('milk');
    milkAdded = true;
    checkCompletion();
  }
};

document.getElementById("addSugar").onclick = function() {
  if (!sugarAdded) {
    addIngredient('sugar');
    sugarAdded = true;
    checkCompletion();
  }
};

// Function to add ingredient (increase the "fill" in the cup)
function addIngredient(ingredient) {
  var fillElement = document.createElement("div");
  fillElement.classList.add("fill");

  switch (ingredient) {
    case 'espresso':
      fillElement.style.height = "50px"; // Adjust height for espresso
      fillElement.style.backgroundColor = "#6f4e37"; // Espresso color
      break;
    case 'milk':
      fillElement.style.height = "40px"; // Adjust height for milk
      fillElement.style.backgroundColor = "#fff"; // Milk color
      break;
    case 'sugar':
      fillElement.style.height = "20px"; // Adjust height for sugar
      fillElement.style.backgroundColor = "#f5deb3"; // Sugar color
      break;
  }

  coffeeCup.appendChild(fillElement);
}

// Function to check if all ingredients are added
function checkCompletion() {
  if (espressoAdded && milkAdded && sugarAdded) {
    message.innerText = "Your coffee is ready!";
  }
}

// Function to reset the game
function resetGame() {
  espressoAdded = false;
  milkAdded = false;
  sugarAdded = false;
  coffeeCup.innerHTML = ""; // Empty the cup
  message.innerText = ""; // Clear the message
}