let padding = document.getElementById('padding');
let blur = document.getElementById('blur');
let backColor = document.getElementById('back-color');
let img = document.querySelector('.img');

padding.onchange = function() {changeStyle(padding)};
blur.onchange = function() {changeStyle(blur)};
backColor.onchange = function() {changeStyle(backColor)};

let changeStyle = (element) => {
    if(element.name != "blur") {
        img.style.setProperty(element.name, element.value + element.dataset.units);
    }
    else {
        img.style.setProperty('filter', element.name + `(${element.value + element.dataset.units})`);
    }
}