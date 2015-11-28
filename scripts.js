(function () {

    var c = console;
    
    $(document).ready(function() {
	 
	// include files
	$(".include").each(function () {
	    var $this = $(this),
		includeFile = $this.data("include");

	    $this.load(includeFile + " .content-include > *", function () {

		// set the good menu li active
		if (includeFile == "menu.html") {
		    
		    var pathName = $(location).attr("pathname"),
			pageName =
			    pathName.substr(pathName.lastIndexOf("/") + 1),
			menuLinks = $("nav ul li");

		    pageName = pageName ? pageName : "index.html";
		    
		    menuLinks.removeClass("active");
		    menuLinks
			.find("a[href='" + pageName + "']")
			.parent().addClass("active");

		}
		
	    });
	});
    });
})();
