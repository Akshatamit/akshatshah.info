$(function(){
   
    $("#eType").autocomplete({source: ["S10 5g launch event", "Level Up", "No noise", "Qled tv series","Make with Alicia Ward","Galaxy wellness session"]
        
    });
//Datepicker method returns the calender 

     $("#date").datepicker({showAnim: 'slideDown'});
    
    
    $("#sButton").click(function(){
   
    //create variables
     var eventType, eventDate;
    //to get the value that got selected    
    eventType = $("#eType").val();
    //calling datepicker and giving string as an arguement. it functions as a command
    //UI api documentation online has all the widgets  listed
    //you can get date by calling getDate as a command
    eventDate = $("#date").datepicker("getDate");
        
    
    //to access it from the console
    //d = eventDate; //uncomment to examine date d
    message = "Your " + eventType + " is scheduled for " + eventDate.toDateString() + ".";
        
    //display the message
    //take a content and having it inserted in the html 
    //html replace what is in the tag
    $("#display").html(message);
       
   }); 
    
    $("form").submit(function() {
    
    if ($("#user").val().length === 0) {
      // alert("need email");
      $("#uPanel").append("Email is required").css("color", "red");
      return false;
    }
    
  });
    
    
});
  

$(function(){
    $("#imgvideo").hide();
    $("#phone").click(function(){
        $("#imgvideo").toggle();
        vidElement = $("#imgvideo")[0];
        vidElement.pause();
    });
    
    
    
});
    
$(function() {
    $(".note").hide();
    $(".notable").css("position", "relative");
    
    $(".note").each(function() {
        var topPos = - $(this).outerHeight() + "px";
        // $(this).css("position", "absolute");
        // $(this).css("left", "0");
        // $(this).css("top", topPos);
        $(this).css({
            position: "absolute",
            left: "0",
            top: topPos  
        });
        
    });
    
    $(".notable").hover(function() {
        //hover handler
        console.log("hover event!");
        $(this).children(".note").show();
        // $(".note").show();
        
    }, function() {
        // unhover handler
        console.log("unhover event");
        $(".note").hide();
        
    });
    
  });    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
