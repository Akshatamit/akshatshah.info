$(function() {
  // initialization code when DOM is ready
  $("#fruit li, #veg li").draggable({
    helper: "clone"
  }).css("cursor", "pointer");

  $("#cart").droppable({
    tolerance: "fit",
    drop: function(evt, ui) {
      // console.log("Drop event!");
      // console.log(evt);
      // console.log(ui);
      // droppedUI = ui;
      // alert("Dropping: " + ui.draggable.html());
      $("#cart").append("<li>" + ui.draggable.html() + 
                        " (<a href='dummy.html' class='remove'>" + "Remove</a>)" +
                       "</li>"
                       )
        .css("height", "auto");;
    }
  });
  $("#cart").on("click", "a.remove", function() {
    // console.log("About to remove an element");
    $(this).parent().remove();
    return false;
  });
  
  getCart = function() {
    /* returns all of the items in the cart
     this version just returns the whole string with html
    elements --- we want a version that returns an array of
    just the items  */
    
    items = [];
    
    $("#cart li").each(function() {
      contents = $(this).html();
      reg = /^(\w+.*) \(<a href/;
      res = contents.match(reg);
      // console.log(res[1]);
      items.push(res[1]);
    });
    return items;
  }
  
});
