import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { ListItem, Text } from "react-native-elements";
import { Modal } from '../components';
import { BORDER_COLOR, FONT_REGULAR, PRIMARY_COLOR_LIGHT, SIGNIN } from "../../config";
import { useAppDispatch } from "../../hooks";
import { userLogout } from "../../exports";
import { useNavigation } from "@react-navigation/native";
import img from '../../Assets/Images/oval.png'

export const HeaderAvatar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
	const navgator = useNavigation();
	const dispatch = useAppDispatch();
	const toggle = (): void => {
		setIsOpen(!isOpen);
	};
	const logout = (): void => {
		setTimeout(() => dispatch(userLogout()), 500);
		setIsOpenDropdown(!isOpenDropdown);
	}
	const navigate = ( to: never ): void => {
		navgator.navigate(to);
		setIsOpenDropdown(!isOpenDropdown);
	}
	const toggleDropdown = (): void => {
		setIsOpenDropdown(!isOpenDropdown);
	};
	return (
		<View style={style.container}>
			<TouchableOpacity onPress={toggleDropdown}>
				<Image source={img} style={style.image}/>
			</TouchableOpacity>
			<Modal style={style.dropdown} isOpen={isOpenDropdown} close={toggleDropdown} backdropStyle={style.backdrop} >
				<ListItem onPress={() => navigate('Profile' as never)} bottomDivider>
					<Text style={style.menuText}>Profile</Text>
				</ListItem>
				<ListItem onPress={logout} bottomDivider>
					<Text style={style.menuText}>Log out</Text>
				</ListItem>
			</Modal>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		marginRight: 15,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	dropdown: {
		width: 180,
		position: 'absolute',
		top: 95,
		right: 5,
		borderColor: BORDER_COLOR,
		borderWidth: 2,
		borderRadius: 10,
	},
	backdrop: {
		backgroundColor: '#0002'
	},
	menuText: {
		fontSize: 18,
	},
	modal: {
		display: 'flex',
		height: '30%',
		width: '70%',
		justifyContent: 'space-around',
		borderRadius: 15,
		padding: 20,
		borderBottomColor: '#000',
		borderBottomWidth: 10,
		overflow: 'hidden',
		zIndex: 1000,
	},
	modalTextContainer: {
		top: 0,
	},
	image: {
		width: 30,
		height: 30,
		borderRadius: 50
	},
	textHead: {
		position: 'relative',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 15,
		top: 0,
		left: 0,

	},
	textAsk: {
		fontFamily: FONT_REGULAR,
		fontSize: 24,
		textAlign: 'center',
	},
	btn: {
		backgroundColor: PRIMARY_COLOR_LIGHT,
		width: '50%',
		alignSelf: 'center',
		marginTop: 15,
	}
})
