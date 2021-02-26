var beginButton = document.getElementById("begin-btn") // this is the begin button on the html ....below to make it work.. on click
beginButton.addEventListener("click" , beginGame)
var continueButton = document.getElementById("continue-btn")
continueButton.addEventListener("click" ,function(){
    currentQuestionsIndex++
    setNextQuestion()
})



var questboxElement = document.getElementById("questbox")
var questionElement = document.getElementById("question")
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
    
        if(secondsLeft === 0) {
            clearInterval(timerInterval)
           
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
    score()
    console.log("score funk")
}

function setNextQuestion(){

    resetState()
    showQuestion(mixoQuestions[currentQuestionsIndex])
}
function resetState(){
    continueButton.classList.add("hide")
    while (choiceButtonElement.firstChild) {
        choiceButtonElement.removeChild
        (choiceButtonElement.firstChild)
    }
    
}

function showQuestion(question){
    //setting question in questbox
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
        button.addEventListener("click", selectAnswer,score)
        
        choiceButtonElement.appendChild(button)
    })
}


function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct

    Array.from(choiceButtonElement.children).forEach(button => {setStatusClass(button, button.dataset.correct)
    })

    continueButton.classList.remove("hide")
}
/// got to getthe score happenung

var txtRight = document.getElementById("correct")
var txtWrong = document.getElementById("wrong")
var txtTotal = document.getElementById("total")

var right=  0
var wrong=  0
var total=  0
function score(){
    console.log("score function ")
 if(question === true){
       right++;
       total++;
       txtRight.textContent= right
       txtTotal.textContent= total

   }
 if(question === false)
       wrong++;
       txtWrong.innerHTML = wrong 
}
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
    {
        question: "who let the bee's out!?!?!?",
        answers: [
            {text: "buzz", correct: false},
            {text: "buzz a buzz", correct: false},
            {text: " buzz   buzz buzz", correct: false},
            {text: "buzz buzz buzz buzz", correct: true} 
        ]
        
        
    },
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
    {
        question: "who let the bee's out!?!?!?",
        answers: [
            {text: "buzz", correct: false},
            {text: "buzz a buzz", correct: false},
            {text: " buzz   buzz buzz", correct: false},
            {text: "buzz buzz buzz buzz", correct: true} 
        ]
        
        
    },
]