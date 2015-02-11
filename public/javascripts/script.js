console.log("LINKED");

var db = new Firebase("https://burning-torch-5523.firebaseio.com/")



db.limitToLast(5).on("child_added", function (snapshot) {
	console.log(snapshot);
	var message = snapshot.val();
	console.log(message.message);
	var new_message = $("<li>").text(message.message);
	$("#chat_log").append(new_message);

})


$(function (){

	$("#form").on("submit", function (e) {
		e.preventDefault();

		var $input = $("input").val();
		db.push( {message: $input} );
		$("input").val("");

	})



})