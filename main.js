$("body").on("change", ".filter", function (e) {
	e.preventDefault();

	/* This console log is to make sure the filter works altogether making sure each page appears with its own picture and list */
	console.log("Hey, Y'all!");

	const $this_filter = $(this);
	const borough_type = $this_filter.val();
	/* This console log is to make sure each borough selection in the filter works*/
	console.log("Borough type " + borough_type);
	/* This is code is for the button for the filter */
	$(".item.active").removeClass("active");
	$("." + borough_type).addClass("active");

	console.log("We did it!")
});