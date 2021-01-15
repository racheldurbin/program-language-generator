$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const personInput = $("input#person").val();

    $(".person").text(personInput);

    $("#responseToUser").show();
    
  });
});