
/*
document.getElementById('font-color').addEventListener('input', function(event) {
    document.body.style.color = event.target.value;
});

document.getElementById('font-size').addEventListener('input', function(event) {
    document.body.style.fontSize = event.target.value + 'px';
});

document.getElementById('container-width').addEventListener('input', function(event) {
    document.querySelector('.projects-grid').style.width = event.target.value + 'px';
});

document.getElementById('container-height').addEventListener('input', function(event) {
    document.querySelector('.projects-grid').style.height = event.target.value + 'px';
});

document.getElementById('background-color').addEventListener('input', function(event) {
    document.body.style.backgroundColor = event.target.value;
});

document.getElementById('background-image').addEventListener('input', function(event) {
    document.body.style.backgroundImage = `url(${event.target.value})`;
});
*/









// Зміна кольору тексту
document.getElementById('font-color').addEventListener('input', (event) => {
    const color = event.target.value;
    document.querySelectorAll('h1, h2, h3, p, div, nav, ul, li, a').forEach((el) => {
        el.style.color = color;
    });
});

// Зміна розміру шрифту
document.getElementById('font-size').addEventListener('input', (event) => {
    const fontSize = event.target.value + 'px';
    document.querySelectorAll('h1, h2, h3, p').forEach((el) => {
        el.style.fontSize = fontSize;
    });
});

// Зміна ширини контейнера
document.getElementById('container-width').addEventListener('input', (event) => {
    document.querySelector('.projects-grid').style.width = event.target.value + 'px';
});

// Зміна кольору фону
document.getElementById('background-color').addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// Зміна фонового зображення
document.getElementById('background-image').addEventListener('input', (event) => {
    const url = event.target.value;
    document.body.style.backgroundImage = url ? `url(${url})` : 'none';
    document.body.style.backgroundSize = 'cover'; // Додаємо, щоб фон масштабувався
    document.body.style.backgroundRepeat = 'no-repeat'; // Уникаємо повторення
});
