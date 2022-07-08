import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import BadgeView from '../../../components/BadgeView/BadgeView';
import CustomButtonhere from '../../../components/Button/CustomButton';
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Uploadstyles from '../../../utills/GlobalStyles/Upload';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const Question = ({ navigation }) => {

  //textfields
  const refRBSheet = useRef();

const videoplay = ()=>
{
  ImagePicker.openCamera({
    mediaType: 'video',
    duration:'30'
  }).then(image => {
    console.log(image);
  });
}

const pickvideo = ()=>{
  ImagePicker.openPicker({
    mediaType: "video",
  }).then((video) => {
    console.log(video);
  });
}

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
    <SafeAreaView style={styles.container}>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.navigate('Hubs')}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Ask a Question</Text>
          </View>
          <View style={Inputstyles.inputview}>
          <View style={Multilineinputstyles.action}>
            <TextInput
              placeholder="What would Like to Share?"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}
              
              style={Multilineinputstyles.input}
            />
  
          </View>
          <TouchableOpacity onPress={()=> refRBSheet.current.open()}>
<View style={Uploadstyles.mainview}>

     <Image
                   source={require('../../../assets/Icons/upload.png')}
                   style={Uploadstyles.uploadicon}
                    resizeMode='contain'
                />

<Text style={Uploadstyles.uploadtext}>Add Short Video</Text>
</View>
</TouchableOpacity>
<View style={{marginBottom:10}}>
          <Text style={styles.lasttext}>What this Post is About</Text>
  
<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10
     }}>
  <BadgeView
             title={'Advice'}
               />
                 <BadgeView
             title={'Inspiration'}
               />
                 <BadgeView
             title={'Hope'}
               />
                 <BadgeView
             title={'Motivation'}
               />
</View>
</View>
          <View style={{margin:10}}>
          <Text style={styles.lasttext}> Use hashtags based on the post, to gain a wider response. </Text>
          </View>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Add hashtag"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
        </View>
    

<View style={styles.buttonview}>
<CustomButtonhere
              title={'COMPLETE'}
              widthset={'65%'}
              onPress={() => navigation.navigate('QuestionDetail')}
            />
</View>
   
<CamerBottomSheet
              refRBSheet={refRBSheet}
              onClose={() => refRBSheet.current.close()}
              title={'From Gallery'}
              takePhotoFromCamera={videoplay}
              choosePhotoFromLibrary={pickvideo}
            />
  </ScrollView>
    </SafeAreaView>

  )
};

export default Question;