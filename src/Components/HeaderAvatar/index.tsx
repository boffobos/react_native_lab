import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { ListItem, Text } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Modal } from '../components';
import { FONT_REGULAR, PRIMARY_COLOR_LIGHT, SIGNIN } from "../../config";
import { useAppDispatch } from "../../hooks";
import { userLogout } from "../../exports";
import { useNavigation } from "@react-navigation/native";

const img = require('../../Assets/Images/oval.png');

export const HeaderAvatar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	// const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
	const navgator = useNavigation();
	const dispatch = useAppDispatch();
	const toggle = (): void => {
		setIsOpen(!isOpen);
	};
	const logout = (): void => {
		setTimeout(() => dispatch(userLogout()), 500);
		setIsOpen(!isOpen);
		// navgator.navigate({name: SIGNIN.name});
	}
	// const toggleDropdown = (): void => {
	// 	setIsOpenDropdown(!isOpenDropdown);
	// };
	return (
		<View style={style.container}>
			<TouchableOpacity onPress={toggle}>
				<Image source={img} style={style.image}/>
			</TouchableOpacity>
			{/* <Modal style={style.dropdown} isOpen={isOpenDropdown} close={toggleDropdown}>
				<ListItem>
					<ListItem.Content>
						<ListItem.Title onPress={toggleDropdown}>Logout</ListItem.Title>
						<ListItem.Title onPress={toggle}>Open modal</ListItem.Title>
					</ListItem.Content>
				</ListItem>
			</Modal> */}
			<Modal isOpen={isOpen} close={toggle} style={style.modal}>
					<View style={style.modalTextContainer}>
						<Text style={style.textHead}>Log out</Text>
						<Text style={style.textAsk}>Are you sure?</Text>
					</View>
					<Button title={'Yes'} style={style.btn} onPress={logout}/>
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
		right: 0,

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
