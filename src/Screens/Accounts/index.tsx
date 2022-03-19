import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { FONT_BOLD, SAVINGS, CHECKING, LOCALE, CURRENCY_FORMAT, GRAY_COLOR } from '../../config';
import heart from '../../Assets/Images/heart.png'
import { OverviewItems, OverviewCard, IOverviewListItem } from '../../Components/OverviewCard';
import pay from '../../Assets/Images/circleButtonPay.png';
import send from '../../Assets/Images/circleButtonSend.png';
import transfer from '../../Assets/Images/circleButtonChecking.png';

//mock data for screen
const overviewData: IOverviewListItem[] = [
		{
			title: CHECKING.name,
			subtitle: 'Main Account (...0269)',
			amount: 2000.50,
		},
		{
			title: SAVINGS.name,
			subtitle: 'Buy a Freedom (...0404)',
			amount: 20000.10,
			stats: {
				text: 'Savings is up 3% from last month',
				icon: 'triangle-up',
				color: '#00ff00'
			}
		},
		{
			title: 'Goodness',
			icon: heart,
			subtitle: 'Cash Rewards',
			amount: 100.45,
			disabled: true,
		},
	]

const OperationButton = ({image, title, disabled}) => {
	return (
		<TouchableOpacity disabled={disabled} style={styles.roundBtnContainer}>
			<Image containerStyle={styles.roundButtonImageContainer} style={{width: '100%', height: '100%'}} source={image}/>
			<Text style={styles.rndBtnText}>{title}</Text>
		</TouchableOpacity>
	);
}

export const Accounts = ({navigation}) => {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View>
						<Text style={styles.totalHeader}>{overviewData.reduce((prev, item) => prev + item.amount, 0 ).toLocaleString(LOCALE, CURRENCY_FORMAT)}</Text>
						<Text style={styles.subtitle}>Total Available Cash</Text>
					</View>
					<View style={styles.rndBtnContainer}>
						<OperationButton disabled={true} image={send} title={'Send'} />
						<OperationButton disabled={true} image={pay} title={'Pay'} />
						<OperationButton disabled={true} image={transfer} title={'Transfer'} />
					</View>
				</View>
				<View style={{width: '100%'}}>
					{overviewData.map((item, index) => {
						return (
							<View key={index} style={styles.itemContainer}>
								<OverviewItems title={item.title} subtitle={item.subtitle} amount={item.amount} icon={item.icon} stats={item.stats}/>
							</View>
						);
					})}
				</View>


			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
	},
	header: {
		width: '100%',
		paddingTop: '10%',
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
	text: {
		textAlign: 'center',
		fontFamily: FONT_BOLD,
		fontSize: 30,
	},
	container: {
		flex: 1,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%',
	},
	btn: {
		color: 'black',
		backgroundColor: 'orange',
		width: '100%',
		alignSelf: 'center',
		margin: 20,

	},
	btnContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	itemContainer: {
		padding: 10,
		width: '100%'
	},
	rndBtnContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	roundButtonImageContainer: {
		// width: 30,
		height: 60,
		aspectRatio: 1,
	},
	roundBtnContainer: {
		margin: 15

	},
	rndBtnText: {
		textAlign: 'center',
		color: GRAY_COLOR,
		marginTop: 5,
	},
});
