import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HOME, ACCOUTS, GIVING, PAYMENTS, CARDS, SAVING, BOTTOM_TABS, PRIMARI_COLOR } from '../config';
import React from 'react';
import { Saving, BottomTabs, HeaderTitle } from '../exports';

const Stack = createNativeStackNavigator();

const screenOptions = {

};

const title = SAVING.name;
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
			<Stack.Screen name={SAVING.name} component={Saving} options={savingPageHeaderOptions} />
		</Stack.Navigator>
	)
}
