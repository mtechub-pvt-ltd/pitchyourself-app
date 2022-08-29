import React,{useEffect,useState} from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    Drawer,
    Avatar,
    Title,
    Caption,
    TouchableRipple,
    Text,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Colors from '../../utills/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

export const DrawerContent= (props)=> {
    const paperTheme = useTheme();

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const logout=async()=>
    {
      await AsyncStorage.removeItem('Userid');
      await AsyncStorage.removeItem('Userdata');
      await AsyncStorage.removeItem('UserEmail');
      await AsyncStorage.removeItem('UserPass');
      props.navigation.navigate('Login')
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginTop: 25,alignSelf:'center'}}>
                          <TouchableOpacity onPress={()=>props.navigation.navigate('Profile',{item:'profile'})}>
                       
                        <Avatar.Image 
                               source={require('../../assets/Homeimages/user.png')}
                                size={100}
                            />
                                 
                          </TouchableOpacity>
                        </View>
                        <View style={{alignSelf:'center' }}>
                                <Title style={styles.title}>Lorem ipsum</Title>
                            </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/Home.png')}
                                style={{ width:30, height:40 ,resizeMode:'contain'}}
                              />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                                   <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/paper.png')}
                                style={{ width:25, height:30 ,resizeMode:'contain'}}
                              />
                            )}
                            label="Jobs"
                            onPress={() => {props.navigation.navigate('Jobs',{item:'Jobs'})}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/profile.png')}
                                style={{ width:20, height:40 ,resizeMode:'contain'}}
                              />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile',{item:'profile'})}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/Hub.png')}
                                style={{ width:20, height:40 ,resizeMode:'contain'}}
                              />
                            )}
                            label="Hubs"
                            onPress={() => {props.navigation.navigate('Hubs')}}
                        />
                       <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={require('../../assets/Drawerimages/Chat.png')}
                                style={{ width:20, height:40 ,resizeMode:'contain'}}
                              />
                            )}
                            label="Chat"
                          onPress={() => {props.navigation.navigate('ChatList')}}
                        />
                         <DrawerItem 
                          icon={({color, size}) => (
                            <Image
                            source={require('../../assets/Drawerimages/Save.png')}
                            style={{ width:20, height:40 ,resizeMode:'contain'}}
                          />
                        )}
                            label="Saved"
                            onPress={() => {props.navigation.navigate('SavedItems')}}
                        />
                        <DrawerItem 
                                icon={({color, size}) => (
                                  <Image
                                  source={require('../../assets/Drawerimages/Notification.png')}
                                  style={{ width:20, height:40 ,resizeMode:'contain'}}
                                />
                              )}
                            label="Notification"
                            onPress={() => {props.navigation.navigate('Notification')}}
                        />
                    
                             <DrawerItem 
                                icon={({color, size}) => (
                                  <Image
                                  source={require('../../assets/Drawerimages/settings.png')}
                                  style={{ width:20, height:40 ,resizeMode:'contain'}}
                                />
                              )}
                            label="Setting"
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
      fontSize: 15,
      marginTop: 5,
      fontWeight: 'bold',
      color:Colors.Appthemecolor
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
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
  });