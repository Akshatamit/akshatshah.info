//Code written by Akshat shah
//Drag and drop event
$(function() {
  $("#tv li, #tv1 li,#tv2 li,#tv3 li").draggable({
  helper: "clone"
  }).css("cursor", "pointer");
  $("#cart").droppable({
    tolerance: "fit",
    drop: function(evt, ui) {
      console.log("Drop event!");
      console.log(evt);
      console.log(ui);
      $("#cart").append("<li>" + ui.draggable.html() + 
      " (<a href='dummy.html' class='remove'>" + "Remove</a>)" +
      "</li>")
    .css("height", "auto");
    $("#cart").on("click", "a.remove", function() {
    console.log("About to remove an element");
    $(this).parent().remove();
        console.log($(this).parent())
    return false;
    });
    getCart = function() {
    items = [];
    $("#cart li").each(function() {
    contents = $(this).append(items);
    reg = /^(\w+.*) \(<a href/;
    res = contents.match(reg);
    items.push(res[1]);
    });
    return contents;
  }
  }
  })
//Hide all the videos
$(function(){
  $("#tv").hide()
  $("#tv1").hide()
  $("#tv2").hide()
  $("#tv3").hide()
//show all the video on click
$("#q6f").click(function(){
  $("#tv").slideDown() 
  $("#tv1").slideUp() 
  $("#tv2").slideUp() 
  $("#tv3").slideUp() 
})
$("#q7f").click(function(){
  $("#tv1").slideDown()
  $("#tv").slideUp()
  $("#tv2").slideUp()
  $("#tv3").slideUp()
})
$("#q8f").click(function(){
  $("#tv2").slideDown()
  $("#tv").slideUp()
  $("#tv1").slideUp()
  $("#tv3").slideUp()
})
$("#q9f").click(function(){
  $("#tv3").slideDown()
  $("#tv").slideUp()
  $("#tv1").slideUp()
  $("#tv2").slideUp()
})  
})
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
    $("#address1").append("Address is required").css("color", "red");
    evt.preventDefault();
    }
    });
    $("#name").blur(function() {
    console.log("Demo of the blur event");
    if ($("#name").val().length === 0) {
      $("#Error").append("Name is required").css("color", "red");
    }
    })
}) 

