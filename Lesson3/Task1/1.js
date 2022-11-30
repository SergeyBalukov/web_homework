const temperatureC =  Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
const temperatureF = (9 / 5) * temperatureC + 32;
alert(`Цельсий: ${temperatureC}, Фаренгейт: ${temperatureF.toFixed(2)}`);