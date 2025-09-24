// Находим кнопку на странице по её ID
const button = document.getElementById('myButton');

// Добавляем к кнопке "слушатель" события "клик"
button.addEventListener('click', function() {
    // Спрашиваем имя пользователя
    const userName = prompt('Как к вам обращаться?');
    if (userName) {
        // Если имя ввели, выводим сообщение
        alert(`Приятно познакомиться, ${userName}! Скоро я с вами свяжусь.`);
    }
});