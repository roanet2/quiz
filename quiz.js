// select all elements
const header = document.getElementById("header");
const startmakkelijk = document.getElementById("startmakkelijk");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const leven = document.getElementById("leven")
const levenmakkelijk = document.getElementById("levenmakkelijk")
const choices =document.getElementById("choices")
const choicesmakkelijk =document.getElementById("choicesmakkelijk")
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceA1 = document.getElementById("A1");
const choiceB1 = document.getElementById("B1");
const choiceC1 = document.getElementById("C1");
const choiceD1 = document.getElementById("D1");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Luxembourg.svg.png",
        choiceA : "Nederland",
        choiceB : "Luxemburg",
        choiceC : "Frankrijk",
        choiceD:  "Kroatië",
        correct : "B"
    },{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/nigeria.jpg",
        choiceA : "Ierland",
        choiceB : "Ivoorkust",
        choiceC : "Italië",
        choiceD:  "Nigeria",
        correct : "D"
    },{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Roemenie.png",
        choiceA : "Tsjaad",
        choiceB : "Armenie",
        choiceC : "Roemenië",
        choiceD:  "België",
        correct : "C"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Slovenia.svg",
        choiceA : "Solevenie",
        choiceB : "Servië",
        choiceC : "Slowakije",
        choiceD:  "Kroatië",
        correct : "A"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Monaco.svg",
        choiceA : "Indonesie",
        choiceB : "Singapore",
        choiceC : "Monaco",
        choiceD:  "Polen",
        correct : "C"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/jemen.png",
        choiceA : "Jemen",
        choiceB : "Egypte",
        choiceC : "Soedan",
        choiceD:  "Verenigde Arbische Emiraten",
        correct : "A"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Letland.jpg",
        choiceA : "Litouwen",
        choiceB : "Oostenrijk",
        choiceC : "Letland",
        choiceD:  "Estland",
        correct : "C"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/nicaragua.png",
        choiceA : "Argentine",
        choiceB : "Nicaragua",
        choiceC : "Honduras",
        choiceD:  "El Salvador",
        correct : "B"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Peru.jpg",
        choiceA : "Peru",
        choiceB : "Mexico",
        choiceC : "Andorra",
        choiceD:  "Afghanistan",
        correct : "A"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/niger.png",
        choiceA : "India",
        choiceB : "Iran",
        choiceC : "Niger",
        choiceD:  "Groenland",
        correct : "C"
    }
];

let questionsmakkelijk = [
    {
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/brazilie.png",
        choiceA1 : "Colombia",
        choiceB1 : "Brazilie",
        choiceC1 : "Argentinie",
        choiceD1:  "venezuela",
        correct : "B1"
    },
    {
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/belgie.png",
        choiceA1 : "Duistland",
        choiceB1 : "Tsjaad",
        choiceC1 : "België",
        choiceD1:  "Guinee",
        correct : "C1"
    },
    {
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/frankrijk.png",
        choiceA1 : "Nederland",
        choiceB1 : "Verenigd Koninkrijk",
        choiceC1 : "Italië",
        choiceD1:  "Frankrijk",
        correct : "D1"
    },{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/china.png",
        choiceA1 : "Nepal",
        choiceB1 : "India",
        choiceC1 : "China",
        choiceD1:  "Thailand",
        correct : "C1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/portugal.png",
        choiceA1 : "Spanje",
        choiceB1 : "Italië",
        choiceC1 : "Portugal",
        choiceD1:  "Kroatië",
        correct : "C1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Marokko.png",
        choiceA1 : "Marokkko",
        choiceB1 : "Egypte",
        choiceC1 : "Tunesie",
        choiceD1:  "Turkije",
        correct : "A1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/rusland.png",
        choiceA1 : "Rusland",
        choiceB1 : "Wit-rusland",
        choiceC1 : "Litouwen",
        choiceD1:  "Nederland",
        correct : "A1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/spanje.jpg",
        choiceA1 : "Portugal",
        choiceB1 : "Oostenrijk",
        choiceC1 : "Spanje",
        choiceD1:  "Andorra",
        correct : "C1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/zuid-afrika.png",
        choiceA1 : "Senegal",
        choiceB1 : "Zuid-Afrika",
        choiceC1 : "Bostwana",
        choiceD1:  "Kameroen",
        correct : "B1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/zwitserland.png",
        choiceA1 : "Zwisterland",
        choiceB1 : "Oostenrijk",
        choiceC1 : "Denemarken",
        choiceD1:  "Noorwegen",
        correct : "A1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/ameirka.png",
        choiceA1 : "Verenigde Staten",
        choiceB1 : "Verenigd Koninkrijk",
        choiceC1 : "Griekenland",
        choiceD1:  "Liberia",
        correct : "A1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/Australie.jpg",
        choiceA1 : "Falkan-eilanden",
        choiceB1 : "Verenigd Koninkrijk",
        choiceC1 : "Nieuw-Zeeland",
        choiceD1:  "Australie",
        correct : "D1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/canada.jpg",
        choiceA1 : "Verenigde Staten",
        choiceB1 : "Verenigd Koninkrijk",
        choiceC1 : "Cananda",
        choiceD1:  "Groenland",
        correct : "C1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/isreal.png",
        choiceA1 : "Georgie",
        choiceB1 : "Libanon",
        choiceC1 : "Isreal",
        choiceD1:  "Liberia",
        correct : "C1"
    }
    ,{
        question : "Van welke land hoort deze vlag?",
        imgSrc : "img/duistland.jpg",
        choiceA1 : "Duistland",
        choiceB1 : "België",
        choiceC1 : "Oostenrijk",
        choiceD1:  "Nederland",
        correct : "A1"
    }

];


