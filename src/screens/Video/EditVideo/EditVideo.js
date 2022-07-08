import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import CustomButtonhere from '../../../components/Button/CustomButton';
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feath from 'react-native-vector-icons/Feather';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Uploadstyles from '../../../utills/GlobalStyles/Upload';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const EditVideo = ({ navigation }) => {

//showmoreviews
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
  const reflinkRBSheet = useRef();
  const refsociallinkRBSheet = useRef();
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
    <SafeAreaView style={styles.container}>
            <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Edit Video</Text>
          </View>
          <View style={[Inputstyles.inputview,{marginTop:'6%'}]}>
      
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Lorem ipsum dolor sit"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          <View style={styles.postpiccontainer}>
                                
                                <Image
                                 source={require('../../../assets/Video/editvideo.png')}
                                 style={styles.postpic}
                                    resizeMode='contain'
                                />
                                <View style={{position:'absolute',margin:wp('10%'),
                            alignItems:'flex-end',alignSelf:'flex-end',paddingRight:wp(('3%'))
                            }}>
                                <Image
                                 source={require('../../../assets/Video/edit.png')}
                                 style={{
                                    width:wp('5%'),
                                    height:wp('5%')}}
                                    resizeMode='contain'
                                />
                                </View>
                              
                                </View>
 
<View style={{marginHorizontal:30}}>
<View style={{flexDirection:"row", justifyContent:"space-between",marginHorizontal:15}}>
<Image
                    source={require('../../../assets/Video/file-pdf.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                   <Image
             source={require('../../../assets/Video/image.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                     <TouchableOpacity     onPress={() => reflinkRBSheet.current.open()}>
                     <Image
                source={require('../../../assets/Video/attach.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                     </TouchableOpacity>
            

</View>
<View style={{flexDirection:"row", justifyContent:"space-between"}}>
<Text style={styles.uploadtext}>EDIT PDF</Text>
<Text style={styles.uploadtext}>EDIT IMAGE</Text>
<TouchableOpacity     onPress={() => reflinkRBSheet.current.open()}>
<Text style={styles.uploadtext}>EDIT LINK</Text>   
</TouchableOpacity>                 
</View>
</View>
<View style={[Inputstyles.action,{marginTop:28}]}>
            <TextInput
              placeholder="Add Email"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
                  <Image
                   source={require('../../../assets/Video/email.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
          </View>
          <View style={[Inputstyles.action]}>
            <TextInput
              placeholder="Add Contact"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
                  <Image
                    source={require('../../../assets/Video/image.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
          </View>
          <View style={{flexDirection:"row", justifyContent:'space-around',marginHorizontal:90,
        marginTop:20}}>
<Image
                    source={require('../../../assets/Video/facebook.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                   <Image
             source={require('../../../assets/Video/linkedin.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                   <Image
                source={require('../../../assets/Video/instagram.png')}
                    style={styles.image}
                    resizeMode='contain'
                />

</View>
<TouchableOpacity     onPress={() => refsociallinkRBSheet.current.open()}>
<View style={{alignSelf:'center'}}>
<Text style={styles.uploadtext}>Edit LINKS</Text>                   
</View>
</TouchableOpacity>
<View style={{flexDirection:"row", justifyContent:'space-between',marginHorizontal:20,
        marginTop:20}}>
            <View style={{flexDirection:"row", justifyContent:'space-around',alignItems:"center",}}>
<Image
                    source={require('../../../assets/Video/check.png')}
                    style={styles.check}
                    resizeMode='contain'
                />
                <Text style={styles.checktext}>HIDDEN</Text>      
                </View>

</View>
        </View>


<View style={styles.buttonview}>
<CustomButtonhere
              title={'CONTINUE'}
              widthset={'65%'}
            onPress={() => navigation.navigate('Summary',{item:'EditVideo'})}
            />
</View>
<RBSheet

//sstyle={{flex:1}}
ref={reflinkRBSheet}
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
    height: hp('40%')
  }
}}

>


<View style={{
  flexDirection: 'row', justifyContent: "space-between",
  marginHorizontal: 20
}}>
  <Text style={[Authtextstyles.maintext,{marginBottom:10}]}>Edit Link</Text>
  <TouchableOpacity     onPress={() => reflinkRBSheet.current.close()}>

     <Image
                 source={require('../../../assets/Icons/close.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

                                </TouchableOpacity>
</View>
<View style={Inputstyles.action}>
            <TextInput
              placeholder="Lorem ipsum"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
          <View style={{justifyContent:"flex-end",alignItems:'flex-end',paddingHorizontal:wp('15%'),
          marginTop:wp('3%')}}>
          <Text style={styles.checktext}>ADD ROW</Text> 
          </View>
  <View style={{marginTop:hp('7%')}}>
            <CustomButtonhere
              title={'UPDATE'}
              widthset={'65%'}
              //onPress={() => navigation.navigate('EmailVerification')}
            />
            </View>
</RBSheet>
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
  <Text style={[Authtextstyles.maintext,{marginBottom:10}]}>Edit Social Link</Text>
  <TouchableOpacity     onPress={() => refsociallinkRBSheet.current.close()}>

     <Image
                 source={require('../../../assets/Icons/close.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

                                </TouchableOpacity>
</View>
<View style={{flexDirection:'row',justifyContent:"space-around",alignItems:"center",
marginHorizontal:wp('5%')}}>
<Image
                 source={require('../../../assets/Video/facebook.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                <View style={[Inputstyles.action,{width:'85%'}]}>
            <TextInput
              placeholder="Lorem ipsum"
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
                    style={styles.image}
                    resizeMode='contain'
                />
                <View style={[Inputstyles.action,{width:'85%'}]}>
            <TextInput
              placeholder="Lorem ipsum"
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
                    style={styles.image}
                    resizeMode='contain'
                />
                <View style={[Inputstyles.action,{width:'85%'}]}>
            <TextInput
              placeholder="Lorem ipsum"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
          </View>
  <View style={{marginTop:hp('5%')}}>
            <CustomButtonhere
              title={'Add'}
              widthset={'65%'}
              //onPress={() => navigation.navigate('EmailVerification')}
            />
            </View>
</RBSheet>
<CamerBottomSheet
              refRBSheet={refRBSheet}
              onClose={() => refRBSheet.current.close()}
              title={'From Gallery'}
              takePhotoFromCamera={takePhotoFromCamera}
              choosePhotoFromLibrary={choosePhotoFromLibrary}
            />
  </ScrollView>
    </SafeAreaView>

  )
};

export default EditVideo;