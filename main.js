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


var clockElement = document.getElementById("clock")
var secondsLeft = 30
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        clockElement.textContent = "TIME*(" + secondsLeft + ")*TIME";

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000);
}




function beginGame(){
    console.log("first function succes!!")
    beginButton.classList.add("hide")
    questboxElement.classList.remove("hide")
    console.log("let the hide games begin")
    // mix the questions here 
    currentQuestionsIndex = 0
    mixoQuestions = questions.sort(() => Math.random - .5)
    console.log("the mix is above!")

    setNextQuestion()
    setTime()

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
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener("click", selectAnswer)
        
        choiceButtonElement.appendChild(button)
    })
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    Array.from(choiceButtonElement.children).forEach(button => {setStatusClass(button, button.dataset.correct)
    })
    continueButton.classList.remove("hide")
}

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

}



var questions = [
    {
        question: "who let the doggs out!?!?!?",
        answers: [
            {text: "roof", correct: false},
            {text: "roof a roof", correct: false},
            {text: " roof   roof roof", correct: true} 
        ]
    }
]