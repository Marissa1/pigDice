function randomnumber() {
  return Math.floor(Math.random() * (6)) + 1;
}
var turnNumbers = []
var roll = function() {
  var something = randomnumber()
  if(something>1) {
    turnNumbers.push(something);
  } else if (something === 1) {
    turnNumbers = []
  }
}

function Player(currentScore, turnNumbers) {
  this.currentScore = currentScore;
  this.turnNumbers = turnNumbers;
}



Player.prototype.display = function () {
  return this.currentScore + " " + this.turnNumbers;
  }

var Player1 = new Player("Player1", [], true);
var Player2 = new Player("Player2", [], false);
$(document).ready(function() {
  $("form#dice").submit(function() {
    event.preventDefault();
    var numb = randomnumber();
    roll() //add the array code, maybe map//

    console.log(play())

  });

});
