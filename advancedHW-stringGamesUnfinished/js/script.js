/** VARIABLES */

/** FOR CLOCK */

const dateDiv = document.querySelector('.date');
const timeDiv = document.querySelector('.time');

let quoteBtn = document.querySelector('.get-quote');
let palindromeBtn = document.querySelector('.get-palindrome');
let yesNo = document.querySelector('.yes-no');
let palindrome = document.querySelector('.the-palindrome');
let ifPalindrome = document.querySelector('.is-palindrome');
let gemInput = document.querySelector('.gem-input');
let gemBtn = document.querySelector('.gem-calc');
let gemRes = document.querySelector('.res-calc');
let anBtn = document.querySelector('.new-anagram');
let anagram = document.querySelectorAll('.desc')[4];
let anCheck = document.querySelector('.check-anagram');
let compAnagram = document.querySelector('#comp-anagram');
let yourAnagram = document.querySelector('#your-anagram');
let anReaction = document.querySelector('.anagram-reaction');

const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/** FOR QUOTES */

/** FOR PALINDROMES */

/** FOR PALINDROMES */

/** FOR GEMATRIA */


/** FUNCTIONALITY */

/** FOR CLOCK */

// T.B.D.
////////////////////////////////
//
//  - when seconds or minutes are comprised of 1 digit - add 0 before this digit
//  - change hours to be seen with AM/PM
//  - add function that calls both displayDate() and displayTime() functions
//  - move let currDate = new Date() to this function
//Complete!

let displayDateTime = () => {
    let currDate = new Date();

    displayDate(currDate);
    displayTime(currDate);

    let t = setTimeout(displayDateTime, 500);
}

function displayDate(currDate) {
    
    let y = currDate.getFullYear();
    let m = currDate.getMonth() + 1;
    let d = currDate.getDate();
    
    let weekDay = weekDays[currDate.getDay()];
    
    dateDiv.innerText = `${weekDay} | ${d}/${m}/${y}`
}

function displayTime(currDate) {
    
    let hour = currDate.getHours();
    let min = currDate.getMinutes();
    let sec = currDate.getSeconds();
    
    if(sec == 0 || sec == 1 || sec == 2 || sec == 3 || sec == 4 || sec == 5 || sec == 6 || sec == 7 || sec == 8 || sec == 9) {
        sec = '0' + sec;
    }

    if(min == 0 || min == 1 || min == 2 || min == 3 || min == 4 || min == 5 || min == 6 || min == 7 || min == 8 || min == 9) {
        min = '0' + min;
    }
    
    timeDiv.innerText = `${hour}:${min}:${sec}`
    
}

displayDateTime();

/** FOR QUOTES */

// T.B.D.
////////////////////////////////
//
//  - create function that gets random number 
//    from 0 to the last "quotes" array index

//  - create function that gets quote by this number 
//    from the array "quotes" and sets it into it's place

//  - run the function with "onclick" or eventListener
//

//Complete!

let getRandomInteger = () => {
    let rand = Math.floor(Math.random() * (quotes.length - 0)) + 0;;
    return rand;
}

let displayRandomQuote = () => {
    document.querySelectorAll('.desc')[3].innerHTML = quotes[getRandomInteger()];
}

quoteBtn.onclick = displayRandomQuote

/** FOR PALINDROMES */

// T.B.D.
////////////////////////////////
//
//  - create function that gets random number 
//    from 0 to the last "palindromes" array index

//  - create function that gets quote by this number 
//    from the array "palindromes" and sets it into it's place

//  - run the function with "onclick" or eventListener
//    on the button "Palindrome Example"
//
//  - create function that 
//    1) takes palindrome from it's field,
//    2) strips it of spaces, commas, dots and other non-letter characters,
//    3) exchanges final Hebrew letters by the usual ones 
//    4) splits the string into array of letters and uses method reverse() 
//    5) joins the letters to string and compares the string to the not reversed string
//    6) if they're same shows "Yes!", if not - "No:("

//  - run the function with "onclick" or eventListener
//    on the button "Is this a Palindrome?"  

//Complete!

let getRandomIntegerPalindrome = () => {
    let rand = Math.floor(Math.random() * (palindromes.length - 0)) + 0;;
    return rand;
}

let displayRandomPalindrome = () => {
    palindrome.value = palindromes[getRandomIntegerPalindrome()];
}

palindromeBtn.onclick = displayRandomPalindrome;

