import { expiryTime } from "./dateCalculate.js";

document.addEventListener('DOMContentLoaded', () => {
    const timeElements = document.querySelectorAll('[id^="time"]');
    timeElements.forEach((element) => {
        const expiryElement = element.parentElement.querySelector('#exp');
        const expiryText = expiryElement.textContent;
        const expiryDate = new Date(expiryText);
        const daysRemaining = expiryTime(expiryDate);
        element.innerHTML += `<p id="days">${daysRemaining} días restantes</p>`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timeElements = document.querySelectorAll('[id^="time"]');
    timeElements.forEach((element) => {
        const days = element.parentElement.querySelector('#days').textContent;
        const numberDays = parseInt(days.match(/-?\d+/)[0], 10);
        const negativeDays = element.parentElement.querySelector('#days');

        if(numberDays >= 60) {
            element.classList.add('btn-verde');
        }else if(numberDays < 200 && numberDays > 0) {
            element.classList.add('btn-amarillo');
        }else {
            element.classList.add('btn-rojo');
            negativeDays.textContent = "No queda tiempo";
        }
    });
});