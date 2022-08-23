import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import CustomButtonhere from '../../../components/Button/CustomButton';
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
import DateTimePicker from '@react-native-community/datetimepicker';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

      //////////////////////////app api/////////////////////////
      import axios from 'axios';
   import { BASE_URL } from '../../../utills/ApiRootUrl';
        import AsyncStorage from '@react-native-async-storage/async-storage';

const PostJob = ({ navigation }) => {

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
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  
  ///////////////textfields//////////////////
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  //const [date, setDate] = useState('');
  const [reach, setReach] = useState('');
  const [hashtag, setHashtag] = useState('');
  
  ////////////button states////////////////
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
  const onDismissSnackBar = () => setVisible(false);
  
  //////////////////////Api Calling/////////////////
  const CreatePostJob = async() => {
    var user= await AsyncStorage.getItem('Userid')
    console.log("userid:",user)
   axios({
     method: 'POST',
     url: BASE_URL + 'user/create-hub',
     data: {
      userId:user,
      Title: project,
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
     CreatePostJob()
   }
  }
        //datepicker states
const [date, setDate] = useState(new Date());
const [mode, setMode] = useState('date');
const [mode1, setMode1] = useState('date');
const [date1, setDate1] = useState(new Date());
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const [showyearwise, setshowyearwise] = useState(false);
const [birthdaydaywise, setbirthdaydaywise] = useState('');

//datepicker
const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
  var d = new Date();
  d = selectedDate
  if (d != undefined) {
    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");
    console.log(year + '-' + month + '-' + day);
    console.log(typeof (year + '-' + month + '-' + day))
    setshowyearwise(year + "-" + month + "-" + day)
   // setbirthdaydaywise(day + "-" + month + "-" + year).toISOString()
    //console('date ha yhn',showyearwise)
  }

}
const onChange1 = (event, selectedDate) => {
  const currentDate = selectedDate || date1;
  setShow1(Platform.OS === 'ios');
  setDate1(currentDate);
  var d = new Date();
  d = selectedDate
  if (d != undefined) {
    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");
    console.log(year + '-' + month + '-' + day);
    console.log(typeof (year + '-' + month + '-' + day))
    //setshowyearwise(year + "-" + month + "-" + day)
    setbirthdaydaywise(day + "-" + month + "-" + year).toISOString()
    //console('date ha yhn',showyearwise)
  }

}
const showMode1 = (currentMode) => {
  setShow1(true);
  setMode1(currentMode);
  console.log('mode',mode1)
};
const showDatepicker1 = () => {
  showMode1('date');
};
const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
  console.log('mode',mode)
};
const showDatepicker = () => {
  showMode('date');
};

  //textfields


  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
            <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
              {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          
          is24Hour={true}
          display="default"
          textColor="red"
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
                   {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode1}
          
          is24Hour={true}
          display="default"
          textColor="red"
          themeVariant="light"
          onChange={onChange1}
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
  
          <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.navigate('Hubs')}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Post a Job</Text>
          </View>
          <View style={[Inputstyles.inputview,{marginTop:'6%'}]}>
          <TouchableOpacity  onPress={()=> navigation.navigate('ChangeAddress')}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Location / Postcode"
              onChangeText={setLocation}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input2.current.focus() }}
              blurOnSubmit={false}
              autoFocus={true}
              editable={false}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          </TouchableOpacity>
          <View style={Inputstyles.action}>
            <TextInput
               ref={ref_input2}
              placeholder="What’s the salary / Day Range"
              onChangeText={setSalary}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input3.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          <TouchableOpacity  onPress={showDatepicker}>
          <View style={Inputstyles.action}>
            <TextInput
               ref={ref_input3}
              placeholder="Start Date"
              value={showyearwise}
              onChangeText={onChange}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input4.current.focus() }}
              editable={false}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={showDatepicker1}>
          <View style={Inputstyles.action}>
            <TextInput
                 ref={ref_input4}
              placeholder="End Date"
              onChangeText={onChange1}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input5.current.focus() }}
              editable={false}
              value={birthdaydaywise}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          </TouchableOpacity>
          <View style={Inputstyles.action}>
            <TextInput
            ref={ref_input5}
              placeholder="Unique Hashtag"
              onChangeText={setHashtag}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input6.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
     
          <View style={[Multilineinputstyles.action,{height:wp('38%'),marginTop:wp('3%')}]}>
            <TextInput
                ref={ref_input6}
              placeholder="Tag Relevant Profession to increase the reach"
              onChangeText={setReach}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}
              
              style={Multilineinputstyles.input}
            />
  
          </View>


        </View>
    

<View style={styles.buttonview}>
<CustomButtonhere
              title={'COMPLETE'}
              widthset={'65%'}
              loading={loading}
              disabled={disable}
              onPress={() => CreateProject() }
              //onPress={() => navigation.navigate('JobDetail',{item:'Applied'})}
            />
</View>

  </ScrollView>
    </SafeAreaView>

  )
};

export default PostJob;