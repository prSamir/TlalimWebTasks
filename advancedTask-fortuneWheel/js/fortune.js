import { responses } from './responses.js'

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

shuffle(responses);

const container = document.querySelector(".container");
const spin = document.getElementById("spin");
const btn = document.getElementById("renew");
const parentElement = document.querySelector('.container');
let children = parentElement.children;
let audio1 = document.getElementById('baraban1');
let audio2 = document.getElementById('baraban2');
let span = document.querySelectorAll('span');


let random = 0;
let arrAngles = [360, 315, 270, 225, 180, 135, 90, 45]
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

renew.onclick = function() {
    let rand;

    for(let i = 0; i < span.length; i++) {
        rand = Math.floor(Math.random() * 12);
        span    [i].innerHTML = responses[rand];
    };
};

