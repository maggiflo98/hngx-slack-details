// Function to display current UTC time in milliseconds
function displayCurrentUTCTime() {
    const currentUTCTimeElement = document.querySelector('[data-testid="current UTCTime"]');
    currentUTCTimeElement.textContent = `The time today is ${Date.now()} milliseconds (UTC)`;
}

// Function to display current date
function displayCurrentDate() {
    const currentDateElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDateElement.textContent = `The date today is ${new Date().toLocaleDateString()}`;
}

// Call both functions to display the current UTC time and date
displayCurrentUTCTime();
displayCurrentDate();
