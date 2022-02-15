import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";

const img = require('../../Assets/Images/oval.png');

export const HeaderAvatar = () => {
	return (
		<View style={style.container}>
			<Image source={img} style={style.image}/>
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
