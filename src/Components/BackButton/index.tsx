import { HOME } from "../../config";
import React from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";

interface IBackButton {
	onPress: (event: GestureResponderEvent) => void;
}

export const BackButton = ({onPress}: IBackButton) => {
	// const nav = useNavigation();
	console.log(onPress);
	return (
		<TouchableOpacity onPress={onPress} style={style.container}>
			<Image source={require('../../Assets/Images/back.png')} style={style.image} />
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',

	},
	image: {
		width: 20,
		height: 20,
		marginLeft: 15
	}
})
