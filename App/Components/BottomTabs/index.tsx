import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import {
	Accounts, ACCOUTS,
	Cards, CARDS,
	Giving, GIVING,
	HOME, Home,
	Payments, PAYMENTS, PRIMARI_COLOR, PRIMARY_COLOR_LIGHT, SECONDARY_COLOR,
} from '../../../exports';
import React from 'react';
import { Image } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const Tabs = createBottomTabNavigator();

export const BottomTabs = () => {
	return (
		// <BlurView style={{
		// 	position: 'absolute',
		// 	bottom: 0,
		// 	right: 0,
		// 	left :0,
		// 	}}
		// 	blurType='dark'
		// 	blurAmount={1}
		// >
		<Tabs.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({focused}) => {
					let icon;
					let active;
					// if(route.name === 'Home') {
					// 	let pic = require('../../Assets/Images/home.png');
					// 	return <Image source={pic} containerStyle={styles.tabIcon} />
					// }
					switch(route.name) {
						case 'Home':
							active = focused;
							icon = !focused ? <Image source={require('../../Assets/Images/home.png')} containerStyle={styles.tabIconContainer} style={styles.icon} /> : <Image source={require('../../Assets/Images/home@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
							// icon = require('../../Assets/Images/home.png');
							break;
						case 'Accounts':
							active = focused;
							icon = !focused ? <Image source={require('../../Assets/Images/accounts.png')} containerStyle={styles.tabIconContainer} style={styles.icon} /> : <Image source={require('../../Assets/Images/accounts@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
							// icon = require('../../Assets/Images/accounts.png');
							break;
						case 'Giving':
							active = focused;
							icon = !focused ? <Image source={require('../../Assets/Images/giving.png')} containerStyle={styles.tabIconContainer} style={styles.icon} /> : <Image source={require('../../Assets/Images/giving-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
							break;
						case 'Payments':
							active = focused;
							icon = !focused ? <Image source={require('../../Assets/Images/payment.png')} containerStyle={styles.tabIconContainer} style={styles.icon} /> : <Image source={require('../../Assets/Images/payment@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
							break;
						case 'Cards':
							active = focused;
							icon = !focused ? <Image source={require('../../Assets/Images/cards.png')} containerStyle={styles.tabIconContainer} style={styles.icon} /> : <Image source={require('../../Assets/Images/cards@3x-solid.png')} containerStyle={styles.tabIconContainer} style={styles.activeIcon} />
							break;
						default:
							icon = 'warning';
					}
					// return active ? <Ionicons name='md-home' size={size} style={styles.activeIcon} /> : <Image source={icon} containerStyle={styles.tabIconContainer} style={!active ? styles.icon : styles.activeIcon} />
					return icon;

				},
				tabBarActiveTintColor: PRIMARI_COLOR,
				tabBarInactiveTintColor: SECONDARY_COLOR,
				// tabBarActiveBackgroundColor: PRIMARI_COLOR,

				tabBarStyle: {
					backgroundColor: '#fff',
					opacity: 1,

				}

		})}>
			<Tabs.Screen name={HOME.name} component={Home} />
			<Tabs.Screen name={ACCOUTS.name} component={Accounts} />
			<Tabs.Screen name={GIVING.name} component={Giving} />
			<Tabs.Screen name={PAYMENTS.name} component={Payments} />
			<Tabs.Screen name={CARDS.name} component={Cards} />
		</Tabs.Navigator>
		// </BlurView>
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
		backgroundColor: '#fff'
	},
	activeIcon: {
		opacity: 1,
		tintColor: PRIMARI_COLOR,
		backgroundColor: 'transparent'
	},
})
