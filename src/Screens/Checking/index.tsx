import React from "react";
import { ScrollView, StyleSheet, View, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';
import { Text } from "react-native-elements";
import { IOverviewListItem, OverviewItems} from '../../exports';
import { CHECKING, GRAY_COLOR, LOCALE, CURRENCY_FORMAT, WHITE_COLOR } from "../../config";

const header = {
	title: CHECKING.name,
	subtitle: 'Main Account (...0269)',
	amount: 2000.50,
};

const data = [
	{
		title: 'Target',
		message: 'Closter NJ | Debit card',
		amount: -63.95,
		date: '03-11-2022',
	},
	{
		title: 'ApIPay7-Eleven',
		message: 'Cresskill NJ | iPhone',
		amount: -17.75,
		date: '03-11-2022',
	},
	{
		title: 'Facebook inc',
		message: 'Pay day! Yay!',
		amount: 1200.5,
		date: '03-11-2022',
	},
	{
		title: 'Transfer from savings',
		message: 'Buy a house (..4044)',
		amount: 10000.0,
		date: '03-09-2022',
	},
	{
		title: 'Starbucks',
		message: 'Closter NJ I Debit card',
		amount: -12.02,
		date: '03-09-2022',
	},
	{
		title: 'Stop and Shop',
		message: 'Closter NJ | Debit card',
		amount: -236.52,
		date: '03-09-2022',
	},
	{
		title: 'Croceries store',
		message: 'Closter NJ | Debit card',
		amount: -52.36,
		date: '03-09-2022',
	},
	{
		title: 'Flowers store',
		message: 'Cresskill NJ | iPhone',
		amount: -10.36,
		date: '03-08-2022',
	},
	{
		title: 'Apple store',
		message: 'Cresskill NJ | iPhone',
		amount: -800.90,
		date: '03-08-2022',
	},
];

export const Checking = ({route}) => {
	const { subtitle } = route.params;
	let dateForList = ''
	return (
		<SafeAreaView style={{flex: 1}}>
				<View style={style.container}>
					<View>
						<Text style={style.totalHeader} >{header.amount.toLocaleString(LOCALE, CURRENCY_FORMAT)}</Text>
						<Text style={style.subtitle}>Total available cash</Text>
					</View>
					<View style={style.searchContainer}>
						<TextInput style={style.searchBar} placeholder="Search transactions" />
						<TouchableOpacity style={style.filter}>
							<Text style={{textAlign: 'center'}}>Filter by</Text>
						</TouchableOpacity>
					</View>
			<ScrollView style={{flex: 1}}>
					<View style={{borderBottomEndRadius: 20}}>
						{/* Sorting array by date and then split list of item by date seperator */}
				{data.sort((first, second) => {
					if(new Date(first.date) > new Date(second.date)) return 1;
					else return 0;
					}).map((item, index) => {
							if(item.date !== dateForList) {
								dateForList = item.date;
								return (
									<>
										<Text style={{paddingLeft: 10, marginTop: 20, marginBottom: 10, color: GRAY_COLOR}} >{new Date(item.date).toLocaleString(LOCALE, { month:'short', day: '2-digit'})}</Text>
										<OverviewItems key={index} disabled={true} title={item.title} titleStyle={item.amount > 0 ? {color: '#00ff00'} : undefined} amount={Math.abs(item.amount)} amountStyle={item.amount > 0 ? {color: '#00ff00'} : undefined} subtitle={item.message} isChevron={false} />
									</>
								);
							} else {
							return <OverviewItems key={index} disabled={true} title={item.title} titleStyle={item.amount > 0 ? {color: '#00ff00'} : undefined} amount={Math.abs(item.amount)} amountStyle={item.amount > 0 ? {color: '#00ff00'} : undefined} subtitle={item.message} isChevron={false} />
							}
						})}
					</View>
			</ScrollView>
						</View>
		</SafeAreaView>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		paddingHorizontal: 20,
	},
	totalHeader: {
		fontSize: 32,
		textAlign: 'center'
	},
	subtitle: {
		fontSize: 14,
		textAlign: 'center',
		color: GRAY_COLOR,
	},
	searchContainer: {
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'space-between'
	},
	searchBar: {
		width: '60%',
		height: 30,
		borderColor: GRAY_COLOR,
		borderRadius: 15,
		borderWidth: 1,
		padding: 5,
		backgroundColor: WHITE_COLOR,
		overflow: 'hidden',
		paddingHorizontal: 15,
	},
	filter: {
		width: '35%',
		height: 30,
		borderRadius: 15,
		borderColor: GRAY_COLOR,
		borderWidth: 1,
		padding: 5,
		marginBottom: 15,
	}
});
