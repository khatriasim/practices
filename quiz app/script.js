let questions = [{
    "question": "Qno 1 : What comes after 1?",
    "answer": "2",
    "options": ["1","3", "5", "2"]
},
{
    "question": "Qno 2 : What comes after 2?",
    "answer": "3", 
    "options": ["1","3", "5", "2"]
},
{
    "question": "Qno 3 : What comes after 3?",
    "answer": "4", 
    "options": ["4","3", "5", "2"]
}
]

let ques = document.querySelector(".question")
let options = document.querySelector(".options")
let option = document.querySelector(".option")
let btn = document.querySelector(".submit-btn")
let currentindex = 0
function displayquestion(){
   options.innerHTML = ""
    ques.textContent = questions[currentindex].question
    let optionHtml = ""
    const optionLetters = ["a", "b", "c", "d"]; // Define possible labels
    questions[currentindex].options.forEach((opt, index) => {
        optionHtml += `
            <div class="option">
                <input type="radio" id="option-${index}" name="question-0" value="${opt}">
                <label for="option-${index}">${optionLetters[index]}.) ${opt}</label>
            </div>
        `;
    });

    options.innerHTML = optionHtml
    
}
displayquestion()
let score = 0
let answer = questions[0].answer
btn.addEventListener("click", () => {
    // Get the selected radio button
    const selected = document.querySelector('input[type ="radio"]:checked');
    
    if (!selected) {
        alert("Please select an answer!");
        return;
    }
    const userAnswer = selected.value;
    const currentAnswer = questions[currentindex].answer; 
    console.log("User selected:", userAnswer);
    if (userAnswer === currentAnswer) {
        score += 1
        console.log("Correct answer!")
    }
      currentindex++
      if (currentindex < questions.length) {
          displayquestion();
        } else {
            let test = document.querySelector(".test")
            test.innerHTML = ""
            test.innerHTML = `<h2>Quiz finished! Final score: ${score} out of ${questions.length} </h2>`
            console.log("Quiz finished! Final score:", score, "out of", questions.length);
        }
        
    });
