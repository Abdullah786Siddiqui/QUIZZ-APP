
const quizQuestions =[
    {
        question:"Whats the Starting letter of Abdullah",
        options:["A","B","F","C"],
        answer:"A"
    },
    {
        question:"What the Hobby of Abdullah",
        options:["Gym","Cyclling","Dancing","Stuyding"],
        answer:"Gym"
    },
    {
        question: "What Abdullah Nowday learning",
        options:["Javascript","React","Bootstrap","Nothing"],
        answer:"Javascript"

    },
    {
        question:"What the University name of Abdullah",
        options:["ILMA","NED","MAJU","KU"],
        answer:"ILMA"
    }
];



let currentQuestionIndex = 0;
let score = 0;


const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");




function loadQuestion (){
  const currentQuestion = quizQuestions[currentQuestionIndex];  
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option); 
        li.appendChild(button)
        optionsContainer.appendChild(li) 
          
    })
}




function checkAnswer(Selectedoption){
    let correctAnswer = quizQuestions[currentQuestionIndex].answer;
    let buttons = optionsContainer.getElementsByTagName("button");

    // Disable all buttons after selecting one
    for (let btn of buttons) {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.style.backgroundColor = "green"; // Correct answer background green
        }
        if (btn.textContent === Selectedoption && Selectedoption !== correctAnswer) {
            btn.style.backgroundColor = "red"; // Selected wrong answer background red
        }
    }
    
    if(Selectedoption === correctAnswer){
        score++
        
    }
   
    nextBtn.style.display = "block";
   
};

function nextQuestion(){
    currentQuestionIndex++
    if(currentQuestionIndex < quizQuestions.length){
        loadQuestion()
    }else{
        showResults()
    }
}

function showResults(){
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    nextBtn.style.display ="none"
    resultContainer.innerHTML = `<h2>Your Score is ${score}  Out of ${quizQuestions.length}</h2>`
}



loadQuestion()


nextBtn.addEventListener("click",nextQuestion)

