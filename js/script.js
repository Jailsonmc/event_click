$( "#button-center" ).click(function() {

	$(".container-center").css('display','block');
	$("#container-center").addClass('disabledContainer');
	$("#container-center").addClass('to_darken');

});	

$( "#button-botton" ).click(function() {

	$(".container-botton").css('display','block');
	//$("#container-botton").addClass('activeContainer');
	$("#container-center").removeClass('disabledContainer');
	$("#container-center").removeClass('to_darken');
	//$('.container-botton').click(true);

});	