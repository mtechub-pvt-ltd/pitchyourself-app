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


const SignUp = ({ navigation }) => {

  //textfields
//password eye function and states
const [data, setData] = React.useState({
  check_textInputChange: false,
  secureTextEntry: true,
  isValidUser: true,
  isValidPassword: true,
});
const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}


  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <ImageBackground source={require('../../assets/Authimages/BG.png')}
      resizeMode="cover" style={styles.container}>
   <View style={Logostyles.logoview}>
                <Image
                 source={require('../../assets/Logo/logo.png')}
                    style={Logostyles.logo}
                    resizeMode='contain'
                />
                 </View>
   <View style={Logostyles.underlogotextview}>
            <Text style={Logostyles.underlogotext}>Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor invidunt ut
            </Text>
          </View>
           
            <View style={Authtextstyles.maintextview}>
            <Text style={Authtextstyles.maintext}>Signup</Text>
          </View>
          <View style={Authtextstyles.subtextview}>
            <Text style={Authtextstyles.subtext}>Create your New account.
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
          <View style={Inputstyles.action}>
          
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
              secureTextEntry={data.secureTextEntry ? true : false}
            />
            <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Image
                    source={require('../../assets/Icons/lock.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                    :
                    <Image
                    source={require('../../assets/Icons/lock.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                    }
                </TouchableOpacity>
          </View>
        </View>
<View style={styles.buttonview}>
<CustomButtonhere
              title={'CREATE AN ACCOUNT'}
              widthset={'75%'}
              onPress={() => navigation.navigate('CreateProfile')}
            />
</View>
   
      <View style={styles.lasttextview}>
        <Text style={styles.lasttext}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.lasttext1}> Login now!</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:"15%",alignItems:'center'}}>
      <Text style={styles.lasttext2}>By signing up,
       you are agree with our Terms & Conditions</Text>
      </View>
       </ImageBackground>

  )
};

export default SignUp;