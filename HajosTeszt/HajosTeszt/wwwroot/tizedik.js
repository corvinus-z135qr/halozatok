window.onload = function () {
    console.log("Oldal betöltve...");
    letöltés();
}


var k = 0;
var kérdések;
var kérdéssorszám = 0;

fetch('/questions/4')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
            }
        );
}


function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function letöltés() {

    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(1);
}

function kérdésMegjelenítés(kérdés) {

    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerHTML = kérdés.answer2;
    document.getElementById("válasz3").innerHTML = kérdés.answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;

    document.getElementById(`válasz1`).style.pointerEvents = "none";
    document.getElementById(`válasz2`).style.pointerEvents = "none";
    document.getElementById(`válasz3`).style.pointerEvents = "none";
}

window.onload = function () {
    letöltés();

}


function előrekatt() {

    clearTimeout(timeoutHandler)
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
}

function visszakatt() {
    kérdéssorszám--;
    if (kérdéssorszám == -1) {
        kérdés = kérdések.length;
    }
    console.log = (kérdéssorszám);
    kérdésMegjelenítés(kérdéssorszám);

}
function válasz1() {
    if (kérdések[kérdéssorszám].correctAnswer == 1) {
        document.getElementById("válasz1").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz1").style.background = "lightcoral";
    }
}
function válasz2() {
    if (kérdések[kérdéssorszám].correctAnswer == 2) {
        document.getElementById("válasz2").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz2").style.background = "lightcoral";
    }
}

function válasz3() {
    if (kérdések[kérdéssorszám].correctAnswer == 3) {
        document.getElementById("válasz3").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz3").style.background = "lightcoral";
    }
}

var hotList = [];  
var questionsInHotList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;  

var hotList = [];
var questionsInHotList = 3;
var nextQuestion = 1;