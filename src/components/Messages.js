import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Alert,Image } from "react-native";
import {
	FlingGestureHandler,
	Directions,
	State,
} from "react-native-gesture-handler";
import Animated, {
	withSpring,
	useAnimatedStyle,
	useAnimatedGestureHandler,
	useSharedValue
} from "react-native-reanimated";

//import { theme } from "../../theme";

const Message = ({ time, isLeft, message, onSwipe,pic }) => {
	const startingPosition = 0;
	const x = useSharedValue(startingPosition);

	const isOnLeft = (type) => {
		if (isLeft && type === "messageContainer") {
			return {
				alignSelf: "flex-start",
				backgroundColor: "rgba(255, 151, 39, 0.23)",
				borderTopLeftRadius: 0,
			};
		} else if (isLeft && type === "pic") {
			return {
				color: "#000",
			};
		} else if (isLeft && type === "message") {
			return {
				color: "#000",
			};
		} else if (isLeft && type === "time") {
			return {
				color: "darkgray",
			};
		} else {
			return {
				borderTopRightRadius: 0,
			};
		}
	};

	const eventHandler = useAnimatedGestureHandler({
		onStart: (event, ctx) => {

		},
		onActive: (event, ctx) => {
			x.value = isLeft ? 50 : -50;
		},
		onEnd: (event, ctx) => {
			x.value = withSpring(startingPosition);
		}
	});

	const uas = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: x.value }]
		}
	});

	return (
		<FlingGestureHandler
			direction={isLeft ? Directions.RIGHT : Directions.LEFT}
			onGestureEvent={eventHandler}
			onHandlerStateChange={({ nativeEvent }) => {
				if (nativeEvent.state === State.ACTIVE) {
					onSwipe(message, isLeft);
				}
			}}
		>
			<Animated.View style={[styles.container, uas]}>
		
				<View
					style={[
						styles.messageContainer,
						isOnLeft("messageContainer"),
					]}
				>
					{/* <View style={{flexDirection:"row"}}>
<Image
					source={require('../assets/Chat/user2.png')}
					//style={Inputstyles.inputicons}
					resizeMode='contain'
				/>
							</View> */}
					<View style={styles.messageView}>
			
						<Text style={[styles.message, isOnLeft("message")]}>
							{message}
						</Text>
					</View>
					<View style={styles.timeView}>
						<Text style={[styles.time, isOnLeft("time")]}>
							{time}
						</Text>
					</View>
				</View>
	
			</Animated.View>
		</FlingGestureHandler>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 5,
		marginVertical: 0,

	},
	messageContainer: {
		backgroundColor: 'rgba(228, 228, 228, 1)',
		maxWidth: "80%",
		alignSelf: "flex-end",
		flexDirection: "row",
		borderRadius: 15,
		paddingHorizontal: 10,
		marginHorizontal: 10,
		paddingTop: 10,
		paddingBottom: 12,
	},
	messageView: {
		backgroundColor: "transparent",
		maxWidth: "80%",
	},
	timeView: {
		backgroundColor: "transparent",
		justifyContent: "flex-end",
		paddingLeft: 10,
	},
	message: {
		color: "rgba(45, 62, 80, 1)",
		alignSelf: "flex-start",
		fontSize: 15,
	},
	time: {
		color: "rgba(45, 62, 80, 1)",
		alignSelf: "flex-end",
		fontSize: 10,
	},
});

export default Message;
