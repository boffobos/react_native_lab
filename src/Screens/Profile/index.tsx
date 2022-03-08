import React from "react";
import { ImageSourcePropType, SafeAreaView, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import { Image, Avatar, Text } from "react-native-elements";
import { useAppSelector, useAppDispatch } from "../../hooks";
import image from '../../Assets/Images/avatar_1.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR, GRAY_COLOR, WHITE_COLOR, LIGHT_GRAY_COLOR, LOCALE, DATE_FORMAT } from "../../config";
import DateTimePicker from '@react-native-community/datetimepicker';

const avatarOptions = {
	avatarSize: 140,
	avatarBgColor: LIGHT_GRAY_COLOR,
	bntBgColor: PRIMARY_COLOR,
	bntColor: WHITE_COLOR,
}

const avatarFolder = '../../Assets/Images/';

const CustomAvatar = ({source, edit}: any) => {
	const buttons = ['add-a-photo', 'add-photo-alternate'];
	const options = {
		size: avatarOptions.avatarSize / 6,
		style: avatarStyle.avatarButtons,
	}
	return (
		<>
		<View style={{width: avatarOptions.avatarSize}}>
			<Avatar containerStyle={avatarStyle.avatar} source={source} rounded size={avatarOptions.avatarSize} />
			{edit && <View style={avatarStyle.btnsContainer}>
				{buttons.map(item => {
					return (
						<TouchableOpacity key={item} style={avatarStyle.btnBackground}>
							<Icon name={item} {...options} />
						</TouchableOpacity>
					);
				})}
			</View> }

		</View>
			</>
	);
}

const Item = ({title, value, edit}: any) => {
	const [fValue, setFValue] = React.useState('');
	const hanglePress = () => {

	}
	return (
		<>
		{!edit ?
			<View style={itemStyle.textGroup}>
				<Text style={itemStyle.title}>{title}</Text>
				<Text style={itemStyle.subtitle}>{value}</Text>
			</View>
		:
		<TouchableOpacity style={itemStyle.textGroup}>
				<Text style={itemStyle.title}>{title}</Text>
				<Text style={itemStyle.subtitle}>{value}</Text>
		</TouchableOpacity>
	}
	</>
	);
}

const data = [
	{
		title: 'Full name',
		value: 'Den',
	},
	{
		title: 'Date Of Birth',
		value: new Date('1994-04-01').toLocaleString(LOCALE, DATE_FORMAT),
	}
];

const Btn = ({title, onPress}) => {
	return(
		<TouchableOpacity onPress={onPress} style={style.btnContainerStyle}>
			<Text style={style.btnStyle} >{title}</Text>
		</TouchableOpacity>
	);
}

export const Profile = () => {
	const userData = useAppSelector(state => (state.users));
	const [userAvatar, setUserAvaral] = React.useState(userData.avatar);
	const [userName, setUserName] = React.useState(userData.userName);
	const [dob, setDob] = React.useState(userData.dob);
	const ava = '../../Assets/Images/' + userData.avatar;
	const [isEditing, setIsEditing] = React.useState(false);
	const cancelBtn = () => {
		setIsEditing(false);
	}
	console.log(ava);
	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={style.container}>
				<View style={style.itemContainer}>
					<CustomAvatar edit={isEditing} source={image} />
				</View>
				<View style={style.itemContainer}>
					<Item title={'Full Name'} value={userName} edit={isEditing} />
				</View>
				<View style={style.itemContainer}>
					<Item title={'Full Name'} value={userName} edit={isEditing} />
				</View>
			</View>
			<View style={style.btnsContainer}>
				{isEditing ?
				<>
				<Btn onPress={cancelBtn} title={'CANCEL'} />
				<Btn  title={'APPLY CHANGES'} />
				</> :
				<Btn onPress={() => setIsEditing(true)} title={'EDIT PROFILE'} />
				}
			</View>
		</SafeAreaView>

	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	itemContainer: {
		width: '100%',
		paddingTop: 20,
		paddingHorizontal: 50,
		display:'flex',
		alignItems: 'center',
	},
	btnsContainer: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 10,
	},
	btnContainerStyle: {
		flexGrow: 1,
		width: '46%',
		backgroundColor: PRIMARY_COLOR,
		borderRadius: 30,
		marginRight: 10
	},
	btnStyle: {
		color: WHITE_COLOR,
		textAlign: 'center',
		paddingVertical: 10,
	}
});

const itemStyle = StyleSheet.create({
	textGroup: {
		width: '100%',
		borderBottomColor: LIGHT_GRAY_COLOR,
		borderBottomWidth: 1
	},
	title: {
		fontSize: 16,
		marginBottom: 10,
		fontWeight: '500',
	},
	subtitle: {
		color: GRAY_COLOR,
		marginBottom: 10
	}
})

const avatarStyle = StyleSheet.create({
	avatar: {
		width: avatarOptions.avatarSize,
		height: avatarOptions.avatarSize,
		borderColor: avatarOptions.avatarBgColor,
		borderWidth: 7,
		borderRadius: avatarOptions.avatarSize / 2,
		backgroundColor: avatarOptions.avatarBgColor,
	},
	avatarButtons: {
		color: 'white',
	},
	btnsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: -30,
	},
	btnBackground : {
		backgroundColor: avatarOptions.bntBgColor,
		width: avatarOptions.avatarSize / 6 + avatarOptions.avatarSize / 7,
		height: avatarOptions.avatarSize / 6 + avatarOptions.avatarSize / 7,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: (avatarOptions.avatarSize / 6 + avatarOptions.avatarSize / 7) / 2 ,
	}
})
