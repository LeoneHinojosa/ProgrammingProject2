const alertSound = new Audio('alertsound.mp3'); //If need to change sound change name here

let intervalId;
let remainingTime;

document.getElementById('timerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const seconds = parseInt(document.getElementById('seconds').value);
    startTimer(seconds);

});

document.getElementById('pauseButton').addEventListener('click', function() {
    clearInterval(intervalId);
    document.getElementById('pauseButton').disabled = true;
    document.getElementById('resumeButton').disabled = false;
});

document.getElementById('resumeButton').addEventListener('click', function() {
    startTimer(remainingTime);
    document.getElementById('pauseButton').disabled = false;
    document.getElementById('resumeButton').disabled = true;
});

document.getElementById('resetButton').addEventListener('click', function() {
    clearInterval(intervelId);
    document.getElementById('timerDisplay').textContent = 'Timer reset';
    document.getElementById('pauseButton').disabled = true;
    document.getElementById('resumeButton').disabled = true;
});

function startTimer(seconds) {
    remainingTime = seconds;
    document.getElementById('timerDisplay').textContext = 'Time remaining: ${seconds} seconds';

    document.getElementById('pauseButton').disabled = false;
    document.getElementById('resumeButton').disabled = true;

    intervalId = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            document.getElementById('timerDisplay').textContent = 'Time is up!';
            alert('Time is up!');
            alertSound.play();
            document.getElementById('pauseButton').disabled = true;
            document.getElementById('resumeButton').disabled = true;
        } else {
            remainingTime--;
            document.getElementById('timerDisplay').textContent = `Time remaining: ${remainingTime} seconds`;
        }
    }, 1000);
}
