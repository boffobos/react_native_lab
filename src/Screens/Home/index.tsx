import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FONT_BOLD, PRIMARY_COLOR_LIGHT, SAVINGS, CHECKING } from '../../config/index';
import { ParamListBase } from '@react-navigation/native';
import { OverviewCard, Greeting, GoodnessCard } from '../../Components/components';
import heart from '../../Assets/Images/heart.png';
import icon from '../../Assets/Images/avatar.png';
import image1 from '../../Assets/Images/rectangle.png';
import image2 from '../../Assets/Images/rectangle2.png';
import image3 from '../../Assets/Images/XcWl13.gif';

//mock data for screen
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
};
const goodnessData = [
	{
		title: 'Your Giving Impact',
		chName: 'St Jude',
		time: '4 hrs ago',
		icon: icon,
		image: image2,
		description: 'Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
	},
	{
		title: 'Your Giving Impact',
		chName: 'St Jude',
		time: '4 hrs ago',
		icon: icon,
		image: image1,
		description: 'Your donation helped to consruct well to supply water whole vilage in Africa. Making love not war',
	},
	{
		title: 'Your Giving Impact',
		chName: 'St Jude',
		time: '4 hrs ago',
		icon: icon,
		image: image3,
		description: 'Your donation help to defeat some dictator in Africa',
	},
];

interface IHomeProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
}

export const Home = ({navigation}: IHomeProps) => {
	// const height = useBottomTabBarHeight();
	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView style={{marginHorizontal: 10}}>
				<Greeting />
				<OverviewCard title={overviewData.title} subtitle={overviewData.subtitle} listItem={overviewData.listItem}/>
				{goodnessData.map(item => {
					return <GoodnessCard {...item} />
				})}

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
