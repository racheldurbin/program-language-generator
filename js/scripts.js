$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const personInput = $("input#person").val();

    $(".person").text(personInput);

    $("#responseToUser").show();

    event.preventDefault();
  });
});