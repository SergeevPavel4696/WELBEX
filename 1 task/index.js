const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let interval;

const getTwoDigit = (number) => {
    return number > 9 ? String(number) : String('0' + number);
}

const getTime = (seconds) => {
    return getTwoDigit(Math.floor(seconds / 3600)) + ':'
        + getTwoDigit(Math.floor(Math.floor(seconds / 60) % 60)) + ':'
        + getTwoDigit(Math.floor(seconds % 60))
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        interval = setInterval(() => {
            seconds >= 1 ? timerEl.textContent = getTime(--seconds) : clearInterval(interval);
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении оставались только числа
    let value = "";
    inputEl.value.split("").forEach(char => {
        if ('0123456789'.includes(char)) {
            value += char;
        }
    })
    inputEl.value = value;
});

buttonEl.addEventListener('click', () => {
    inputEl.textContent = inputEl.value;
    clearInterval(interval);
    const seconds = Number(inputEl.value);
    timerEl.textContent = getTime(seconds);

    animateTimer(seconds);

    inputEl.value = '';
});
