
import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView, ScrollView, FlatList, TextInput,
    Image, View, Text, TouchableOpacity,
} from 'react-native';
import { Divider, Badge } from 'react-native-paper';


///////////////app styles////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

////////////////app sockets///////////////
import { io } from "socket.io-client";

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

////////////button///////////////
import { FloatingAction } from "react-native-floating-action";

const actions = [
    {
        icon: require("../../../assets/Chat/chat.png"),
        name: "bt_chat",
        position: 2,
        color: Colors.Appthemecolor
    },
    {
        icon: require("../../../assets/Chat/group.png"),
        name: "bt_group",
        position: 1,
        color: Colors.Appthemecolor
    },

];

const ChatList = ({ navigation }) => {

    //////////sockets states/////////
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);

    ////////////////user flatlist state//////////
    const [users, setusers] = useState()
    ///////get api for onboarding data//////////
    const GetUserslist = async () => {
        axios({
            method: 'GET',
            url: BASE_URL + "user/get-all-user",
        })
            .then(function (response) {
                console.log("response", JSON.stringify(response.data))
                /////////////setuserprofile data//////////
                setusers(response.data)
            })
            .catch(function (error) {
                console.log("error", error)
            })
    }

    const getuser = async () => {
        var user = await AsyncStorage.getItem('Userid')
        setCurrentUser(user)
        console.log("userid:", user)
    }
    //textfields
    useEffect(() => {
        getuser()
        GetUserslist()
        if (currentUser) {
            socket.current = io(BASE_URL);
            socket.current.emit("add-user", currentUser);
        }
        //SplashScreen.hide();
    }, [currentUser]);
    return (

        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center', marginTop: 20
                //backgroundColor:'red'
            }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Image
                            source={require('../../../assets/Homeimages/menu.png')}
                            style={Inputstyles.inputicons}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <View style={{ marginLeft: "12%" }}>
                        <Text style={Authtextstyles.maintext}>Chat</Text>
                    </View>


                </View>


                {/*      
          <TouchableOpacity onPress={() => navigation.navigate('Search')}> */}
                <Image
                    source={require('../../../assets/Homeimages/search.png')}
                    style={{ width: 50, height: 20 }}
                    resizeMode='contain'
                />
                {/* </TouchableOpacity> */}
            </View>

            <View style={styles.postcard}>
                <FlatList
                    data={users}
                    renderItem={({ item, index, separators }) => (
                        <TouchableOpacity onPress={() => 
                            {navigation.navigate('ChatScreen',
                      {item})}}>
                          {currentUser === item._id?  null:   
                           <View style={styles.card}>

<View style={{
    flexDirection: "row", justifyContent: 'space-around',
    alignItems: 'center', marginBottom: wp(3)
}}>
    <View style={{}}>

        <Image
            source={{uri:item.image}}
            style={styles.userimage}
            resizeMode='contain'
        />
        {/* <View style={{ position: "absolute", marginLeft: 40, marginTop: 30 }}>
            <Badge>5</Badge>
        </View> */}

    </View>
    <View style={{ marginLeft: wp(10) }}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{
                fontSize: 15, color: '#1B1B1B',
                fontWeight: '700'
            }}>{item.name}
            </Text>
            {/* <Image
                source={item.status}
                style={{ width: 30, height: 10 }}
                resizeMode='contain'
            /> */}
        </View>

        <Text style={[styles.recomend,
        { color: '#7A8FA6' }]}>
            {item.profession}</Text>
    </View>
    {/* <View style={{ marginLeft: 110 }}>
        <Text style={[styles.recomend, { color: '#7A8FA6' }]}>1m ago</Text>
    </View> */}

</View>



</View>
}
                      
                        </TouchableOpacity>
                    )}
                    //keyExtractor={item => item.id}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
                {/* <View style={{ marginBottom: wp('8%') }}>
                    <FloatingAction
                        buttonSize={60}
                        iconHeight={25}
                        iconWidth={25}
                        color={Colors.Appthemecolor}
                        overlayColor={'transparent'}
                        // visible={false}
                        actions={actions}
                        onPressItem={name => {
                            if (name === 'bt_chat') {
                                navigation.navigate('ChatScreen')
                            }
                            if (name === 'bt_group') {
                                navigation.navigate('Groups')
                            }
                            console.log(`selected button: ${name}`);
                        }}
                    />
                </View> */}

            </View>

        </SafeAreaView>

    )
};

export default ChatList;