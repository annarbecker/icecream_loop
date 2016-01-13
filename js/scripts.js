$(document).ready(function() {
  $(".flavors").submit(function(event) {
    var flavors = ["first", "second", "third"]

    flavors.forEach(function(flavor) {
      var userInput = $("input#" + flavor).val();
      $("." + flavor).text(userInput);
    });
    $(".answer").show();

    event.preventDefault();
  });
});
