const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval : 4,
    sessions: 0
}


let interval;


const modeButtons = document.querySelector('#js-mode-buttons');

modeButtons.addEventListener('click', handleMode);



function handleMode(e) {
    const {mode} = e.target.dataset;


    if (!mode) return;

    switchMode(mode);
}



function switchMode(mode) {
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    }


    document
        .querySelectorAll('button[data-mode]')
        .forEach(e=>e.classList.remove('active'));
    document
        .querySelector(`[data-mode="${mode}"]`).classList.add('active');
      document
        .body.style.backgroundImage = `var(--${mode})`;
console.log("Annette Switch");
      
updateClock();
}


function updateClock() {
    const {remainingTime} = timer;

    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');



    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');

    min.textContent = minutes;
    sec.textContent = seconds;
}