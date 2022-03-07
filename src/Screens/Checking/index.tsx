import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";

export const Checking = ({route}) => {
	const { subtitle } = route.params
	return (
		<SafeAreaView style={styles.safe}>
		<View style={styles.container}>
			<Text style={styles.text}>Checking</Text>
			<Text>{subtitle}</Text>
		</View>
		</SafeAreaView>
	)
}
