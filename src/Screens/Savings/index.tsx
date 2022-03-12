import { CURRENCY_FORMAT, FONT_BOLD, GRAY_COLOR, LOCALE, WHITE_COLOR } from "../../config";
import React from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { SearchBar, Header, OverviewItems, ITransaction } from '../../exports';
import { Image } from "react-native-elements";
import graph from "../../Assets/Images/savingsGraphV2.png";
import { sortItemsByDate, dateToShortFormat } from '../../helpers';

const data = {
	amount: 20000.10,
};

const transactions: ITransaction[] = [
	{
		title: 'Deposit',
		subtitle: '',
		date: '07-11-2021',
		amount: 2000,
	},
	{
		title: 'Deposit',
		subtitle: '',
		date: '07-11-2021',
		amount: 2000,
	},
	{
		title: 'Wire Transfer',
		subtitle: '',
		date: '07-11-2021',
		amount: 200.50,
	},
	{
		title: 'Wire Transfer',
		subtitle: 'from checking (...5340)',
		date: '07-11-2021',
		amount: 800.65,
	},
	{
		title: 'Previous day balance',
		subtitle: '',
		date: '07-11-2021',
		amount: 14998.95,
	},
	{
		title: 'Wireless Transfer',
		subtitle: '',
		date: '07-10-2021',
		amount: 80.65,
	},
	{
		title: 'Phone Transfer',
		subtitle: '',
		date: '07-10-2021',
		amount: 850.65,
	},
	{
		title: 'Previous day balance',
		subtitle: '',
		date: '07-10-2021',
		amount: 1467.65,
	},
];

const Total = ({title, value}) => {
	return(
		<View style={styles.totalContainer}>
			<Text style={styles.totalTitle}>{title}</Text>
			<Text style={styles.totalValue}>{value}</Text>
		</View>
	);
}

export const Savings = ({route}) => {
	const {subtitle, amount} = route.params;
	const interest = 50;
	const goodness = 600;
	let splitDate = '';
	const textGreen = {
		color: '#00ff00',
	};
	return (
		<SafeAreaView style={styles.safe}>
					<View style={styles.headerContainer}>
						<Header values={transactions.reduce((prev, item) => prev + item.amount, 0)} />
						<Image source={graph} containerStyle={styles.imageContainer} style={styles.image} />
					</View>
			<View style={styles.container}>
				<Total title={'Total interest gained'} value={`+${Number(interest).toLocaleString(LOCALE, CURRENCY_FORMAT)}`} />
				<Total title={'Goodness point gained'} value={`+${goodness}`} />
				<SearchBar />
			</View>
			<ScrollView style={styles.transactions}>

				{sortItemsByDate(transactions).map((item, index, array) => {
					const date = new Date(item.date).toLocaleString(LOCALE, {month: 'short', day: '2-digit'});
					const sub = `${item.subtitle ? item.subtitle + ' | ' : ''}${date}`;
					if(splitDate !== item.date) {
						splitDate = item.date;
						let total = 0;
						array.forEach(item => {
							if(item.date === splitDate) total += item.amount;
						});
						return (
							<>
								<OverviewItems key={splitDate} containerStyle={{marginTop: 20}} title={`End of day balance - ${dateToShortFormat(item.date)}`} titleStyle={{fontSize: 14,}} amount={total} amountStyle={{fontSize: 14}} isChevron={false} disabled={true} />
								<OverviewItems key={index} title={item.title} titleStyle={textGreen} subtitle={sub} amount={item.amount} amountStyle={textGreen} isChevron={false} disabled={true} />
							</>
						);
					} else return <OverviewItems key={index} title={item.title} titleStyle={textGreen} subtitle={sub} amount={item.amount} amountStyle={textGreen} isChevron={false} disabled={true} />
				})}
			</ScrollView>
					{/* <Text style={styles.text}>Saving {amount ? amount.toLocaleString(undefined, CURRENCY_FORMAT) : null}</Text> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
	},
	container: {
		paddingHorizontal: 20,
		paddingTop: 15,
	},
	headerContainer: {
		backgroundColor: WHITE_COLOR,
		paddingTop: 20,
	},
	text: {
		textAlign: 'center',
		fontFamily: FONT_BOLD,
		fontSize: 30,
	},
	imageContainer: {
		alignSelf: 'stretch',
		aspectRatio: 4/2,
	},
	image: {
		// width: '100%'
	},
	totalContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		marginTop: 15,
	},
	totalTitle: {
		fontSize: 18,
		color: GRAY_COLOR
	},
	totalValue: {
		color: '#00ff00',
	},
	transactions: {
		paddingHorizontal: 20,
	},
});
