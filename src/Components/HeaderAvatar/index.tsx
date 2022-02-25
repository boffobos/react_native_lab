import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { Overlay, Text } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Modal } from '../components';
import { FONT_REGULAR, PRIMARY_COLOR_LIGHT, SECONDARY_COLOR } from "../../config";

const img = require('../../Assets/Images/oval.png');

export const HeaderAvatar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = (): void => {
		setIsOpen(!isOpen);
	}
	return (
		<View style={style.container}>
			<TouchableOpacity onPress={toggle}>
				<Image source={img} style={style.image}/>
			</TouchableOpacity>
			<Modal isOpen={isOpen} close={toggle} style={style.modal}>
					<View style={style.modalTextContainer}>
						<Text style={style.textHead}>Log out</Text>
						<Text style={style.textAsk}>Are you sure?</Text>
					</View>
					<Button title={'Yes'} style={style.btn} onPress={toggle}/>
			</Modal>
			{/* <Overlay isVisible={isOpen} onBackdropPress={toggle} >
				<Text>Modal window</Text>
				<Button
                title={'React Native Elements'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
			</Overlay> */}
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		height: '100%',
		marginRight: 15,
		alignItems: 'center',
		justifyContent: 'flex-start',
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
