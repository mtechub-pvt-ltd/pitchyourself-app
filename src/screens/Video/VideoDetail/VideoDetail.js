import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import { Divider } from 'react-native-paper';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';


const VideoDetail = ({ navigation }) => {

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
          alignItems:'center',marginTop:30
        //backgroundColor:'red'
        }}>
      
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateVideo')}>
            <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Video Detail</Text>
                 </View>
            </View>
          </View>
      <View style={styles.inputview}>
<View style={styles.postcard}>
<View style={styles.mainusercontainer}>
    <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>
<View style={{}}>
                <Image
                 source={require('../../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                </View>
                <View style={{marginLeft:15}}>
                <Text style={styles.usermaintext}>Lorem ipsum</Text>
                <Text style={styles.usertime}>01 : 00 pm</Text>
                </View>
                </View>
                <View>
                <Image
                source={require('../../../assets/Homeimages/stars.png')}
                style={styles.iconimages}
                    resizeMode='contain'
                />
                </View>
                 </View>
                 <View style={{marginLeft:25,marginBottom:10}}>
                 <Text style={styles.postdesc}>Lorem ipsum dolor sit amet,
                  consetetur</Text>
                 </View>
              
                 <View style={styles.postpiccontainer}>
      
                <Image
                 source={require('../../../assets/Homeimages/postpic.png')}
                 style={styles.postpic}
                    resizeMode='contain'
                />
                </View>
                <View style={{marginLeft:25,marginTop:10,marginBottom:10}}>
                <Text style={[styles.postdesc]}>Lorem ipsum dolor sit amet,
                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                 labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                  accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                 clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                 </Text>
                 </View>
                 <Divider/>
                 <View style={{marginLeft:30,marginTop:10}}>
                <Text style={styles.recomend}>
                    #tag #video #tag #video #tag #video 
                #tag #video #tag #video #tag #video #tag #video #tag #video #tag 
                #video #tag #video #tag #video #tag #video #tag #video
                 #tag #video #tag #video #tag #video #tag #video #tag #video #tag #video #tag #video</Text>
                </View>
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
                                                source={require('../../../assets/socialicons/chated.png')}
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
                                          <TouchableOpacity onPress={()=> navigation.navigate('Recomendations')}>
                <View style={{marginLeft:20,marginBottom:10}}>
                <Text style={styles.recomend}>30 Recommendations</Text>
                </View>
                </TouchableOpacity>
             <Divider/>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",
            marginLeft:20,marginTop:10,marginBottom:10
            }}>
    <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>
<View style={{}}>
                <Image
                 source={require('../../../assets/images/user.png')}
                    style={styles.userimage}
                    resizeMode='contain'
                />
                </View>
                <View>
                <Text style={{fontSize:15,color:'#1B1B1B',fontWeight:'700'}}>Michael Bruno</Text>
                <Text style={[styles.recomend,{color:'#7A8FA6'}]}>Lorem ipsum dolor sit amet, 
                consetetur sadipscing </Text>
                </View>
                </View>
            
                 </View>
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>

  )
};

export default VideoDetail;