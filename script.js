// ----- darkTheme v3 -----

let themeConfig = localStorage.getItem('themeConfig') || 'system'; // Check localS

function turnDarkBy(condition) {
	document.documentElement.classList.toggle('dark', condition);
}

function updateTheme(config) {
	let darkOn = false;

	if (config === 'dark') {
		darkOn = true; }
	else if (config === 'system') {
		darkOn = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
	turnDarkBy(darkOn);
	localStorage.setItem('themeConfig', config);
	themeConfig = config;
}

updateTheme(themeConfig); // Initial update theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
	if (themeConfig === 'system') {
		turnDarkBy(e.matches);
	} // Update the theme when system color scheme changes
});
