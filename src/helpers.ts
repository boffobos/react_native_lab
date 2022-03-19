import { LOCALE } from './config';
import { ITransaction } from './exports';

export const sortItemsByDate = (arr: ITransaction[]) => {
	const sorted = arr.sort((first, second) => {
		if(new Date(first.date) > new Date(second.date)) return -1;
		else if(new Date(first.date) < new Date(second.date)) return 1;
		else return 0;
	})
	return sorted;
}

export const dateToShortFormat = (date: string) => {
	return new Date(date).toLocaleDateString(LOCALE, {month: 'short', day:'2-digit'});
}
