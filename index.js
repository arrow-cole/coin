// Retrieve saved total from local storage or initialize to 0
let total = parseFloat(localStorage.getItem('savingsTotal')) || 0;

// Update the displayed total
function updateDisplay() {
    document.getElementById('current').textContent = `Current Total: $${total.toFixed(2)}`;
    const progress = document.getElementById('progress');
    const percentage = (total / 1500) * 100;
    progress.textContent = `Progress: ${percentage.toFixed(2)}%`;
}

// Function to add amount to the total
function addAmount() {
    const input = document.getElementById('amount');
    const amount = parseFloat(input.value);
    if (!isNaN(amount) && amount > 0) {
        total += amount;
        localStorage.setItem('savingsTotal', total);
        updateDisplay();
    }
    input.value = '';
}

// Initialize display
updateDisplay();
