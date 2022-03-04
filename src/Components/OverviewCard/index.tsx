import React from "react";
import { StyleSheet, View } from 'react-native';
import { Image, Text, ListItem} from 'react-native-elements';

interface IOverviewProps {
	title: string;
	amount: number;
	subtitle: string;
	listItem: IOverviewListItem[];
};

interface IOverviewListItem {
	title: string;
	subtitle?: string;
	amount: number;
	icon?: any; //find out and change type later
};

const Items = ({title, subtitle, amount, icon}: IOverviewListItem) => {
	return (
		<View>

			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>{title} {icon ? icon : null}</ListItem.Title>
					<ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
					<ListItem>{amount}</ListItem>
				</ListItem.Content>
				<ListItem.Chevron />
			</ListItem>
		</View>
	);
}

export const OverviewCard = ({title, amount, subtitle, listItem}: IOverviewProps) => {
	return (
		<View style={style.cardContainer}>
			<View style={style.headerContainer}>
				<Text h1>{title}</Text>
				<Text h2>{amount}</Text>
				<Text h4>{subtitle}</Text>
			</View>
			<View>
				{listItem.map(item => {
					<Items key={item.title} title={item.title} subtitle={item.subtitle} amount={item.amount} />
				})}
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	cardContainer: {
		padding: 10,
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
	},
	headerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	}
});
