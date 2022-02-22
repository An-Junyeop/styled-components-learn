const margins = {
	sm: '0.5rem',
	base: '1rem',
	lg: '2rem',
	xl: '3rem',
};

const paddings = {
	sm: '0.5rem',
	base: '1rem',
	lg: '2rem',
	xl: '3rem',
};

const fonts = {
	family: {
		base: `'Noto Sans KR, sans-serif`,
		title: `'Merriweather', serif`,
	},
	size: {
		sm: '1.4rem',
		base: '1.6rem',
		lg: '2rem',
		xl: '2.5rem',
		title: '6rem',
	},
	weight: {
		light: 100,
		normal: 400,
		bold: 700,
	},
};

const colors = {
	red: '#ff4d4d',
	yellow: '#ffff4d',
	blue: '#0099ff',
};

const size = {
	mobile: '425px',
	tablet: '768px',
	desktop: '1440px',
};

const devide = {
	mobile: `@media only screen and (max-width: ${size.mobile})`,
	tablet: `@media only screen and (max-width: ${size.tablet})`,
	desktop: `@media only screen and (max-width: ${size.desktop})`,
};

const lightThemeColors = {
	...colors,
	primary: '#333',
	secondary: '#fff',
	tertiary: '#808080',
};

const darkThemeColors = {
	...colors,
	primary: '#fff',
	secondary: '#333',
	tertiary: '#d4d0c4',
};

const defaultTheme = {
	margins,
	paddings,
	fonts,
	devide,
};

export const lightTheme = {
	...defaultTheme,
	colors: lightThemeColors,
};

export const darkTheme = {
	...defaultTheme,
	colors: darkThemeColors,
};
