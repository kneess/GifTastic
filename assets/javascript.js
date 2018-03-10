var topics = ["apple","salad","quinoa","rice","tofu","noodles","broccoli","chicken","burrito","hamburger"]

function newButtons(){

		$("#foodButtons").empty();

for (var i = 0; i < topics.length; i++) {
	var newButton = $('<button>');
	newButton.addClass("foodButton")
	newButton.attr("data-topics", topics[i]);
	newButton.text(topics[i]);
	$("#foodButtons").append(newButton);

}
}
$("#addFood").on("click", function(event) {
	event.preventDefault();

	var newFood = $("#foodInput").val().trim();
	topics.push(newFood);
	$("#foodInput").val("");
	newButtons();
});
newButtons();

$("#foodButtons").on("click", function() {
	var foodChosen = $(this).attr("data-topics");

	var queryURL = "https://api.giphy.com/v1/gifs/search?q="
	+ "quinoa" +"&api_key=dc6zaTOxFJmzC"
	console.log(queryURL);
	$.ajax({
		URL: queryURL,
		method: "GET"
	})
	.then(function(response){
		console.log(response);
	})
})