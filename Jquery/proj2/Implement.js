var result1;
$(function() {
    dice = new DiceSet();

    $("#rollButton").click(function() {
        
        result = dice.roll();
        numDice = result.length;
        $("#result").html(" We Just rolled " + numDice + " dice");
        $("#result2").html("Here is the outcome of each dice rolled: " + result);
        
        result1 = dice.sides;
        $("#result5").html("Each dice has " + result1 + " sides");
        
        hist = dice.history;
        $("#result3").html("History so far is " + hist);
        
        average = dice.getAverage();
        $("#result4").html("The average is " + average);
    })
//The function below will allow user to reset the stats, so they can start rolling the dice from all over again!    
    $("#button2").click(function(){
var Reset1 = dice.reset();
$("#result6").html(Reset1)   
}) 
})