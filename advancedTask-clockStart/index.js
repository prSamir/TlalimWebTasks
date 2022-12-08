setInterval(() => {document.querySelector('.second-hand').style.transform = `rotate(${((new Date()).getSeconds()*6) + 90}deg)`}, 1000);
setInterval(() => {document.querySelector('.min-hand').style.transform = `rotate(${((new Date()).getMinutes()*6) + 90}deg)`}, 1000);
setInterval(() => {document.querySelector('.hour-hand').style.transform = `rotate(${((new Date()).getHours()*30) + 90}deg)`}, 1000);

let audioTick = document.querySelector('.audio');
setInterval(() => {audioTick.play()}, 1000)