var buttonClearEl = document.querySelector("#clear");
var highScoresListEl = document.querySelector(".high-scores");

var displayHighScores = function () {
    // get scores
    var highScores = localStorage.getItem("topFive");
    if (!highScores) {
        alert("Be the first person to get the highest score!");
    }
    else {
        highScores = JSON.parse(highScores);
        for (var i = 0; i < highScores.length; i++) {
            var highScoresListItemEl = document.createElement("li");
            highScoresListItemEl.textContent = `${i+1}. ${highScores[i].initials} - ${highScores[i].score}`;
            highScoresListItemEl.className = "score-item";
            highScoresListEl.appendChild(highScoresListItemEl)
        }
    }
}

var clearScores = function () {
    localStorage.removeItem("topFive");
    highScoresListEl.innerHTML = "";
}
displayHighScores();
buttonClearEl.addEventListener("click", clearScores);