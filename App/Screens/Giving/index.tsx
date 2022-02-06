import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Avatar } from 'react-native-elements';
import { GIVING } from '@/config';

export const Giving = () => {
	return (
		<SafeAreaView style={styles.safe}>
		<View style={styles.container}>
			<Text style={styles.text}>Giving</Text>
		</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	text: {
		textAlign: 'center',
		fontFamily: 'SFRounded-bold',
		fontSize: 30,
	}
});
