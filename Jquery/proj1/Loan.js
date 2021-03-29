// payment.js written by Akshat Shah
console.log("hey!!!");
$(function(){
     console.log("getting there!");
     $("#paymentButton").click(function(){
     console.log("almost there!");
     var payment = (Number($("#loanField").val())*Number($("#rateField").val())/1200.0)/(1-Math.pow(1.0+Number($("#rateField").val())/1200.0,-12.0* Number($("#durationField").val())));
     var message = "Monthly payment:" + "$" + payment.toFixed(2);
     $("#display").html(message);
     });
console.log("yayy, done!")
});
