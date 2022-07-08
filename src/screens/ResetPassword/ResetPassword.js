import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import CustomButtonhere from '../../components/Button/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feath from 'react-native-vector-icons/Feather';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';


const ResetPassword = ({ navigation }) => {

  //textfields



  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <ImageBackground source={require('../../assets/Authimages/BG_1.png')}
      resizeMode="cover" style={styles.container}>
   <View style={{marginTop:'20%',marginLeft:'10%'}}>
                <Image
                 source={require('../../assets/Authimages/reset.png')}
                    style={styles.topimage}
                    resizeMode='contain'
                />
                 </View>

           
            <View style={Authtextstyles.maintextview}>
            <Text style={Authtextstyles.maintext}>Reset Password</Text>
          </View>
          <View style={Authtextstyles.subtextview}>
            <Text style={Authtextstyles.subtext}>No Problem! Just give in your Email 
            ID and we will send you a link to reset your password
            </Text>
          </View>


      <View style={Inputstyles.inputview}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
              <Image
                    source={require('../../assets/Icons/email.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
          </View>
     

        </View>
<View style={styles.buttonview}>
<CustomButtonhere
              title={'SEND CODE'}
              widthset={'60%'}
              onPress={() => navigation.navigate('VerifyCode')}
            />
</View>

       </ImageBackground>

  )
};

export default ResetPassword;