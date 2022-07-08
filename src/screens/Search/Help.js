import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import BadgeView from '../../components/BadgeView/BadgeView';
import CustomButtonhere from '../../components/Button/CustomButton';
import CamerBottomSheet from '../../components/CameraBottomSheet/CameraBottomSheet';
import styles from './styles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Uploadstyles from '../../utills/GlobalStyles/Upload';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const Help = ({ navigation }) => {

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
          <View style={styles.helptopview}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
                   source={require('../../assets/Icons/arrowback.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     <View style={{alignItems:'center',marginLeft:'30%'}}>
                <Image
                 source={require('../../assets/Logo/logo.png')}
                    style={styles.toplogo}
                    resizeMode='contain'
                />
  </View>
          </View>
          <View style={Inputstyles.inputview}>

<View style={{marginBottom:10}}>
<View style={{marginBottom:10,alignItems:'center'}}>
          <Text style={styles.helpext}>Lorem ipsum dolor sit amet, 
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua. 
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</Text>
  </View>

  <View style={Inputstyles.action}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
       <Image
                   source={require('../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </View>
</View>

     
        </View>
    

<View style={styles.buttonview}>
<CustomButtonhere
              title={'SEARCH'}
              widthset={'35%'}
              onPress={() => navigation.navigate('Home')}
            />
</View>

  </ScrollView>
    </SafeAreaView>

  )
};

export default Help;