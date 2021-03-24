//Hide all the forms 
$(function(){
  $("#storage").hide();
  $("#storagexl").hide();
  $("#color").hide();
  $("#colorxl").hide();
  $("#Factory").hide();
  $("#Factoryxl").hide();
  $("#promotion").hide();
  $("#promo").hide();
  $("#mail").hide();
  $("#mail1").hide();
  $("#mail2").hide();
  $("#mail3").hide();
  $("#mail4").hide();
  $("#img1").hide();
  $("#img2").hide();
  $(".price").hide();
  $("#name").focus();
  // Purchase reg. variant
  $("#purchase").click(function() {
    $("#storage").slideDown(1500);
    $("#color").slideDown(1500);
    $("#Factory").slideDown(1500);
    $("#storagexl").slideUp();
    $("#colorxl").slideUp();
    $("#promotion").slideUp();    
    $("#promo").slideUp();    
    $("#img1").slideUp();    
    $("#img2").slideDown();    
    $("#mail").slideDown(1500);    
    $("#mail1").slideDown(1500);    
    $("#mail2").slideDown(1500);    
    $("#mail3").slideDown(1500);    
    $("#mail4").slideUp();    
  });
  //Purchase Xl variant
  $("#purchase1").click(function() {
    $("#storage").slideUp();
    $("#storagexl").slideDown(1500);
    $("#color").slideUp();
    $("#colorxl").slideDown(1500);
    $("#Factory").slideDown(1500);
    $("#promotion").slideDown(1500);  
    $("#promo").slideDown(1500);  
    $("#mail").slideDown(1500);    
    $("#mail1").slideDown(1500);    
    $("#mail2").slideDown(1500);
    $("#mail3").slideDown(1500);
    $("#mail4").slideUp();
    $("#img1").slideDown(1500);
    $("#img2").slideUp();
  });
  //No purchase
   $("#nopurchase").click(function() {
    $("#storage").slideUp();
    $("#storagexl").slideUp();
    $("#color").slideUp();
    $("#colorxl").slideUp();
    $("#Factory").slideUp();
    $("#promotion").slideUp();
    $("#promo").slideUp();
    $("#mail").slideDown();    
    $("#mail1").slideUp();    
    $("#mail2").slideDown(1500);
    $("#mail3").slideDown(1500);
    $("#mail4").slideDown(1500);
    $("#img1").slideUp()
    $("#img2").slideUp()
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
    if ($("#address").val().length === 0) {
    $("#address1").append("Address is required, so we can ship your order to the correct desitination!").css("color", "red");
    evt.preventDefault();
    }
    });
    $("#name").blur(function() {
    console.log("Demo of the blur event");
    if ($("#name").val().length === 0) {
      $("#Error").append("Name is required").css("color", "red");
    }
    })
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