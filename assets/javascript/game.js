



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
  $("#crystal" + i).attr("data-value", i);
}

$(".crystal-pic").on("click", function() {
  alert($(this).attr("data-value"));
});

totalScore += parseInt($(this).attr("data-value"))
$("#total-score").text(targetNumber);

if (totalScore === targetNumber) {
  wins++
  $("#").text();
  reset()
}

else if (totalScore > targetNumber) {
  losses++ 
  $("#").text();
  reset()
}

// I did the best I could for some reason my target number is showing in my total score and 
// my crystals are coming out undefined 
