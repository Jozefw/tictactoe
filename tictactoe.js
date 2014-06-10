"use strict";

$(function() {

var current_turn = 'x';

	$('.ttt_table').delegate('td','click',function(e){
		var cell = $(e.target)
		var t = cell.html();
		console.log(cell);

		var current_value = t
		if(current_value == ''){
			cell.html(current_turn);

		current_turn =(current_turn== 'x') ? 'o' : 'x' ;
		}
	});

	// function resetBoard(){
	// // $('td').empty();
	// }
$('.reset_button').click(function(){
	$('td').empty();

})
});