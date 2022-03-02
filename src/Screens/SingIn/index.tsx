import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native";
import { BORDER_COLOR, PRIMARI_COLOR, FONT_REGULAR } from "../../config";
import { color } from "react-native-elements/dist/helpers";

export const Signin = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	return (
		<SafeAreaView>
			<View>
				<View style={style.pageName}>
					<Text style={style.headerText}>Login</Text>
				</View>
				<View style={style.formGroup}>
					<Text style={style.formLabelText}>Email</Text>
					<TextInput style={style.input} value={email} onTextInput={setEmail} placeholder="Your email address" />
				</View>
				<View style={style.formGroup}>
					<Text style={style.formLabelText}>Password</Text>
					<TextInput style={style.input} value={password} onTextInput={setPassword} placeholder="Password" />
						<View style={style.fgPassword}>
							<TouchableOpacity onPress={() => alert('hello!')}>
								<Text style={style.fgPassText}>FORGOT PASSWORD</Text>
							</TouchableOpacity>
						</View>
				</View>
			</View>
			<View>
				<Button title='Login' buttonStyle={style.loginBtn} />
			</View>
			<View style={style.secondaryContainer}>
				<Button icon={{ name: 'home', size: 14}} title='Touch ID' buttonStyle={style.secondaryBtnContainer} titleStyle={style.secondaryBtnText} />
				<Button title='Face ID' buttonStyle={style.secondaryBtnContainer} titleStyle={style.secondaryBtnText} />
			</View>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	input: {
		paddingVertical: 5,
		height: 40,
		width: '100%',
		borderBottomWidth: 1,
		borderColor: BORDER_COLOR,
	},
	formGroup: {
		marginBottom: 25,
		paddingHorizontal: 20,
	},
	headerText: {
		fontSize: 24,
		marginBottom: 7,
	},
	pageName: {
		alignSelf: 'flex-start',
		borderBottomColor: PRIMARI_COLOR,
		borderBottomWidth: 2,
		marginLeft: 20,
		marginBottom: 20,

	},
	formLabelText: {
		fontFamily: FONT_REGULAR,
		fontSize: 16,
		color: '#71767c',
	},
	fgPassword: {
		padding: 10,
		marginTop: 15,
		alignSelf: 'flex-end',
	},
	fgPassText: {
		color: PRIMARI_COLOR,
	},
	loginBtn: {
		backgroundColor: PRIMARI_COLOR,
		borderRadius: 50,
		height: 50,
		width: 300
		// alignSelf: 'center',
	},
	secondaryContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	secondaryBtnContainer: {
		borderRadius: 50,
		backgroundColor: 'transparent',
		borderColor: '#71767c',
		borderWidth: 1,
		width: 150,

	},
	secondaryBtnText: {
		color: '#71767c',
		fontSize: 12,
	}
})
