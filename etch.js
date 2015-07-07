$(document).ready(function(){
	var columns = 16

	createPad(columns, 40);
	//create pad
	function createPad(columns, size) {
		for (var i = 0; i < columns * columns; i++ ) {
			var $pixel = $('<div class ="pixel" />').width(size).height(size);
			$("#container").append($pixel);
		}
	
	}

	function erase() {
		$('.pixel').remove();
	}

	$("#clear").click(function() {
		$('.pixel').css("background-color", "white");
		columns = parseInt(prompt('Grid cleared. How many columns do you want?'));
		pixelWidth = 640/columns;
		erase();
		createPad(columns, pixelWidth);
	});

	//draw
	$('#container').on('mouseenter', '.pixel', function() {
		$(this).css("background-color", "black");
	});
});