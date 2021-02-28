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
var secondsLeft = 30
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
    }
    currentQuestionsIndex++
    setNextQuestion()
    restartButton.classList.remove("hide")
}
/// got to getthe score happenung score variables

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
        question: "who let the doggs out!?!?!?",
        answers: [
            {text: "roof", correct: true},
            {text: "roof a roof", correct: false},
            {text: " roof   roof roof", correct: false},
            {text: "roof roof roof roof", correct: false} 
        ]
        
        
        
    },
    {
        question: "who let the cats out!?!?!?",
        answers: [
            {text: "meow", correct: false},
            {text: "meow a meow", correct: true},
            {text: " meow   meow meow", correct: false},
            {text: "meow meow meow meow", correct: false} 
        ]
        
        
    },
    {
        question: "who let the birds out!?!?!?",
        answers: [
            {text: "chirp", correct: false},
            {text: "chirp a chirp", correct: false},
            {text: " chirp   chirp chirp", correct: true},
            {text: "chirp chirp chirp chirp", correct: false} 
        ]
        
        
    },
    {
        question: "who let the bee's out!?!?!?",
        answers: [
            {text: "buzz", correct: false},
            {text: "buzz a buzz", correct: false},
            {text: " buzz   buzz buzz", correct: false},
            {text: "buzz buzz buzz buzz", correct: true} 
        ]
        
        
    },
    // {
    //     question: "who let the bee's out!?!?!?",
    //     answers: [
    //         {text: "buzz", correct: false},
    //         {text: "buzz a buzz", correct: false},
    //         {text: " buzz   buzz buzz", correct: false},
    //         {text: "buzz buzz buzz buzz", correct: true} 
    //     ]
        
        
    // },
    // {
    //     question: "who let the doggs out!?!?!?",
    //     answers: [
    //         {text: "roof", correct: true},
    //         {text: "roof a roof", correct: false},
    //         {text: " roof   roof roof", correct: false},
    //         {text: "roof roof roof roof", correct: false} 
    //     ]
        
        
        
    // },
    // {
    //     question: "who let the cats out!?!?!?",
    //     answers: [
    //         {text: "meow", correct: false},
    //         {text: "meow a meow", correct: true},
    //         {text: " meow   meow meow", correct: false},
    //         {text: "meow meow meow meow", correct: false} 
    //     ]
        
        
    // },
    // {
    //     question: "who let the birds out!?!?!?",
    //     answers: [
    //         {text: "chirp", correct: false},
    //         {text: "chirp a chirp", correct: false},
    //         {text: " chirp   chirp chirp", correct: true},
    //         {text: "chirp chirp chirp chirp", correct: false} 
    //     ]
        
        
    // },
    // {
    //     question: "who let the bee's out!?!?!?",
    //     answers: [
    //         {text: "buzz", correct: false},
    //         {text: "buzz a buzz", correct: false},
    //         {text: " buzz   buzz buzz", correct: false},
    //         {text: "buzz buzz buzz buzz", correct: true} 
    //     ]
        
        
    // },
    // {
    //     question: "who let the bee's out!?!?!?",
    //     answers: [
    //         {text: "buzz", correct: false},
    //         {text: "buzz a buzz", correct: false},
    //         {text: " buzz   buzz buzz", correct: false},
    //         {text: "buzz buzz buzz buzz", correct: true} 
    //     ]
        
        
    // },
]