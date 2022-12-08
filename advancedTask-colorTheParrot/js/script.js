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

let cnt1 = 0;
let cnt2 = 0;
let cnt3 = 0;
let cnt4 = 0;
let cnt5 = 0;
let cnt6 = 0;
let cnt7 = 0;
let cnt8 = 0;
let cnt9 = 0;
let cnt10 = 0;

let changecnt = (cnt) => {
  if(cnt < colors.length) {
    cnt++;
  }
  else{
    cnt = 0;
  }
  return cnt;
}

controls.onclick = e => {
  switch (e.target.id) {
    case 'body-btn':
      document.querySelectorAll(".body-clr").forEach((elem) => {
        elem.style.setProperty('background-color', `${colors[cnt1]}`);
      });
      document.querySelector(".wing-color2-inner").style.borderTopColor = colors[cnt1];
      cnt1 = changecnt(cnt1);
      break;
    case 'main-wing-btn':
      document.querySelector('.wing-color1').style.setProperty('background-color', `${colors[cnt2]}`);
      cnt2 = changecnt(cnt2);
      break;
    case 'sub-wing-btn':
      document.querySelector('.wing-color2').style.setProperty('border-top-color', `${colors[cnt3]}`);
      cnt3 = changecnt(cnt3);
      break;
    case 'upper-beak-btn':
      document.querySelector('.beak-upper').style.setProperty('background-color', `${colors[cnt4]}`);
      cnt4 = changecnt(cnt4);
      break;
    case 'lower-beak-btn':
      document.querySelector('.beak-lower').style.setProperty('background-color', `${colors[cnt5]}`);
      cnt5 = changecnt(cnt5);
      break;
    case 'claw-btn':
      document.querySelector('.leg').style.setProperty('background-color', `${colors[cnt6]}`);
      cnt6 = changecnt(cnt6);
      break;
    case 'tail-wing-btn':
      document.querySelectorAll('.tail-wing').forEach((elem) => {
        elem.style.setProperty('background-color', `${colors[cnt7]}`);
      });
      cnt7 = changecnt(cnt7);
      break;
      //2
    case 'head-wing-btn':
      document.querySelector('.feather').style.setProperty('background-color', `${colors[cnt8]}`);
      cnt8 = changecnt(cnt8);
      break;
    case 'eye-patch-btn':
      document.querySelector('.eye-patch').style.setProperty('background-color', `${colors[cnt9]}`);
      cnt9 = changecnt(cnt9);
      break;
    case 'eye-btn':
      document.querySelector('.eye').style.setProperty('background-color', `${colors[cnt10]}`);
      cnt10 = changecnt(cnt10);
      break;
  }
}


let input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++) {
  input[i].style.setProperty('display', 'none');
}