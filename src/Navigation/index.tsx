import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HOME, ACCOUTS, GIVING, PAYMENTS, CARDS, SAVINGS, BOTTOM_TABS, PRIMARI_COLOR } from '../config';
import React from 'react';
import { Savings, BottomTabs, HeaderTitle } from '../exports';

const Stack = createNativeStackNavigator();

const screenOptions = {

};

const title = SAVINGS.name;
const subtitle = 'rest test subs';

const savingPageHeaderOptions: NativeStackNavigationOptions = {
	headerTitle: () => <HeaderTitle title={title} subtitle={subtitle} />,
	headerStyle: {backgroundColor: PRIMARI_COLOR},
	// headerTitleStyle: {color: 'red'}
}

export const MyNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={BOTTOM_TABS.name} component={BottomTabs} options={{headerShown: false}} />
			<Stack.Screen name={SAVINGS.name} component={Savings} options={savingPageHeaderOptions} />
		</Stack.Navigator>
	)
}