// create some variables

const lastQuestion = questions.length - 1;
const lastquestionmakkelijk = questionsmakkelijk.length -1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; //
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let minScore = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function renderQuestionMakkelijk(){
    let q = questionsmakkelijk[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA1.innerHTML = q.choiceA1;
    choiceB1.innerHTML = q.choiceB1;
    choiceC1.innerHTML = q.choiceC1;
    choiceD1.innerHTML = q.choiceD1;
}

start.addEventListener("click",startQuiz);
startmakkelijk.addEventListener("click", startQuizMakkelijk)

// start quiz
function startQuizMakkelijk(){
    start.style.display = "none";
    startmakkelijk.style.display = "none";
    header.style.display = "none";
    renderQuestionMakkelijk();
    quiz.style.display = "block";
    levenmakkelijk.style.display = "block";
    choicesmakkelijk.style.display = "block";
    renderMakkelijkProgress();
    renderMakkelijkCounter();
    TIMER = setInterval(renderMakkelijkCounter,1000); // 1000ms = 1s
}



function startQuiz(){
    start.style.display = "none";
    startmakkelijk.style.display = "none";
    header.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    leven.style.display = "block";
    choices.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderMakkelijkProgress(){
    for(let quIndex = 0; quIndex <= lastquestionmakkelijk; quIndex++){
        progress.innerHTML += "<div class='prog' id="+ quIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();


        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }  if (minScore > 5){
        clearInterval(TIMER);
        scoreRender();
    }

}

function renderMakkelijkCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();


        if(runningQuestion < lastquestionmakkelijk){
            runningQuestion++;
            renderQuestionMakkelijk();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoremakkelijkRender();
        }
    } if (minScore > 3){
        clearInterval(TIMER);
        scoreRender();
    }
}


// checkAnwer


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else {

        // answer is wrong
        // change progress color to red
        answerIsWrong();


    }
    if (minScore > 5){
        clearInterval(TIMER);
        scoreRender();
    }
    count = 0;
    if(runningQuestion < lastQuestion ){
        runningQuestion++;
        renderQuestion();
    }
    else {
        clearInterval(TIMER);
        scoreRender();
    }
}

function checkmakkelijkAnswer(answer){
    if (answer == questionsmakkelijk[runningQuestion].correct){
        score++;
        // change progress color to green
        answerIsCorrect();
    }
    else{

        // answer is wrong
        // change progress color to red
        answerIsWrong();

    }
    if (minScore > 3){
        clearInterval(TIMER);
        scoremakkelijkRender();
    }
    count = 0;
    if (runningQuestion < lastquestionmakkelijk ){
        runningQuestion++;
        renderQuestionMakkelijk();
    }
    else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoremakkelijkRender();
    }

}





// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    minScore++;
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    quiz.style.display = "none";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<p  style='text-align: center; font-size: 30px; margin-top: -80px; margin-left: -47px; width: 150px'> Game Over </p>";
    scoreDiv.innerHTML += "<img  src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDiv.innerHTML += "<p style='margin-top: 60px;  margin-left: -90px; '><button type=\"button\" style='width: 250px; height: 40px;right: 30px;   border-radius: 20px; background-color: blue; color: #ffff;\' onClick=\"window.location.reload();\"" + ">Klik hier om naar startpagina te gaan </button></p>";
}


function scoremakkelijkRender() {
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    const scoremakkelijkPerCent = Math.round(100 * score / questionsmakkelijk.length);

// choose the image based on the scorePerCent
    let imgmakkelijk = (scoremakkelijkPerCent >= 80) ? "img/5.png" :
        (scoremakkelijkPerCent >= 60) ? "img/4.png" :
            (scoremakkelijkPerCent >= 40) ? "img/3.png" :
                (scoremakkelijkPerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<p  style='font-size: 30px; margin-top: -75px; margin-left: -47px; width: 150px'> Game Over </p>";
    scoreDiv.innerHTML += "<img  src=" + imgmakkelijk + ">";
    scoreDiv.innerHTML += "<p>" + scoremakkelijkPerCent + "%</p>";
    scoreDiv.innerHTML += "<p style='margin-top: 60px; margin-left: -90px;  '><button type=\"button\" style='width: 250px; height: 40px;right: 30px;   border-radius: 20px; background-color: blue; color: #ffff;\' onClick=\"window.location.reload();\"" + ">Klik hier om naar startpagina te gaan </button></p>";
//     margin-left: -90px; margin-left: -47px; width: 150px
}
