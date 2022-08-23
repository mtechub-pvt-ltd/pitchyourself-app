import React, { useEffect, useState,useRef } from 'react';
import {
TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

//////////////////app components/////////////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CamerBottomSheet from '../../components/CameraBottomSheet/CameraBottomSheet';
import CustomModal from '../../components/Modal/CustomModal';

//////////////////app pakages////////////
import {Snackbar } from 'react-native-paper';

//////////////app pakages//////////////////
import ImagePicker from 'react-native-image-crop-picker';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

///////////////app styles////////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  //////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateProfile = ({ navigation,route }) => {
  console.log('data hereeeeeeeeeeeeeee', route.params)

       //Modal States
       const [modalVisible, setModalVisible] = useState(false);
       const [modalVisible1, setModalVisible1] = useState(false);

//camera and imagepicker
const refRBSheet = useRef();

const takePhotoFromCamera = () => {
  //setModalVisible(!modalVisible);
  ImagePicker.openCamera({
    compressImageMaxWidth: 300,
    compressImageMaxHeight: 300,
    cropping: true,
    compressImageQuality: 0.7,
    multiple:true
  })
 
  .then(image => {
    console.log(image);
    setImage(image.path);
    setcameraImage(true)
    camera(image)
    refRBSheet.current.close()
    //this.bs.current.snapTo(1);
  });
}
const choosePhotoFromLibrary = async () => {

  ImagePicker.openPicker({
    width: 300,
    height: 300,
    cropping: true,
    compressImageQuality: 0.7
  }).then( image => {
    console.log(image);

    setSelectimages(
      image)
    console.log("images:",Selectimages);
    refRBSheet.current.close()
    //this.bs.current.snapTo(1);
  });

}



/////////TextInput References///////////
const ref_input2 = useRef();
const ref_input3 = useRef();
const ref_input4 = useRef();

////////////////previous data//////////////
const [predata] = useState(route.params)

///////////////textfields//////////////////
const [name, setName] = useState('');
const [profession, setProfession] = useState('');
const [bio, setBio] = useState('');
const [hashtag, setHashtag] = useState('');

////////////button states////////////////
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);
const [visible, setVisible] = useState(false);
const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
const onDismissSnackBar = () => setVisible(false);

//////////////////////Api Calling/////////////////
const Signupuser = () => {
  console.log("obj:")
  axios({
    method: 'POST',
    url: BASE_URL + 'user/signup-user',
    data: {
      name: name,
      password: predata.Password,
      email: predata.Email,
      profession: profession,
      bio: bio,
    },
  })
    .then(async function (response) {
      console.log("response", JSON.stringify(response.data))
      if (response.data === "Email Already Exist") {
        setloading(0);
        setdisable(0);
setModalVisible1(true)
        console.log("Email Already Exist,Enter other email")
      }
      else {
        setloading(0);
        setdisable(0);
        await AsyncStorage.setItem('Userid',response.data._id);
        await AsyncStorage.setItem('Userdata',response.data.name);
        await AsyncStorage.setItem('UserEmail',response.data.email);
        await AsyncStorage.setItem('UserPass',response.data.password)
        navigation.navigate('Drawerroute')
      }
      if (response.data === "Email Already Exist") {
        setloading(0);
        setdisable(0);

      }
    })
    .catch(function (error) {
      setModalVisible(true)
      console.log("error", error)
    })
}

//Api form validation
const formValidation = async () => {
  // input validation
  if (name == '') {
    setsnackbarValue({ value: "Please Enter Name", color: 'red' });
    setVisible('true');
  }
  else if (profession == '') {
    setsnackbarValue({ value: "Please Enter Profession", color: 'red' });
    setVisible('true');
  }
  else if (bio == '') {
    setsnackbarValue({ value: "Please Enter Bio", color: 'red' });
    setVisible('true');
  }
  else if (hashtag == '') {
    console.log("lastNmae")
    setsnackbarValue({ value: "Please Enter Hashtag", color: 'red' });
    setVisible('true');
  }
  else {
    setloading(1);
    setdisable(1);
    Signupuser()
  }
}

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    style={{backgroundColor:'white'}}
  >
    <ImageBackground source={require('../../assets/Authimages/BG_1.png')}
      resizeMode="cover" style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'flex-start',
        marginHorizontal:'0%',alignItems:'center',marginTop:20
        }}>
          <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
         <Image
                 source={require('../../assets/Icons/back.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                </TouchableOpacity>
                <View style={{marginLeft:'10%'}}>
                <Text style={Authtextstyles.maintext}>Complete Profile</Text>
                </View>
    
          </View>
          <View style={Logostyles.underlogotextview}>
            <Text style={Logostyles.underlogotext}>Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor invidunt ut
            </Text>
          </View>
   <View style={{alignItems:'center'}}>
   <TouchableOpacity onPress={()=> refRBSheet.current.open()}>
                <Image
                 source={require('../../assets/Authimages/profile.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                </TouchableOpacity>
                 </View>

      <View style={Inputstyles.inputview}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Add Your Name"
              onChangeText={setName}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input2.current.focus() }}
              blurOnSubmit={false}
              autoFocus={true}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
           <Image
                 source={require('../../assets/Icons/person.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
          </View>
          <View style={Inputstyles.action}>
            <TextInput
              ref={ref_input2}
              placeholder="Add your profession"
              onChangeText={setProfession}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input3.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}

              style={Inputstyles.input}
            />
          </View>
          <View style={Inputstyles.action}>
            <TextInput
              ref={ref_input3}
              placeholder="Add Bio"
              onChangeText={setBio}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input4.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              style={Inputstyles.input}
            />
          </View>
          <View style={Inputstyles.action}>
            <TextInput
              ref={ref_input4}
              placeholder="Add Hastag"
              onChangeText={setHashtag}
              placeholderTextColor={Colors.inputtextcolor}
              style={Inputstyles.input}
            />
          </View>
          {/* <View style={[Multilineinputstyles.action,{height:wp('30%'),marginTop:wp('3%')}]}>
            <TextInput
              placeholder="Add your profession"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}
              
              style={Multilineinputstyles.input}
            />
  
          </View> */}

        </View>
<View style={styles.buttonview}>
<CustomButtonhere
              title={'UPDATE'}
              widthset={'65%'}
              loading={loading}
              disabled={disable}
              onPress={() => formValidation() }
              //onPress={() => navigation.navigate('Drawerroute')}
            />
</View>
<CamerBottomSheet
              refRBSheet={refRBSheet}
              onClose={() => refRBSheet.current.close()}
              title={'From Gallery'}
              takePhotoFromCamera={takePhotoFromCamera}
              choosePhotoFromLibrary={choosePhotoFromLibrary}
            />
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
              text={'SignUP Failed'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible(false)}}
                /> 
                      <CustomModal 
                modalVisible={modalVisible1}
                CloseModal={() => setModalVisible1(false)}
                Icon={  <AntDesign
                  name="closecircle"
                  color={'red'}
                  size={60}
              />}
              text={'Email Already Exists'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible1(false)}}
                /> 
    </ImageBackground>
    </ScrollView>
  )
};

export default CreateProfile;