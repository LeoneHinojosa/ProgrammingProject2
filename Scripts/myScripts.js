document.getElementById('timerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const seconds = parseInt(document.getElementById('seconds').value);
    const display = document.getElementById('timerDisplay');

    if (isNaN(seconds) || seconds <= 0 || seconds > 60) {
        display.textContent = 'Please enter a valid number between 1 and 60.';
        return;
    }

    display.textContent = `Time remaining: ${seconds} seconds`;

    const intervalId = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(intervalId);
            display.textContent = 'Time is up!';
            alert('Time is up!');
        } else {
            seconds--;
            display.textContent = `Time remaining: ${seconds} seconds`;
        }
    }, 1000);
});