let isPalindrome = () => {
    let inputArr = [];
    let input = palindrome.value;

    input = input.replace(/[.,\s]/g, '');
    input = input.replace(/[^a-zA-Zא-תа-яА-Я\d\s:]/gi, '');
    input = input.replace(/[0-9]/g, '');
    input = input.replace(/ך/g,"כ").replace(/ם/g,"מ").replace(/ן/g,"נ").replace(/ץ/g,"צ");
    input = input.toLowerCase();
    
    inputArr = input.split("").reverse().toString().replace(/[,]/g, '');

    if(inputArr === input) {
        yesNo.innerHTML = 'Yes!';
    }
    else {
        yesNo.innerHTML = 'No :(';
    }
}

ifPalindrome.onclick = isPalindrome;

/** FOR GEMATRIA */

// T.B.D.
////////////////////////////////
//
//  - create function that 
//    1) takes the phrase from it's field,
//    2) strips it of spaces, commas, dots and other non-letter characters,
//    3) exchanges final Hebrew letters by the usual ones 
//    4) splits the string into array of letters 
//    5) uses "for" loop or method "forEach()" or method "reduce()" 
//       to go over each letter and add it's value to the total sum
//
//      You may use these arrays to get the value of each letter. 
//      For example, if the letter is found (indexOF()!) in tens, 
//      it's value is equal to it's index multiplied by 10.
        var digits = ['','א','ב','ג','ד','ה','ו','ז','ח','ט'];
        var tens = ['','י','כ','ל','מ','נ','ס','ע','פ','צ'];
        var hundreds = ['','ק','ר','ש','ת'];

//    6) displays the sum

//  - run the function with "onclick" or eventListener

//Complete!

let gematria = () => {
    let sum = 0;
    let inputArr = [];
    let input = gemInput.value;
    
    input = input.replace(/[.,\s]/g, '');
    input = input.replace(/[^א-ת\d\s:]/gi, '');
    input = input.replace(/[0-9]/g, '');
    input = input.replace(/ך/g,"כ").replace(/ם/g,"מ").replace(/ן/g,"נ").replace(/ץ/g,"צ");

    inputArr = input.split("");

    for(let i = 0; i < digits.length; i++) {
        for(let j = 0; j < inputArr.length; j++){
            if (digits[i] === inputArr[j]) {
                sum += i;
            }
        }
    }
    for(let i = 0; i < tens.length; i++) {
        for(let j = 0; j < inputArr.length; j++){
            if (tens[i] === inputArr[j]) {
                sum += i*10;
            }
        }
    }
    for(let i = 0; i < hundreds.length; i++) {
        for(let j = 0; j < inputArr.length; j++){
            if (hundreds[i] === inputArr[j]) {
                sum += i*100;
            }
        }
    }

    gemRes.innerHTML = sum;
}

gemBtn.onclick = gematria;


let getRandomIntegerAnagram = () => {
    let rand = Math.floor(Math.random() * (anagrams.length - 0)) + 0;;
    return rand;
}

let displayRandomAnagram = () => {
    anagram.innerHTML = anagrams[getRandomIntegerAnagram()];
    compAnagram.style.display = 'none';
    anReaction.innerHTML = '';
}

anBtn.onclick = displayRandomAnagram;


let findAnagrams = () => {
    let res = "";
    let input = anagram.innerHTML; 
    // console.log(input);
    for(let i = 0; i < anagrams.length; i++) {
        let word = anagrams[i];
        let alphabetical1 = word.split("").sort().join("");
        if(anagrams[i] == input) {
            continue;
        }
        else if(input.split("").sort().join("") == alphabetical1) {
            res += word + ' ';
        }
    }
    compAnagram.value = res;
    return res;
}

let checkPlayerAnswer = () => {
    if(yourAnagram.value.replace(/\s/g, '') == findAnagrams().replace(/\s/g, '')) {
        return true;
    }
    else {
        return false;
    }
}

let showPraiseOrReproval = () => {
    if(checkPlayerAnswer()) {
        anReaction.innerHTML = praises[Math.floor(Math.random() * (praises.length - 0)) + 0];
    }
    else {
        anReaction.innerHTML = reprovals[Math.floor(Math.random() * (reprovals.length - 0)) + 0];
    }
}

let checkAnagrams = () => {
    findAnagrams();
    checkPlayerAnswer();
    showPraiseOrReproval();
    compAnagram.style.display = 'inline';
}

anCheck.onclick = checkAnagrams;
