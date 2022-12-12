const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval : 4,
    sessions: 0
}


let interval;


const modeButtons = document.querySelector('js-mode-buttons');

modeButtons.addEventListener('click', handleMode);



function handleMode(e) {
    const {mode} = e.target.dataset;


    if (!mode) return;

    switchMode(mode);
}