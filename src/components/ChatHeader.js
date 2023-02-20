import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP } from "react-native-responsive-screen";
//import Icon from "@expo/vector-icons/FontAwesome";

//import { theme } from "../../theme";

const ChatHeader = ({ username, bio, picture, onlineStatus, onPress,viewstate }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={onPress}>
				{/* <Icon name="angle-left" size={30} color={theme.colors.white} /> */}
			</TouchableOpacity>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
				<Image
                    source={picture}
                    style={styles.image}
                    resizeMode='contain'
                />
					{/* <Image style={styles.image} source={{ uri: picture }} /> */}
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>{username}</Text>
						{/* <Text style={styles.onlineStatus}>{onlineStatus}</Text> */}
					</View>
					<View style={{marginBottom:10}}>
					{/* <Image
                   	source={require('../assets/Chat/dot.png')}
                    style={styles.icondot}
                    resizeMode='contain'
                /> */}
					</View>
			
				</TouchableOpacity>
		
				{/* {viewstate === true ?
					<View style={styles.options}>
					<TouchableOpacity
						onPress={() => navigation.navigate("OnCallScreen", {
							username: username,
							picture: picture
						})}
						style={{ paddingHorizontal: 5 }}
					>
						<View style={styles.iconview}>
							<Image
                    source={require('../assets/Chat/edit.png')}
                    style={styles.icon}
                    resizeMode='contain'
                />
				 </View>
					</TouchableOpacity>
					<TouchableOpacity style={{ paddingHorizontal: 20 }}>
					<View style={styles.iconview}>
					<Image
                    source={require('../assets/Chat/delete.png')}
                    style={styles.icon}
                    resizeMode='contain'
                />
						 </View>
					</TouchableOpacity>
				</View>
				:
				<View style={styles.options}>
				<TouchableOpacity style={{ paddingHorizontal: 20 }}>
				<Image
				source={require('../assets/Chat/search.png')}
				style={styles.icon}
				resizeMode='contain'
			/>
				</TouchableOpacity>
			</View>
			} */}
		
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: 'white',
		paddingTop: heightPercentageToDP(2),
		//paddingBottom:heightPercentageToDP(1),
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 58,
		width: 58,
		borderRadius: 32.5,
	},
	icondot: {
		height: 12,
		width: 12,
	},
	icon: {
		height: 18,
		width: 18,
	},
	iconview:
{
  width:35,
  height:35,
  backgroundColor:'rgba(112, 112, 112, 0.09)',
borderRadius:20,
alignItems:'center',
justifyContent:'center',
},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 8,
	},
	username: {
		color: 'rgba(21, 22, 36, 1)',
		fontSize: 18,
		fontWeight: "bold",
		alignSelf:'center'
	},
	onlineStatus: {
		color: 'rgba(21, 22, 36, 1)',
		fontSize: 16,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;
