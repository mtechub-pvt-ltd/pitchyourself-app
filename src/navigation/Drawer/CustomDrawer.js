import React,{useEffect,useState} from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    Drawer,
    Avatar,
    Title,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Colors from '../../utills/Colors';

/////////////////app pakages//////////////////
import { useIsFocused } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

import { fontFamily } from '../../constant/fonts';

  //////////////////////////app api/////////////////////////
  import axios from 'axios';
  import { BASE_URL } from '../../utills/ApiRootUrl';
  import AsyncStorage from '@react-native-async-storage/async-storage';


export const DrawerContent= (props)=> {

    const logout=async()=>
    {
      await AsyncStorage.removeItem('Userid');
      await AsyncStorage.removeItem('Userdata');
      await AsyncStorage.removeItem('UserEmail');
      await AsyncStorage.removeItem('UserPass');
      props.navigation.navigate('Login')
    }


////////////isfocused//////////
const isfocussed = useIsFocused()

  ///////////////textfields//////////////////
  const [userid, setuserid] =useState();
  const [Username, setusername] = useState('');
  const [Email,  setEmail] = useState('');
  const[image,setImage]=useState()
  
//////////////////api function////////////
  const GetProfileData= async() => {
    var user= await AsyncStorage.getItem('Userid')
    console.log("userid:",user)
   
    axios({
      method: 'GET',
      url:BASE_URL+"user/get-user?_id="+user
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
   /////////////setuserprofile data//////////
   setusername(response.data.name)
   setEmail(response.data.email)
   setImage(response.data.image)
   setuserid(response.data._id)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }
    const[currtime,setcurrtime]=useState() 
      useEffect(() => {
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds();
        //setcurrtime(hours+':'+min)
        GetTime()
        if (isfocussed) {
          GetProfileData()
        }
  
    },[isfocussed]);

    const GetTime=() =>{
     
        // Creating variables to hold time.
        var date, TimeType, hour, minutes, seconds, fullTime;
     
        // Creating Date() function object.
        date = new Date();
     
        // Getting current hour from Date object.
        hour = date.getHours(); 
     
        // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
        if(hour <= 11)
        {
     
          TimeType = 'am';
     
        }
        else{
     
          // If the Hour is Not less than equals to 11 then Set the Time format as PM.
          TimeType = 'pm';
     
        }
     
     
        // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
        if( hour > 12 )
        {
          hour = hour - 12;
        }
     
        // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
        if( hour == 0 )
        {
            hour = 12;
        } 
     
     
        // Getting the current minutes from date object.
        minutes = date.getMinutes();
     
        // Checking if the minutes value is less then 10 then add 0 before minutes.
        if(minutes < 10)
        {
          minutes = '0' + minutes.toString();
        }
     
     
        //Getting current seconds from date object.
        seconds = date.getSeconds();
     
        // If seconds value is less than 10 then add 0 before seconds.
        if(seconds < 10)
        {
          seconds = '0' + seconds.toString();
        }
     
     
        // Adding all the variables in fullTime variable.
        fullTime = hour.toString() + ':' + minutes.toString()  + ' ' + TimeType.toString();
     
        setcurrtime(fullTime)
  
      }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginTop: 25,alignSelf:'center'}}>
                          <TouchableOpacity onPress={()=>props.navigation.navigate('Profile',{item:'profile',id:userid})}>
                       
                        <Avatar.Image 
                               //source={require('../../assets/Homeimages/user.png')}
                               source={{uri:  BASE_URL+image}}
                               style={{backgroundColor:'grey'}}
                                size={100}
                            />
                                 
                          </TouchableOpacity>
                        </View>
                        <View style={{alignSelf:'center' }}>
                                <Title style={styles.title}>{Username}</Title>
                                <Title style={styles.caption}>{currtime}</Title>
                            </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/Home.png')}
                                style={{ width:wp(6), height:hp(3),resizeMode:'contain'}}
                              />
                            )}
                            label="Home"
                            labelStyle={styles.subtitle}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                                   <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/paper.png')}
                                style={{ width:wp(5), height:hp(3),resizeMode:'contain'}}
                              />
                            )}
                            label="Jobs"
                            labelStyle={styles.subtitle}
                            onPress={() => {props.navigation.navigate('Jobs',{item:'Jobs'})}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/profile.png')}
                                style={{ width:wp(5), height:hp(3) ,resizeMode:'contain'}}
                              />
                            )}
                            label="Profile"
                            labelStyle={styles.subtitle}
                            onPress={() => {props.navigation.navigate('Profile',{item:'profile',id:userid})}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/Hub.png')}
                                style={{ width:wp(5), height:hp(3) ,resizeMode:'contain'}}
                              />
                            )}
                            label="Hubs"
                            labelStyle={styles.subtitle}
                            onPress={() => {props.navigation.navigate('Hubs')}}
                        />
                       <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/Chat.png')}
                                style={{width:wp(6), height:hp(3) ,resizeMode:'contain'}}
                              />
                            )}
                            label="Chat"
                            labelStyle={styles.subtitle}
                          onPress={() => {props.navigation.navigate('ChatList')}}
                        />
                         <DrawerItem 
                          icon={({color, size}) => (
                            <Image
                            source={require('../../assets/Drawerimages/Save.png')}
                            style={{width:wp(4.5), height:hp(3),resizeMode:'contain'}}
                          />
                        )}
                            label="Saved"
                            labelStyle={styles.subtitle}
                            onPress={() => {props.navigation.navigate('SavedItems')}}
                        />
                        <DrawerItem 
                                icon={({color, size}) => (
                                  <Image
                                  source={require('../../assets/Drawerimages/Notification.png')}
                                  style={{ width:wp(4.5), height:hp(3),resizeMode:'contain'}}
                                />
                              )}
                            label="Notification"
                            labelStyle={styles.subtitle}
                            onPress={() => {props.navigation.navigate('Notification')}}
                        />
                    
                             <DrawerItem 
                                icon={({color, size}) => (
                                  <Image
                                  source={require('../../assets/Drawerimages/settings.png')}
                                  style={{ width:wp(5), height:hp(3) ,resizeMode:'contain'}}
                                />
                              )}
                            label="Setting"
                            labelStyle={styles.subtitle}
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
{/*                   
                            <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="exit-to-app" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Logout"
                            onPress={() => {props.navigation.navigate('Login')}}
                        /> */}
                    </Drawer.Section> 
                </View>
        
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      
    },
    userInfoSection: {
        marginTop: 20,
      paddingLeft: 20,
      
    },
    title: {
      fontSize: hp(2.5),
      marginTop: 5,
      fontWeight: 'bold',
      color:Colors.Appthemecolor,
      fontFamily:fontFamily.Quicksand_Bold
    },
    caption: {
      fontSize: hp(1.8),
      lineHeight: 15,
      fontFamily:fontFamily.Quicksand_Regular,
      color:'#BABDC9'
    },
    row: {
      marginTop: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
      
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      
    },
    drawerSection: {
      marginTop: 35,
    },
    bottomDrawerSection: {
        marginBottom: 20,
        borderTopColor: '#228b22',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 0,
      paddingHorizontal: 16,
      marginTop: 0,
    },
    preference1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center'
 
      },
      title1: {
        fontSize: 13,
        marginTop: 5,
        fontWeight: '700',
        color:'grey',
        marginLeft:27
      },
    imageview:
{
//flex:0.5,
height:wp('20%'),
width:wp('55%'),
justifyContent:"center",
alignSelf:'center',
},
subtitle: {
  fontSize:hp(1.5),
  fontWeight: '700',
  color:'#8E8E8E',
fontFamily:fontFamily.Quicksand_Bold
},
  });