$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const personInput = $("input#person").val();
    $("person").text(personInput);
  });

  $("formTwo").submit(function(event) {
    event.preventDefault();
    const type = $("input:radio[name=type]:checked").val();
    });

  $("formThree").submit(function(event) {
    event.preventDefault();
    const simpleResponse = $("input:radio[name=simpleResponse]:checked").val();
    });

  $("formFour").submit(function(event) {
    event.preventDefault();
    const relationship = $("input:radio[name=relationship]:checked").val();
    });

  $("#responseToUser").show();
  });