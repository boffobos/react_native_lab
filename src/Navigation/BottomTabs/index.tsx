import { BottomTabNavigationOptions, createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import { ACCOUTS, APP, CARDS, GIVING, HOME, PAYMENTS, PRIMARI_COLOR, SECONDARY_COLOR } from '../../config';
import {Accounts, Cards, Giving, Home, Payments, HeaderTitle} from '../../exports'
import React from 'react';
import { Image, Text } from 'react-native-elements';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
// import {ACCOUNTS_LOGO_SOLID, HOME_LOGO_REGULAR, HOME_LOGO_SOLID} from '../../Assets/index';

const Tabs = createBottomTabNavigator();

const iconsForTabBar = (route: RouteProp<ParamListBase, string>, focused: boolean) => {
	let icon;

	switch(route.name) {
		case HOME.name:
			icon = !focused ? <Image source={require('../../Assets/Images/home.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/home@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			// icon = !focused ? <Image source={HOME_LOGO_REGULAR} containerStyle={styles.tabIconContainer} style={styles.icon} />
			// : <Image source={HOME_LOGO_SOLID} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case ACCOUTS.name:
			icon = !focused ? <Image source={require('../../Assets/Images/accounts.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/accounts@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case GIVING.name:
			icon = !focused ? <Image source={require('../../Assets/Images/giving.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/giving-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case PAYMENTS.name:
			icon = !focused ? <Image source={require('../../Assets/Images/payment.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/payment@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
			break;
		case CARDS.name:
			icon = !focused ? <Image source={require('../../Assets/Images/cards.png')} containerStyle={styles.tabIconContainer} style={styles.icon} />
			: <Image source={require('../../Assets/Images/cards@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
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

const homePageHeaderOptions: BottomTabNavigationOptions = {
	headerTitle: () => <HeaderTitle img={logo} title={APP.name}/>,
	headerStyle: {backgroundColor: PRIMARI_COLOR},
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
				}
		})}>
			<Tabs.Screen name={HOME.name} component={Home} options={homePageHeaderOptions}/>
			<Tabs.Screen name={ACCOUTS.name} component={Accounts} />
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
