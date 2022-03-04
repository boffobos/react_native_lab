import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from 'react-native-elements';
import { FONT_BOLD, PRIMARY_COLOR_LIGHT, SAVINGS, CHECKING } from '../../config/index';
import { Button } from 'react-native-elements';
import { ParamListBase } from '@react-navigation/native';
import { OverviewCard } from '../../Components/components';
import heart from '../../Assets/Images/heart.png';

const Stack = createNativeStackNavigator();

const overviewData = {
	title: 'Accounts Overview',
	subtitle: 'Total Available Cash',
	listItem: [
		{
			title: CHECKING.name,
			subtitle: 'Main Account (...0269)',
			amount: 2000.50,
		},
		{
			title: SAVINGS.name,
			subtitle: 'Buy a Freedom (...0404)',
			amount: 20000.10,
		},
		{
			title: 'Goodness',
			icon: heart,
			subtitle: 'Cash Rewards',
			amount: 100.45,
		},
	],
}

const HomeScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Home</Text>
		</View>
	);
}

interface IHomeProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
}

export const Home = ({navigation}: IHomeProps) => {
	// const height = useBottomTabBarHeight();
	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView style={{marginHorizontal: 10}}>
				<OverviewCard title={overviewData.title} subtitle={overviewData.subtitle} listItem={overviewData.listItem}/>


			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: PRIMARY_COLOR_LIGHT,
		marginBottom: 25,
	},
	text: {
		textAlign: 'center',
		fontFamily: FONT_BOLD,
		fontSize: 30,
	},
	btn: {
		// color: 'black',
		backgroundColor: 'orange',
		width: '33%',
		alignSelf: 'center',
		margin: 20,

	}
});

//Trash
{/* <View >
						<Button style={styles.btn} title={SAVINGS.name} onPress={() => navigation.navigate(SAVINGS.name, {subtitle: 'best test sub'})} />
						<Button style={styles.btn} title={CHECKING.name} onPress={() => navigation.navigate(CHECKING.name, {subtitle: 'apart test sub'})} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home1</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home2</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home3</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Home4</Text>
					</View> */}
