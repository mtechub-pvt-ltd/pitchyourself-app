import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,FlatList,
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
  

  const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
  
  
];

const Home = ({ navigation }) => {

  //textfields
//showmoreviews
const[star,setstar]=useState(false)
//make toggleview

const toggleview=()=>
{
  if(star=== false)
  {
    setstar(true)
  }
  else{
    setstar(false)
  }
}

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
                 <Text style={Authtextstyles.maintext}>Home</Text>
                 </View>
  

            </View>
         
     
     
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
                   source={require('../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
                </TouchableOpacity>
          </View>
          <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => (

                          <View style={styles.inputview}>
                          <View style={styles.postcard}>
                          <View style={styles.mainusercontainer}>
                              <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>
                          <View style={{}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Profile',{item:'home',id:'630e02140b16dccc7d1f976a'})}>
                            <Image
                                           source={require('../../assets/Homeimages/user.png')}
                                           style={styles.userimage}
                                              resizeMode='contain'
                                          />
                            </TouchableOpacity>
                              
                                          </View>
                                          <View>
                                          <Text style={styles.usermaintext}>Lorem ipsum</Text>
                                          <Text style={styles.usertime}>01 : 00 pm</Text>
                                          </View>
                                          </View>
                                          <TouchableOpacity onPress={()=> toggleview()}>
                                          <View>
                                            {star === true ?    
                                                <View   style={[styles.iconview,{marginLeft:30}]}>
                                            <Image
                                          source={require('../../assets/Homeimages/orangestart.png')}
                                          style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                                          </View>
                                        :
                                        <View   style={[styles.iconview,{marginLeft:30}]}>
                                        <Image
                                        source={require('../../assets/Homeimages/whitestar.png')}
                                        style={{width:80,height:20}}
                                            resizeMode='contain'
                                        />
                                        </View>
                                        }
                              
                                          </View>
                                          </TouchableOpacity>
                                   
                                           </View>
                                           <View style={{marginLeft:15,marginBottom:10}}>
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
                                          <TouchableOpacity onPress={()=> navigation.navigate('Recomendations')}>
                                          <View style={{marginLeft:20,marginBottom:10}}>
                                          <Text style={styles.recomend}>30 Recommendations</Text>
                                          </View>
                                          </TouchableOpacity>
                                   
                                       <Divider/>
                                          <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",
                                      marginLeft:20,marginTop:10
                                      }}>
                              <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center',
                            marginBottom:10}}>
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

                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />
     <TouchableOpacity onPress={()=>navigation.navigate('CreateVideo')}
     style={{alignItems:"center",justifyContent:"center",alignSelf:"center",
     marginTop:hp('93%'),
     //backgroundColor:'red',
   position:"absolute"}}
     >
     <View style={{alignItems:"center",justifyContent:"center",alignSelf:"center",
     height:40,width:40,
        marginTop:hp('93%'),backgroundColor:"rgba(68, 77, 110, 1)",borderRadius:20,
        //backgroundColor:'red',
      position:"absolute"}}>
        <Image
                      source={require('../../assets/Homeimages/add.png')}
                      style={{width:80,height:20}}
                    resizeMode='contain'
                />
        </View>
     </TouchableOpacity>
    
    </SafeAreaView>

  )
};

export default Home;