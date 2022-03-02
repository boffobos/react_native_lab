import React from "react";
import { TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { BORDER_COLOR, PRIMARI_COLOR, FONT_REGULAR } from "../../config";
import { userLogin } from '../../exports';
import { Formik } from "formik";
import  * as Yup from 'yup';



export const Signin = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const initVal = {
		email: '',
		password: '',
	};
	const submit = (data = initVal) => {
		setEmail(data.email);
		setPassword(data.password);
	};
	const validationScheme = Yup.object().shape({
		email: Yup.string().required('Required!').email('Invalid email'),
		password: Yup.string().required('Required!'),
	})
	React.useEffect(() => {

	}, [email, password])

	return (
		<SafeAreaView>
			<View style={{height: '100%', display: 'flex', justifyContent: 'space-between'}}>
				{/* top part of the screen */}
				<Formik validationSchema={validationScheme} initialValues={initVal} onSubmit={submit}>
					{({handleSubmit, values, handleBlur, handleChange, errors, touched}) => (
					<View style={style.topContainer}>
						<View style={style.pageName}>
							<Text style={style.headerText}>Login</Text>
						</View>
							<View style={style.formGroup}>
								<Text style={style.formLabelText}>Email</Text>
								<TextInput style={style.input} value={values.email} autoCapitalize='none' onChangeText={handleChange('email')} placeholder="Your email address" />
								{touched.email && errors.email ? <Text style={style.formErrorLabel}>{errors.email}</Text> : null }
							</View>
							<View style={style.formGroup}>
								<Text style={style.formLabelText}>Password</Text>
								<TextInput style={style.input} value={values.password} autoCapitalize='none' secureTextEntry={true} onChangeText={handleChange('password')} placeholder="Password" />
								{touched.password && errors.password ? <Text style={style.formErrorLabel}>{errors.password}</Text> : null }
									<View style={style.fgPassword}>
										<TouchableOpacity onPress={() => alert('hello!')}>
											<Text style={style.fgPassText}>FORGOT PASSWORD</Text>
										</TouchableOpacity>
									</View>
								<View style={style.loginContainer}>
									<Button title='Login' buttonStyle={style.loginBtn} onPress={handleSubmit} />
								</View>
							</View>
					</View>
					)}
				</Formik>
				{/* Bottom part of the screen */}
				<View style={style.bottomContainer}>
					<View style={style.otherAuthContainer}>
						<Text style={[{textAlign: 'center'}, style.secondaryBtnText]}>Lets test 2 ways to log in</Text>
						<View style={style.secondaryContainer}>
							<Button icon={{ name: 'fingerprint', size: 18}} title='Touch ID' buttonStyle={style.secondaryBtnContainer} titleStyle={style.secondaryBtnText} />
							<Button icon={{ name: 'face', size: 18}} title='Face ID' buttonStyle={style.secondaryBtnContainer} titleStyle={style.secondaryBtnText} />
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	topContainer: {
		marginTop: 50
	},
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
	formErrorLabel: {
		color: 'red',
	},
	fgPassword: {
		padding: 10,
		marginTop: 15,
		alignSelf: 'flex-end',
	},
	fgPassText: {
		color: PRIMARI_COLOR,
	},
	bottomContainer: {

	},
	loginContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '35%',
	},
	loginBtn: {
		backgroundColor: PRIMARI_COLOR,
		borderRadius: 50,
		height: 50,
		width: 300,
		// alignSelf: 'center',
	},
	otherAuthContainer: {
		marginTop: 50,
	},
	secondaryContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		marginTop: 10,
	},
	secondaryBtnContainer: {
		borderRadius: 50,
		backgroundColor: 'transparent',
		borderColor: '#71767c',
		borderWidth: 1,
		width: 170,

	},
	secondaryBtnText: {
		color: '#71767c',
		fontSize: 12,
	}
})
