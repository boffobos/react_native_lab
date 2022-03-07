import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import { APP, FONT_REGULAR } from '../../config/';

interface Props {
	img?: ImageSourcePropType;
	title: string;
	subtitle?: string;
}

export const HeaderTitle = ({ img, title = APP.name, subtitle }:Props) => {
	return (<View style={styles.container}>
		<View style={styles.titleContainer} >
			{img ? <Image source={img} style={styles.headerIcon} /> : null}
			<Text style={styles.title}> {title}</Text>
		</View>
			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>)
}

 const styles = StyleSheet.create({
	container: {
		flex: 1,
		// width: '100%',
		maxWidth: 250,
		display: 'flex',
		alignContent: 'space-between',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	titleContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		color: 'white',
		fontFamily: FONT_REGULAR,
	},
	headerIcon: {
		tintColor: 'white',
		width: 20,
		marginRight: 5,
		aspectRatio: 1.2,
	},
 	title: {
 		color: 'white',
 		fontFamily: FONT_REGULAR,
 		fontSize: 18,
 	},
	subtitle: {
	 color: 'white',
	 fontSize: 12,
	 height: 14,
	 overflow: 'hidden',
	}
 })

