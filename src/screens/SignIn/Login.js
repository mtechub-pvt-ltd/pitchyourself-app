import React, { useEffect, useState,useRef } from 'react';
import {
   TextInput,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

///////////////app components/////////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomModal from '../../components/Modal/CustomModal';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

//////////////////app pakages////////////
import {Snackbar } from 'react-native-paper';

////////////////app styles//////////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setID } from '../../redux/actions';

const Login = ({ navigation }) => {

  /////////////redux states///////
  const { video, links,id,thumbnails } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

       //Modal States
       const [modalVisible, setModalVisible] = useState(false);

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
  /////////TextInput References///////////
  const ref_input2 = useRef();


  ///////////////data states////////////////////
  const [Password, setPassword] = React.useState('');
  const [Email,  setEmail] = React.useState('');
  
   ///////////////button states/////////////
   const [loading, setloading] = useState(0);
   const [disable, setdisable] = useState(0);
   const [visible, setVisible] = useState(false);
   const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
   const onDismissSnackBar = () => setVisible(false);
   

 ///////////email//////////////////
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

//////////////Api Calling////////////////////
const LoginUser=async() => {
  console.log('here')
  axios({
    method: 'put',
    url: BASE_URL+'user/login-user',
    data:{
        
        email : Email,
        password: Password,
       
        
    },
  })
  .then(async function (response) {
    console.log("response", JSON.stringify(response.data))
    setloading(0);
    setdisable(0);
    if(response.data.profileCompletedStatus === "Completed")
          {
           await AsyncStorage.setItem('Userid',response.data._id);
            await AsyncStorage.setItem('Userdata',response.data.name);
            await AsyncStorage.setItem('UserEmail',response.data.email);
            await AsyncStorage.setItem('UserPass',response.data.password)
            navigation.navigate('Drawerroute')
          }
          else
          {
            dispatch(setID(response.data._id))
            navigation.navigate('CreateProfile',response.data._id)
          }
  })
  .catch(function (error) {
    setloading(0);
    setdisable(0);
    if(error)
  {    
      console.log('Email or Password is incorrect')}
  setModalVisible(true)
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
  else if (Password=='') {
    setsnackbarValue({value: "Please Enter Password", color: 'red'});
    setVisible('true');

    }

  else{
    setloading(1);
    setdisable(1);
    LoginUser()
  }
}

const getData = async () => {
     
  try {
     await AsyncStorage.getItem('UserEmail')
          .then(db => {
              console.log('usertype',{db})
              if(db)
              {
                      navigation.navigate('Drawerroute');
              }
              else{
                      navigation.replace('Login'); // Stack Name
              }
                      }  
          ).done();
      } catch (error) {
      }

}
useEffect(() => {
  //getData();

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
            <Text style={Authtextstyles.maintext}>Login</Text>
          </View>
          <View style={Authtextstyles.subtextview}>
            <Text style={Authtextstyles.subtext}>Please login to your account.
            </Text>
          </View>


      <View style={Inputstyles.inputview}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Email Address"
              onChangeText={setEmail}
              returnKeyType = {"next"}
              onSubmitEditing={() => { ref_input2.current.focus()}}
              blurOnSubmit={false}
              autoFocus = {true}
              placeholderTextColor={Colors.inputtextcolor}
              keyboardType={'email-address'}
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
                    ref={ref_input2}
              placeholder="Password"
              onChangeText={setPassword}
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

          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
          >
            <View style={styles.forgettextview}>
              <Text style={styles.forgettext}>
                Forget Password?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
<View style={styles.buttonview}>
<CustomButtonhere
              title={'LOGIN'}
              widthset={'75%'}
              loading={loading}
              disabled={disable}
              onPress={() => formValidation()}
            />
</View>
   
      <View style={styles.lasttextview}>
        <Text style={styles.lasttext}>Don’t have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
        <Text style={styles.lasttext1}> Create new now!</Text>
        </TouchableOpacity>
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
        <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={  <AntDesign
                  name="closecircle"
                  color={'red'}
                  size={60}
              />}
              text={'Email or Password is incorrect'}
         buttontext={'OK'}
 onPress={()=> {navigation.navigate('Login'),setModalVisible(false)}}
                /> 
    </ImageBackground>

  )
};

export default Login;