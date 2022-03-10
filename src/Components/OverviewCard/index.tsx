import React from "react";
import { StyleSheet, View, Appearance, ImageSourcePropType, TextStyle } from 'react-native';
import { BORDER_COLOR, CURRENCY, CURRENCY_FORMAT, GRAY_COLOR, LOCALE, PRIMARY_COLOR } from "../../config";
import { Image, Text, ListItem } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';

export interface IOverviewProps {
	title: string;
	subtitle: string;
	listItem?: IOverviewListItem[];
};

export interface IOverviewListItem {
	title: string;
	titleStyle?: TextStyle;
	subtitle?: string;
	subtitleStyle?: TextStyle;
	amount: number;
	amountStyle?: TextStyle;
	icon?: ImageSourcePropType; //find out and change type later
	disabled?: boolean;
	stats?: {
		icon: 'triangle-down' | 'triangle-up';
		text: string;
		color: string;
	},
	isChevron?: boolean,
	lineIcon?: string;
};

const chevron = {
	color: PRIMARY_COLOR,
	size: 24,
}

export const OverviewItems = ({title, titleStyle, subtitle, subtitleStyle, amount, amountStyle, icon, stats, disabled, isChevron = true, lineIcon}: IOverviewListItem) => {
	const navigation = useNavigation();
	return (
		<View>
			<ListItem disabled={disabled} onPress={() => navigation.navigate(title as never, {subtitle: subtitle, amount: amount} as never)}  bottomDivider>
				<View style={{width: '100%', flex: 1,}}>
					<View  style={styleItem.container}>
						{lineIcon ? <View><Icon style={{fontSize: 20, marginRight: 10}} name={lineIcon} /></View> : null}
						<View style={{flex:1, flexShrink: 1, overflow: 'hidden', maxWidth: '60%', minHeight: 60}}>
							<View style={styleItem.titleContainer}>
								<Text style={[styleItem.title, titleStyle]}>{title}</Text>
								{icon ? <Image source={icon} containerStyle={styleItem.iconContainer} /> : null}
							</View>
							<Text style={[styleItem.subtitle, subtitleStyle]}>{subtitle}</Text>
						</View>
						<View style={styleItem.amountContainer}>
							<Text style={[styleItem.amount, amountStyle]}>{amount.toLocaleString(LOCALE, CURRENCY_FORMAT)}</Text>
							{isChevron ? <ListItem.Chevron {...chevron}/> : null}
						</View>
					</View>
					{stats ?
						<View style={{flexDirection: 'row', }}>
							<Icon name={stats?.icon} style={{color: stats.color, fontSize: 20, textAlign: 'center', flex: 1,}}>
							<Text style={{color: stats?.color, fontSize: 14 }}>{stats?.text}</Text>
							</Icon>
						</View>
						 :
					null }
				</View>
			</ListItem>
		</View>
	);
}

export const OverviewCard = ({title, subtitle, listItem}: IOverviewProps) => {
	const amount = listItem?.reduce((prev, item) => prev + item.amount, 0) || 0;
	const isDark = Appearance.getColorScheme() === 'dark';
	const CARD_BG_COLOR = isDark ? '#d4d4d4' : '#fff'

	return (
		<View style={[style.cardContainer, {backgroundColor: CARD_BG_COLOR}]}>
			<View style={style.headerContainer}>
				<Text style={style.headTitle}>{title}</Text>
				<Text style={style.headAmount}>{amount?.toLocaleString(LOCALE, CURRENCY_FORMAT)}</Text>
				<Text style={style.headSubtitle}>{subtitle}</Text>
			</View>
			<View>
				{listItem ?  listItem.map(item => {
					return <OverviewItems key={item.title} title={item.title} subtitle={item.subtitle} amount={item.amount} icon={item.icon}/>
				}) : null }
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
		marginBottom: 10,
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
		alignItems: 'center',
		width: '100%'
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		overflow: 'hidden',
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
		marginLeft: 3,
		// position: 'absolute',
	},
	amountContainer: {
		maxWidth: '50%',
		flexGrow: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',

	},
	amount: {
		fontSize: 20,
		textAlign: 'right',
		// flex: 2,
		// maxWidth: '50%',
		overflow: 'hidden',
	},
	arrow: {
		color: PRIMARY_COLOR,
	},
	statContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
	}
})
