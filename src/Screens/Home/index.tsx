import { StyleSheet, View, SafeAreaView, ScrollView, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FONT_BOLD, PRIMARY_COLOR_LIGHT, SAVINGS, CHECKING } from '../../config/index';
import { ParamListBase } from '@react-navigation/native';
import { OverviewCard, Greeting, GoodnessCard, IOverviewProps } from '../../Components/components';
import heart from '../../Assets/Images/heart.png';
import icon from '../../Assets/Images/avatar.png';
import image1 from '../../Assets/Images/rectangle.png';
import image2 from '../../Assets/Images/rectangle2.png';
import image3 from '../../Assets/Images/XcWl13.gif';
import video from '../../Assets/Images/video.mp4'
import video2 from '../../Assets/Images/video2.mp4'

//mock data for screen
const overviewData: IOverviewProps = {
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
			disabled: true,
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
		time: '8 hrs ago',
		icon: icon,
		video: video,
		description: 'Your donation lets world spinning',
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
	{
		title: 'Your Giving Impact',
		chName: 'St Jude',
		time: '8 hrs ago',
		icon: icon,
		video: video2,
		description: 'Bunny fill happy',
	},
];

interface IHomeProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
}

export const Home = ({}: IHomeProps) => {
	const height = useBottomTabBarHeight();
	const [scroll, setScroll] = React.useState(0);
	const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		if(e){
			setScroll(e.timeStamp);
		}
	}

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView onScroll={handleScroll} scrollEventThrottle={300} style={{marginHorizontal: 10}}>
				<View style={{paddingBottom: height}}>
					<Greeting />
					<OverviewCard title={overviewData.title} subtitle={overviewData.subtitle} listItem={overviewData.listItem}/>
					{goodnessData.map((item, index) => {
						if (item.video) item = {...item, scroll: scroll,};
						return (
							<GoodnessCard key={index} {...item} />
						);
					})}
				</View>
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
