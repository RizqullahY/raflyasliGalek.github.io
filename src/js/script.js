// Hamburger
const hamburger = document.querySelector("#hamburger"), navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active"),
		navMenu.classList.toggle("hidden");
}),

// Klik diluar hamburger
window.addEventListener("click", function (e) {
	e.target != navMenu &&
		e.target != hamburger &&
		(hamburger.classList.remove("hamburger-active"),
		navMenu.classList.add("hidden"));
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle"), html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
	darkToggle.checked
		? html.classList.add("dark")
		: html.classList.remove("dark");
});
