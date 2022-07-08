import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import CustomModal from '../../components/Modal/CustomModal';
import CustomButtonhere from '../../components/Button/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';


const UpdatePassword = ({ navigation }) => {

          //Modal States
          const [modalVisible, setModalVisible] = useState(false);
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

    <ImageBackground source={require('../../assets/Authimages/BG_1.png')}
      resizeMode="cover" style={styles.container}>
   <View style={{marginTop:'20%',marginLeft:'10%'}}>
                <Image
                 source={require('../../assets/Authimages/updatepass.png')}
                    style={styles.topimage}
                    resizeMode='contain'
                />
                 </View>

           
            <View style={Authtextstyles.maintextview}>
            <Text style={Authtextstyles.maintext}>Update Password</Text>
          </View>
          <View style={Authtextstyles.subtextview}>
            <Text style={Authtextstyles.subtext}>A strong password has combination of 
            letter and numbers and special characters like $,!,%, etc.
            </Text>
          </View>


          <View style={Inputstyles.inputview}>
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
          <View style={Inputstyles.action}>
          
            <TextInput
              placeholder="Confirm Password"
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
              title={'UPDATE'}
              widthset={'60%'}
              onPress={() =>    setModalVisible(true)}
            />
</View>
<View>
<CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={       <Image
                  source={require('../../assets/Icons/sucess.png')}
                     style={styles.sucessimage}
                     resizeMode='contain'
                 />}
              text={'Successful'}
          buttontext={'Go To Login'}
 onPress={()=> {navigation.navigate('Login'),setModalVisible(false)}}
                /> 
</View>

       </ImageBackground>

  )
};

export default UpdatePassword;