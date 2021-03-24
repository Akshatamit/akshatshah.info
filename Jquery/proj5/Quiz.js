//Written by Akshat shah
$(function(){
  var attempcount;
  attempcount = 0;
 
 $("#clickButton").click(function(){
  var totalscore = 0;
  attempcount = attempcount +1;

//Question 1
  $('#results').html("");
  if($('#Option1').prop("checked")){
    totalscore = totalscore + 0.5;
    $("#pic1").attr("src", "https://i1.wp.com/www.bms.co.in/wp-content/uploads/2010/08/right.png");
    }
  else if($('#Option2').prop("checked")){
    totalscore = totalscore ;
    $("#pic1").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")
    }
  if($('#Option3').prop("checked")){
    totalscore = totalscore + 0.5;
    $("#pic1").attr("src", "https://i1.wp.com/www.bms.co.in/wp-content/uploads/2010/08/right.png")
    }
   else 
   {$("#pic1").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")}  
  
     
       
//Question 2
$('#results').html("");
  if($('#Option4').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic2").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png");
    }
  else if($('#Option5').prop("checked")){
    totalscore = totalscore + 1;
    $("#pic2").attr("src", "https://i1.wp.com/www.bms.co.in/wp-content/uploads/2010/08/right.png")
    }
  else if($('#Option6').prop("checked")){
    totalscore = totalscore - 1;
    $('#results').html(
      $('#results').html()
    );
    $("#pic2").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")
    }
  else if($('#Option7').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic2").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")
    }
   else 
   {$("#pic2").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")}  
     
     
     
//Question 3
$('#results').html("");
  if($('#Option8').prop("checked")){
    totalscore = totalscore + 1;
    $("#pic3").attr("src", "https://i1.wp.com/www.bms.co.in/wp-content/uploads/2010/08/right.png");
    }
  else if($('#Option9').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic3").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")
    }
  else if($('#Option10').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic3").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")
    }
   else 
   {$("#pic3").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")} 
 

    
//Question 4
$('#results').html("");
  if($('#Option11').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic4").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png");
    }
  else if($('#Option12').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic4").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")
    }
  else if($('#Option13').prop("checked")){
    totalscore = totalscore + 1;
    $("#pic4").attr("src", "https://i1.wp.com/www.bms.co.in/wp-content/uploads/2010/08/right.png")
    }
   else 
   {$("#pic4").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")} 
     
 
     
//Question 4
$('#results').html("");
  if($('#Option14').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic5").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png");
    }
  else if($('#Option15').prop("checked")){
    totalscore = totalscore - 1;
    $("#pic5").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")
    }
  else if($('#Option16').prop("checked")){
    totalscore = totalscore + 1;
    $("#pic5").attr("src", "https://i1.wp.com/www.bms.co.in/wp-content/uploads/2010/08/right.png")
    }
   else 
   {$("#pic5").attr("src", "https://listimg.pinclipart.com/picdir/s/14-141358_right-and-wrong-symbols-clipart.png")}                             
     
        
//Pass or Fail?
    if(totalscore>="3")
        {$('#scoreHits').html("Congratulations you have passed the Quiz!")
         $("#pic6").attr("src", "https://i.pinimg.com/originals/3a/7c/20/3a7c201f1d37deb49412363d768bd865.png")}
     else
        {$('#scoreHits').html("Sorry you have failed the Quiz!")
         $("#pic6").attr("src", "https://png.pngitem.com/pimgs/s/8-82835_sad-face-emoji-png-sad-face-emoji-transparent.png")}
     
//Results
  $('#results1').html("You have scored" + " " + totalscore + "/5 " + "points." + "\n");
  $('#results').html("Number of Attempts: " + attempcount + " "  + "\n");  

});
    
    
    
//Hint buttons
//Toggle allows to click on the hint button to show and hide the text!
$("#hintButton").click(function(){
 $("#p1").toggle();
 $("#p1").html("There are less than seven letters! Also there are more than 1 answer!")
});
$("#hintButton2").click(function(){
  $("#p2").toggle();
  $("#p2").html("Opposite of front, it's for first four letters only!")
});
$("#hintButton3").click(function(){
  $("#p3").toggle();
  $("#p3").html("A thing where you can see you reflection on!")
});
$("#hintButton4").click(function(){
  $("#p4").toggle();
  $("#p4").html("It's a famous blocks toy game!");
});
$("#hintButton5").click(function(){
  $("#p5").toggle();
  $("#p5").html("You know it!");
});    
});
