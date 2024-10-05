// Get references to the HTML elements
const counterDisplay = document.getElementById('counter');
const totalDisplay = document.getElementById('total');
const resetButton = document.getElementById('reset');
const addPennyButton = document.getElementById('addPenny');
const addNickelButton = document.getElementById('addNickel');
const addDimeButton = document.getElementById('addDime');
const addQuarterButton = document.getElementById('addQuarter');

// Load the counter values from local storage, or initialize to default
let coinCount = localStorage.getItem('coinCount') ? parseInt(localStorage.getItem('coinCount')) : 0;
let totalAmount = localStorage.getItem('totalAmount') ? parseFloat(localStorage.getItem('totalAmount')) : 0;

// Update the displays
function updateDisplays() {
    counterDisplay.innerText = `Coins: ${coinCount}`;
    totalDisplay.innerText = `Total: $${totalAmount.toFixed(2)}`;
    localStorage.setItem('coinCount', coinCount);
    localStorage.setItem('totalAmount', totalAmount);
}

// Event listeners for adding coins
addPennyButton.addEventListener('click', () => {
    coinCount++;
    totalAmount += 0.01;
    updateDisplays();
});

addNickelButton.addEventListener('click', () => {
    coinCount++;
    totalAmount += 0.05;
    updateDisplays();
});

addDimeButton.addEventListener('click', () => {
    coinCount++;
    totalAmount += 0.10;
    updateDisplays();
});

addQuarterButton.addEventListener('click', () => {
    coinCount++;
    totalAmount += 0.25;
    updateDisplays();
});

// Event listener for resetting the counter
resetButton.addEventListener('click', () => {
    coinCount = 0;
    totalAmount = 0;
    updateDisplays();
});

// Initial update when page loads
updateDisplays();
