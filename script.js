// Get references to the HTML elements
const counterDisplay = document.getElementById('counter');
const addCoinButton = document.getElementById('addCoin');
const resetButton = document.getElementById('reset');

// Load the counter value from local storage if it exists, or start from 0
let coinCount = localStorage.getItem('coinCount') ? parseInt(localStorage.getItem('coinCount')) : 0;
counterDisplay.innerText = coinCount;

// Function to update the counter display and save to local storage
function updateCounter() {
    counterDisplay.innerText = coinCount;
    localStorage.setItem('coinCount', coinCount);
}

// Event listener for adding a coin
addCoinButton.addEventListener('click', () => {
    coinCount++;
    updateCounter();
});

// Event listener for resetting the counter
resetButton.addEventListener('click', () => {
    coinCount = 0;
    updateCounter();
});
