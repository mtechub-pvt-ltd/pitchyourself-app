
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, FlatList,TextInput,
    Image, View, Text, TouchableOpacity,
} from 'react-native';
import ChatInput from '../../../components/ChatInput';
import ChatHeader from '../../../components/ChatHeader';
import { Divider } from 'react-native-paper';
import styles from './styles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
    



const ChatScreen = ({}) => {
    const [DATA, setData] = useState([
		{
            id:1,
			user: 1,
			time: "12:05",
			content: "we have to assign new member",
   
			//pic: require('../assets/Notification/person.png'),
		},
		{
            id:2,
			user: 1,
			time: "12:07",
			content: "Lorem ipsum dolor sit amet elit.",

			//pic: require('../assets/Notification/person.png'),
		},
		{
            id:3,
			user: 0,
			time: "12:09",
			content: "Donec leo eros, aliquam eget tincidunt vel, imperdiet sit amet ex.",
 
		},
		{
            id:4,
			user: 0,
			time: "12:00",
			content: "Cras sed rutrum lectus.",

		},
		{
            id:5,
			user: 1,
			time: "12:05",
			content: "Morbi dignissim nec nunc et",
      
		},

		{
            id:6,
			user: 1,
			time: "12:09",
			content: "Nam imperdiet metus ac",

		},
	])
//headerview state
const [showview, setShowView] = useState(false);


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
        const newData = DATA.map(item => {
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
        setData(newData);
        console.log("dataa:",DATA)
      };
    //textfields
    useEffect(() => {

        //SplashScreen.hide();
    }, []);
    return (

        <SafeAreaView style={styles.container}>

				<ChatHeader
				onPress={() => {}}
				username={'Evoa'}
				picture={require('../../../assets/Chat/user2.png')}
				onlineStatus={'12m ago'}
                viewstate={showview}
			/>
                <View style={styles.postcard}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => (
     
			<View >
		    {item.user ===1? 
            <TouchableOpacity onPress={()=> {setShowView(true),onChangeValue(item.id)}}>
    	<View
        style={[
            styles.messageContainerleft,
        ]}
    >
             {item.selected === true ?
             <View style={{marginRight:5}}>
           <Image
           source={require('../../../assets/Video/check.png')}
           style={Inputstyles.inputicons}
            resizeMode='contain'
        />
        </View>
         :null}
        <View style={styles.messageView}>
   
            <Text style={[styles.message]}>
                {item.content}
            </Text>
        </View>
        <View style={styles.timeView}>
            <Text style={[styles.time]}>
                {item.time}
            </Text>
        </View>
        
    </View>
    </TouchableOpacity>
    :null
    }
		{item.user===0?
                        <View
                        style={[
                            styles.messageContainer,
                        ]}
                    >
                        <View style={styles.messageView}>
                
                            <Text style={[styles.message]}>
                                {item.content}
                            </Text>
                        </View>
                        <View style={styles.timeView}>
                            <Text style={[styles.time]}>
                                {item.time}
                            </Text>
                        </View>
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
                <ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={'Ali'} />

        </SafeAreaView>

    )
};

export default ChatScreen;