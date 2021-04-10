var startButton = document.getElementbyID(`start-btn`)
var nextButton = document.getElementbyID("next-btn")
var questionElement = document.getElementById(`question`)
var answerButtonsElement = document.getElementById(`answer-buttons`)
var  currentQuestionsIndex

startButton.addEventListener(`click`, startGame)

function startGame() {
    console.log(`Started`)
    startButton.classList.add(`hide`)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove(`hide`)
    SetQuestion()
}

function SetQuestion() {
    resetState()
   showQuestion(currentQuestionsIndex)
}

function showQuestion(qustions){
questionElement.innerText = question.question
question.answer.forEach(answer => {
var button = document.createElement(`button`)
if (answer.correct) {
    button.dataset.correct = answer.correct
}
button.addEventListener(`click`, SelectAnswer)
answerButtonsElement.appendChild(button)
})
}

function resetState() {
    nextButton.classList.add(`hide`)
    while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
    }
}
function SelectAnswer(){
var selectedButton = e.target
var correct = selectedButton.dataset.correct
}

var questions = [
    {
        question: 'what is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '5', correct: false}
        ]
    }
]
