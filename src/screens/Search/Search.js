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

const Search = ({ navigation }) => {

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
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
                   source={require('../../assets/Icons/arrowback.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
                <Image
                 source={require('../../assets/Logo/logo.png')}
                    style={styles.toplogo}
                    resizeMode='contain'
                />
                   <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                   <Text style={styles.toptext}>Help</Text>
                   </TouchableOpacity>

          </View>
          <View style={Inputstyles.inputview}>

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
<View style={{marginBottom:10}}>
          <Text style={styles.lasttext}>I am Looking for</Text>
  
<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,
paddingHorizontal:'25%'
     }}>
  <BadgeView
             title={'PERSON'}
               />
                 <BadgeView
             title={'HASHTAG'}
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

export default Search;