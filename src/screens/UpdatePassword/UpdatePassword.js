import React, { useEffect, useState,useRef } from 'react';
import {
  TextInput,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

///////////////////app components///////////////
import CustomModal from '../../components/Modal/CustomModal';
import CustomButtonhere from '../../components/Button/CustomButton';

//////////////////app pakages////////////
import {Snackbar } from 'react-native-paper';

////////////////app styles///////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdatePassword = ({ navigation,route }) => {

    /////////TextInput References///////////
    const ref_input2 = useRef();

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
  
 //textfields
 const [Password, setPassword] = useState('');
const [ConfirmPassword, setConfirmPassword] = useState('');
const [Code] = useState(route.params);
 //button states
 const [loading, setloading] = useState(0);
 const [disable, setdisable] = useState(0);
 const [visible, setVisible] = useState(false);
 const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
 const onDismissSnackBar = () => setVisible(false);

//Api Calling
const UserUpdatePassword=async() => {
  var useremail = await AsyncStorage.getItem('forgetEmail');
  console.log("email",useremail)
axios({
  method: 'PUT',
  url: BASE_URL+'user/update-password-user',
  data:{
      email : useremail,
      password: Password, 
      // code:Code,
  },
})
.then(async function (response) {
  console.log("response", JSON.stringify(response.data))
  //if(response.data === '')
  setloading(0);
  setdisable(0);
  await AsyncStorage.removeItem('forgetEmail');
  setModalVisible(true)
 
})
.catch(function (error) {
  console.log("error", error)
})
}
//Api form validation
const formValidation = async () => {
// input validation
if (Password=='') {
  setsnackbarValue({value: "Please Enter Password", color: 'red'});
  setVisible('true');

  }
else if (ConfirmPassword=='') {
  setsnackbarValue({value: "Please Enter Confirm Password", color: 'red'});
  setVisible('true');

  }
  else if (Password!=ConfirmPassword) {
      setsnackbarValue({value: "Please Enter Same Password", color: 'red'});
      setVisible('true');
  
      }
else{
  setloading(1);
  setdisable(1);
  UserUpdatePassword()
}
}
const email=async()=>{
  var useremail = await AsyncStorage.getItem('forgetEmail');
  console.log("email",useremail)
}
useEffect(() => {
  console.log('API>>....',BASE_URL)
  email()
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
            onChangeText={setPassword}
            returnKeyType = {"next"}
            onSubmitEditing={() => { ref_input2.current.focus()}}
            blurOnSubmit={false}
            autoFocus = {true}
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
               ref={ref_input2}
              placeholder="Confirm Password"
              onChangeText={setConfirmPassword}
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
              loading={loading}
              disabled={disable}
              onPress={() => formValidation()}
            />
</View>
<View>
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