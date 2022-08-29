import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, 
} from 'react-native';

////////////////////app components///////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import CustomModal from '../../../components/Modal/CustomModal';

//////////////////app pakages////////////
import {Snackbar } from 'react-native-paper';

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

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setVideoUrl } from '../../../redux/actions';

const Project = ({ navigation }) => {

    /////////////redux states///////
    const {video, links,id,thumbnails, } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

      //Modal States
      const [modalVisible, setModalVisible] = useState(false);
      const [modalVisible1, setModalVisible1] = useState(false);

/////////TextInput References///////////
const ref_input2 = useRef();
const ref_input3 = useRef();
const ref_input4 = useRef();


///////////////textfields//////////////////
const [projectdesc, setProjectDesc] = useState('');
const [projecttitle, setProjectTitle] = useState('');
const [projectmember, setProjectMember] = useState('');
//const [video, setVideo] = useState('');
const [hashtag, setHashtag] = useState('');

////////////button states////////////////
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);
const [visible, setVisible] = useState(false);
const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
const onDismissSnackBar = () => setVisible(false);

//////////////////////Api Calling/////////////////
const CreateProject = async() => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user)
 axios({
   method: 'POST',
   url: BASE_URL + 'user/create-hub',
   data: {
    userId:user,
    Title: projecttitle,
    PostType: 'project',
    Video: video,
    Workedusers: projectmember,
    HashtagHub: hashtag,
    projectDescription: projectdesc,
   },
 })
   .then(async function (response) {
     console.log("response", JSON.stringify(response.data))
     setloading(0);
     setdisable(0);
//setModalVisible1(true)
navigation.navigate('ProjectDetail')

   })
   .catch(function (error) {
     setModalVisible(true)
     console.log("error", error)
   })
}

//Api form validation
const formValidation = async () => {
 // input validation
 if (projectdesc == '') {
   setsnackbarValue({ value: "Please Enter Project Description", color: 'red' });
   setVisible('true');
 }
 else if (projecttitle == '') {
   setsnackbarValue({ value: "Please Enter Project Title", color: 'red' });
   setVisible('true');
 }
 else if (video == '') {
   setsnackbarValue({ value: "Please Select Video", color: 'red' });
   setVisible('true');
 }
 else if (projectmember == '') {
  setsnackbarValue({ value: "Please Enter Project Members", color: 'red' });
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
   CreateProject()
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Create a Project</Text>
          </View>
          <View style={Inputstyles.inputview}>
          <View style={Multilineinputstyles.action}>
            <TextInput
              placeholder="Please give
              a brief description about this project"
              onChangeText={setProjectDesc}
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
          <View style={Inputstyles.action}>
            <TextInput
                 ref={ref_input2}
              placeholder="Title of a Project"
              onChangeText={setProjectTitle}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input3.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('CustomCamera',{navplace:'project'})}>
<View style={Uploadstyles.mainview}>
{thumbnails != '' ?
                <View style={{}}>
                  <Image
                    source={{ uri: thumbnails }}
                    style={Uploadstyles.setimages}
                    resizeMode='cover'
                  />
                </View>
                :
                <View style={{ alignItems: 'center' }}>
     <Image
                   source={require('../../../assets/Icons/upload.png')}
                   style={Uploadstyles.uploadicon}
                    resizeMode='contain'
                />
                <Text style={Uploadstyles.uploadtext}>Upload Video</Text>
                </View>
  }

</View>
</TouchableOpacity>
<View style={Inputstyles.action}>
            <TextInput
             ref={ref_input3}
              placeholder="Add users who are involved in
              this project"
              onChangeText={setProjectMember}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input4.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          <View style={{margin:5}}>
          <Text style={styles.lasttext}>Please
add hashtags to increase visibility and reach.</Text>
          </View>
          <View style={Inputstyles.action}>
            <TextInput
              ref={ref_input4}
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
              onPress={() => formValidation() }
              //onPress={() => navigation.navigate('ProjectDetail')}
            />
</View>
   

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
              text={'Data not Submitted'}
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
              text={'Problem in Submition'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible1(false)}}
                /> 
    </SafeAreaView>

  )
};

export default Project;