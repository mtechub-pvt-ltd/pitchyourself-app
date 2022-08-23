import React, { useEffect, useState } from 'react';
import {
TextInput,
    Image, View, Text,StatusBar, ImageBackground
} from 'react-native';

////////////////////app components////////////////
import CustomButtonhere from '../../components/Button/CustomButton';

/////////////////////app pakagaes/////////////
import {Snackbar } from 'react-native-paper';

/////////////app styles/////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';

/////////////api/////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPassword = ({ navigation }) => {

 //textfields
 const [Email, setEmail] = useState('');

//button states
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);
const [visible, setVisible] = useState(false);
const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
const onDismissSnackBar = () => setVisible(false);

 //email
const handleValidEmail = (val) => {
 let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
 if (reg.test(val)) {
     console.log('true')
     return true;
 }
 else {
     console.log('falsse')
     return false;
 }
}

//Api Calling
 const ForgetUserPassword=async() => {
  var email=Email
  await AsyncStorage.setItem('forgetEmail',Email);
   console.log('email:',email)
 axios({
   method: 'post',
   url: BASE_URL+'user/email-send',
   data:{  
       email : Email,    
   },
 })
 .then(function (response) {
   console.log("response", JSON.stringify(response.data))

   if(response.data.statusText==='Success')
   {
    setloading(0);
    setdisable(0);
    navigation.navigate('VerifyCode',response.data)
   }
   else
    {
      setloading(0);
      setdisable(0);
      alert(response.data.message)
     }
 })
 .catch(function (error) {
   console.log("error", error)
 })
}
//Api form validation
const formValidation = async () => {
 // input validation
 if (Email == '') {
   setsnackbarValue({value: "Please Enter Email", color: 'red'});
   setVisible('true');
 }
    
 else if (!handleValidEmail(Email)) {
   console.log('a')
   setsnackbarValue({value: "Incorrect Email", color: 'red'});
   setVisible('true');
}
 else{
   setloading(1);
   setdisable(1);
   ForgetUserPassword()
 }
}



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
              onChangeText={setEmail}
              autoFocus = {true}
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
              loading={loading}
              disabled={disable}
              onPress={() => formValidation()}
             // onPress={() => navigation.navigate('VerifyCode')}
            />
</View>
<Snackbar
          duration={400}
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={{
            backgroundColor: snackbarValue.color,
            marginBottom:'20%',
            zIndex: 999,
          }}>
          {snackbarValue.value}
        </Snackbar>
       </ImageBackground>

  )
};

export default ResetPassword;