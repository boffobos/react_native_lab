import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HOME, SAVINGS, BOTTOM_TABS, PRIMARY_COLOR, CHECKING, SIGNIN, PROFILE } from '../config';
import React from 'react';
import { BottomTabs } from '../Navigation/BottomTabs';
import { Savings, Checking, HeaderAvatar, BackButton, Signin, Profile } from '../exports';
import { HeaderTitle } from '../Components/HeaderTitle';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks';


const Stack = createNativeStackNavigator();

const screenOptions = {

};

const title = SAVINGS.name;
const subtitle = 'rest test subs';

const pageHeaderOptions = (title: string, subtitle?: string): NativeStackNavigationOptions => {
	return ({
		headerTitle: () => <HeaderTitle title={title} subtitle={subtitle} />,
		headerRight: () => <HeaderAvatar />,
		headerTintColor: 'white',
		headerBackTitle: '',
	});
};


export const MyNavigation = () => {
	const user = useAppSelector(state => state.users.userName);
	return (
		<Stack.Navigator /*initialRouteName='Checking'*/ screenOptions={{headerStyle: {backgroundColor: PRIMARY_COLOR, }, }} >
		{ user ? <>
			<Stack.Screen name={BOTTOM_TABS.name} component={BottomTabs} options={{headerShown: false,}} />
			<Stack.Screen name={SAVINGS.name} component={Savings} options={({route}) => pageHeaderOptions(SAVINGS.name, route.params.subtitle)} />
			<Stack.Screen name={CHECKING.name} component={Checking} options={({route}) => pageHeaderOptions(CHECKING.name, route.params.subtitle)} />
			<Stack.Screen name={PROFILE.name} component={Profile} options={() => pageHeaderOptions(PROFILE.name)} />
		</> : <>
		<Stack.Screen name={SIGNIN.name} component={Signin} options={() => ({headerShown: false})}/>
		</> }
		</Stack.Navigator>
	)
}
