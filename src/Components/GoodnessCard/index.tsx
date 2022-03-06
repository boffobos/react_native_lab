import React, { useEffect, useRef } from "react";
import { BORDER_COLOR, GRAY_COLOR, PRIMARI_COLOR } from "../../config";
import {
	ImageSourcePropType,
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Dimensions,
} from "react-native";
import { Image, Button, Text } from 'react-native-elements';
import { useAppSelector } from '../../hooks';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ICardProps {
	title: string;
	chName: string;
	time: string;
	icon: ImageSourcePropType;
	image?: ImageSourcePropType;
	description?: string;
	video?: ImageSourcePropType;
	scroll?: number;
}

const CardHead = ({title, chName, time, icon}: ICardProps) => {
	return (
			<View style={headStyle.container}>
				<Image source={icon} containerStyle={headStyle.icon}/>
				<View>
					<Text style={headStyle.title}>{title}</Text>
					<Text style={headStyle.subtitle}>{chName} {'*'} {time}</Text>
				</View>
			</View>
	);
}
const screenCenter = Math.floor(Dimensions.get('screen').height / 2);

const VideoPlay = ({video, scroll}: any) => {
	const videoRef = React.useRef(null);
	const [paused, setPaused] = React.useState(true);
	const [loud, setLoud] = React.useState(false);


	React.useEffect(() => {
		getCoords();
	}, [scroll])

	const playVideo = () => {
		setPaused(!paused);
	}
	const muted = () => {
		setLoud(!loud);
	}
	const volume = () => {
		return +loud;
	}

	const getCoords = () => {
		if(videoRef.current){
			videoRef.current.measureInWindow((x, y, width, height) => {
				let viewCenter = y + height/2;
				if (viewCenter > screenCenter - 180 && viewCenter < screenCenter + 180) {
					setPaused(false)
				}	else {
					setPaused(true);
				}
			});
		}
	}

	return (
		<>
			<TouchableWithoutFeedback style={{flex: 1}} onPress={playVideo}>
				<View ref={videoRef} onLayout={getCoords} >
					<Video  source={video} paused={paused} style={bodyStyle.video} repeat={true} volume={volume()} />
					<TouchableWithoutFeedback onPress={muted}>
						<Icon size={30} name={loud? "volume-up" : "volume-off"} style={bodyStyle.volIcon} />
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
}

const CardBody = ({image, description, video, scroll}: ICardProps) => {
	const user = useAppSelector(state => state.users.userName)?.split('@')[0];

	return (
			<View style={bodyStyle.container}>
				{image ? <Image source={image} containerStyle={bodyStyle.image} /> : null}
				{video? <VideoPlay video={video} scroll={scroll} /> : null}
				{description? <Text style={bodyStyle.description}>{`${user}, ${description}` }</Text> : null}
			</View>
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
		flex: 1,
	},
	description: {
		padding: 15,
		fontSize: 18
	},
	video: {
		width: '100%',
		aspectRatio: 16/9,
	},
	volIcon: {
		width: 40,
		height:30,
		color: PRIMARI_COLOR,
		position: 'absolute',
		bottom: 15,
		left: '88%',
	}
});
