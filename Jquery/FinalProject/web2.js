//Code written by Akshat Shah


//For Q6FN
$(function(){     
//image  for Q6FN
var img9 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-tvs/pdp/02212018/gallery/01_QN65Q6FNAFXZA_001_Front_Eclipse-Silver.jpg?$product-details-jpg$";
//image 10 for Q6FN
var img10 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-tvs/pdp/02212018/gallery/04_QN65Q6FNAFXZA_002_Back_Eclipse-Silver.jpg?$product-details-jpg$";
//id for changing image on click
$("#changeimg4").click(function () {
$(this).prop('src', function(index, currentSource) {
//swaping images back and forth
return currentSource == img10 ? img9 : img10;});
});
});
//Click on text to slide down the video and stop the video when click on the text again
$(function(){
$("#video3").hide()
$("#q6").click(function(){
$("#video3").toggle()
vidElement = $("#video3")[0];
    vidElement.pause();
});
});




//For Q7FN
$(function(){  
//image 1 for Q7FN
var img7 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-tvs/pdp/qn65q7fnafxza/gallery/01_QN65Q7FNAFXZA_001_Front_Eclipse-Silver.jpg?$product-details-jpg$";
//image 2 for Q7FN
var img8 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-tvs/pdp/qn65q7fnafxza/gallery/04_QN65Q7FNAFXZA_002_Back_Eclipse-Silver.jpg?$product-details-jpg$";
//id for changing image on click
$("#changeimg3").click(function () {
$(this).prop('src', function(index, currentSource) {
//swaping images back and forth
return currentSource == img8 ? img7 : img8;
});
});
});
$(function(){
$("#video2").hide()
$("#q7").click(function(){
$("#video2").toggle()
vidElement = $("#video2")[0];
    vidElement.pause();
});
});



//For Q8FN
$(function(){
//image 1 for Q8FN
var img1 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-tvs/pdp/qn65q8fnbfxza/gallery/20180220/01_QN65Q8FNBFXZA_001_Front_Carbon-Silver-20180220.jpg?$product-details-jpg$";
//image 2 for Q8FN
var img2 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-tvs/pdp/qn65q8fnbfxza/gallery/20180220/04_QN65Q8FNBFXZA_002_Back_Carbon-Silver-20180220.jpg?$product-details-jpg$";
//id for changing image on click
$("#changeimg").click(function () {
$(this).prop('src', function(index, currentSource) {
//swaping images back and forth
return currentSource == img2 ? img1 : img2;
});
});
});
$(function(){
$("#video").hide()
$("#q8").click(function(){
$("#video").toggle()
vidElement = $("#video")[0];
    vidElement.pause();
});
});




//For Q9FN
 $(function(){
//image 5 for Q9FN
var img5 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled/q9/gallery/01_QN75Q9FNAFXZA.jpg?$product-details-jpg$";
//image 6 for Q9FN
var img6 = "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled/q9/gallery/04_QN75Q9FNAFXZA.jpg?$product-details-jpg$";
//id for changing image on click
$("#changeimg2").click(function () {
$(this).prop('src', function(index, currentSource) {
//swaping images back and forth
return currentSource == img6 ? img5 : img6;
});
});
});
$(function(){
$("#video1").hide()
$("#q9").click(function(){
$("#video1").toggle()
vidElement = $("#video1")[0];
    vidElement.pause();

});
//Prices for all the tv's
$(".price").each(function() {    
    var topPos = - $(this).outerHeight() + "px";
     $(".pricing").hover(function() {
        console.log("hover event!");
         $(this).children(".price").show()},
         function() {
        console.log("unhover event");
        $(".price").hide();  
    });
});
});
 
//Buy samsung phones
$(function(){
//image 11 for s10+
var img11 = "https://purepng.com/public/uploads/large/samsung-galaxy-s10-ceramic-black-front-anw.png";
//image 12 for s10+
var img12 = "https://purepng.com/public/uploads/large/samsung-galaxy-s10-ceramic-black-back-uzy.png";
//id for changing image on click
$("#changeimg5").click(function () {
$(this).prop('src', function(index, currentSource) {
//swaping images back and forth
return currentSource == img12 ? img11 :img12 ;
});
});
});
    
           
//Form  
$("form").submit(function(evt) {
    if ($("#name").val().length === 0) {
    $("#Error").append("Name is required").css("color", "red");
    evt.preventDefault();
    }
    if ($("#mail3").val().length === 0) {
    $("#Error1").append("E-mail is required").css("color", "red");
    evt.preventDefault();
}
})



//This function helps to calculate the price of the phone when choose the storage!
$(function() {
  $(function() {
    return $("#price-button").click(function() {
      var  message, storage, price, totalAmount,s101,s102,s103;
      s101 = " $1099"
      s102 = " $1399"
      s103 = " $1899"
      storage = $("#storageChoice").val();
      if (storage === "128GB") {
        price = s101;
      } else if (storage === "256GB") {
        price = s102;
      } else {
        price = s103;
      }
      totalAmount = price ;
      message = "Your total amount is" + totalAmount + " plus Taxes.";
      return $("#result").html(message);
    });
  });

})
//video function,Helps to restart the video 
$(function() {
  vidElement = $("#vupload")[0];
  $("#restartButton").click(function() {
    vidElement.currentTime = 0;
    vidElement.play();
  });
});

