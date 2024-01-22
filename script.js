/* ----- darkTheme ----- */

// check for saved 'themeConfig' in localStorage
let themeConfig = localStorage.getItem('themeConfig');

// set default value to 'themeConfig'
if (themeConfig == null) {
	localStorage.setItem('themeConfig', 'system');
}

// if themeConfig set to dark or system, change accordingly
updateTheme(localStorage.themeConfig);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
	if (e.matches && localStorage.themeConfig == 'system') {
		document.documentElement.classList.add('dark');
	}
	if (!e.matches && localStorage.themeConfig == 'system') {
		document.documentElement.classList.remove('dark');
	}
});

// update the theme base on 'config' input and set value to 'themeConfig'
function updateTheme(config) {
	if (config == 'dark') {
		document.documentElement.classList.add('dark');
	}
	if (config == 'light') {
		document.documentElement.classList.remove('dark');
	}
	if (config == 'system') {
		if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  		document.documentElement.classList.add('dark');
		}
		else {
			document.documentElement.classList.remove('dark');
		}
	}
	localStorage.setItem('themeConfig', config);
}

