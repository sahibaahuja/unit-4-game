var losses = 0;
var wins = 0;
var totalScore = 0;
var targetNumber = randomInRange(19, 120);
var numberOptions = [
    randomInRange(1, 12),
    randomInRange(1, 12),
    randomInRange(1, 12),
    randomInRange(1, 12),
];

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (var i = 0; i < 4; i++) {
  $("#crystal" + i).attr("data-value", numberOptions[i]);
}

$(".crystal-pic").on("click", function() {
  totalScore += parseInt($(this).attr("data-value"))
  $("#total-score").text(totalScore);
  check()
});

$("#target-Number").text(targetNumber);


function check() {
if (totalScore === targetNumber) {
  wins++
  $("#Wins").text(wins);
  reset()
}

else if (totalScore > targetNumber) {
  losses++ 
  $("#Losses").text(losses);
  reset()
}
}

function reset() {
  totalScore = 0
  $("#total-score").text(totalScore)
  targetNumber = randomInRange(19, 120)
  $("#target-Number").text(targetNumber)
  numberOptions = [
    randomInRange(1, 12),
    randomInRange(1, 12),
    randomInRange(1, 12),
    randomInRange(1, 12)
  ]
  for (var i = 0; i < 4; i++) {
    $("#crystal" + i).attr("data-value", numberOptions[i]);
  }
}

// I did the best I could for some reason my target number is showing in my total score and 
// my crystals are coming out undefined 
