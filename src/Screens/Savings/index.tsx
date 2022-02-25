import { FONT_BOLD } from "../../config";
import React from "react"
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Savings = ({route}) => {
	const {subtitle} = route.params;
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<Text style={styles.text}>Saving</Text>
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
