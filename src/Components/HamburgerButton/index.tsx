import React from "react";
import { Image } from "react-native-elements";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
	onPress?: Function;
}

export const HabmburgerButton = ({onPress}: Props) => {

	return (

		<TouchableOpacity onPress={() => Alert.alert('Hello!')} style={style.container}>
			<Image source={require('../../Assets/Images/burgerMenuIcon.png')} style={style.image}/>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	container: {
		height: '100%'
	},
	image: {
		width: 20,
		height: 20,
		marginLeft: 15,
	}
})
