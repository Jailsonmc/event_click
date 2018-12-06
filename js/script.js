$( "#button-center" ).click(function() {

	//$('.container-center').click(false);
	//$(".container-center").pointer-events:none;

	$(".container-center").css('display','block');
	$(".container-center").css('disabledContainer');

	$(".container-center").css('try-modal');
  	//$(".btn2,.btn3").addClass("disabledbutton");

});	

$( "#button-botton" ).click(function() {

	$(".container-botton").css('display','block');
	$(".container-botton").css('activeContainer');
	//$('.container-botton').click(true);

});	