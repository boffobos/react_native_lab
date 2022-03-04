import React from "react";
import { BORDER_COLOR, GRAY_COLOR } from "../../config";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { Image, Button, Text, ListItem } from 'react-native-elements';
import { useAppSelector } from '../../hooks';

interface ICardProps {
	title: string;
	chName: string;
	time: string;
	icon: ImageSourcePropType;
	image: ImageSourcePropType;
	description: string;
}

const CardHead = ({title, chName, time, icon}: ICardProps) => {
	return (
		<ListItem.Content>
			<View style={headStyle.container}>
				<Image source={icon} containerStyle={headStyle.icon}/>
				<View>
					<Text style={headStyle.title}>{title}</Text>
					<Text style={headStyle.subtitle}>{chName} {'*'} {time}</Text>
				</View>
			</View>
		</ListItem.Content>
	);
}

const CardBody = ({image, description}: ICardProps) => {
	const user = useAppSelector(state => state.users.userName)?.split('@')[0];
	return (
		<ListItem.Content>
			<View style={bodyStyle.container}>
				<Image source={image} containerStyle={bodyStyle.image} />
				<Text style={bodyStyle.description}>{`${user}, ${description}` }</Text>
			</View>
		</ListItem.Content>
	);
}

export const GoodnessCard = (props: ICardProps) => {
	return (
		<View style={containerStyle.container}>
				<CardHead {...props} />
				<CardBody {...props} />
		</View>
	);
}

const containerStyle = StyleSheet.create({
	container: {
		borderRadius: 5,
		borderColor: BORDER_COLOR,
		borderWidth: 1,
		marginBottom: 10,
		display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'center',
	},

});

const headStyle = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15
	},
	title: {
		fontSize: 18,
		marginBottom: 2,
	},
	subtitle: {
		color: GRAY_COLOR,
	},
	icon: {
		aspectRatio: 1.1,
		width: 50,
		marginRight: 7,
	},
});

const bodyStyle = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		aspectRatio: 2.06,
		width: '100%',
	},
	description: {
		padding: 15,
		fontSize: 18
	}
});
