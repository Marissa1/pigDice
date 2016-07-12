function randomnumber() {
  return Math.floor(Math.random() * (6)) + 1;
}
var play = function (currentNumbers) {
  var turnNumbers = []
  if (randomnumber>1){
    turnNumbers.push(randomnumber)
  }
  else if (randomnumber === 1){
    (turnNumbers = []);
  }
}




function Player(currentScore, turnNumbers) {
  this.currentScore = currentScore;
  this.turnNumbers = turnNumbers;
}

Player.prototype.display = function () {
  return this.currentScore + " " this.turnNumbers;
  }

var Player1 = new Player();
var Player2 = new Player();
$(document).ready(function() {

});
