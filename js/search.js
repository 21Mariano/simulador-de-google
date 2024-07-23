document.querySelector(".home__form").addEventListener("submit", e => e.preventDefault());

document.documentElement.addEventListener("keyup", e =>{
	if (e.which == 13) {
		let voiceText = document.querySelector(".google-search").value;
		if (voiceText.length > 0) window.location.href = "https://google.com/search?q=" + voiceText;
	}
})