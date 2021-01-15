$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const personInput = $("input#person").val();

    $(".person").text(personInput);

    const type = $("input:radio[name=type]:checked").val();
    const type = $("input:radio[name=type]:checked").val();
    const type = $("input:radio[name=type]:checked").val();

    const simpleResponse = $("input:radio[name=simpleResponse]:checked").val();
    const simpleResponse = $("input:radio[name=simpleResponse]:checked").val();
    const simpleResponse = $("input:radio[name=simpleResponse]:checked").val();

    const relationship = $("input:radio[name=relationship]:checked").val();
    const relationship = $("input:radio[name=relationship]:checked").val();
    const relationship = $("input:radio[name=relationship]:checked").val();


    $("#responseToUser").show();
    
  });
});