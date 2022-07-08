
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, FlatList,TextInput,
    Image, View, Text, TouchableOpacity,
} from 'react-native';
import { Divider,Badge } from 'react-native-paper';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
    import { FloatingAction } from "react-native-floating-action";

    const actions = [
        {
          icon: require("../../../assets/Chat/chat.png"),
          name: "bt_chat",
          position: 2,
          color:Colors.Appthemecolor
        },
        {
          icon: require("../../../assets/Chat/group.png"),
          name: "bt_group",
          position: 1,
          color:Colors.Appthemecolor
        },
    
      ];

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Emma',
        image: require('../../../assets/Notification/person.png'),
        subtext:'Asked for download the file?',
        status:require('../../../assets/Chat/dot.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Sandra Vargas',
        image: require('../../../assets/Chat/user4.png'),
        subtext:'You have a new Job Applied',
        status:require('../../../assets/Chat/inactive.png')

    },

    {
        id: '58694a0f-3da13-471f-bd96-147671e29d72',
        name: 'Bruce Pierce',
        image: require('../../../assets/Chat/user3.png'),
        subtext:'Asked for download the file?',
        status:require('../../../assets/Chat/dot.png')
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad43ybb28ba',
        name: 'Emma',
        image: require('../../../assets/Notification/person.png'),
        subtext:'You have a new Job Applied',
        status:require('../../../assets/Chat/dot.png')
    },
    {
        id: '3ac68afc-c625-48d3-a4f8-fbd91aa97f63',
        name: 'Sandra Vargas',
        image: require('../../../assets/Chat/user4.png'),
        subtext:'Asked for download the file?',
        status:require('../../../assets/Chat/inactive.png')
    },
    {
        id: '3ac34afc-c625-48d3-a4f8-fbd91aa97f63',
        name: 'Sandra Vargas',
        image: require('../../../assets/Chat/user3.png'),
        subtext:'Asked for download the file?',
        status:require('../../../assets/Chat/inactive.png')
    },
    {
        id: '3ac68afc-c625-48d3-a4f8-fbd91a43h7f63',
        name: 'Sandra Vargas',
        image: require('../../../assets/Chat/user4.png'),
        subtext:'Asked for download the file?',
        status:require('../../../assets/Chat/dot.png')
    },
    {
        id: '3ac68afc-c625-484e3-a4f8-fbd91aa97f63',
        name: 'Sandra Vargas',
        image: require('../../../assets/Chat/user3.png'),
        subtext:'Asked for download the file?',
        status:require('../../../assets/Chat/dot.png')
    },
    {
        id: 'bd7acbea-c1b1-4456c2-aed5-3ad43ybb28ba',
        name: 'Emma',
        image: require('../../../assets/Notification/person.png'),
        subtext:'You have a new Job Applied',
     
    },
    {
        id: '3adf8afc-c625-48343-a4f8-fbd91aa97f63',
        name: 'Sandra Vargas',
        image: require('../../../assets/Chat/user3.png'),
        subtext:'Asked for download the file?',
        status:require('../../../assets/Chat/dot.png')
    },
    {
        id: 'bd89fcbea-c1b1-4456c2-aed5-3ad43b28ba',
        name: 'Emma',
        image: require('../../../assets/Notification/person.png'),
        subtext:'You have a new Job Applied',
     
    },
   
];


const ChatList = ({ navigation }) => {

    //textfields
    useEffect(() => {

        //SplashScreen.hide();
    }, []);
    return (

        <SafeAreaView style={styles.container}>
         <View style={{flexDirection:'row',justifyContent:'space-between',
          alignItems:'center',marginTop:20
        //backgroundColor:'red'
        }}>
      
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
                   source={require('../../../assets/Homeimages/menu.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Chat</Text>
                 </View>
  

            </View>
         
     
{/*      
          <TouchableOpacity onPress={() => navigation.navigate('Search')}> */}
          <Image
                   source={require('../../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
                {/* </TouchableOpacity> */}
          </View>

                <View style={styles.postcard}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                            <View style={styles.card}>

                        <View style={{ flexDirection: "row", justifyContent: 'space-around', 
                        alignItems: 'center',marginBottom:wp('3%s') }}>
                            <View style={{}}>
                           
                                <Image
                                source={item.image}
                                    style={styles.userimage}
                                    resizeMode='contain'
                                />
                                <View style={{position:"absolute",marginLeft:40,marginTop:30}}>
                                <Badge>5</Badge>
                                </View>
                  
                            </View>
                            <View style={{marginLeft:20,}}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={{ fontSize: 15, color: '#1B1B1B',
                                 fontWeight: '700' }}>{item.name}
                                </Text>
                                <Image
                   source={item.status}
                   style={{width:30,height:10}}
                    resizeMode='contain'
                />
                                </View>
                           
                                <Text style={[styles.recomend,
                                     { color: '#7A8FA6' }]}>
                                      {item.subtext}</Text>
                            </View>
                            <View style={{marginLeft:110}}>
                            <Text style={[styles.recomend, { color: '#7A8FA6' }]}>1m ago</Text>
                            </View>

                    </View>
                           
   

                            </View>
       </TouchableOpacity>
                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />
                                        <View style={{marginBottom:wp('8%')}}>
                                        <FloatingAction
                                        buttonSize={60}
                                        iconHeight={25}
                                        iconWidth={25}
                                        color={Colors.Appthemecolor}
        overlayColor={'transparent'}
       // visible={false}
    actions={actions}
    onPressItem={name => {
        if(name==='bt_chat')
        {
            navigation.navigate('ChatScreen')
        }
        if(name==='bt_group')
        {
            navigation.navigate('Groups')
        }
      console.log(`selected button: ${name}`);
    }}
  />
                                        </View>
   
                </View>
  
        </SafeAreaView>

    )
};

export default ChatList;