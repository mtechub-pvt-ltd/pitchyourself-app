import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import CustomButtonhere from '../../components/Button/CustomButton';
import CamerBottomSheet from '../../components/CameraBottomSheet/CameraBottomSheet';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';


const CreateProfile = ({ navigation }) => {

  //textfields
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

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

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
  
          <View style={[Multilineinputstyles.action,{height:wp('30%'),marginTop:wp('3%')}]}>
            <TextInput
              placeholder="Add your profession"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}
              
              style={Multilineinputstyles.input}
            />
  
          </View>

        </View>
<View style={styles.buttonview}>
<CustomButtonhere
              title={'UPDATE'}
              widthset={'65%'}
              onPress={() => navigation.navigate('Drawerroute')}
            />
</View>
<CamerBottomSheet
              refRBSheet={refRBSheet}
              onClose={() => refRBSheet.current.close()}
              title={'From Gallery'}
              takePhotoFromCamera={takePhotoFromCamera}
              choosePhotoFromLibrary={choosePhotoFromLibrary}
            />
  
    </ImageBackground>

  )
};

export default CreateProfile;