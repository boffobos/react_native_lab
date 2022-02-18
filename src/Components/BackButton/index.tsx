import { HOME } from "../../config";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { useNavigation } from "@react-navigation/native";

export const BackButton = () => {
	// const navigation = useNavigation();

	return (
		<TouchableOpacity style={style.container}>
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
