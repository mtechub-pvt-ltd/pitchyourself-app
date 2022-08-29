import React, { useEffect, useState,useRef } from 'react';
import {
  TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

////////////////app pakages////////////////
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';

///////////////////app pakages date time picker/////////////
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';

/////////////////app components///////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import CustomModal from '../../../components/Modal/CustomModal';

//////////////////app pakages////////////
import {Snackbar } from 'react-native-paper';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

//////////////////app styles//////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

    //////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

const EditProfile = ({ navigation,route }) => {
    const[showmore,setShowmore]=useState(false)

      //Modal States
      const [modalVisible, setModalVisible] = useState(false);
      const [modalVisible1, setModalVisible1] = useState(false);
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

                ///////////picker state/////////
                const[image,setImage]=useState('')
                
                 //////////////////////cameraimage//////////////////
                 const takePhotoFromCamera = () => {
                
                ImagePicker.openCamera({
                  compressImageMaxWidth: 300,
                  compressImageMaxHeight: 300,
                  cropping: true,
                  compressImageQuality: 0.7
                }).then(image => {
                  refRBSheet.current.close()
                  console.log(image);
                  setImage(image.path);
        
                });
                }
                ////////////////////library image//////////////////
                const choosePhotoFromLibrary = () => {
     
                ImagePicker.openPicker({
                  width: 300,
                  height: 300,
                  cropping: true,
                  compressImageQuality: 0.7
                }).then(image => {
                  refRBSheet.current.close()
                  console.log(image);
                  setImage(image.path);
                  let newfile = { 
                    uri:image.path,
                    type:image.mime,
                    name:image.path.substring(image.path.lastIndexOf('/') + 1)
                    
                }
                  handleUpload(newfile)
                });
                }
                const pickvideo =()=>{
                  ImagePicker.openPicker({
                    mediaType: "video",
                  }).then((video) => {
                    console.log(video);
                      let newfile = { 
                    uri:video.path,
                    type:video.mime,
                    name:video.path.substring(video.path.lastIndexOf('/') + 1)
                    
                }
                  handleUpload(newfile)
                  });
                }
                const handleUpload = (uploadimage)=>{
                  console.log("image here url:",uploadimage)
                  const data = new FormData()
                  data.append('file',uploadimage)
                  data.append('upload_preset','nrrfyy0m')
                  data.append("cloud_name","mtechub")
          
                  fetch("https://api.cloudinary.com/v1_1/mtechub/upload",{
                      method:"post",
                      body:data
                  }).then(res=>res.json()).
                  then(data=>{
                    console.log("data here:",data)
                      //setPicture(data.url)
                      //setModal(false)
                  }).catch(err=>{
                      alert("error while uploading")
                  })
             }
                /////////////////image api calling///////////////
                const pic =()=>{
                console.log("data yhn hai:")
                RNFetchBlob.fetch('POST',
               "https://api.cloudinary.com/v1_1/mtechub/upload",
               // BASE_URL + 'upload-image',
                {
                  Authorization: "Bearer access-token",
                  otherHeader: "foo",
                  'Content-Type': 'multipart/form-data',
                }, [
                // part file from storage
                {
                  name: 'image', filename: 'avatar-foo.jpg', type: 'image/jpg',
                  upload_preset:'nrrfyy0m',
                  data: RNFetchBlob.wrap(image)
                }
                // elements without property `filename` will be sent as plain text
                ]).then((resp) => {
                // ...
                console.log('Imagehere',resp.data)
                //Updateuser(resp.data)
                }).catch((err) => {
                alert(err)
                })
                
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
const [gender, setGender] = useState('');
const [bio, setBio] = useState('');
const [hashtag, setHashtag] = useState('');

////////////button states////////////////
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);
const [visible, setVisible] = useState(false);
const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
const onDismissSnackBar = () => setVisible(false);

//////////////////////Api Calling/////////////////
const Updateuser = async (props) => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user)
  axios({
    method: 'PUT',
    url: BASE_URL + 'user/update-user',
    data: {
      name: name,
      // password: predata.Password,
      // email: predata.Email,
      profession: profession,
     // bio: bio,
      image:props,
      _id:user
    },
  })
    .then(async function (response) {
      console.log("response", JSON.stringify(response.data))
      setloading(0);
      setdisable(0);
      GetProfileData()
setModalVisible(true)

    })
    .catch(function (error) {
      setModalVisible1(true)
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
  if (showdaywise == '') {
    setsnackbarValue({ value: "Please Enter Date of Birth", color: 'red' });
    setVisible('true');
  }
  if (gender == '') {
    setsnackbarValue({ value: "Please Enter Gender", color: 'red' });
    setVisible('true');
  }
  else if (profession == '') {
    setsnackbarValue({ value: "Please Enter Profession", color: 'red' });
    setVisible('true');
  }
  
  // else if (bio == '') {
  //   setsnackbarValue({ value: "Please Enter Bio", color: 'red' });
  //   setVisible('true');
  // }
  // else if (hashtag == '') {
  //   console.log("lastNmae")
  //   setsnackbarValue({ value: "Please Enter Hashtag", color: 'red' });
  //   setVisible('true');
  // }
  else {
    setloading(1);
    setdisable(1);
    pic()
  }
}

 ///////get api for onboarding data//////////
 const GetProfileData= async() => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user)
  axios({
    method: 'GET',
    url:BASE_URL+"user/get-user?_id="+user
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
 /////////////setuserprofile data//////////
 setName(response.data.name)
//  setPassword(response.data.password)
//  setEmail(response.data.email)
 setProfession(response.data.profession)
//  setGender(response.data.startTime)
//  setshowdaywise(response.data.endTime)
 setBio(response.data.bio)
 setImage(BASE_URL+JSON.parse(response.data.image))
//  setHashtag(response.data.description)
  })
  .catch(function (error) {
    console.log("error", error)
  })
  }
    useEffect(() => {
      GetProfileData()
  },[]);
  ////////////////datetime picker states////////////////
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showyearwise, setshowyearwise] = useState(false);
  const [showdaywise, setshowdaywise] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    var d = new Date();
    d = selectedDate
    // console.log(d)
    //console.log(selectedDate)
    if (d != undefined) {
      let year = d.getFullYear();
      let month = (d.getMonth() + 1).toString().padStart(2, "0");
      let day = d.getDate().toString().padStart(2, "0");
      console.log(year + '-' + month + '-' + day);
      console.log(typeof (year + '-' + month + '-' + day))
      setshowyearwise(year + "-" + month + "-" + day)
      setshowdaywise(day + "-" + month + "-" + year)
      //console('date',showyearwise)
    }
  
  }



  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    console.log('mode',mode)
  };
  
  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    style={{backgroundColor:'white'}}
  >
    <ImageBackground source={require('../../../assets/Authimages/BG_1.png')}
      resizeMode="cover" style={styles.container}>
        {show && (
<DateTimePicker
testID="dateTimePicker"
value={date}
mode={mode}
display="default"
locale="es-ES"
themeVariant="light"
onChange={onChange}
style={{
shadowColor: '#fff',
shadowRadius: 0,
shadowOpacity: 1,
shadowOffset: { height: 0, width: 0 },
color:'#1669F',
textColor:'#1669F'
}}
/>
)}
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
   <ImageBackground source={require('../../../assets/Profileimage/final.png')}
      resizeMode="cover"     style={styles.imagecontainer}>
           
               { image != '' ?
                                                <View style={styles.imageview}>
                                                <Image
                                                source={{uri: image}}
                                                   style={styles.image}
                                                   resizeMode='contain'
                                               />  
                                                        </View>

                   
                                 :
                                 <View style={styles.imageview}>
                                 <Image
                                                    source={require('../../../assets/Profileimage/user.png')}
                                                          style={styles.userimage}
                                                          resizeMode='contain'
                                                      />
                                     </View>
              }

  
                <View style={{position:'absolute',marginTop:hp(20)}}>
                <Image
              source={require('../../../assets/Profileimage/add.png')}
                    style={styles.addimage}
                    resizeMode='contain'
                />
                </View>
     
                </ImageBackground>
                </TouchableOpacity>
                 </View>

        


      <View style={Inputstyles.inputview}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Add Your Name"
              onChangeText={setName}
              value={name}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input2.current.focus() }}
              blurOnSubmit={false}
              //autoFocus={true}
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
          <TouchableOpacity  onPress={showDatepicker}>
          <View style={Inputstyles.action}>
            <TextInput
                      ref={ref_input2}
              placeholder="Date of Birth"
              onChangeText={onChange}
              value={showdaywise}
              editable={false}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input3.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
          </TouchableOpacity>
          <View style={Inputstyles.action}>
            <TextInput
                ref={ref_input3}
                //value={gender}
              placeholder="Gender"
              onChangeText={setGender}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input4.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
          <View style={Inputstyles.action}>
            <TextInput
             ref={ref_input4}
             value={profession}
              placeholder="Add your profession"
              onChangeText={setProfession}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
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


    </ImageBackground>
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
                Icon={       <Image
                  source={require('../../../assets/Icons/sucess.png')}
                     style={styles.sucessimage}
                     resizeMode='contain'
                 />}
              text={'Successfully Updated'}
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
              text={'Problem in Data Updation'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible1(false)}}
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
    </ScrollView>
  )
};

export default EditProfile;