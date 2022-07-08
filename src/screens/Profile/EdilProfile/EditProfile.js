import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import CustomButtonhere from '../../../components/Button/CustomButton';
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';


const EditProfile = ({ navigation }) => {
    const[showmore,setShowmore]=useState(false)
    //make toggleview
    
    const toggleview=()=>
    {
      if(showmore=== false)
      {
        setShowmore(true)
      }
      else{
        setShowmore(false)
      }
    }
  //textfields
//social links  
const refsociallinkRBSheet = useRef();

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

    <ImageBackground source={require('../../../assets/Authimages/BG_1.png')}
      resizeMode="cover" style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'flex-start',
        marginHorizontal:'0%',alignItems:'center',marginTop:20
        }}>
          <TouchableOpacity onPress={()=> navigation.navigate('Profile',{item:'profile'})}>
         <Image
                 source={require('../../../assets/Icons/back.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                </TouchableOpacity>
                <View style={{marginLeft:'10%'}}>
                <Text style={Authtextstyles.maintext}>Edit Profile</Text>
                </View>
    
          </View>
     
   <View style={{alignItems:'center'}}>
   <TouchableOpacity onPress={()=> refRBSheet.current.open()}>
                <Image
                 source={require('../../../assets/Authimages/profile.png')}
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
                 source={require('../../../assets/Icons/person.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
          </View>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Date of Birth"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Gender"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
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
<View style={{alignItems:"center"}}>
    <TouchableOpacity onPress={()=>refsociallinkRBSheet.current.open() }>
                <Text style={styles.forgettext}>Add your profile links</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('CreateVideo')}>
                <Text style={styles.forgettext}>upload a new video</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> refRBSheet.current.open() }>
                <Text style={styles.forgettext}>upload your cv/resume</Text>
                </TouchableOpacity>
                </View>
<CamerBottomSheet
              refRBSheet={refRBSheet}
              onClose={() => refRBSheet.current.close()}
              title={'From Gallery'}
              takePhotoFromCamera={takePhotoFromCamera}
              choosePhotoFromLibrary={choosePhotoFromLibrary}
            />
<RBSheet

//sstyle={{flex:1}}
ref={refsociallinkRBSheet}
closeOnDragDown={true}
closeOnPressMask={false}
openDuration={50}
closeDuration={50}
animationType="fade"

//height={500}
customStyles={{
  wrapper: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  draggableIcon: {
    backgroundColor: "grey"
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: hp('52%')
  }
}}

>

<View style={{
  flexDirection: 'row', justifyContent: "space-between",
  marginHorizontal: 20
}}>
  <Text style={[Authtextstyles.maintext,{marginBottom:10}]}>Add Social Link</Text>
  <TouchableOpacity     onPress={() => refsociallinkRBSheet.current.close()}>

     <Image
                 source={require('../../../assets/Icons/close.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

                                </TouchableOpacity>
</View>
<ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
<View style={{flexDirection:'row',justifyContent:"space-around",alignItems:"center",
marginHorizontal:wp('5%')}}>
<Image
                 source={require('../../../assets/Video/facebook.png')}
                    style={styles.btmimage}
                    resizeMode='contain'
                />
                <View style={[Inputstyles.action,{width:'85%'}]}>
            <TextInput
              placeholder="Add Link here"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
</View>
<View style={{flexDirection:'row',justifyContent:"space-around",alignItems:"center",
marginHorizontal:wp('5%')}}>
<Image
                 source={require('../../../assets/Video/linkedin.png')}
                    style={styles.btmimage}
                    resizeMode='contain'
                />
                <View style={[Inputstyles.action,{width:'85%'}]}>
            <TextInput
              placeholder="Add Link here"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
</View>
<View style={{flexDirection:'row',justifyContent:"space-around",alignItems:"center",
marginHorizontal:wp('5%')}}>
<Image
                 source={require('../../../assets/Video/instagram.png')}
                    style={styles.btmimage}
                    resizeMode='contain'
                />
                <View style={[Inputstyles.action,{width:'85%'}]}>
            <TextInput
              placeholder="Add Link here"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
</View>
     
     <TouchableOpacity onPress={()=> toggleview()}>
     <View style={{justifyContent:"flex-end",alignItems:'center',paddingHorizontal:wp('15%'),
          marginTop:wp('3%')}}>
          <Text style={styles.checktext}>SCROLL TO SHOW MORE</Text> 
          </View>
     </TouchableOpacity>

          {showmore === true?
            <View style={{flexDirection:'row',justifyContent:"space-around",alignItems:"center",
marginHorizontal:wp('5%')}}>
<Image
                 source={require('../../../assets/Video/instagram.png')}
                    style={styles.btmimage}
                    resizeMode='contain'
                />
                <View style={[Inputstyles.action,{width:'85%'}]}>
            <TextInput
              placeholder="Add Link here"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
</View>
                    :
                    null
          }
          <View>

          </View>
  <View style={{marginTop:hp('5%'),marginBottom:wp('10%')}}>
            <CustomButtonhere
              title={'Add'}
              widthset={'65%'}
              //onPress={() => navigation.navigate('EmailVerification')}
            />
            </View>
            </ScrollView>
</RBSheet>
    </ImageBackground>

  )
};

export default EditProfile;