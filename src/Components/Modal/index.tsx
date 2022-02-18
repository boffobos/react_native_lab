import React from "react";
import { StyleSheet, View } from "react-native";
import { Overlay, Text } from "react-native-elements";
import { Button } from "react-native-elements";

export const Modal = (state: boolean) => {
	const [isOpen, setIsOpen] = React.useState(state);
	const toggleState = () => {
		setIsOpen(!isOpen);
	}
	return (
		<Overlay isVisible={state} style={style.modal}>
			<View>
				<Text>Are you sure?</Text>
				<Button title='Yes' onPress={toggleState} />
			</View>
		</Overlay>
	);
}

const style = StyleSheet.create({
	modal: {
		// position: 'absolute',
		// top: '50%',
		// left: '50%',
	}
})
