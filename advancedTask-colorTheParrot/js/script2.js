let controls = document.querySelector('.controls');
let bodyColor = document.querySelector('#body-color');
let mainWingColor = document.querySelector('#main-wing-color');
let subWingColor = document.querySelector('#sub-wing-color');
let upperBeakColor = document.querySelector('#upper-beak-color');
let lowerBeakColor = document.querySelector('#lower-beak-color');
let clawColor = document.querySelector('#claw-color');
let tailWingColor = document.querySelector('#tail-wing-color');
let headWingColor = document.querySelector('#head-wing-color');
let eyePatchColor = document.querySelector('#eye-patch-color');
let eyeColor = document.querySelector('#eye-color');

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

controls.onchange = e => {
  switch (e.target.id) {
    case 'body-color':
      document.querySelectorAll(".body-clr").forEach((elem) => {
        elem.style.setProperty('background-color', `${bodyColor.value}`);
      });
      document.querySelector(".wing-color2-inner").style.borderTopColor = bodyColor.value;
      break;
    case 'main-wing-color':
      document.querySelector('.wing-color1').style.setProperty('background-color', `${mainWingColor.value}`);
      break;
    case 'sub-wing-color':
      document.querySelector('.wing-color2').style.setProperty('border-top-color', `${subWingColor.value}`);
      break;
    case 'upper-beak-color':
      document.querySelector('.beak-upper').style.setProperty('background-color', `${upperBeakColor.value}`);
      break;
    case 'lower-beak-color':
      document.querySelector('.beak-lower').style.setProperty('background-color', `${lowerBeakColor.value}`);
      break;
    case 'claw-color':
      document.querySelector('.leg').style.setProperty('background-color', `${clawColor.value}`);
      break;
    case 'tail-wing-color':
      document.querySelectorAll('.tail-wing').forEach((elem) => {
        elem.style.setProperty('background-color', `${tailWingColor.value}`);
      });
      break;
    case 'head-wing-color':
      document.querySelector('.feather').style.setProperty('background-color', `${headWingColor.value}`);
      break;
    case 'eye-patch-color':
      document.querySelector('.eye-patch').style.setProperty('background-color', `${eyePatchColor.value}`);
      break;
    case 'eye-color':
      document.querySelector('.eye').style.setProperty('background-color', `${eyeColor.value}`);
      break;
  }
}