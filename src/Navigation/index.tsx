import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HOME, SAVINGS, BOTTOM_TABS, PRIMARI_COLOR, CHECKING, SIGNIN } from '../config';
import React from 'react';
import { BottomTabs } from '../Navigation/BottomTabs';
import { Savings, Checking, HeaderAvatar, BackButton, Signin } from '../exports';
import { HeaderTitle } from '../Components/HeaderTitle';
import { Button } from 'react-native-elements/dist/buttons/Button';


const Stack = createNativeStackNavigator();

const screenOptions = {

};

const title = SAVINGS.name;
const subtitle = 'rest test subs';

const pageHeaderOptions = (title: string, subtitle: string): NativeStackNavigationOptions => {
	return ({
		headerTitle: () => <HeaderTitle title={title} subtitle={subtitle} />,
		headerRight: () => <HeaderAvatar />,
		headerBackImageSource: require('../Assets/Images/back.png'),
		headerTintColor: 'white',
		headerBackTitle: '',

	// headerStyle: {backgroundColor: PRIMARI_COLOR},
	// headerTitleStyle: {color: 'red'}
	});
};

const headerLeftButton = (func: any) => {
	return (
		<Button onPress={func.navigate(HOME.name)} title='abc'/>
	)
}

export const MyNavigation = () => {
	return (
		<Stack.Navigator initialRouteName='Signin' screenOptions={{headerStyle: {backgroundColor: PRIMARI_COLOR, }, }} >
			<Stack.Screen name={BOTTOM_TABS.name} component={BottomTabs} options={{headerShown: false,}} />
			<Stack.Screen name={SAVINGS.name} component={Savings} options={({route}) => pageHeaderOptions(SAVINGS.name, route.params.subtitle)} />
			<Stack.Screen name={CHECKING.name} component={Checking} options={({route}) => pageHeaderOptions(CHECKING.name, route.params.subtitle)} />
			<Stack.Screen name={SIGNIN.name} component={Signin} />
		</Stack.Navigator>
	)
}
