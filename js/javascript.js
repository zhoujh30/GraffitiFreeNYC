$('#makeBlack').click(function() {
  $('#myFirstDiv').css('color', 'black')
  $('#myFirstDiv').css('background-color', '#cccccc');
});

$('#makeBlue').click(function() {
  $('#myFirstDiv').css('color', 'blue'),
  $('#myFirstDiv').css('background-color', '#bdd7e7');
});

$('#makeRed').click(function() {
  $('#myFirstDiv').css('color', 'red'),
  $('#myFirstDiv').css('background-color', '#fee5d9');
});

var myNumber = 36;

$('#addOne').click(
  function() {
    myNumber = myNumber + 1;
    $('#myNumber').text(myNumber);
    alert('Thanks for your feedback!');
  }
)


