// $ (document).ready(function()) {
//   $ ("button").click(function()){
//     if $("#subcription").val() === "";
//     alert("please enter number");
//
//   }

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {

    event.preventDefault();
    $("#list").empty();

    var userNumber = parseInt($("input#number").val());
    for (var count = 1; count <= userNumber; count++) { //Beginnning of for loop

      if (count % 3 === 0) { //first condition
        if (count % 5 === 0) { //second condition

          $("ul#list").append('<li> pingpong </li>');
        } else {
          $('ul#list').append('<li> ping </li>');
        }

      } else if (count % 5 === 0) {
        $('ul#list').append('<li> pong</li>');

      } else {
        $('ul#list').append('<li>' + count + '</li');
      }
    }
    $("#results").show();

  });

});
