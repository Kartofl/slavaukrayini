function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "12345") {
        alert("Вітаємо! Тепер у вас є доступ до арсеналу ядерної зброї Сполученого Королівства Великобританія!");
        // Redirect or other action
    } else {
        alert("Неправильне ім'я користувача або пароль.");
    }
}
