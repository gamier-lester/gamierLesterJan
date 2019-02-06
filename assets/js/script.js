$("#claaa").click(function () {
	$("#about-education-overlay").toggle("slow");
});

$("#about-education-overlay-close").click(function () {
	$("#about-education-overlay").toggle("slow");
});

$("#page1-next").click(function () {
	// $("#page1").toggle("slow");
	// $("#page1-next").toggle("slow");
	// $("#page2").toggle("slow");
	// $("#page2-prev").toggle("slow");
	// $("#page2-next").toggle("slow");
	$(".page1").toggle("slow");
	$(".page2").toggle("slow");
});

$("#page2-prev").click(function () {
	// $("#page2").toggle("slow");
	// $("#page2-prev").toggle("slow");
	// $("#page2-next").toggle("slow");
	// $("#page1").toggle("slow");
	// $("#page1-next").toggle("slow");
	$(".page1").toggle("slow");
	$(".page2").toggle("slow");
});

$("#page2-next").click(function () {
	// $("#page2").toggle("slow");
	// $("#page2-next").toggle("slow");
	// $("#page2-prev").toggle("slow");
	// $("#page3").toggle("slow");
	// $("#page3-prev").toggle("slow");
	// $("#page3-next").toggle("slow");
	$(".page2").toggle("slow");
	$(".page3").toggle("slow");
});

$("#page3-prev").click(function () {
	// $("#page2").toggle("slow");
	// $("#page2-next").toggle("slow");
	// $("#page2-prev").toggle("slow");
	// $("#page3").toggle("slow");
	// $("#page3-prev").toggle("slow");
	// $("#page3-next").toggle("slow");
	$(".page2").toggle("slow");
	$(".page3").toggle("slow");
});

//$("#project-1").on("mouseover", function () {
	// console.log("asdasdasd");
	// $("#project-default").toggle("slow");
	// $("#project-1-description").toggle("fast");
	// $("#project-1-description").slideUp();
//	changeProjectDesc();
	// console.log(this.attr("id"));
//});

//$("#project-2").on("mouseover", function () { changeProjectDesc(); });
//$("#project-3").on("mouseover", function () { changeProjectDesc(); });

//$("#project-1").on("mouseexit", function () {
//	console.log("xcvxcvxcvxcv");
//});

function changeProjectDesc() {
	if ($(".active").attr("id") == "project-1") {
		// console.log('proj1');
		$("#project-default").hide();
		$("#project-2-description").hide();
		$("#project-3-description").hide();
		$("#project-1-description").show("slow");
	} else if ($(".active").attr("id") == "project-2") {
		// console.log('proj2');
		$("#project-default").hide();
		$("#project-1-description").hide();
		$("#project-3-description").hide();
		$("#project-2-description").show("slow");
	} else if ($(".active").attr("id") == "project-3") {
		// console.log('proj3');
		$("#project-default").hide();
		$("#project-1-description").hide();
		$("#project-2-description").hide();
		$("#project-3-description").show("slow");
	}
}

$('#carousel-control').on('slide.bs.carousel', function (ev) {
  var id = ev.relatedTarget.id;
  // console.log(id);
  switch (id) {
    case "project-1":
      	$("#project-default").hide();
		$("#project-2-description").hide();
		$("#project-3-description").hide();
		$("#project-1-description").show("slow");
  		break;
    case "project-2":
    	$("#project-default").hide();
		$("#project-1-description").hide();
		$("#project-3-description").hide();
		$("#project-2-description").show("slow");
		break;
    case "project-3":
	    $("#project-default").hide();
		$("#project-1-description").hide();
		$("#project-2-description").hide();
		$("#project-3-description").show("slow");
		break;
    default:
      	$("#project-default").show();
		$("#project-1-description").hide();
		$("#project-2-description").hide();
		$("#project-3-description").hide();
  }
})

$("#fleft").on("click", function () {
	$("#fleft").fadeToggle();
	$("#fright").fadeToggle();
});