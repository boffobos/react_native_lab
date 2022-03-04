import React from "react";
import { StyleSheet, View, Appearance } from 'react-native';
import { BORDER_COLOR, CURRENCY, CURRENCY_FORMAT, GRAY_COLOR, LOCALE, PRIMARI_COLOR } from "../../config";
import { Image, Text, ListItem } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

interface IOverviewProps {
	title: string;
	subtitle: string;
	listItem: IOverviewListItem[];
};

interface IOverviewListItem {
	title: string;
	subtitle?: string;
	amount: number;
	icon?: any; //find out and change type later
};

const chevron = {
	color: PRIMARI_COLOR,
	size: 24,
}

const Items = ({title, subtitle, amount, icon}: IOverviewListItem) => {
	const navigation = useNavigation();
	return (
		<View>
			<ListItem onPress={() => navigation.navigate(title as never, {subtitle: subtitle, amount: amount} as never)}  bottomDivider>
				<ListItem.Content  style={styleItem.container}>
					<View>
						<View style={styleItem.titleContainer}>
							<ListItem.Title style={styleItem.title}>{title}</ListItem.Title>
							{icon ? <Image source={icon} containerStyle={styleItem.iconContainer} /> : null}
						</View>
						<ListItem.Subtitle><Text style={styleItem.subtitle}>{subtitle}</Text></ListItem.Subtitle>
					</View>
					<ListItem.Subtitle style={styleItem.amount}>{amount.toLocaleString(LOCALE, CURRENCY_FORMAT)}</ListItem.Subtitle>
				</ListItem.Content>
				<ListItem.Chevron {...chevron}/>
			</ListItem>
		</View>
	);
}

export const OverviewCard = ({title, subtitle, listItem}: IOverviewProps) => {
	const amount = listItem.reduce((prev, item) => prev + item.amount, 0);
	const isDark = Appearance.getColorScheme() === 'dark';
	const CARD_BG_COLOR = isDark ? '#d4d4d4' : '#fff'

	return (
		<View style={[style.cardContainer, {backgroundColor: CARD_BG_COLOR}]}>
			<View style={style.headerContainer}>
				<Text style={style.headTitle}>{title}</Text>
				<Text style={style.headAmount}>{amount.toLocaleString(LOCALE, CURRENCY_FORMAT)}</Text>
				<Text style={style.headSubtitle}>{subtitle}</Text>
			</View>
			<View>
				{listItem.map(item => {
					return <Items key={item.title} title={item.title} subtitle={item.subtitle} amount={item.amount} icon={item.icon}/>
				})}
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	cardContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
		borderColor: BORDER_COLOR,
		borderWidth: 1,
		borderRadius: 5,

	},
	headerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		paddingVertical: 20,
	},
	headTitle: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 7,
	},
	headAmount: {
		fontSize: 36,
		textAlign: 'center',

	},
	headSubtitle: {
		fontSize: 14,
		textAlign: 'center',
		color: GRAY_COLOR,
	},
});

const styleItem = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 20,
		textAlign: 'left',
		marginBottom: 7,
	},
	subtitle: {
		color: GRAY_COLOR,
		fontSize: 14,
		textAlign: 'left',
	},
	iconContainer: {
		aspectRatio: 1,
		width: 15,
		marginLeft: 3.
		// position: 'absolute',
	},
	amount: {
		fontSize: 20,
		textAlign: 'right'
	},
	arrow: {
		color: PRIMARI_COLOR,
	},
})
