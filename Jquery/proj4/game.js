// Demo code for the Archaeology game
//
// Loaded by game.html
// Uses GameBoard object defined in board.js
//

// Warning! The function tryDig and the variable board are global variables!

// As global variables, tryDig and board can be accessed from the console
// Examples from console:
//     tryDig("c3");
// Note that tryDig just performs a "dig" operation on the board. You can
// also try this on the console:
//     obj = board.dig("d5");
//Update by Akshat shah


$(function () {
  
  var count = 0; 
  var excavated = 0;
    
  $("#Button").click(function(){  
  tryDig = function(targetCell)
  {  
    //This function allows you to keep track of the number of times you clicked the button
    count = count + 1;
    excavated = $("#square").click(function(){
    $("ruins").html(excavated)
    })
    
    $("#clickbutton").fadeOut(1000, function(){
    $("#clickbutton").html(count);
    $("#clickbutton").fadeIn(1000)
    });
    
    var targetObj = board.dig(targetCell);
      
    var img = new Image();
    img.src = "https://cdn3.vectorstock.com/i/1000x1000/73/42/cartoon-hut-vector-917342.jpg";
    
    var img1 = new Image();
    img1.src = "https://cdn1.vectorstock.com/i/1000x1000/94/25/cute-cartoon-house-vector-2139425.jpg";
    
    var img2 = new Image();
    img2.src = "https://cdn5.vectorstock.com/i/1000x1000/14/19/colosseum-in-italy-icon-in-cartoon-style-isolated-vector-12601419.jpg";
     
    var img3 = new Image();
    img3.src = "https://cdn4.vectorstock.com/i/1000x1000/94/33/cartoon-japanese-temple-vector-13239433.jpg";
    
    var img4 = new Image();
    img4.src = "https://cdn3.vectorstock.com/i/1000x1000/61/97/cartoon-fairytale-castle-vector-4416197.jpg";  
    
if(targetObj != undefined){
    if (targetObj.name == "Hut") {
      $("#cell" + targetCell).html(img);
      $("#display").html("Awesome you have found a " + targetObj.name);}
      
    if (targetObj.name == "House") {
      $("#cell" + targetCell).html(img1);
      $("#display").html("Awesome you have found a " + targetObj.name);}
    
    if (targetObj.name == "Forum") {
      $("#cell" + targetCell).html(img2);
      $("#display").html("Awesome you have found a " + targetObj.name);}
      
    if (targetObj.name == "Temple") {
      $("#cell" + targetCell).html(img3);
      $("#display").html("Awesome you have found a " + targetObj.name);}
      
    if (targetObj.name == "Palace") {
      $("#cell" + targetCell).html(img4);
      $("#display").html("Awesome you have found a " + targetObj.name);}
  
}
else {
      $("#cell" + targetCell).html('O').css('color', 'green');
      $("#ERROR").html("You have fail to find the hidden ruin please dug in other place!");}
     }  
  board = new GameBoard( );
  board.setBoard( );

tryDig(cell[4] + cell[5]);
});
});

