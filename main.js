$("body").on("change", ".filter", function (e) {
	e.preventDefault();

	console.log("Hey, Y'all!");

	const $this_filter = $(this);
	const borough_type = $this_filter.val();

	console.log("Borough type " + borough_type);

	$(".item.active").removeClass("active");
	$("." + borough_type).addClass("active");

	console.log("We did it!")
});