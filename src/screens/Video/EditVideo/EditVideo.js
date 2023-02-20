import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, TextInput, ScrollView, FlatList,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////app components/////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import AddLinks from '../../../components/AddLinks/AddLinks';

////////////////app pakages////////////////
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';

//////////////////app pakages////////////
import { Checkbox } from 'react-native-paper';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setlinksicon, setlinks } from '../../../redux/actions';

///////////////////app styles//////////////////
import styles from './styles';
import Uploadstyles from '../../../utills/GlobalStyles/Upload';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditVideo = ({ navigation, route }) => {
  console.log(' user id here:', route.params)

  /////////////////////add links states/////////////////
  const [link, setLinks] = useState();

  ///////////data textfields states///////////
  const linkclear = useRef()
  const clearlink = () => {
    linkclear.current.clear()
    dispatch(setlinksicon(''))
  }
  /////////////redux states///////
  const { video, links, id, thumbnails, linksicon } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  ////////////////views checks////////////////
  const [linksview, setlinksview] = useState(false)

  ////////////checkbox///////////
  const [linkadded, setlinkadded] = React.useState(false);
  const [linkschecked, setLinksChecked] = React.useState(false);

  ////////////////camera state////////////////
  const refRBSheet = useRef();

  const takePhotoFromCamera = () => {
    //setModalVisible(!modalVisible);
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: true
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

  const [images, setImages] = useState();

  const [image, setImage] = useState('')
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
  const [Selectimages, setSelectimages] = useState([]);
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
        setImages(data.url)
        setSelectimages([
          ...Selectimages,
          data.url])
      }).catch(err => {
        alert("error while uploading")
      })
  }
  const deleteImage = async (item) => {
    console.log('here', item)
    const data = new FormData()
    data.append('public_id', 'xt21yr4zysxsrcsklsod.docx')
    data.append('upload_preset', 'nrrfyy0m')
    // data.append("cloud_name", "mtechub")
    data.append('signature', '1240597cc96f271f3a48457a1620e2ded49906af')
    data.append('api_key', '585285115347681')

    fetch("https://api.cloudinary.com/v1_1/mtechub/:image/destroy", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        console.log("data here:", data)
        // setImages(data.url)
        // setSelectimages([
        //   ...Selectimages,
        //   data])
      }).catch(err => {
        alert("error while uploading")
      })

  }
  ///////////picker state/////////
  const [document, setdocument] = useState('')

  ////////////////////////document picker////////////////
  const onSelectFile = async (props) => {
    //var assignmentid= props
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.docx],
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
  const [Selectdoc, setSelectDocs] = useState([]);
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
        setSelectDocs([
          ...Selectdoc,
          data.url])
      }).catch(err => {
        alert("error while uploading")
      })
  }
  //////////////////////Api Calling/////////////////
  const UpdateUserProfileVideo = () => {
    console.log("update obj:", Userid, linkschecked, '..........................', Selectdoc, video,Selectimages,thumbnails)
    axios({
      method: 'PUT',
      url: BASE_URL + 'user/update-user-video',
      data: {
        _id: Userid,
        title: 'Video Profile',
        pdf: Selectdoc,
        Img: Selectimages,
        link: video,
        thumbnail:thumbnails,
        hidden: linkschecked,
        //Downloadable: true,

      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        navigation.navigate('Drawerroute')
        // if (response.data === "Profile Video Exists either Delete it or Update it") {
        //   // setloading(0);
        //   // setdisable(0);
        //   // setModalVisible1(true)
        //   console.log("Email Already Exist,Enter other email")
        // }
        // else {
        //   // setloading(0);
        //   // setdisable(0);
        //   navigation.navigate('Drawerroute')
        //   // if (route.params.navtype === 'CreateProfile')
        //   // {
  
        //   // }
        //   // else{
        //   //   navigation.navigate('Drawerroute')
        //   // }
        // }

      })
      .catch(function (error) {
        //setModalVisible(true)
        // setloading(0);
        // setdisable(0);
        console.log("error", error)
      })
  }

  //////////dropdownlink data/////////////
  const [dddata, setdddata] = useState()

  ///////////////link function///////////////
  const GetLinks = async () => {
    console.log('here:')
    axios({
      method: 'GET',
      url: BASE_URL + 'admin/get-all-links-admin',
    })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data))
        setdddata(response.data)
        console.log('flatlist data:', dddata)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetLinks()
    GetProfileData()
  }, []);
  //////////////link dropdown////////////////
  const reflinkddRBSheet = useRef();

  //////////////////////add Links//////////////////
  const AddSocailLinks = async () => {

    console.log('here......', id)
    axios({
      method: 'POST',
      url: BASE_URL + 'user/create-social-link',
      data: {
        userId: id,
        icon: linksicon,
        link: link
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        linkclear.current.clear()
        setlinkadded(true)
        dispatch(setlinksicon(''))
        dispatch(setlinks(response.data._id))
        //setModalVisible(true)


      })
      .catch(function (error) {
        if (error) {
          //setModalVisible1(true)
          console.log('Issue in Appoinments Acceptence')

        }

        console.log("error", error)
      })
  }
   ///////////////textfields//////////////////
   const [Userid, setuserId] = useState(id);
  const [ProfileStatus, setProfileStatus] = useState('');
  const [Document, setDocument] = useState('')

    ///////get api for onboarding data//////////
    const GetProfileData = async () => {
      var user= await AsyncStorage.getItem('Userid')
      console.log("userid:",user)

      axios({
        method: 'GET',
        url: BASE_URL + "user/get-user?_id=" + user,
      })
        .then(function (response) {
          console.log(" user profile response", JSON.stringify(response.data))
          /////////////setuserprofile data//////////
          setuserId(response.data._id)
          setProfileStatus(response.data.profileStatus)
          setImage(response.data.image)
          setDocument(response.data.uploadDocument)
          //setProfilelikes(response.data.LikesUsersId[0].LikedById)
        })
        .catch(function (error) {
          console.log("error", error)
        })
    }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CustomHeader
          screentitle={'Edit Video'}
          type={'others'}
          navigation={() => navigation.goBack()}
        />

        <View style={{ marginHorizontal: wp(10), marginTop: hp(5)}}>
          <Text style={styles.orangetext}>Upload Video</Text>
        </View>

        <View style={[Inputstyles.inputview, { marginTop: hp(0) }]}>

          <TouchableOpacity onPress={() => navigation.navigate('CustomCamera', { navplace: 'uploadprofilevideo' })}>
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              status={linkschecked ? 'checked' : 'unchecked'}
              color={Colors.Appthemecolor}
              uncheckedColor={'#B0B0B0'}
              onPress={() => {
                setLinksChecked(!linkschecked);
              }}

            />
            <Text style={styles.videotext}>HIDDEN</Text>
          </View>

          <View style={styles.lineview}></View>
          <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
            <Text style={styles.orangetext}>Upload Document</Text>
          </View>
          <View style={{ marginHorizontal: wp(10), marginTop: hp(3) }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: wp(5) }}>
              <TouchableOpacity onPress={() => onSelectFile()}>
                <Image
                  source={require('../../../assets/Video/file-pdf.png')}
                  style={styles.image}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Image
                  source={require('../../../assets/Video/image.png')}
                  style={styles.image}
                  resizeMode='contain'
                />
              </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity onPress={() => onSelectFile()}>
                <Text style={styles.uploadtext}>UPLOAD PDF</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Text style={styles.uploadtext}>UPLOAD IMAGE</Text>
              </TouchableOpacity>
            </View>

          </View>

          <FlatList
            data={Selectdoc}
            //numColumns={4}
            renderItem={({ item }) =>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginTop: hp(3), alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                  <Image
                    source={require('../../../assets/Upload/listdot.png')}
                    style={styles.doticon}
                    resizeMode='contain'
                  />
                  <Text style={[styles.orangetext, { marginLeft: wp(3) }]}>{item.split('/')[7]}</Text>

                </View>
                <TouchableOpacity onPress={() =>{}
                  
                 // deleteImage(item)
                  }>
                  <Image
                    source={require('../../../assets/Upload/minusicon.png')}
                    style={styles.icon}
                    resizeMode='contain'
                  />
                </TouchableOpacity>

              </View>

            }
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
          <FlatList
            data={Selectimages}
            renderItem={({ item }) =>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginTop: hp(3), alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                  <Image
                    source={require('../../../assets/Upload/listdot.png')}
                    style={styles.doticon}
                    resizeMode='contain'
                  />
                  <Text style={[styles.orangetext, { marginLeft: wp(3) }]}>{item.split('/')[7]}</Text>

                </View>
                <TouchableOpacity onPress={() => deleteImage(item)}>
                  <Image
                    source={require('../../../assets/Upload/minusicon.png')}
                    style={styles.icon}
                    resizeMode='contain'
                  />
                </TouchableOpacity>

              </View>

            }
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.lineview}></View>

          <TouchableOpacity onPress={() => { setlinksview(true), reflinkddRBSheet.current.open() }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(3), marginTop: hp(3) }}>
              <Text style={styles.orangetext}>Add Links</Text>
              <Image
                source={require('../../../assets/Upload/plus-icon.png')}
                style={styles.plusicon}
                resizeMode='contain'
              />
            </View>
          </TouchableOpacity>


          {linksview === true ?
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
              <Image
                source={{ uri: BASE_URL + linksicon }}
                style={[styles.plusicon, { borderRadius: wp(5) }]}
                resizeMode='contain'
              />
              <View style={Inputstyles.action}>


                <TextInput
                  ref={linkclear}
                  placeholder="Add Link here"
                  onChangeText={setLinks}
                  placeholderTextColor="#666666"
                  autoCapitalize="none"
                  style={[Inputstyles.input, { width: wp(59.5) }]}
                />
                {!linkadded ?
                  <TouchableOpacity onPress={() => clearlink()}>
                    <Image
                      source={require('../../../assets/Upload/minusicon.png')}
                      style={styles.icon}
                      resizeMode='contain'
                    />
                  </TouchableOpacity>
                  : null}
                <TouchableOpacity onPress={() => AddSocailLinks()}>
                  <Image
                    source={require('../../../assets/Upload/checkicon.png')}
                    style={[styles.icon, { marginLeft: wp(2) }]}
                    resizeMode='contain'
                  />
                </TouchableOpacity>

              </View>
            </View>
            :
            null
          }
        </View>
        <View style={styles.buttonview}>
          <CustomButtonhere
            title={'Upload'}
            widthset={'65%'}
            onPress={() => UpdateUserProfileVideo()}
          />
        </View>

        <CamerBottomSheet
          refRBSheet={refRBSheet}
          onClose={() => refRBSheet.current.close()}
          title={'From Gallery'}
          takePhotoFromCamera={takePhotoFromCamera}
          choosePhotoFromLibrary={choosePhotoFromLibrary}
        />
        <AddLinks
          refRBSheet={reflinkddRBSheet}
          onClose={() => { reflinkddRBSheet.current.close(), props.refRBSheet.current.close() }}
          onCloseReviewBTM={() => props.refRBSheet.current.close()}
          title={'Review Added'}
        />
      </ScrollView>
    </SafeAreaView>

  )
};

export default EditVideo;