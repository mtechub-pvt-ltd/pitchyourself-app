import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,ScrollView,FlatList,
    Image, View, Text, TouchableOpacity, 
} from 'react-native';
import CustomButtonhere from '../../../components/Button/CustomButton';
import OutlineButton from '../../../components/Button/OutlineButton';
import MapView, {Marker} from 'react-native-maps';
import BadgeView from '../../../components/BadgeView/BadgeView';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Colors from '../../../utills/Colors';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58694a0f-3da13-471f-bd96-147671e29d72',
        name: 'Michael Bruno',
    },
 
 
];

const AppliedJobDetail = ({ navigation }) => {

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
          <View style={styles.topview}>
              <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={[Authtextstyles.maintext,{marginLeft:10}]}>Job Detail</Text>
          </View>
          <Image
                   source={require('../../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </View>
      <View style={styles.inputview}>
      <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => (

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

                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />

        </View>
        </ScrollView>
    </SafeAreaView>

  )
};

export default AppliedJobDetail;