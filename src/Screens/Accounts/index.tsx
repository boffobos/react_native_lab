import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Avatar } from 'react-native-elements';
import { ACCOUTS, FONT_BOLD } from '../../config';

export const Accounts = () => {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<Text style={styles.text}>Accounts</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
	},
	text: {
		textAlign: 'center',
		fontFamily: FONT_BOLD,
		fontSize: 30,
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	}
});
