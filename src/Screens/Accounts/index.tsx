import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { FONT_BOLD, SAVINGS, CHECKING } from '../../config';

export const Accounts = ({navigation}) => {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.btnContainer} >
				<Button style={styles.btn} title={SAVINGS.name} onPress={() => navigation.navigate(SAVINGS.name, {subtitle: 'test1'})} />
				<Button style={styles.btn} title={CHECKING.name} onPress={() => navigation.navigate(CHECKING.name, {subtitle: 'test2'})} />
			</View>
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
	},
	btn: {
		color: 'black',
		backgroundColor: 'orange',
		width: '100%',
		alignSelf: 'center',
		margin: 20,

	},
	btnContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
});
