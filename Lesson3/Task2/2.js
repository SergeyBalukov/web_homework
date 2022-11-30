function sayHello(userName) {
    alert(`Привет, ${userName}`);
    console.log(`Привет, ${userName}`);
    
    const result = confirm(`${userName}, хочешь узнать сколько Фаренгейт в Цельссий `);
    if (result) {
        const temperatureC = Number.parseInt(prompt('Введите температуру в градусах Цельсиях'));
        const temperatureF = (9 / 5) * temperatureC + 32;
        alert(`Цельсий: ${temperatureC}, Фаренгейт: ${temperatureF.toFixed(2)}`);
    }
    else {
        alert(`Ну тогда пока ${userName}!`);
    }


}
const name = prompt("Введите имя");
sayHello(name);

