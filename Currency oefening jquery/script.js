const rate = 0.92;
var dollar = parseInt(document.getElementById('dollar').value);
var convert = document.getElementById('convert').value;
var euro = (dollar * rate)

$('#convert').on('click', function() {

    // alert('Dit is een converter');
    var input = $('input#euro').val();

    var result = rate * input;

    $('input#dollar').val(result);
});