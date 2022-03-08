/* Application tabs */
export const APP = {
	name: 'Spiral',
}

export const HOME = {
	name: 'Home',
	tabIcon: '../Assets/Images/home.png',
}
export const ACCOUNTS = {
	name: 'Accounts',
	tabIcon: '../Assets/Images/accounts.png',
}
export const GIVING = {
	name: 'Giving',
	tabIcon: '../Assets/Images/giving.png',
}
export const PAYMENTS = {
	name: 'Payments',
	tabIcon: '../Assets/Images/payment.png',
}
export const CARDS = {
	name: 'Cards',
	tabIcon: '../Assets/Images/cards.png',
}
export const SAVINGS = {
	name: 'Savings',
	tabIcon: 'none',
}
export const CHECKING = {
	name: 'Checking',
	tabIcon: 'none',
}
export const BOTTOM_TABS = {
	name: 'Tabs',
	tabIcon: 'none',
}
export const SIGNIN = {
	name: 'Signin',
	tabIcon: 'none',
}
export const PROFILE = {
	name: 'Profile',
	tabIcon: 'none',
}

/* Style constants */
export const PRIMARY_COLOR = '#d4368f';
export const PRIMARY_COLOR_LIGHT = '#e381c3';
export const SECONDARY_COLOR = '#3d3238';
export const BORDER_COLOR = '#dbdfe4';
export const GRAY_COLOR = '#71767c';
export const WHITE_COLOR = '#ffffff';
export const LIGHT_GRAY_COLOR = '#dbdfe4'

/* Locale settings */
export const CURRENCY = 'USD';
export const CURRENCY_FORMAT = {
	style: 'currency',
	currency: CURRENCY,
	currencySign: 'standard',
	currencyDisplay: 'narrowSymbol',
};
export const LOCALE = 'en-US';
export const DATE_FORMAT: Intl.DateTimeFormatOptions = {
	month: 'long',
	day: '2-digit',
	year: 'numeric'
}

const date = new Date().toLocaleDateString()

/* Font settings */
export const FONT_BOLD = 'SFRounded-Bold';
export const FONT_REGULAR = 'SFRounded-regular';
export const FONT_LIGHT = 'SFRounded-Light';

/* Header avatar menu */
export const AVATAR_MENU = [
	{
		name: 'Profile',
		icon: 'none',
	},
	{
		name: 'Logout',
		icon: 'none',
	},
]
