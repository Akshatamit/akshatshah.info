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
        $(".note").show();
        
    },function() {
        // unhover handler
        console.log("unhover event");
        $(".note").hide();
        
    });
    
  });
//click on the image video
$(function(){
    $("#imgvideo").hide();
    $("#phone").click(function(){
        $("#imgvideo").toggle();
        vidElement = $("#imgvideo")[0];
        vidElement.pause();
    });
});
//image video
$(function(){
    $("#imgvideo2").hide();
    $("#phone2").click(function(){
        $("#imgvideo2").toggle();
        vidElement = $("#imgvideo2")[0];
        vidElement.pause();
    });
});


//image video 
$(function(){
    $("#imgvideo3").hide();
    $("#phone3").click(function(){
        $("#imgvideo3").toggle();
        vidElement = $("#imgvideo3")[0];
        vidElement.pause();
    });
});
  