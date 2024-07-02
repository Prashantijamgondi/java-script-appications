let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let msg = document.getElementById("timerText");

let secondLeft = 0;
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

twentySecondsBtn.onclick = function() {
    secondLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();
}

thirtySecondsBtn.onclick = function() {
    secondLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
}

fortySecondsBtn.onclick = function() {
    secondLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
}

oneMinuteBtn.onclick = function() {
    secondLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();
}

function setTimerAndShow() {
    msg.textContent = secondLeft + " seconds left"
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondLeft > 1) {
        secondLeft -= 1;
        msg.textContent = secondLeft + " seconds left";
    } else {
        clearPreviousTimers();
        msg.textContent = "Your moment is completed";
    }
}