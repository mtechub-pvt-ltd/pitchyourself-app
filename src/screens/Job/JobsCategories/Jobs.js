import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,FlatList,
    Image, View, Text, TouchableOpacity,
} from 'react-native';

import TabsBadgeView from '../../../components/TabsBadgeView/TabsBadgeView';
import BadgeView from '../../../components/BadgeView/BadgeView';
import styles from './styles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';



  const DATA1 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name:'Pet Food',
      location:'By Shop Name',
      date:'01 : 00 PM | 01-01-2020',
      //pic:require('../../../assets/AuthPic/bg.png'),
      price:'$15'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name:'Pet Food',
      location:'By Shop Name',
      date:'01 : 00 PM | 01-01-2020',
      //pic:require('../../../assets/AuthPic/bg.png'),
      price:'$15'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name:'Pet Food',
      location:'By Shop Name',
      date:'01 : 00 PM | 01-01-2020',
      //pic:require('../../../assets/AuthPic/bg.png'),
      price:'$15'
    },
  ];

const Jobs = ({ navigation, route }) => {
console.log('jobs:',route.params)
  //status states
  const[appoinments,setappointments]=useState(true)
  const[requests,setrequests]=useState(false)
  //textfields

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <SafeAreaView  style={styles.container}>
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
                 <Text style={Authtextstyles.maintext}>Jobs</Text>
                 </View>
  

            </View>
         
     
     

          </View>
         
                        <View style={{flexDirection:'row',
         justifyContent:'space-between',
        marginHorizontal:25,
        //backgroundColor:'red'
        }}>
          <TouchableOpacity onPress={()=>{setappointments(true),setrequests(false)}}>
          <TabsBadgeView
             title={'Applied Jobs'}
             width={'30%'}
             state={appoinments}
             type={'User'}
               />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setappointments(false),setrequests(true)}}>
            <TabsBadgeView
             title={'Posted Jobs'}
             width={'30%'}
             state={requests}
             type={'Job name here'}
               />
            </TouchableOpacity>
           
          </View>
          {
          appoinments=== true ?

        <View style={styles.inputview}>
        <View style={{flexDirection:'row',justifyContent:'space-around'
  }}>

                 <View style={{alignSelf:'flex-start',alignItems:'flex-start'}}>
                 <Text style={[Authtextstyles.maintext,{textAlign:'left',fontSize:wp('5%')}]}>Applied Jobs</Text>
                 <Text style={[Authtextstyles.maintext,{textAlign:'left',fontSize:wp('5%')}]}>30 Jobs</Text>
                 </View>
  

            </View>
      <FlatList
                        data={DATA1}
                        renderItem={({ item, index, separators }) => (
<TouchableOpacity onPress={()=> navigation.navigate('JobDetail',{item:'Applied'})}>
                            <View style={styles.card}>
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
             
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <BadgeView 
                    title='APPLIED'
                    />
                <Image
                source={require('../../../assets/Homeimages/stars.png')}
                style={styles.iconimages}
                    resizeMode='contain'
                />
                </View>
                 </View>
                 <View style={{marginLeft:25,marginBottom:10}}>
                 <Text style={styles.postdesc}>Title</Text>
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

        </View>

        :
        null  
        }
           {
          requests=== true ?
                              <View style={{
                                //backgroundColor:"yellow"
                                }}>
        <View style={styles.inputview}>
        <View style={{flexDirection:'row',justifyContent:'space-around'
      }}>

                 <View style={{alignSelf:'flex-start',alignItems:'flex-start'}}>
                 <Text style={[Authtextstyles.maintext,{textAlign:'left',fontSize:wp('5%')}]}>Posted Jobs</Text>
                 <Text style={[Authtextstyles.maintext,{textAlign:'left',fontSize:wp('5%')}]}>30 Jobs</Text>
                 </View>
  

            </View>
      <FlatList
                        data={DATA1}
                        renderItem={({ item, index, separators }) => (
<TouchableOpacity onPress={()=> navigation.navigate('JobDetail',{item:'Posted'})}>

                            <View style={styles.card}>
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
             
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <BadgeView 
                    title='Posted'
                    />
                <Image
                source={require('../../../assets/Homeimages/stars.png')}
                style={styles.iconimages}
                    resizeMode='contain'
                />
                </View>
                 </View>
                 <View style={{marginLeft:25,marginBottom:10}}>
                 <Text style={styles.postdesc}>Title</Text>
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

        </View>
        </View>
        :
        null  
        }

{/* </ScrollView> */}
</SafeAreaView>

  )
};

export default Jobs;