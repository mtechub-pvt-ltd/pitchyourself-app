import React, { useEffect, useState, useRef } from 'react';
import {
  TextInput, ScrollView,
  Image, View, Text, TouchableOpacity, ImageBackground
} from 'react-native';

//////////////////app components/////////////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CamerBottomSheet from '../../components/CameraBottomSheet/CameraBottomSheet';
import CustomModal from '../../components/Modal/CustomModal';
import UploadBottomSheet from '../../components/UploadDocument/UploadDocument';

//////////////////app pakages////////////
import { Snackbar } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';

//////////////app pakages//////////////////
import ImagePicker from 'react-native-image-crop-picker';
import CountryPicker from 'react-native-country-picker-modal'

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

///////////////app styles////////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Uploadstyles from '../../utills/GlobalStyles/Upload';
import Multilineinputstyles from '../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setID } from '../../redux/actions';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateProfile = ({ navigation, route }) => {
console.log("here data:",route.params)
  
///////////country picker states/////////////
const [CountryPickerView, setCountryPickerView] = useState(false);
const [countryCode, setCountryCode] = useState('92');
const [countryname, setCountryName] = useState('Pak');
const [Phoneno, setPhoneno] = useState('92');
const [number, setnumber] = useState();


  /////////////redux states///////
  const { video, links,id,thumbnails } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  console.log('video hereeee', video, '...............', links)

  console.log('data hereeeeeeeeeeeeeee', route.params)

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  //camera and imagepicker
  const refRBSheet = useRef();

  ///////////picker state/////////
  const [image, setImage] = useState('')

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
      let newfile = {
        uri: image.path,
        type: image.mime,
        name: image.path.substring(image.path.lastIndexOf('/') + 1)
      }
      imagehandleUpload(newfile)

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
        uri: image.path,
        type: image.mime,
        name: image.path.substring(image.path.lastIndexOf('/') + 1)
      }
      imagehandleUpload(newfile)
    });
  }

  ///////////upload to cloudinary files/////////////
  const imagehandleUpload = (uploadimage) => {
    console.log("image here url:", uploadimage)
    const data = new FormData()
    data.append('file', uploadimage)
    data.append('upload_preset', 'nrrfyy0m')
    data.append("cloud_name", "mtechub")

    fetch("https://api.cloudinary.com/v1_1/mtechub/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        console.log("data here:", data)
        setImage(data.url)
      }).catch(err => {
        alert("error while uploading")
      })
  }
  const documenthandleUpload = (uploadimage) => {
    console.log("image here url:", uploadimage)
    const data = new FormData()
    data.append('file', uploadimage)
    data.append('upload_preset', 'nrrfyy0m')
    data.append("cloud_name", "mtechub")

    fetch("https://api.cloudinary.com/v1_1/mtechub/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        console.log("data here:", data)
        setdocument(data.url)
      }).catch(err => {
        alert("error while uploading")
      })
  }
  //camera and imagepicker
  const refuploadRBSheet = useRef();

  ///////////picker state/////////
  const [document, setdocument] = useState('')

  ////////////////////////document picker////////////////
  const onSelectFile = async (props) => {
    //var assignmentid= props
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res[0].uri);
      console.log('Type : ' + res[0].type);
      console.log('File Name : ' + res[0].name);
      console.log('File Size : ' + res[0].size);
      let newfile = {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name

      }
      documenthandleUpload(newfile)
      refuploadRBSheet.current.close()
      // RNFetchBlob.fetch('POST',
      //     BASE_URL+`upload-file`, {
      //     Authorization: "Bearer access-token",
      //     otherHeader: "foo",
      //     'Content-Type': 'multipart/form-data',
      // }, [{
      //     name: 'file',
      //     filename: res[0].name,
      //     type: res[0].type,
      //     data: RNFetchBlob.wrap(res[0].uri)
      // },
      // ]).then((response) => {
      //   console.log("response:",response.data,assignmentid)
      //   setSingleFile(response.data.file);
      //   UploadAssignment(assignmentid)
      // }).catch((error) => {
      //     alert(error)
      // })

    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  ////////////////////library image//////////////////
    ///////////picker state/////////
    const [docimage, setDocImage] = useState('')
  const choosedocimageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      refRBSheet.current.close()
      console.log(image);
      setDocImage(image.path);
      let newfile = {
        uri: image.path,
        type: image.mime,
        name: image.path.substring(image.path.lastIndexOf('/') + 1)
      }
      imagehandleUpload(newfile)
      refuploadRBSheet.current.close()
    });
  }
  /////////TextInput References///////////
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  ////////////////previous data//////////////
  const [predata] = useState(route.params)

  ///////////////textfields//////////////////
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [bio, setBio] = useState('');
  const [hashtag, setHashtag] = useState('');

  ////////////button states////////////////
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
  const onDismissSnackBar = () => setVisible(false);

  //////////////////////Api Calling/////////////////
  const CreateUserProfile = () => 
  {
    console.log("obj:",id,image,'..........................',video,'....................',document)
    axios({
      method: 'PUT',
      url: BASE_URL + 'user/update-user',
      data: {
        _id:Userid,
        name: name,
        image:image,
        profession: profession,
        bio: bio,
        //uploadDocument:document,
        ProfileHashtag:hashtag,
        phoneNumber:phoneno,
        // profileVideo:video,
   
        //sociallinks:links
      },
    })
      .then(async function (response) {
        console.log("response here in create profile", JSON.stringify(response.data))
        if (response.data === "Email Already Exist") {
          setloading(0);
          setdisable(0);
          setModalVisible1(true)
          console.log("Email Already Exist,Enter other email")
        }
        else {
          setloading(0);
          setdisable(0);
dispatch(setID(response.data._id))
        await AsyncStorage.setItem('Userid', response.data._id);
        await AsyncStorage.setItem('Userdata', response.data.name);
        await AsyncStorage.setItem('UserEmail', response.data.email);
         await AsyncStorage.setItem('UserPass', response.data.password);
      await AsyncStorage.setItem('UserProfileStatus',response.data.profileStatus)
          navigation.navigate('UploadVideo',{userid:response.data._id,navtype:'CreateProfile'})
        }

      })
      .catch(function (error) {
        setModalVisible(true)
        setloading(0);
        setdisable(0);
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
      CreateUserProfile()
    }
  }

    ///////////////textfields//////////////////
    const [Userid, setuserId] = useState(id);
    const [Username, setusername] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    // const [image, setImage] = useState('');
    // const [Totalposts, settotalposts] = useState('');
    // const [Profession, setProfession] = useState('');
    // const [Bio, setBio] = useState('');
    const [ProfileStatus, setProfileStatus] = useState('');
    const [Document, setDocument] = useState('')
    const [Profilelike, setProfilelikes] = useState('')
  
    ///////get api for onboarding data//////////
    const GetProfileData = async () => {
      var user= await AsyncStorage.getItem('Userid')
      console.log("userid:",user)

      axios({
        method: 'GET',
        url: BASE_URL + "user/get-user?_id=" + user,
      })
        .then(function (response) {
          console.log("response", JSON.stringify(response.data))
          /////////////setuserprofile data//////////
          setuserId(response.data._id)
          setName(response.data.name)
          setPassword(response.data.password)
          setEmail(response.data.email)
          //settotalposts(response.data.userTotalPosts)
          setProfession(response.data.profession)
          setPhoneNo(response.data.phoneNumber)
          setHashtag(response.data.ProfileHashtag[0])
          setBio(response.data.bio)
          setProfileStatus(response.data.profileStatus)
          setImage(response.data.image)

          //setProfilelikes(response.data.LikesUsersId[0].LikedById)
        })
        .catch(function (error) {
          console.log("error", error)
        })
    }
  useEffect(() => {
    GetProfileData()
  }, []);

  const renderItem = ({ item }) => (
    <View   style={styles.iconview}>
    <Image
                  source={require('../../assets/socialicons/facebook.png')}
                  style={{width:80,height:20}}
                resizeMode='contain'
            />
    </View>
      );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{ backgroundColor: 'white', flex: 1 }}
    >
      <ImageBackground source={require('../../assets/Authimages/BG_1.png')}
        resizeMode="cover" style={styles.container}>
                  {CountryPickerView == true ? <CountryPicker
          withFilter={true}
          withCallingCode={true}
          withModal={true}
          withFlag={true}
          withFlagButton={true}
          withCountryNameButton={true}

          onSelect={(e) => {
            console.log('country here',e)
            var name = e.name.substring('4')
            setCountryPickerView(false)
            //setCountryFlag(JSON.parse(e.flag))
            setCountryCode(JSON.parse(e.callingCode))
            setCountryName(e.name.substring(0,3))
          }}
          onClose={(e) => {
            setCountryPickerView(false)
          }}
          visible={CountryPickerView}
        /> :
          <View></View>
        }
        <View style={{
          flexDirection: 'row', justifyContent: 'flex-start',
          marginHorizontal: '0%', alignItems: 'center', marginTop: 20
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Image
              source={require('../../assets/Icons/back.png')}
              style={Inputstyles.inputicons}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <View style={{ marginLeft: '10%' }}>
            {route.params.navplace === "MyProfile"?
            <Text style={Authtextstyles.maintext}>Edit Profile</Text>
          :
          <Text style={Authtextstyles.maintext}>Complete Profile</Text>
          }

          </View>

        </View>
        <View style={Logostyles.underlogotextview}>
        {route.params.navplace === "MyProfile"? <View></View>:
          <Text style={Logostyles.underlogotext}>Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut
          </Text>
    
        }
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <ImageBackground source={require('../../assets/Profileimage/final.png')}
              resizeMode="cover" style={styles.imagecontainer}>

              {image != '' ?
                <View style={styles.imageview}>
                  <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode='contain'
                  />
                </View>
                :
                <View style={styles.imageview}>
                  <Image
                    source={require('../../assets/Profileimage/user.png')}
                    style={styles.userimage}
                    resizeMode='contain'
                  />
                </View>
              }


              <View style={{ position: 'absolute', marginTop: hp(20) }}>
                <Image
                  source={require('../../assets/Profileimage/add.png')}
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
            value={name}
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
            value={profession}
              ref={ref_input2}
              placeholder="Add your profession"
              onChangeText={setProfession}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input3.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}

              style={Inputstyles.input}
            />
          </View>

          <View style={Inputstyles.numberinputaction}>
          <TouchableOpacity
            onPress={() => {
              setCountryPickerView(true)
            }}>
          <TextInput
              placeholder="Pak +92"
              onChangeText={setProfession}
        editable={false}
        value={countryname + ' +' + countryCode}
              placeholderTextColor={'white'}
              style={Inputstyles.numberinput}
            />
                      </TouchableOpacity>
            <TextInput
            value={phoneno}
              ref={ref_input3}
              placeholder="Add Phone"
              onChangeText={setPhoneNo}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input4.current.focus()}}
              keyboardType='numeric'
              placeholderTextColor={Colors.inputtextcolor}

              style={[Inputstyles.input,{width:wp(50),  paddingLeft:wp(5)}]}
            />
          </View>

          <View style={Inputstyles.action}>
            <TextInput
            value={bio}
              ref={ref_input4}
              placeholder="Add Bio"
              onChangeText={setBio}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input5.current.focus()}}
              placeholderTextColor={Colors.inputtextcolor}
              style={Inputstyles.input}
            />
          </View>
          <View style={Inputstyles.action}>
            <TextInput
            value={hashtag}
              ref={ref_input5}
              placeholder="Add Hastag"
              onChangeText={setHashtag}
              placeholderTextColor={Colors.inputtextcolor}
              style={Inputstyles.input}
            />
          </View>
        </View>


        <View style={styles.buttonview}>
          <CustomButtonhere
            title={'Next'}
            widthset={'65%'}
            loading={loading}
            disabled={disable}
            onPress={() => formValidation()}
          />
        </View>

      </ImageBackground>
      <CamerBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={'From Gallery'}
        takePhotoFromCamera={takePhotoFromCamera}
        choosePhotoFromLibrary={choosePhotoFromLibrary}
      />
      <UploadBottomSheet
        refRBSheet={refuploadRBSheet}
        onClose={() => refuploadRBSheet.current.close()}
        title={'Add Links'}
        SelectFile={onSelectFile}
        choosePhotoFromLibrary={choosedocimageFromLibrary}
      />
      <Snackbar
        duration={400}
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{
          backgroundColor: snackbarValue.color,
          marginBottom: '20%',
          zIndex: 999,
        }}>
        {snackbarValue.value}
      </Snackbar>
      <CustomModal
        modalVisible={modalVisible}
        CloseModal={() => setModalVisible(false)}
        Icon={<AntDesign
          name="closecircle"
          color={'red'}
          size={60}
        />}
        text={'SignUP Failed'}
        buttontext={'OK'}
        onPress={() => { setModalVisible(false) }}
      />
      <CustomModal
        modalVisible={modalVisible1}
        CloseModal={() => setModalVisible1(false)}
        Icon={<AntDesign
          name="closecircle"
          color={'red'}
          size={60}
        />}
        text={'Email Already Exists'}
        buttontext={'OK'}
        onPress={() => { setModalVisible1(false) }}
      />
    </ScrollView>
  )
};

export default CreateProfile;