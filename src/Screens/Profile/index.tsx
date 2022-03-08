import React, { SyntheticEvent } from "react";
import { ImageSourcePropType, SafeAreaView, StyleSheet, TouchableOpacity, View, Button, TouchableWithoutFeedback, Pressable, TextInput } from 'react-native';
import { Image, Avatar, Text } from "react-native-elements";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { userUpdate } from "../../exports";
import image from '../../Assets/Images/avatar_1.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR, GRAY_COLOR, WHITE_COLOR, LIGHT_GRAY_COLOR, LOCALE, DATE_FORMAT } from "../../config";
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary, ImageLibraryOptions, ImagePickerResponse, CameraOptions} from 'react-native-image-picker';

const avatarOptions = {
	avatarSize: 140,
	avatarBgColor: LIGHT_GRAY_COLOR,
	bntBgColor: PRIMARY_COLOR,
	bntColor: WHITE_COLOR,
}

const CustomAvatar = ({source, edit, onChange}: any) => {
	const getPicture = async () => {
		const opt: ImageLibraryOptions = {
			mediaType: 'mixed',
			maxWidth: 1920,
			maxHeight: 1080,
		};
		const images: ImagePickerResponse = await launchImageLibrary(opt);
		if (!(images.didCancel || images.errorCode)) {
			onChange(images.assets[0].uri);
		} else {
			console.log(images.errorMessage || images.didCancel || 'failed!')
		}
	}
	const takePicture = async () => {
		const opt: CameraOptions = {
			mediaType: 'photo',
			saveToPhotos: true,
			cameraType: 'front',
		};
		const photo: ImagePickerResponse = await launchCamera(opt);
		if(!(photo.didCancel || photo.errorCode)){
			onChange(photo.assets[0].uri)
		}
	}
	const options = {
		size: avatarOptions.avatarSize / 6,
		style: avatarStyle.avatarButtons,
	}
	return (
		<>
		<View style={{width: avatarOptions.avatarSize}}>
			<Avatar containerStyle={avatarStyle.avatar} source={source} rounded size={avatarOptions.avatarSize} />
			{/* 	<Avatar containerStyle={avatarStyle.avatar} source={{uri: avatar}} rounded size={avatarOptions.avatarSize} />
			// */}
			{edit && <View style={avatarStyle.btnsContainer}>
				<TouchableOpacity onPress={takePicture} style={avatarStyle.btnBackground}>
					<Icon name={'add-a-photo'} {...options} />
				</TouchableOpacity>
				<TouchableOpacity onPress={getPicture} style={avatarStyle.btnBackground}>
					<Icon name={'add-photo-alternate'} {...options} />
				</TouchableOpacity>
			</View> }
		</View>
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

const Btn = ({title, onPress}: any) => {
	return(
		<TouchableOpacity onPress={onPress} style={style.btnContainerStyle}>
			<Text style={style.btnStyle} >{title}</Text>
		</TouchableOpacity>
	);
}

export const Profile = () => {
	const userData = useAppSelector(state => (state.users));
	const dispatch = useAppDispatch();
	const [userAvatar, setUserAvatar] = React.useState(userData.avatar);
	const avatarUri = {uri: userAvatar};
	const [userName, setUserName] = React.useState(userData.userName);
	const [nameEditing, setNameEditing] = React.useState(false);
	const [dob, setDob] = React.useState(userData.dob);
	const [dobEditing, setDobEditing] = React.useState(false);
	const [editMode, setEditMode] = React.useState(false);

	const cancelBtn = () => {
		setEditMode(false);
		setNameEditing(false);
		setDobEditing(false);
		setUserName(userData.userName);
		setDob(userData.dob);
		setUserAvatar(userData.avatar);
	}

	const applyChanges = () => {
		dispatch(userUpdate({userName: userName, dob: dob, avatar: userAvatar}));
		setEditMode(false);
		setNameEditing(false);
		setDobEditing(false);
	}

	const changeName = (name: string) => {
		setUserName(name);
	}
	const changeDob = (e: SyntheticEvent , date: Date | undefined) => {
		if (date) {
			const dateLocale = date.toLocaleDateString(LOCALE, DATE_FORMAT);
			setDob(dateLocale);
		}
	}

	const changeAvatar = (data: string) => {
		setUserAvatar(data);
	}

	const setEditing = (field?: string) => {
		if(editMode) {
			switch(field){
			case 'name':
				setNameEditing(true);
				setDobEditing(false);
				break;
			case 'dob':
				setDobEditing(true);
				setNameEditing(false);
				break;
			default:
				setNameEditing(false);
				setDobEditing(false);
			}
		}
	}

	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={style.container}>
				<View style={style.itemContainer}>
					<CustomAvatar edit={editMode} onChange={changeAvatar} source={avatarUri.uri ? avatarUri : image} />
				</View>
				<View style={style.itemContainer}>
					<Pressable onPress={() => setEditing('name')} style={itemStyle.textGroup}>
						<Text style={itemStyle.title}>Full Name</Text>
					{editMode && nameEditing ? <TextInput onChangeText={changeName} autoFocus style={itemStyle.subtitle} value={userName || ''} /> : <Text style={itemStyle.subtitle}>{userName}</Text>}
					</Pressable>
				</View>
				<View style={style.itemContainer}>
					<Pressable onPress={() => setEditing('dob')} style={itemStyle.textGroup}>
						<Text style={itemStyle.title}>Date Of Birth</Text>
					{!editMode || !dobEditing ?	<Text style={itemStyle.subtitle}>{dob}</Text> :
						<DateTimePicker
							value={new Date(dob || 0)}
							mode={'date'}
							onChange={changeDob}
						/> }
					</Pressable>
				</View>
			</View>
			<View style={style.btnsContainer}>
				{editMode ?
				<>
				<Btn onPress={cancelBtn} title={'CANCEL'} />
				<Btn onPress={applyChanges} title={'APPLY CHANGES'} />
				</> :
				<Btn onPress={() => setEditMode(true)} title={'EDIT PROFILE'} />
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
	},
	datePicker: {
		// backgroundColor: 'transparent',
		// color: PRIMARY_COLOR,
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
