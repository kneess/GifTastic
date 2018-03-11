var topics = ["apple", "salad", "quinoa", "rice", "tofu", "noodles", "broccoli", "chicken", "burrito", "hamburger"]

function newButtons() {

	$("#foodButtons").empty();

	for (var i = 0; i < topics.length; i++) {
		var newButton = $('<button>');
		newButton.addClass("foodButton")
		newButton.attr("data-topics", topics[i]);
		newButton.text(topics[i]);
		$("#foodButtons").append(newButton);


	}
}
$("#addFood").on("click", function (event) {
	event.preventDefault();

	var newFood = $("#foodInput").val().trim();
	topics.push(newFood);
	$("#foodInput").val("");
	newButtons();
});
newButtons();

$(".foodButton").on("click", function () {
	$("#foodGifsHere").empty();
	var foodChosen = $(this).attr("data-topics");
	console.log(foodChosen);

	var queryURL = "https://api.giphy.com/v1/gifs/search?q="
		+ foodChosen + "&api_key=MpllQpfM1mnizCgb6mPiIBCR9x3e3RRq&limit=10&rating=pg-13"
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: "GET"
	})
		.then(function (response) {
			console.log(response);
			var results = response.data;
			for (var i = 0; i < results.length; i++) {
				var foodDiv = $("<div>");
				var p = $("<p>").text("Rating: " + results[i].rating);
				var foodImage = $("<img>");
				foodImage.addClass("foodGiphys");
				foodImage.attr("src", results[i].images.fixed_height_still.url);
				foodImage.attr("data-still", results[i].images.fixed_height_still.url);
				foodImage.attr("data-animate", results[i].images.fixed_height.url);
				foodImage.attr("data-state", "still");
				foodDiv.append(p);
				foodDiv.append(foodImage);
				$("#foodGifsHere").append(foodDiv);
			}

		})
});

$(".container").on('click', ".foodGiphys" ,function () {
	console.log("turtle");
	//	var state = $(this).attr("data-state");

	//	var state = $(this).attr("data-state");
	//		if(state == "still") {
	//			$(this).attr("src", $(this).attr("data-animate"));
	//			$(this).attr("data-state", "moving");
	//		} else {
	//			$(this).attr("src", $(this).attr("data-still"));
	//			$(this).attr("data-state", "still");
	//		}

});
