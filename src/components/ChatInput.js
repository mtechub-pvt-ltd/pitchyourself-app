import React, { useState, useEffect, useRef, memo ,} from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity,
	Image
} from "react-native";

import Animated, {
	useSharedValue,
	withSpring,
	withTiming,
	useAnimatedStyle,
} from "react-native-reanimated";
import Inputstyles from "../utills/GlobalStyles/Inputstyles";

//import Icon from "@expo/vector-icons/MaterialCommunityIcons";
//import EmojiPicker from "./emojis/EmojiPicker";

import { useKeyboard } from "@react-native-community/hooks";

//import { theme } from "../../theme";

const ChatInput = ({ reply, closeReply, isLeft, }) => {
	const [message, setMessage] = useState("");
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const height = useSharedValue(70);

	const heightAnimatedStyle = useAnimatedStyle(() => {
		return {
			height: height.value
		}
	})

	// useEffect(() => {
	// 	if (showEmojiPicker) {
	// 		height.value = withTiming(400);
	// 	} else {
	// 		height.value = reply ? withSpring(130) : withSpring(70);
	// 	}
	// }, [showEmojiPicker]);

	// useEffect(() => {
	// 	if (reply) {
	// 		height.value = showEmojiPicker ? withTiming(450) : withTiming(130);
	// 	} else {
	// 		height.value = showEmojiPicker ? withSpring(400) : withSpring(70);
	// 	}
	// }, [reply]);




	return (
		<Animated.View style={[styles.container, heightAnimatedStyle]}>
			{reply ? (
				<View style={styles.replyContainer}>
					<TouchableOpacity
						onPress={closeReply}
						style={styles.closeReply}
					>
						<Icon name="close" color="#000" size={20} />
					</TouchableOpacity>
					<Text style={styles.title}>
						Response to
						 {isLeft ? 'username' : "Me"}
					</Text>
					<Text style={styles.reply}>{reply}</Text>
				</View>
			) : null}
			<View style={styles.innerContainer}>
				<View style={styles.inputAndMicrophone}>
					<TouchableOpacity
						style={styles.emoticonButton}
						onPress={() => setShowEmojiPicker((value) => !value)}
					>
						    <Image
                    source={require('../assets/Chat/smiley.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

					</TouchableOpacity>
					<TouchableOpacity
						style={styles.emoticonButton}
						onPress={() => setShowEmojiPicker((value) => !value)}
					>
						    <Image
                    source={require('../assets/Chat/add.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

					</TouchableOpacity>
					<TextInput
						multiline
						placeholder={"Type something..."}
						placeholderTextColor={'rgba(154, 156, 164, 1)'}
						style={styles.input}
						value={message}
						onChangeText={(text) => setMessage(text)}
					/>
					<TouchableOpacity style={styles.rightIconButtonStyle}>
					<Image
                    source={require('../assets/Chat/send.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
					</TouchableOpacity>
			
				</View>

			</View>
			{/* <EmojiPicker /> */}
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		backgroundColor: 'white',
	},
	replyContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	title: {
		marginTop: 5,
		fontWeight: "bold",
	},
	closeReply: {
		position: "absolute",
		right: 10,
		top: 5,
	},
	reply: {
		marginTop: 5,
	},
	innerContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 10,
	},
	inputAndMicrophone: {
		flexDirection: "row",
		backgroundColor: 'rgba(242, 242, 242, 1)',
		flex: 3,
		marginRight: 10,
		paddingVertical: Platform.OS === "ios" ? 10 : 0,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "space-between",
	},
	input: {
		backgroundColor: "transparent",
		paddingLeft: 20,
		color: 'rgba(154, 156, 164, 1)',
		flex: 3,
		fontSize: 15,
		height: 50,
		alignSelf: "center",
	},
	rightIconButtonStyle: {
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 15,
		paddingLeft: 10,
		borderLeftWidth: 1,
		borderLeftColor: "#fff",
	},
	swipeToCancelView: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 30,
	},
	swipeText: {
		color: 'green',
		fontSize: 15,
	},
	emoticonButton: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 10,
	},
	recordingActive: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 10,
	},
	recordingTime: {
		color: 'green',
		fontSize: 20,
		marginLeft: 5,
	},
	microphoneAndLock: {
		alignItems: "center",
		justifyContent: "flex-end",
	},
	lockView: {
		backgroundColor: "#eee",
		width: 60,
		alignItems: "center",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		height: 130,
		paddingTop: 20,
	},
	sendButton: {
		backgroundColor:'orange',
		borderRadius: 50,
		height: 50,
		width: 50,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default ChatInput;
