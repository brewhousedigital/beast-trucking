if(window.location.pathname === "/tracking/") {
	let trackingSearch = window.location.search;
	const trackingForm = document.getElementById("tracking-form");
	const trackingMap = document.getElementById("tracking-map");

	if(trackingSearch[0] === "?") {

		// convert string to array and remove the question mark
		trackingSearch = trackingSearch.split("");
		trackingSearch.shift();

		// convert back to string and split by ampersand
		trackingSearch = trackingSearch.join("");
		trackingSearch = trackingSearch.split("&");

		// Split by equal sign now
		let urlParameters = [];
		trackingSearch.forEach(function(el) {
			let temp = el.split("=");
			urlParameters[temp[0]] = temp[1];
		});

		// Now read the tracking sign
		try {
			if(urlParameters['tracking'] !== undefined) {
				let trackingNum = urlParameters['tracking'];

				fadeInTrackingSection(trackingMap);
			}
		}
		catch(e) {
			console.log(e);
			window.location = "/tracking/";
		}

	} else {
		fadeInTrackingSection(trackingForm);
	}
}


function fadeInTrackingSection(id) {
	id.style.display = "block";
	setTimeout(function() {
		id.classList.add("loaded");
	}, 500);
}
