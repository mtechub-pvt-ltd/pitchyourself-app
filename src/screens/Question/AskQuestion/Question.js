import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, 
} from 'react-native';

///////////////////////app components/////////////////////
import BadgeView from '../../../components/BadgeView/BadgeView';
import CustomButtonhere from '../../../components/Button/CustomButton';
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import CustomModal from '../../../components/Modal/CustomModal';

//////////////////app pakages////////////
import {Snackbar } from 'react-native-paper';

//////////////app pakages//////////////////
import ImagePicker from 'react-native-image-crop-picker';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

/////////////////app styles//////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Uploadstyles from '../../../utills/GlobalStyles/Upload';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  //////////////////////////app api/////////////////////////
  import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const Question = ({ navigation }) => {
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


///////////////textfields//////////////////
const [share, setShare] = useState('');
const [projectmember, setProjectMember] = useState('');
const [video, setVideo] = useState('');
const [hashtag, setHashtag] = useState('');

////////////button states////////////////
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);
const [visible, setVisible] = useState(false);
const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
const onDismissSnackBar = () => setVisible(false);

//////////////////////Api Calling/////////////////
const CreateQuestion = async() => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user)
 axios({
   method: 'POST',
   url: BASE_URL + 'user/create-hub',
   data: {
    userId:user,
    Title: share,
    PostType: 'post',
    Video: 'video',
    creators: 'createors',
    Hashtags: hashtag 
   },
 })
   .then(async function (response) {
     console.log("response", JSON.stringify(response.data))
     setloading(0);
     setdisable(0);
setModalVisible1(true)
navigation.navigate('PostDetail')

   })
   .catch(function (error) {
     setModalVisible(true)
     console.log("error", error)
   })
}

//Api form validation
const formValidation = async () => {
 // input validation
 if (share == '') {
   setsnackbarValue({ value: "Please Enter about Post", color: 'red' });
   setVisible('true');
 }
 else if (projectmember == '') {
   setsnackbarValue({ value: "Please Enter Profession", color: 'red' });
   setVisible('true');
 }
 else if (video == '') {
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
   CreateQuestion()
 }
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
              onChangeText={setShare}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input2.current.focus() }}
              blurOnSubmit={false}
              autoFocus={true}
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
                ref={ref_input2}
              placeholder="Add hashtag"
              onChangeText={setHashtag}
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
              loading={loading}
              disabled={disable}
              onPress={() => CreateQuestion() }
              //onPress={() => navigation.navigate('QuestionDetail')}
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
    </SafeAreaView>

  )
};

export default Question;