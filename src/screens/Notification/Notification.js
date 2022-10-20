
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, FlatList,TextInput,
    Image, View, Text, TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-paper';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'User',
        image: require('../../assets/Notification/person.png'),
        subtext:'Asked for download the file?'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Job name here',
        image: require('../../assets/Notification/job.png'),
        subtext:'You have a new Job Applied'
    },

    {
        id: '58694a0f-3da13-471f-bd96-147671e29d72',
        name: 'User',
        image: require('../../assets/Notification/person.png'),
        subtext:'Asked for download the file?'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad43ybb28ba',
        name: 'Job name here',
        image: require('../../assets/Notification/job.png'),
        subtext:'You have a new Job Applied'
    },
    {
        id: '3ac68afc-c625-48d3-a4f8-fbd91aa97f63',
        name: 'User',
        image: require('../../assets/Notification/person.png'),
        subtext:'Asked for download the file?'
    },
   
];


const Notification = ({ navigation }) => {

    const[notification,setNotification]=useState()
       ////////////////////UNSAVE POST//////////////
       const Notification = async (item) => {
        var user = await AsyncStorage.getItem('Userid')
        axios({
          method: 'GET',
          url: BASE_URL + 'user/get-to-notification?to=' + user,
    
        })
          .then(async function (response) {
            console.log("response user Notification", JSON.stringify(response.data))
            setNotification(response.data)
          
          })
          .catch(function (error) {
            if (error) {
              console.log('Issue in Appoinments Acceptence')
            }
    
            console.log("error", error)
          })
      }
    useEffect(() => {
        Notification()

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
                   source={require('../../assets/Homeimages/menu.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Notifications</Text>
                 </View>
  

            </View>
         
     
     
            <TouchableOpacity onPress={() => console.log('seqarch')}>
          <Image
                   source={require('../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
                </TouchableOpacity>
          </View>

                <View style={styles.postcard}>
                    <FlatList
                        data={notification}
                        renderItem={({ item, index, separators }) => (

                            <View style={styles.card}>
                                
                        <View style={{ flexDirection: "row", justifyContent: 'space-around', 
                        alignItems: 'center',marginBottom:20 }}>
                            <View style={{}}>
                                <Image
                                source={{uri: item.toImg}}
                                    style={styles.userimage}
                                    resizeMode='contain'
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, color: '#1B1B1B',
                                 fontWeight: '700' }}>{item.toName}
                                </Text>
                                <Text style={[styles.recomend,
                                     { color: '#7A8FA6' }]}>
                                      {item.msgContent}</Text>
                            </View>
                            {/* <View style={{marginLeft:110}}>
                            <Text style={[styles.recomend, { color: '#7A8FA6' }]}>{item.dateTime}</Text>
                            </View> */}

                    </View>
                           
                     

                            </View>
                   
                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />
      
                </View>
  
        </SafeAreaView>

    )
};

export default Notification;