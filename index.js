const inputSlider=document.querySelector('[data-lengthSlider]');
const lengthDisplay=document.querySelector("[data-lengthNumber]")
const passwordDisplay=document.querySelector("[data-passwordDisplay]")
const copyBtn=document.querySelector("[data-copy]")
const copyMsg=document.querySelector("[data-copyMsg]")
const uppercaseCheck=document.querySelector("#uppercase")
const lowercaseCheck=document.querySelector("#lowercase")
const numbersCheck=document.querySelector("#numbers")
const symbolsCheck=document.querySelector("symbols")
const indicator=document.querySelector("[data-indicator]")
const generateBtn=document.querySelector(".generateBtn")
const allCheckBox=document.querySelector("input[type=checkbox]")

let password="";
let passwordLength=15;
let checkCount=1;
handleSlider();
//set strength circle color to grey

//set password length
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
}

function setIndicator(color){
    //color
    indicator.computedStyleMap.backgroundColor=color;
    //shadow
}

function getRandomInteger(min,max){
    Math.round(Math.random()*(max-min))+min;
}

function generateRandNumber(){
    return getRandomInteger(0,9)
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbol(){
    let symbol="`~!@#$%^&*()_-=+{}[]|\/;:<>?,.";
    let randNum=getRandomInteger(0,symbol.length());
    return symbol.charAt(randNum);
}

function calcStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSymbol=false;
    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheckcaseCheck.checked) hasLower=true;
    if(numbersCheckCheck.checked) hasNum=true;
    if(symbolsCheckCheck.checked) hasSymbol=true;

    if(hasUpper && hasLower && (hasNum|| hasSymbol) && passwordLength>=8){
        setIndicator("#0f0");
    }
    else if((hasLower|| hasUpper) && (hasNum || hasSymbol) && (passwordLength>=6)){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText='copied';
    }
    catch{
        copyMsg.innerText='failed';
    }
    copyMsg.classList.add('active');
    setTimeout(()=>{
        copyMsg.classList.remove('active');
    },2000);
}

function 