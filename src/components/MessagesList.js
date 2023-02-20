import React, { useState, useRef } from "react";
import { ScrollView ,TouchableOpacity} from "react-native";


import Message from "./Messages";

//import { theme } from "../../theme";

const MessagesList = ({ onSwipeToReply }) => {
	const [messages, setMessages] = useState(
		[
		{
			user: 1,
			time: "12:05",
			content: "we have to assign new member",
			pic: require('../assets/Notification/person.png'),
		},
		{
			user: 1,
			time: "12:07",
			content: "Lorem ipsum dolor sit amet elit.",
			pic: require('../assets/Notification/person.png'),
		},
		{
			user: 0,
			time: "12:09",
			content: "Donec leo eros, aliquam eget tincidunt vel, imperdiet sit amet ex.",
		},
		{
			user: 0,
			time: "12:00",
			content: "Cras sed rutrum lectus.",
		},
		{
			user: 1,
			time: "12:05",
			content: "Morbi dignissim nec nunc et",
		},

		{
			user: 1,
			time: "12:09",
			content: "Nam imperdiet metus ac",
		},
	]
	);

	const user = useRef(0);
	const scrollView = useRef();
	const [view, setView] = useState(false)
	return (
		<ScrollView style={{ backgroundColor:'white', flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages.map((message, index) => (
				<TouchableOpacity onPress={()=> setView(true)}>
				<Message
					key={index}
					time={message.time}
					isLeft={message.user !== user.current}
					message={message.content}
					onSwipe={onSwipeToReply}
					view={view}
				/>
				</TouchableOpacity>

			))}
		</ScrollView>
	);
};

export default MessagesList;
