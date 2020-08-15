//array questions + answers for quiz
var quizArray = [
    {
        q: "Commonly used data types DO NOT Include:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: "3"
    }, {
        q: "The condition in an if / else statement is enclosed within _____",
        choices: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        answer: "2"
    }, {
        q: 'Arrays in JavaScript can be used to store',
        choices: [
            'numbers and strings',
            'other arrays',
            'boolean',
            'all of the above'
        ],
        answer: "4"
    }, {
        q: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: [
            "commas",
            "curly brackets",
            "quotes",
            "parenteses"
        ],
        answer: "3"
    }, {
        q: "A very useful tool used during development and debugging for printing content to the debugger is",
        choices: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console log"
        ],
        answer: "4"
    }
];







// defining variables 
var timerEl = document.querySelector("#countdown");
var buttonStartEl = document.querySelector("#start-quiz");
var containerEl = document.querySelector(".container");
var indexNb = 0;
var timeLeft = 100;
var userInfo = {
    score: 0
};









// mutlipe choice question display
var displayMCQ = function () {

    // timer
    var countdown = setInterval(function () {

        // loop for time
        if (timeLeft > 0) {
            containerEl.innerHTML = "";            
            containerEl.classList.remove("center");
            timerEl.innerHTML = timeLeft;           

            // continue questions
            if (indexNb < quizArray.length) {
                // create and display new question
                var questionEl = document.createElement("h1");
                questionEl.textContent = quizArray[indexNb].q;
                containerEl.appendChild(questionEl);
                // create and display new choices
                var choicesListEl = document.createElement("ul");
                var choicesArray = quizArray[indexNb].choices;      
                for (var i = 0; i < choicesArray.length; i++) {     
                    var choicesListItemEl = document.createElement("li");
                    choicesListItemEl.textContent = `${i+1}. ${choicesArray[i]}`;
                    choicesListItemEl.className = "choice";
                    choicesListItemEl.setAttribute("data-choice-nb", i+1);
                    choicesListEl.appendChild(choicesListItemEl);
                }
                containerEl.appendChild(choicesListEl);
                timeLeft--;                                         
            }
            // game over
            else {
                clearInterval(countdown);          
                timerEl.innerHTML = timeLeft;
                userInfo.score = timeLeft       
                displayScore();                     
            }
        }

        // pause 
        else { 
            containerEl.innerHTML = "";         
            clearInterval(countdown);           
            timerEl.innerHTML = timeLeft;       
            displayScore();                    
        }
    }, 1000);
}








var choiceButtonHandler = function (event) {
    // verify answer
    if (event.target.matches(".choice")) {
        var choiceNb = event.target.getAttribute("data-choice-nb");
        verifyAnswer(choiceNb);
    }
}

var verifyAnswer = function (userAnswer) {
    var feedback = document.createElement("p");
    if (userAnswer === quizArray[indexNb].answer) {
        feedback.innerHTML = '<div class="feedback"><hr>Correct!</div>';
    }
    else {
        feedback.innerHTML = '<div class="feedback"><hr>Wrong!</div>';
        timeLeft -= 10;
    }
    containerEl.appendChild(feedback);
    indexNb++; 
    setTimeout(displayMCQ, 1000);
}








var displayScore = function () {
   
   
    // ALL DONE
   var messageEl = document.createElement("h1");
   messageEl.textContent = "All done!";
   containerEl.appendChild(messageEl);



   // FINAL SCORE
   var finalScoreEl = document.createElement("p");
   finalScoreEl.textContent = `Your final score is ${userInfo.score}.`;
   containerEl.appendChild(finalScoreEl);








//    // Final form
//    var formEl = document.createElement("form");
//    var initialsEl = document.createElement("div");
//    initialsEl.className = "form-item";
//    initialsEl.innerHTML = 'Enter initials: <input type="text" name="initials" class="text-input"/>';
//    formEl.appendChild(initialsEl);
//    var submitButtonEl = document.createElement("div");
//    submitButtonEl.className = "form-item";
//    submitButtonEl.innerHTML = '<button class="btn" id="save-score" type="submit">Submit</button>';
//    formEl.appendChild(submitButtonEl);
//    containerEl.appendChild(formEl);
//    submitButtonEl.addEventListener("click", submitInitials);
// }



// var submitInitials = function () {
//     event.preventDefault();
//     var initialsInput = document.querySelector("input[name='initials']").value;
//     if (!initialsInput) {
//         alert("Please enter name");
//         return false;
//     }
//     userInfo.initials = initialsInput;
//     saveScore();
//     var button = document.querySelector('#save-score');
//     button.disabled = true;
// }



// var saveScore = function () {
//     // pick up from local storage
//     var topFiveSaved = localStorage.getItem("topFive");
//     if (!topFiveSaved) {
//         var userArr = [];
//         userArr.push(userInfo);
//         localStorage.setItem("topFive", JSON.stringify(userArr));
//         alert('You are added to the top 5 list! Click on "View high scores" to see the top scores.');
//     }
//     else {
//         topFiveSaved = JSON.parse(topFiveSaved);
//         if (topFiveSaved.length < 5) {
//             topFiveSaved.push(userInfo);
//             alert('You are added to the top 5 list! Click on "View high scores" to see the top scores.');
//         }
//         else {
//             topFiveSaved = evaluateScore(topFiveSaved);
//         }
//         topFiveSaved.sort(compare);
//         localStorage.setItem("topFive", JSON.stringify(topFiveSaved));
//     }
// }



// var evaluateScore = function (topFive) {
//     topFive.sort(compare);
//     if (topFive[4].score < userInfo.score) {
//         alert('You did it! Click on "View high scores" to view score.');
//         topFive.pop();
//         topFive.push(userInfo);
//     }
//     else {
//         alert("RIP TRY AGAIN!");
//     }
//     return topFive;
// }










// // top 5
// var compare = function (userA, userB) {
//     var scoreA = userA.score;
//     var scoreB = userB.score;
//     var comparison = 0;
//     if (scoreA > scoreB) {
//         comparison = -1;
//     }
//     else if (scoreA < scoreB) {
//         comparison = 1;
//     }
//     return comparison;
// }

// buttonStartEl.addEventListener("click", displayMCQ);
// containerEl.addEventListener("click", choiceButtonHandler);