var beginButton = document.getElementById("begin-btn") // this is the begin button on the html ....below to make it work.. on click
beginButton.addEventListener("click" , beginGame)

var restartButton = document.getElementById("restart-btn")//
restartButton.addEventListener("click" ,function(){
    window.location.reload()
    //beginGame() 
})

var questboxElement = document.getElementById("questbox")
var questionElement = document.getElementById("question")
var gameoverElement = document.getElementById("gameover")
var choiceButtonElement = document.getElementById("choice-btns")
var mixoQuestions
var currentQuestionsIndex

// this is the clock 
var clockElement = document.getElementById("clock")
var secondsLeft = 15
function setTime() {
    console.log("the time")//// notes
    var timerInterval = setInterval(function() {
        secondsLeft--;
        clockElement.textContent = "TIME*(" + secondsLeft + ")*TIME";
    //this stops the game

        if(secondsLeft <= 0 || currentQuestionsIndex >= questions.length) {
            clearInterval(timerInterval)
            questboxElement.setAttribute("class", "hide")
            gameoverElement.setAttribute("class", "")
            restartButton.classList.remove("hide")
        }
    }, 1000);
}



//this starts the game
function beginGame(){
    console.log("first function succes!!")
    // hides begin button unhides the the "questbox"
    beginButton.classList.add("hide")
    questboxElement.classList.remove("hide")
    console.log("let the hide games begin")
    // mix the questions here 
    currentQuestionsIndex = 0
    mixoQuestions = questions.sort(() => Math.random + .5)
    console.log("the mix is above!")
    //calling 2 functions
    setNextQuestion()
    console.log("setnext")

    setTime() 
    console.log("clock is running")
    
}

function setNextQuestion(){

    resetState()
    showQuestion(mixoQuestions[currentQuestionsIndex])
}
function resetState(){
    restartButton.classList.add("hide")
    while (choiceButtonElement.firstChild) {
        choiceButtonElement.removeChild
        (choiceButtonElement.firstChild)
    }
    
}

function showQuestion(question){
    //setting question in questbox
    if(currentQuestionsIndex >= questions.length){
        questionElement.innerText = "Loading..."
        //loading effect
    } else {
        questionElement.innerText = question.question
        //create button / put answer in button
        question.answers.forEach(answer => {
            var button = document.createElement("button")
            console.log("button create")
            button.innerText = answer.text
            button.classList.add("btn")
            console.log("button css")
            if(answer.correct) {
                button.dataset.correct = answer.correct
            }
            //listner is for selectAnswer function
            button.addEventListener("click", selectAnswer)
            
            choiceButtonElement.appendChild(button)
        })
    }
}


function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    // console.log(selectedButton)
    Array.from(choiceButtonElement.children).forEach(button => {setStatusClass(button, button.dataset.correct)
    })
    //this is the score
    if(!correct){
        secondsLeft-=3
        wrong++;
        txtWrong.textContent = wrong
    } else{
        right++;
        txtRight.textContent = right
        total++;
        txtTotal.textContent = total
        localStorage.setItem("total",total) // sets to storage
    }
    currentQuestionsIndex++
    setNextQuestion()
    restartButton.classList.remove("hide")
}
///  score variables

var txtRight = document.getElementById("correct")
var txtWrong = document.getElementById("wrong")
var txtTotal = document.getElementById("total")

var right=  0
var wrong=  0
var total=  0

// changes the button via css bassed on answer before selected
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct") 
    } else {
        element.classList.add("wrong")    
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
    console.log("correct and wrong")
}
///????
var queImage = document.getElementById("image")
function sendImage() {
    queImage.textContent = " ";
    var newImage = document.createElement("img")
    newImage.setAttribute("src","images/IMG_2584.jpeg")
    queImage.appendChild(newImage);
}
///?????gotta get the image in the questions

var questions = [
    {
        question: "html stands for!?!?!?",
        answers: [
            {text: "hey that music is loud", correct: false},
            {text: "Hypertext Markup language", correct: true},
        ]  
    },
    {
        question: " java and javascript are related programing languages!?!?!?",
        answers: [
            {text: "yup for sure", correct: false},
            {text: "nope not at all", correct: true},
            {text: "they are cousins from up north Ws.", correct: false},
            {text: " they play for the packers", correct: false} 
        ]  
    },
    {
        question: " css stands for!?!?!?",
        answers: [
            {text: "can't stop singing", correct: false},
            {text: "cascading style sheets", correct: true},
            {text: "cubs seriously? seriously??", correct: false},
            
        ]  
    },
    {
        question: "what are the three types of css(styling)!?!?!?",
        answers: [
            {text: "red , blue , green", correct: false},
            {text: "var, let, const", correct: false},
            {text: "mild, hot, extra hot", correct: false},
            {text: "inline, external, internal", correct: true} 
        ]   
    },
    {
         question: " var, let, and const are!?!?!?",
         answers: [
             {text: "musical structues", correct: false},
             {text: "three Wookiee's from Star Wars Trilogy", correct: false},
             {text: "variables in Battlestar Galactica", correct: false},
             {text: "variables in the javascript programing language", correct: true} 
        ] 
     },
     {
     question: "local storage is in the !?!?!?",
         answers: [
            {text: "browser", correct: true},
            {text: "same city the user is in", correct: false},
            {text: "in the storage place in the neighborhood your in", correct: false},
        ]  
     },   
]
 //var scoreBox = getElementById.("score-input")
  
/// if the total score is the highest
//if the total score is the second highest
///if the total score is the third highest////

// there needs to be a comparison here from local strorage for previous scores????

///// highest has to go to the one position
 
//need a array to build for scores after each game played the array starts empty
 //the scores have to be set in a array by number after each game 
 //this array has to be limited to only the current value of the lowest numbe in the array 
 //the arry shoul never be more than thre numbers  
 //value has to be high to low then the index has to be used to fill the list 
 //your gonna need a window*/
