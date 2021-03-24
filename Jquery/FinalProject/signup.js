//Maitri shah

$(function(){
$("form").submit(function(evt) {
    
    if ($("#name").val().length === 0) {
    $("#Error").append("Name is required").css("color", "red");
    evt.preventDefault();
    }
    
    if ($("#mail").val().length === 0) {
    $("#Error1").append("E-mail is required").css("color", "red");
    evt.preventDefault();
    }
    
    if ($("#zipcode").val().length === 0) {
    $("#zip").append("Zip Code is required").css("color", "red");
    evt.preventDefault();
    }
    
    });
    $("#name").blur(function() {
    console.log("Demo of the blur event");
    if ($("#name").val().length === 0) {
      $("#Error").append("Name is required").css("color", "red");
    }
    });
});