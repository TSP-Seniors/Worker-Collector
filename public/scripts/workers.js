import { expiryTime } from "./dateCalculate.js";

document.addEventListener('DOMContentLoaded', function() {
    const timeElements = document.querySelectorAll('[id^="time"]');
    timeElements.forEach(function(element) {
        const expiryElement = element.parentElement.querySelector('#exp');
        const expiryText = expiryElement.textContent;
        
        // Convertir el texto a un objeto de fecha
        const expiryDate = new Date(expiryText);
        const daysRemaining = expiryTime(expiryDate);
        element.innerHTML += `<p>${daysRemaining} días restantes</p>`;
    });
});
