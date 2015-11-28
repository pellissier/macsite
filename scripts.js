(function () {
    $(document).ready(function() {

	// include files
	$(".include").each(function () {
            var $this = $(this),
		includeFile = $this.data("include");
            $this.load(includeFile + " .content-include");
	}); 

	// include escargots
	var escargot = $("<span>").addClass("escargot").html("&#128012");
	$(".include-escargot").prepend(escargot);
    });
})();