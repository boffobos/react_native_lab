import { StyleSheet } from "react-native";
import { FONT_BOLD } from "../config";

export const styles = StyleSheet.create({
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
		width: '33%',
		alignSelf: 'center',
		margin: 20,

	}
})
