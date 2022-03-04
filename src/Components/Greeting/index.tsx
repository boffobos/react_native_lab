import { GRAY_COLOR, LOCALE } from "../../config";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements/dist/Text";
import { useAppSelector } from "../../hooks";


export const Greeting = () => {
	const userName = useAppSelector(state => state.users.userName)?.split('@')[0];
	const date = new Date();
	let greeting = '';
	const hours = date.getHours()
	switch(true){
		case hours < 5:{
			greeting = 'Good night';
			break;
		}
		case hours < 12:{
			greeting = 'Good morning';
			break;
		}
		case hours < 18:{
			greeting = 'Good afternoon';
			break;
		}
		case hours < 22:{
			greeting = 'Good evening';
			break;
		}
		case hours <= 23:{
			greeting = 'Good night';
			break;
		}
		default:
			greeting = 'Hello'
	}

	return (
		<View style={style.container}>
			<Text style={style.content}>{greeting} {userName} | {date.toLocaleString(LOCALE, {month: 'short', day: '2-digit', year: 'numeric'})}</Text>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		paddingVertical: 10,
	},
	content: {
		color: GRAY_COLOR,
		fontSize: 16
	}
})
