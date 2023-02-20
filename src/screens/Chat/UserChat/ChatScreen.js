
import React, { useEffect, useState,useRef} from 'react';
import {
    SafeAreaView, ScrollView, FlatList,TextInput,
    Image, View, Text, TouchableOpacity, Keyboard,

} from 'react-native';
import ChatInput from '../../../components/ChatInput';
import ChatHeader from '../../../components/ChatHeader';
import { Divider } from 'react-native-paper';

////////////////app styles/////////////////////
import styles from './styles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import ChatInputstyles from '../../../utills/GlobalStyles/ChatInputstyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';


    import Animated, {
        useSharedValue,
        withSpring,
        withTiming,
        useAnimatedStyle,
    } from "react-native-reanimated";

    import { BackHandler } from "react-native";
    import { Picker } from 'emoji-mart-native'

////////////////app sockets///////////////
import { io } from "socket.io-client";

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ChatScreen = ({route,navigation}) => {

console.log('here previous data:',route.params)

/////////////////previous data/////////
const[predata]=useState(route.params.item)
  /////////TextInput References///////////
  const ref_input1 = useRef();
  const flatListRef = useRef();

  ///////////////chat input clear///////////////
  const ChatClear=()=>{
    console.log(" prod clearrrrrrrrrrrrrrr")
    ref_input1.current.clear()
  }

///////////////chatinput states/////////////
const [messages, setMessages] = useState();
const [arrivalMessage, setArrivalMessage] = useState();
const [message, setMessage] = useState("");
const [showEmojiPicker, setShowEmojiPicker] = useState(false);
const height = useSharedValue(70);

const heightAnimatedStyle = useAnimatedStyle(() => {
    return {
        height: height.value
    }
})

//headerview state
const [showview, setShowView] = useState(false);
const [upward, setupward] = useState(false);

    const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};
    const closeReply = () => {
		setReply("");
	};
    const onChangeValue = (itemSelected, index) => {
        const newData = messages.map(item => {
          if (item.id == itemSelected) {
            return {
              ...item,
              selected: !item.selected,
            };
          }
          return {
            ...item,
            selected: item.selected,
          };
        });
        setMessage(newData);
    
      };
      ////////////////////Messages functions//////////////
      const GetMessgae = async () => {
        var user = await AsyncStorage.getItem('Userid')
        console.log("here in get messages:")
        axios({
          method: 'POST',
          url: BASE_URL + 'user/get-msg-socket',
          data: {
          from: user,
          to: predata._id,
          },
        })
          .then(async function (response) {
            console.log(" get messages response", JSON.stringify(response.data))
            setMessages(response.data.reverse())
          })
          .catch(function (error) {
            if (error) {
              console.log('error in get messages')
            }
    
            console.log("error", error)
          })
      }
      const AddMessgae = async () => {
        var user = await AsyncStorage.getItem('Userid')
        axios({
          method: 'POST',
          url: BASE_URL + 'user/add-msg-socket',
          data: {
   from: user,
          to: predata._id,
          message: message,
          },
        })
          .then(async function (response) {
            console.log(" saved response", JSON.stringify(response.data))
            GetMessgae()
          })
          .catch(function (error) {
            if (error) {
              console.log('Issue in Appoinments Acceptence')
            }
    
            console.log("error", error)
          })
      }
      const handleSendMsg = async () => {
        var user = await AsyncStorage.getItem('Userid')
    console.log("here",user,predata._id)
        socket.current.emit("send-msg", {
          to: predata._id,
          from: user,
          message,
        });
        ChatClear()
        AddMessgae()
        GetMessgae()
    
        // await axios.post(sendMessageRoute, {
        //   from: user,
        //   to: predata._id,
        //   message: message,
        // });
    
        // const msgs = [...messages];
        // msgs.push({ fromSelf: true, message:message });
        // setMessages(msgs.reverse());
      };

          //////////sockets states/////////
    const socket = useRef();
    const [currentUser, setCurrentUser] = useState(undefined);
      const getuser = async () => {
        var user = await AsyncStorage.getItem('Userid')
        setCurrentUser(user)
        console.log("userid:", user)
    }
    
    const onKeyboardDidShow = (e) => {
        setupward(true)
      };
      const onKeyboardDidHide = (e) => {
        setupward(false)
      };
      useEffect(() => {
        Keyboard.addListener("keyboardDidShow", onKeyboardDidShow);
        Keyboard.addListener("keyboardDidHide", onKeyboardDidHide);
      }, []);
    useEffect(() => {
   
        getuser()
        GetMessgae()
        if (currentUser) {
            socket.current = io(BASE_URL);
            socket.current.emit("add-user", currentUser);
        }
        if (socket.current) {
          socket.current.on("msg-recieve", (msg) => {
            console.log("recieve masgs:",msg)
            setArrivalMessage({ fromSelf: false, message: msg });
          });
        }
    }, [currentUser,messages]);

    // useEffect(() => {
    //   if (socket.current) {
    //     socket.current.on("msg-recieve", (msg) => {
    //       console.log("recieve masgs:",msg)
    //       setArrivalMessage({ fromSelf: false, message: msg });
    //     });
    //   }
    // }, [messages]);
    useEffect(() => {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);
    // useEffect(() => {
    //   flatListRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [messages]);
    return (

        <SafeAreaView style={styles.container}>

				<ChatHeader
				onPress={() => {}}
				username={predata.name}
				picture={{uri: predata.image}}
				//onlineStatus={'12m ago'}
                viewstate={showview}
			/>
 
                <View style={[styles.postcard,{height:upward === true ? hp(40):hp(80)}]}>
                    <FlatList
                       ref={flatListRef}
                        data={messages}
                        renderItem={({ item, index, separators }) => (
     
			<View >
		    {item.fromSelf === false? 
            // <TouchableOpacity onPress={()=> {setShowView(true),onChangeValue(item.id)}}>
    	<View
        style={[
            styles.messageContainerleft,
        ]}
    >
             {/* {item.selected === true ?
             <View style={{marginRight:5}}>
           <Image
           source={require('../../../assets/Video/check.png')}
           style={Inputstyles.inputicons}
            resizeMode='contain'
        />
        </View>
         :null} */}
        <View style={styles.messageView}>
   
            <Text style={[styles.message]}>
                {item.message}
            </Text>
        </View>
        <View style={styles.timeView}>
            <Text style={[styles.time]}>
                {item.time}
            </Text>
        </View>
        
    </View>
    // </TouchableOpacity>
    :null
    }
		{item.fromSelf === true?
                        <View
                        style={[
                            styles.messageContainer,
                        ]}
                    >
                        <View style={styles.messageView}>
                
                            <Text style={[styles.message]}>
                                {item.message}
                            </Text>
                        </View>
                        {/* <View style={styles.timeView}>
                            <Text style={[styles.time]}>
                                {item.time}
                            </Text>
                        </View> */}
                    </View>
                    :
                    null
        }	
			</View>

                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        inverted={true}
                                        />
      
                </View>
 
                {/* <ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={'Ali'} /> */}
                <Animated.View style={[ChatInputstyles.container, heightAnimatedStyle]}>
	
				{/* <View style={ChatInputstyles.replyContainer}>
					<TouchableOpacity
						onPress={closeReply}
						style={ChatInputstyles.closeReply}
					>
						<Icon name="close" color="#000" size={20} />
					</TouchableOpacity>
					<Text style={ChatInputstyles.title}>
						Response to
						 {isLeft ? 'username' : "Me"}
					</Text>
					<Text style={ChatInputstyles.reply}>{reply}</Text>
				</View> */}
		
			<View style={ChatInputstyles.innerContainer}>
				<View style={ChatInputstyles.inputAndMicrophone}>
					<TouchableOpacity
						style={ChatInputstyles.emoticonButton}
						onPress={() => setShowEmojiPicker((value) => !value)}
					>
						    <Image
                    source={require('../../../assets/Chat/smiley.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

					</TouchableOpacity>
          
					<TouchableOpacity
						style={ChatInputstyles.emoticonButton}
						onPress={() => setShowEmojiPicker((value) => !value)}
					>
						    <Image
                    source={require('../../../assets/Chat/add.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

					</TouchableOpacity>
     

					<TextInput
						multiline
                        ref={ref_input1}
						placeholder={"Type something..."}
						placeholderTextColor={'rgba(154, 156, 164, 1)'}
						style={ChatInputstyles.input}
						value={message}
						onChangeText={(text) => setMessage(text)}
                    //     onFocus={() => {
                    
                    //   setupward(true)
                    //       }}
					/>
					<TouchableOpacity style={ChatInputstyles.rightIconButtonStyle}
                    onPress={()=> handleSendMsg()}
                    >
					<Image
                    source={require('../../../assets/Chat/send.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
					</TouchableOpacity>
			
				</View>

			</View>
			{/* <EmojiPicker /> */}
		</Animated.View>
        </SafeAreaView>

    )
};

export default ChatScreen;