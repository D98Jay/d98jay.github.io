/* ----- darkTheme v3 ----- */

let themeConfig = localStorage.getItem('themeConfig') || 'system'; // Check local

function updateTheme(config) {
  let turnDark = false;

  if (config === 'dark') {
    turnDark = true;
  } else if (config === 'system') {
    turnDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.documentElement.classList.toggle('dark', turnDark);
  localStorage.setItem('themeConfig', config);
  themeConfig = config;
}

updateTheme(themeConfig); // Initial update theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
	if (themeConfig === 'system') {
		document.documentElement.classList.toggle('dark', e.matches);
	} // Update the theme when system color scheme changes
});
