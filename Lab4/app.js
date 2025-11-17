const counter = document.getElementById("counter");
const counterBtn = document.getElementById("counterBtn");
const clearBtn = document.getElementById("clearBtn");

let updateCounter = 0;
counter.innerText = "0";
//this

function update() {
    updateCounter = updateCounter + 1;
    counter.innerText = updateCounter;
}

function clear() {
    updateCounter = 0;
    counter.innerText = "0";
}

counterBtn.addEventListener("click", update);
clearBtn.addEventListener("click", clear);

//-------------Even Odd----------------------------
const evenOdd = document.getElementById("evenOdd");
const showResult = document.getElementById("showResult");
const check = document.getElementById("check");


function showResultFunc() {
    let n = Number(evenOdd.value);
    console.log(n);

    if (n % 2 == 0) {
        showResult.innerText = "Even";
        evenOdd.value = "";
    }
    else {
        showResult.innerText = "Odd";
        evenOdd.value = "";
    }
}

check.addEventListener("click", showResultFunc)


//-------------Celsius to Fahrenheit----------------------------
const celToFahren = document.getElementById("celToFahren");
const showFahrenResult = document.getElementById("showFahrenResult");
const convert = document.getElementById("convert");

function convertFunc() {
    let c = Number(celToFahren.value);

    if (celToFahren.value === "") {
        showFahrenResult.innerText = "Enter Celsius value!";
        return;
    }

    let f = (c * 9 / 5) + 32;
    showFahrenResult.innerText = `${c}°C = ${f.toFixed(2)}°F`;
    celToFahren.value = "";
}

convert.addEventListener("click", convertFunc);

//------------- Prime Number Checker ----------------------------
const primeNum = document.getElementById("primeNum");
const showprimeNum = document.getElementById("showprimeNum");
const checkPrimeNum = document.getElementById("checkPrimeNum");

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime() {
    let n = Number(primeNum.value);

    if (primeNum.value === "") {
        showprimeNum.innerText = "Please enter a number!";
        showprimeNum.style.color = "orange";
        return;
    }

    if (isPrime(n)) {
        showprimeNum.innerText = `${n} is a Prime Number ✅`;
        showprimeNum.style.color = "lightgreen";
    } else {
        showprimeNum.innerText = `${n} is Not Prime ❌`;
        showprimeNum.style.color = "tomato";
    }

    primeNum.value = "";
}

checkPrimeNum.addEventListener("click", checkPrime);



//------------- Number to Binary Converter ----------------------------
const numToBit = document.getElementById("numToBit");
const showBit = document.getElementById("showBit");
const convertBit = document.getElementById("convertBit");

function convertToBinary() {
    let n = Number(numToBit.value);

    if (numToBit.value === "") {
        showBit.innerText = "Please enter a number!";
        showBit.style.color = "orange";
        return;
    }

    let binary = n.toString(2); // convert number to binary
    showBit.innerText = `${n} in binary is ${binary}`;
    showBit.style.color = "lightblue";
    numToBit.value = "";
}

convertBit.addEventListener("click", convertToBinary);

