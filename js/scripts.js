$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const personInput = $("input#person").val();
    console.log(heightInput);
    if (heightInput >= 48) {
      $(".tallRides").addClass("highlightRide");
      $(".mediumRides").addClass("highlightRide");
      $(".shortRides").addClass("highlightRide");

    $(".person").text(personInput);

    $("#responseToUser").show();


  });
});