import { responses } from './responses.js'
let j = 0;


let shuffle = function(arr){
	let currentIndex = arr.length;
	let temp, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temp = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temp;
	}
    console.log(arr);
	return arr;
}

const container = document.querySelector(".container");
const spin = document.getElementById("spin");
const btn = document.getElementById("renew");
const parentElement = document.querySelector('.container');
let children = parentElement.children;
let audio1 = document.getElementById('baraban1');
let audio2 = document.getElementById('baraban2');
let span;

renew.onclick = function() {
    let rand;

    if(j == 0){
        for (let i = 0; i < responses.length; i++) {
            let span = document.createElement('span');
            span.id = `${responses[i]}`;
            span.innerHTML = `${responses[i]}`;
            let div = document.createElement('div');
            div.classList.add(`${responses[i]}`);
            document.querySelector(".container").appendChild(div);
            document.querySelector(`.${responses[i]}`).appendChild(span);    
        }
        span = document.querySelectorAll('span');
        console.log(span);
        j++;
    }
    for(let i = 0; i < span.length; i++) {
        shuffle(responses);
        span[i].innerHTML = responses[i];
    };
};

let random = 0;
let arrAngles = [360, 330, 300, 270, 240, 210, 180, 150, 120, 90, 60, 30]

spin.onclick = function() {
    let rand = Math.floor(Math.random() * 1000);
    random += rand;
    for (let i = 0; i < span.length; i++){
        span[i].style.transform = "rotate(" + (arrAngles[i] - random) + "deg)";
    }
    container.style.transform = "rotate(" + random + "deg)"

    audio1.play();
    audio2.play();

    container.addEventListener("transitionend", () => {
        audio1.pause();
        audio1.currentTime = 0;
        audio2.pause();
        audio2.currentTime = 0;
    });
};