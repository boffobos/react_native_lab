import { FONT_REGULAR, PRIMARY_COLOR } from "../../config";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Overlay, Text } from "react-native-elements";
import { Button } from "react-native-elements";


interface ModalComponentProps {
	isOpen: boolean,
	close?: ()=>void,
	children: JSX.Element | JSX.Element[],
	style?: StyleProp<ViewStyle>
	backdropStyle?: StyleProp<ViewStyle>
};


export const Modal: React.FC<ModalComponentProps> = ({isOpen, children, close, style, backdropStyle}:ModalComponentProps) => {

	return (
		<Overlay isVisible={isOpen} onBackdropPress={close} overlayStyle={style || styles.container} backdropStyle={backdropStyle || styles.backdrop} >
				{children}
		</Overlay>
	);
}

const styles = StyleSheet.create({

	container: {
		display: 'flex',
		backgroundColor: PRIMARY_COLOR,
		width: '70%',
		height: '40%',
		alignSelf: 'center',
		justifyContent: 'center',
		padding: 20,
		borderRadius: 15,
	},
	backdrop: {
		backgroundColor: '#0007',
	},
})
