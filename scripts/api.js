document.getElementById('fetchActivity').addEventListener('click', async () => {
    const outputElement = document.getElementById('activityOutput');
    outputElement.textContent = 'Завантаження...';

    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error('Не вдалося отримати дані');
        }
        const data = await response.json();
        outputElement.textContent = `Рекомендована активність: ${data.activity}`;
    } catch (error) {
        outputElement.textContent = `Помилка: ${error.message}`;
    }
});
