import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Avatar } from 'react-native-elements';
import { HOME, PRIMARY_COLOR_LIGHT } from '../../../exports';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Home</Text>
		</View>
	);
}

export const Home = () => {
	return (
		<ScrollView>
			<SafeAreaView style={styles.safe}>
				<View style={styles.container}>
					<Text style={styles.text}>Home</Text>
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Home</Text>
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Home</Text>
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Home</Text>
				</View>
			</SafeAreaView>
		</ScrollView>
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
		fontFamily: 'SFRounded-bold',
		fontSize: 30,
	}
});
