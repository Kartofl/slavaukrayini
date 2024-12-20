document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо елемент за ID
    const menu = document.getElementById('menu');
    // Робимо елемент прихованим
    menu.style.display = 'none';
});

document.addEventListener('keydown', function(event) {
    // Перевірка комбінації: Ctrl + M
    if (event.ctrlKey && event.key === 'm') {
        event.preventDefault(); // Забороняємо стандартну дію браузера

        const menu = document.getElementById('menu');
        // Перемикаємо відображення
        if (menu.style.display === 'none') {
            menu.style.display = 'block'; // Показуємо елемент
        } else {
            menu.style.display = 'none'; // Ховаємо елемент
        }
    }
});
