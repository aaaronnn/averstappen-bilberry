(function() {
	var mailtoLinks = document.querySelectorAll("[href*='mailto:']");
	if (mailtoLinks) {
		for (var i = 0; i < mailtoLinks.length; i++) {
			mailtoLinks[i].setAttribute("target","_blank");
		}
	}
})();