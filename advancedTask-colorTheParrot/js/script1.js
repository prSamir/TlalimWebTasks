let controls = document.querySelector('.controls');
let bodyBtn = document.querySelector('#body-btn');
let mainWingBtn = document.querySelector('#main-wing-btn');
let subWingBtn = document.querySelector('#sub-wing-btn');
let upperBeakBtn = document.querySelector('#upper-beak-btn');
let lowerBeakBtn = document.querySelector('lower-beak-btn');
let clawBtn = document.querySelector('#claw-btn');
let tailWingBtn = document.querySelector('#tail-wing-btn');
let headWingBtn = document.querySelector('#head-wing-btn');
let eyePatchBtn = document.querySelector('#eye-patch-btn');
let eyeBtn = document.querySelector('#eye-btn');

let colors = [
  "#cd0000",
  "#f03800",
  "#ffb64c",
  "#ff9100",
  "#0095ff",
  "#1fbf66",
  "#ff4380",
  "#deecf1",
  "#714c2f",
  "#7fe881",
  "#f7006a",
];

controls.onclick = e => {
  switch (e.target.id) {
    case 'body-btn':
      let rand = Math.floor(Math.random() * colors.length);
      document.querySelectorAll(".body-clr").forEach((elem) => {
        elem.style.setProperty('background-color', `${colors[rand]}`);
      });
      document.querySelector(".wing-color2-inner").style.borderTopColor = colors[rand];
      break;
    case 'main-wing-btn':
      let rand1 = Math.floor(Math.random() * colors.length);
      document.querySelector('.wing-color1').style.setProperty('background-color', `${colors[rand1]}`);
      break;
    case 'sub-wing-btn':
      let rand2 = Math.floor(Math.random() * colors.length);
      document.querySelector('.wing-color2').style.setProperty('border-top-color', `${colors[rand2]}`);
      break;
    case 'upper-beak-btn':
      let rand3 = Math.floor(Math.random() * colors.length);
      document.querySelector('.beak-upper').style.setProperty('background-color', `${colors[rand3]}`);
      break;
    case 'lower-beak-btn':
      let rand4 = Math.floor(Math.random() * colors.length);
      document.querySelector('.beak-lower').style.setProperty('background-color', `${colors[rand4]}`);
      break;
    case 'claw-btn':
      let rand5 = Math.floor(Math.random() * colors.length);
      document.querySelector('.leg').style.setProperty('background-color', `${colors[rand5]}`);
      break;
    case 'tail-wing-btn':
      let rand6 = Math.floor(Math.random() * colors.length);
      document.querySelectorAll('.tail-wing').forEach((elem) => {
        elem.style.setProperty('background-color', `${colors[rand6]}`);
      });
      break;
    case 'head-wing-btn':
      let rand7 = Math.floor(Math.random() * colors.length);
      document.querySelector('.feather').style.setProperty('background-color', `${colors[rand7]}`);
      break;
    case 'eye-patch-btn':
      let rand8 = Math.floor(Math.random() * colors.length);
      document.querySelector('.eye-patch').style.setProperty('background-color', `${colors[rand8]}`);
      break;
    case 'eye-btn':
      let rand9 = Math.floor(Math.random() * colors.length);
      document.querySelector('.eye').style.setProperty('background-color', `${colors[rand9]}`);
      break;
  }
}


let input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++) {
  input[i].style.setProperty('display', 'none');
}