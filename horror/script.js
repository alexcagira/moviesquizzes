const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () =>{
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    quizScore = 0;
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText= question.question;
    question.answers.forEach((answer) =>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonElement.appendChild(button);
    })
}


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerButtonElement.firstChild){
        answerButtonElement.firstChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton=e.target;
    const correct =selectedButton.dataset.correct;
    setStatusClass(document.body.correct);

    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct);
    });

    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide");
    }else{
        startButton.innerText ="Restart";
        startButton.classList.remove("hide");
    }
    if(selectedButton.dataset = correct){
        quizScore++;
    }
    document.getElementById('right-answer').innerHTML = quizScore;
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
}

function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions =[
    {
        question: "Which one of these is a JavaScript framework?",
        answers :[
            {text: "Phyton", correct: false},
            {text: "Django", correct: false},
            {text: "React", correct: true},
            {text: "Eclipse", correct: false}
        ],
    },

    {
        question: "Who is the prime minister of India?",
        answers :[
            {text: "Modi", correct: true},
            {text: "Gahndi", correct: false}
        ],
    },

    {
        question: "What is 4x3?",
        answers :[
            {text: "6", correct: false},
            {text: "12", correct: true}
        ],
    },

]