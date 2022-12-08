import { responses } from './responses.js'

const container = document.querySelector(".container");
const spin = document.getElementById("spin");
const btn = document.getElementById("renew");
const parentElement = document.querySelector('.container');
let children = parentElement.children;
let audio1 = document.getElementById('baraban1');
let audio2 = document.getElementById('baraban2');

let random = 0;
spin.onclick = function() {
    let rand = Math.floor(Math.random() * 10000);
    random += rand;
    container.style.setProperty("transition", 7 + "s");
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

    for(let i = 0; i < children.length; i++) {
        rand = Math.floor(Math.random() * 20);
        children[i].innerHTML = responses[rand];
    };
};