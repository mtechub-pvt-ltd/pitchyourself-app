import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,ScrollView,
    Image, View, Text, TouchableOpacity, 
} from 'react-native';
import CustomButtonhere from '../../../components/Button/CustomButton';
import OutlineButton from '../../../components/Button/OutlineButton';
import MapView, {Marker} from 'react-native-maps';
import BadgeView from '../../../components/BadgeView/BadgeView';
import Logostyles from '../../../utills/GlobalStyles/LogoStyles';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Colors from '../../../utills/Colors';


const JobApplied = ({ navigation }) => {

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
     
          <Text style={[Authtextstyles.maintext,{marginLeft:10}]}>Job Applied</Text>
          </View>
   
          </View>
      <TouchableOpacity onPress={()=> navigation.navigate('AppliedJobDetail')}>
      <View style={styles.inputview}>
      <View style={[Logostyles.logoview,{marginTop:60}]}>
                <Image
                 source={require('../../../assets/Notification/job.png')}
                    style={Logostyles.logo}
                    resizeMode='contain'
                />
                 </View>
                 <View style={{alignItems:"center"}}>
                 <Text style={[styles.horzontaltext,{marginTop:30}]}>30 Job Applied</Text>
                 <Text  style={[styles.horzontaltext,{marginTop:50}]}>CV Requests</Text>
                 </View>
        </View>
      </TouchableOpacity>
 
        </ScrollView>
    </SafeAreaView>

  )
};

export default JobApplied;