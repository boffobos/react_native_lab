import { BottomTabNavigationOptions, createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import { ACCOUNTS, APP, CARDS, GIVING, HOME, PAYMENTS, PRIMARI_COLOR, SECONDARY_COLOR } from '../../config';
import {Accounts, Cards, Giving, Home, Payments, HeaderTitle, HeaderAvatar, HabmburgerButton, BackButton } from '../../exports'
import React from 'react';
import { Image, Text } from 'react-native-elements';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
// import {ACCOUNTS_LOGO_SOLID, HOME_LOGO_REGULAR, HOME_LOGO_SOLID} from '../../Assets/index';

const Tabs = createBottomTabNavigator();

const iconsForTabBar = (route: RouteProp<ParamListBase, string>, focused: boolean) => {
	let icon;

	switch(route.name) {
		case HOME.name:
			icon = !focused ? <Image source={require('../../Assets/Images/home.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/home-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case ACCOUNTS.name:
			icon = !focused ? <Image source={require('../../Assets/Images/accounts.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/accounts-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case GIVING.name:
			icon = !focused ? <Image source={require('../../Assets/Images/giving.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/giving-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case PAYMENTS.name:
			icon = !focused ? <Image source={require('../../Assets/Images/payment.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/payment-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case CARDS.name:
			icon = !focused ? <Image source={require('../../Assets/Images/cards.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/cards-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		default:
			icon = 'warning';
	}

	return icon;
}

// const headerTitle = () => {
// 	return (<View style={styles.headerIconContainer} >
// 		<Image source={require('../../Assets/Images/heart.png')} style={styles.headerIcon} />
// 		<Text style={{color: 'white', fontFamily: 'SFRounded-regular', fontSize: 16}}> {APP.name}</Text>
// 		</View>)
// }

const logo = require('../../Assets/Images/heart.png');
const HeaderButton = () => {
	return (
		<TouchableOpacity onPress={() => Alert.alert('Hello!')} style={{height: '100%',}}>
			<Image source={require('../../Assets/Images/burgerMenuIcon.png')} style={{ width: 20, height: 20, marginLeft: 15}}/>
		</TouchableOpacity>
	);
}

const homePageHeaderOptions: BottomTabNavigationOptions = {
	headerLeft: () => <HabmburgerButton />,
	headerTitle: () => <HeaderTitle img={logo} title={APP.name}/>,
	headerRight: () => <HeaderAvatar />,
	// headerStyle: {backgroundColor: PRIMARI_COLOR},
}

const accountsPageHeaderOptions: BottomTabNavigationOptions = {
	headerTitle: () => <HeaderTitle title={ACCOUNTS.name} />,
	headerRight: () => <HeaderAvatar />,
	// headerLeft: () => <BackButton />,


}

export const BottomTabs = () => {
	return (

		<Tabs.Navigator
			sceneContainerStyle={{
				backgroundColor: 'transparent'
			}}
			screenOptions={({route}) => ({
				tabBarIcon: ({focused}) => iconsForTabBar(route, focused),
				tabBarActiveTintColor: PRIMARI_COLOR,
				tabBarInactiveTintColor: SECONDARY_COLOR,
				tabBarBackground: () => <BlurView blurType='light' blurAmount={15}	style={styles.blurView} />,
				tabBarStyle: styles.tabBarStyle,
				tabBarItemStyle: {
					backgroundColor: 'rgba(255, 0, 0, 0)',
				},
				headerStyle: {backgroundColor: PRIMARI_COLOR},
				headerTitleStyle: {color: 'white'},
				headerBackImage: require('../../Assets/Images/back.png'),
				headerLeft: () => <BackButton />,

		})}>
			<Tabs.Screen name={HOME.name} component={Home} options={homePageHeaderOptions}/>
			<Tabs.Screen name={ACCOUNTS.name} component={Accounts} options={accountsPageHeaderOptions}/>
			<Tabs.Screen name={GIVING.name} component={Giving} />
			<Tabs.Screen name={PAYMENTS.name} component={Payments} />
			<Tabs.Screen name={CARDS.name} component={Cards} />
		</Tabs.Navigator>

	);
}

const styles = StyleSheet.create({
	tabIconContainer: {
		width: '100%',
		flex: 1,
		aspectRatio: 1,
	},
	icon: {
		tintColor: SECONDARY_COLOR,
		backgroundColor: 'transparent'
	},
	activeIcon: {
		opacity: 1,
		tintColor: PRIMARI_COLOR,
	},
	tabBarStyle: {
		opacity: 1,
		backgroundColor: 'transparent',
		position: 'absolute'
	},
	blurView: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	headerIcon: {
		tintColor: 'white',
		width: 20,
		height: 20
	},
	headerIconContainer: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		color: 'white'
	}
})
