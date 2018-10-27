
var gem1 = 0
var gem2 = 0
var gem3 = 0
var gem4 = 0
var win = 0
var lose = 0
var computerGuess = 0
var score = 0
var total = 0


lose = localStorage.getItem("#lose");
win = localStorage.getItem("#win");


//Program thinks of a random number 19 - 120
 computerGuess = [Math.floor(Math.random() * 103)+19];
 computerGuess=Number(computerGuess);
$("#computerNum").text(computerGuess);


//User clicks gems to get to randomized number //Gems have hidden values //the score shows what the current number the user is at

checkScore = function(){
    console.log(total, computerGuess)
    if (computerGuess < total){
        lose++;
        document.getElementById("lose").innerHTML = ("You Lose: " + lose)
    }
    else if (total === computerGuess) {
        win++;
    document.getElementById("win").innerHTML = ("You Escaped! Won: " + win)
    };
}

// //need to reset the computerGuess number
// computerNumReset = function() {
// computerGuess = [Math.floor(Math.random() * 103)+19];
//     if (computerGuess <= total) {
//         $("#computerNum").text(computerGuess);
//     }
// };
var gemReset = function () {
    gem1 = Math.floor(Math.random() * 11)+1;
    gem1=Number(gem1);
    gem2 = Math.floor(Math.random() * 11)+1;
    gem2=Number(gem2);
    gem3 = Math.floor(Math.random() * 11)+1;
    gem3=Number(gem3);
    gem4 = Math.floor(Math.random() * 11)+1;
    gem4=Number(gem4);
    console.log("gem1: " + gem1);
    console.log("gem2: " + gem2);
    console.log("gem3: " + gem3);
    console.log("gem4: " + gem4);
}

// need to set the score back to 0 maybe need to add another function 
var scoreReset = function () {
    if (total >= computerGuess){
    computerGuess = (Math.floor(Math.random() * 103)+19);
    $("#computerNum").text(computerGuess);
    $("#scoreNum").html("0")
    total = 0
    gemReset();
     }
}

var startGame = function() {
    checkScore()
    scoreReset()
    gemReset()

}

$("#blueGem").click(function(){
total = gem1 + total 
$("#scoreNum").text(total)

checkScore()
scoreReset()

});

$("#greenGem").click(function(){
total = gem2 + total 
$("#scoreNum").text(total)

checkScore()
scoreReset()

});

$("#yellowGem").click(function(){
total = gem3 + total 
$("#scoreNum").text(total)
checkScore()
scoreReset()

});

gem4 = [Math.floor(Math.random() * 11)+1];
gem4=Number(gem4);
$("#redGem").click(function(){
total = gem4 + total 
$("#scoreNum").text(total)
checkScore()
scoreReset()

});

startGame();

// var comparison = (total === computerGuess)
//once the user score = the computer number the game is won //if the game is one the wins increases // chnages content win:  
// $(total === computerGuess).text("You win!")

//if user's score exceeds the computer number then user looses //if the game is lost the losses increases // chnages content lose:

//When the game is won the score resets to 0 and a "you win" message pops up in the win/lose box
//computer then thinks of a new number and the crystal numbers also change to a value 1-12

