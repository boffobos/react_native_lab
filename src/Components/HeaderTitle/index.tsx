import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import { APP, FONT_REGULAR } from '../../config/';

interface Props {
	img?: ImageSourcePropType;
	title: string;
	subtitle?: string;
}

export const HeaderTitle = ({ img, title = APP.name, subtitle }:Props) => {
	return (<View /*style={styles.container}*/>
		<View style={styles.titleContainer} >
			{img ? <Image source={img} style={styles.headerIcon} /> : null}
			<Text style={styles.title}> {title}</Text>
		</View>
		<Text style={styles.subtitle}>{subtitle}</Text>
		</View>)
}

 const styles = StyleSheet.create({
	container: {
		display: 'flex',
		// flexDirection: 'column',
		textAlign: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		width: 200,
	},
	headerIcon: {
		tintColor: 'white',
		width: 20,
		height: 20
	},
	titleContainer: {
		// flex: 1,
		// flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		color: 'white',
		fontFamily: FONT_REGULAR,
	},
 	title: {
 		color: 'white',
 		// fontFamily: 'SFRounded-regular',
 		fontSize: 18,
 		// alignSelf: 'center',
 		textAlign: 'center'
 	},
	subtitle: {
	 color: 'white',
	 fontSize: 12,
	 alignSelf: 'center',
	}
 })

