const clap = document.querySelectorAll('[data-key="a"]');
const hihat = document.querySelectorAll('[data-key="s"]');
const kick = document.querySelectorAll('[data-key="d"]');
const openhat = document.querySelectorAll('[data-key="f"]');
const boom = document.querySelectorAll('[data-key="g"]');
const ride = document.querySelectorAll('[data-key="h"]');
const snare = document.querySelectorAll('[data-key="j"]');
const tom = document.querySelectorAll('[data-key="k"]');
const tink = document.querySelectorAll('[data-key="l"]');

document.addEventListener('keydown', event => {
    switch (event.key){
        case 'a':
            clap[1].play();
            break;
        case 's':
            hihat[1].play();
            break;
        case 'd':
            kick[1].play();
            break;
        case 'f':
            openhat[1].play();
            break;
        case 'g':
            boom[1].play();
            break;
        case 'h':
            ride[1].play();
            break;
        case 'j':
            snare[1].play();
            break;
        case 'k':
            tom[1].play();
            break;
        case 'l':
            tink[1].play();
            break;    
    }
})

let keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', event => {
        switch(key) {
            case keys[0]:
                clap[1].play();
                break;
            case keys[1]:
                hihat[1].play();
                break;   
            case keys[2]:
                kick[1].play();
                break;
            case keys[3]:
                openhat[1].play();
                break;
            case keys[4]:
                boom[1].play();
                break;
            case keys[5]:
                ride[1].play();
                break;
            case keys[6]:
                snare[1].play();
                break;
            case keys[7]:
                tom[1].play();
                break;
            case keys[8]:
                tink[1].play();
                break;
        }
      })
})