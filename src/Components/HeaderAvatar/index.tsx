import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { Overlay, Text, Button } from "react-native-elements";
import { Modal } from '../components';

const img = require('../../Assets/Images/oval.png');

export const HeaderAvatar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	}
	return (
		<View style={style.container}>
			<TouchableOpacity onPress={toggle}>
				<Image source={img} style={style.image}/>
			</TouchableOpacity>
			{/* <Modal state={isOpen} /> */}
			<Overlay isVisible={isOpen} onBackdropPress={toggle} >
				<Text>Modal window</Text>
				<Button
                title={'React Native Elements'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
			</Overlay>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		// padding: 5,
		marginRight: 15,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	image: {
		width: 30,
		height: 30,
		borderRadius: 50
	}
})
