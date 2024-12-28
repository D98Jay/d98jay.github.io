// 3 theme modes: light, dark, system
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';
const SYSTEM_THEME = 'system';

// Cache the system's color scheme media query
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check localTheme from localStorage or default to SYSTEM_THEME
let localTheme = localStorage.getItem('localTheme') || SYSTEM_THEME;

// Toggle "dark-mode" class on <html> element
function toggleDark(isDark) {
	document.documentElement.classList.toggle('dark-mode', isDark);
}

// Update theme based on themeConfig
function updateTheme(themeConfig) {
	let isDark =
		themeConfig === SYSTEM_THEME ? prefersDarkScheme.matches :
		themeConfig === DARK_THEME; // light theme (false)
	toggleDark(isDark);

	// Save themeConfig to localStorage
	localTheme = themeConfig;
	localStorage.setItem('localTheme', themeConfig);
}

// Initial theme on page load
updateTheme(localTheme);

// Update theme when system's color scheme changes, if set to SYSTEM_THEME
prefersDarkScheme.addEventListener('change', () => {
	if (localTheme === SYSTEM_THEME) {
		toggleDark(prefersDarkScheme.matches);
	}
});
