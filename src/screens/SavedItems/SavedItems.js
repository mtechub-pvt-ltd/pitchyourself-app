import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import { Divider,FAB } from 'react-native-paper';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';


const SavedItems = ({ navigation }) => {

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
                   source={require('../../assets/Homeimages/menu.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Saved Items</Text>
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
      <View style={styles.inputview}>
<View style={styles.postcard}>
<View style={styles.mainusercontainer}>
    <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>
<View style={{}}>
                <Image
                 source={require('../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                </View>
                <View style={{marginLeft:10}}>
                <Text style={styles.usermaintext}>Lorem ipsum</Text>
                <Text style={styles.usertime}>01 : 00 pm</Text>
                </View>
                </View>
                <View>
                <Image
                source={require('../../assets/Homeimages/stars.png')}
                style={styles.iconimages}
                    resizeMode='contain'
                />
                </View>
                 </View>
                 <View style={{marginLeft:20,marginBottom:10}}>
                 <Text style={styles.postdesc}>Lorem ipsum dolor sit amet,
                  consetetur</Text>
                 </View>
              
                 <View style={styles.postpiccontainer}>
      
                <Image
                 source={require('../../assets/Homeimages/postpic.png')}
                 style={styles.postpic}
                    resizeMode='contain'
                />
                </View>
                <View style={{marginLeft:20,marginBottom:10,width:'87%',marginTop:15}}>
                 <Text style={styles.postdesc}>Lorem ipsum dolor sit amet, 
                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                 invidunt ut labore et dolore magna aliquyam erat, sed diam 
 </Text>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                                          <View style={{flexDirection:"row",justifyContent:"space-around",
                                          paddingHorizontal:0,width:100,marginBottom:10,
                                          //backgroundColor:'yellow'
                                          }}>
                             <View   style={[styles.iconview,{marginLeft:30}]}>
                            <Image
                                                source={require('../../assets/socialicons/thumbsup.png')}
                                                style={{width:50,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                               <View   style={[styles.iconview,{marginLeft:25}]}>
                            <Image
                                                source={require('../../assets/socialicons/chated.png')}
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
                                                source={require('../../assets/socialicons/facebook.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                                        
                               <View   style={styles.iconview}>
                            <Image
                                                source={require('../../assets/socialicons/linkedin.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                               <View   style={styles.iconview}>
                            <Image
                                                source={require('../../assets/socialicons/instagram.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                               <View   style={styles.iconview}>
                            <Image
                                                source={require('../../assets/socialicons/share.png')}
                                                style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                               </View>
                                          </View>
                                          </View>
                <View style={{marginLeft:20,marginBottom:10}}>
                <Text style={styles.recomend}>30 Recommendations</Text>
                </View>
             <Divider/>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",
            marginLeft:20,marginTop:10
            }}>
    <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center',
    marginBottom:20}}>
<View style={{}}>
                <Image
                 source={require('../../assets/Homeimages/user.png')}
                    style={styles.userimage}
                    resizeMode='contain'
                />
                </View>
                <View>
                <Text style={{fontSize:15,color:Colors.Appthemecolor}}>Michael Bruno</Text>
                <Text style={styles.recomend}>Lorem ipsum dolor sit amet, 
                consetetur sadipscing </Text>
                </View>
                </View>
  
                 </View>

        </View>
        </View>
    </SafeAreaView>

  )
};

export default SavedItems;