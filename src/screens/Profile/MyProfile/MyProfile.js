import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,FlatList,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import CustomButtonhere from '../../../components/Button/CustomButton';
import { Divider,FAB } from 'react-native-paper';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';


const Profile = ({ navigation,route }) => {
console.log('params:',route.params)
  //textfields


  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <SafeAreaView style={styles.container}>
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
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
                 <Text style={Authtextstyles.maintext}>My Profile</Text>
                 </View>
  

            </View>
         
     <View style={{marginHorizontal:wp('0%'),flexDirection:'row'}}>
     <TouchableOpacity onPress={() => console.log('here')}>
          <Image
                   source={require('../../../assets/Profile/heart.png')}
                   style={[styles.topicon,{height:wp('7%')}]}
                    resizeMode='contain'
                />
                
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('here')}>
          <Image
                 source={require('../../../assets/Profile/send.png')}
                 style={[styles.topicon,{width:wp('10%')}]}
                    resizeMode='contain'
                />
                
                </TouchableOpacity>
     {route.params.item === 'profile'?    
       <TouchableOpacity onPress={() => console.log('here')}>
          <Image
                   source={require('../../../assets/Profile/add.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
                
                </TouchableOpacity>:
                null}
    
     </View>
     
          </View>
          <View style={{flexDirection:"row",justifyContent:'space-around',
          alignItems:'center'}}>
                          <View style={{}}>
                                          <Image
                                           source={require('../../../assets/Profile/mainuser.png')}
                                           style={styles.userimage}
                                              resizeMode='contain'
                                          />
                                          </View>
                                          <View>
                                          <Text style={styles.usermaintext}>David Bruno</Text>
                                          <Text style={styles.usertime}>Lorem ipsum</Text>
                                          <Text style={[styles.usertime,{width:wp('50%')}]}>Rhoncus ipsum eget tempus. 
                                          Praesent fermentum sa  rhoncus.</Text>
                                          </View>
                                          </View>
                                          <View style={{flexDirection:"row",
                                          justifyContent:'flex-start',
                                          alignItems:'center',marginHorizontal:wp('0%')}}>
                         {route.params.item === 'profile'?   
                          <CustomButtonhere
              title={'Edit Profile'}
              widthset={'38%'}
              onPress={() => navigation.navigate('EditProfile')}
            />
            :
            null}
 
                                          <Text style={[styles.usermaintext,{marginLeft:wp('5%')}]}>109</Text>
                                          <Text style={[styles.usertime,{marginLeft:wp('5%'),color:Colors.Appthemecolor,
                                        fontWeight:'400'}]}>Posts</Text>
                             
                                          </View>
                                             <TouchableOpacity onPress={()=>navigation.navigate('EditVideo')}>
                                            
                                          <View style={styles.postpiccontainer}>
                                
                                <Image
                                 source={require('../../../assets/Profile/video.png')}
                                 style={styles.postpic}
                                    resizeMode='contain'
                                />
                                </View>
                                </TouchableOpacity>  
                                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                                          <View style={{flexDirection:"row",justifyContent:"space-around",
                                          paddingHorizontal:0,width:100,marginBottom:10,
                                          //backgroundColor:'yellow'
                                          }}>
                             <View   style={[styles.iconview,{marginLeft:30}]}>
                            <Image
                                                source={require('../../../assets/socialicons/thumbsup.png')}
                                                style={{width:50,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                               <View   style={[styles.iconview,{marginLeft:25}]}>
                            <Image
                                                source={require('../../../assets/Profile/filedownload.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                                                   </View>
                                                   <View style={{flexDirection:"row",justifyContent:'space-between',
                                         marginRight:20
                                          //backgroundColor:'yellow'
                                          }}>
                             <View   style={styles.iconview}>
                            <Image
                                                source={require('../../../assets/socialicons/facebook.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                                        
                               <View   style={styles.iconview}>
                            <Image
                                                source={require('../../../assets/socialicons/linkedin.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                               <View   style={styles.iconview}>
                            <Image
                                                source={require('../../../assets/socialicons/instagram.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                               <View   style={styles.iconview}>
                            <Image
                                                source={require('../../../assets/socialicons/share.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                                          </View>
                                          </View>
<View>
    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
        <View>
    <Image
                                           source={require('../../../assets/Profile/user4.png')}
                                           style={styles.lastimage}
                                              resizeMode='contain'
                                          />
                                                         <Text style={[styles.usertime,{marginLeft:wp('2%'),
                                                         color:'white',
                                        fontWeight:'500',position:'absolute',alignSelf:"flex-end",
                                        paddingBottom:wp('5%')}]}>Rhoncus ipsum 
                                        </Text>
                                        </View>
                                        <View>
                                                 <Image
                                           source={require('../../../assets/Profile/user3.png')}
                                           style={styles.lastimage}
                                              resizeMode='contain'
                                          />
                                                        <Text style={[styles.usertime,{marginLeft:wp('2%'),
                                                         color:'white',
                                        fontWeight:'500',position:'absolute',alignSelf:"flex-end",
                                        paddingBottom:wp('5%')}]}>Rhoncus ipsum 
                                        </Text>
                                        </View>
                                                 <Image
                                           source={require('../../../assets/Profile/user2.png')}
                                           style={styles.lastimage}
                                              resizeMode='contain'
                                          />
                                                       <Text style={[styles.usertime,{marginLeft:wp('2%'),
                                                         color:'white',
                                        fontWeight:'500',position:'absolute',alignSelf:"flex-end",
                                        paddingBottom:wp('5%')}]}>Rhoncus ipsum 
                                        </Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{}}>
        <View>

    <Image
                                           source={require('../../../assets/Profile/user5.png')}
                                           style={styles.lastimage}
                                              resizeMode='contain'
                                          />
                                                                  <Text style={[styles.usertime,{marginLeft:wp('2%'),
                                                         color:'white',
                                        fontWeight:'500',position:'absolute',alignSelf:"flex-end",
                                        paddingBottom:wp('5%')}]}>Rhoncus ipsum 
                                        </Text>
                                                      
        </View>
        <View>
                                                 <Image
                                           source={require('../../../assets/Profile/user6.png')}
                                           style={styles.lastimage}
                                              resizeMode='contain'
                                          />
                                                                  <Text style={[styles.usertime,{marginLeft:wp('2%'),
                                                         color:'white',
                                        fontWeight:'500',position:'absolute',alignSelf:"flex-end",
                                        paddingBottom:wp('5%')}]}>Rhoncus ipsum 
                                        </Text>
                      
                                        </View>
    </View>
    <Image
                                           source={require('../../../assets/Profile/user1.png')}
                                           style={styles.largeimage}
                                              resizeMode='contain'
                                          />
                                                                  <Text style={[styles.usertime,{marginLeft:wp('2%'),
                                                         color:'white',
                                        fontWeight:'500',position:'absolute',alignSelf:"flex-end",
                                        paddingBottom:wp('5%')}]}>Rhoncus ipsum 
                                        </Text>
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>

  )
};

export default Profile;