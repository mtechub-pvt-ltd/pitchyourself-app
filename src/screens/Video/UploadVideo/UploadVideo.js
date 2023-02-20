import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, TextInput, ScrollView, FlatList,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////app components/////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomModal from '../../../components/Modal/CustomModal';
import AddLinks from '../../../components/AddLinks/AddLinks';

////////////////app pakages////////////////
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

//////////////////app pakages////////////
import { Checkbox } from 'react-native-paper';

///////////////////app pakages///////////////
import RBSheet from "react-native-raw-bottom-sheet";

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

const UploadVideo = ({ navigation, route }) => {
  console.log('user id here:', route.params)

         //Modal States
         const [modalVisible, setModalVisible] = useState(false);

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
  const [documentcounter, setdocumentcounter] = useState(1)

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
      setdocumentcounter(documentcounter+1)
      let newfile = {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name

      }

      console.log("counter of documents here:",documentcounter)
      if(documentcounter <=3)
      {
        documenthandleUpload(newfile)
      }
      else
      {
setModalVisible(true)
      }


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
    const CreateUserProfileVideo = () => {
      console.log("obj:", Userid, linkschecked, '..........................', Selectdoc, video,Selectimages)
      axios({
        method: 'POST',
        url: BASE_URL + 'user/create-profile-Video',
        data: {
          userId: Userid,
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
            //setloading(0);
            //setdisable(0);
           await AsyncStorage.setItem('Userid', response.data.userId);
          // await AsyncStorage.setItem('Userdata', response.data.name);
          // await AsyncStorage.setItem('UserEmail', response.data.email);
          // await AsyncStorage.setItem('UserPass', response.data.password);
          // await AsyncStorage.setItem('UserProfileStatus',response.data.profileStatus)
        
            navigation.navigate('Drawerroute')
            //navigation.navigate('UploadVideo',{userid:response.data._id,navtype:'CreateProfile'})
            console.log("submitted that")
          }
  
        )
        .catch(function (error) {
          //setModalVisible(true)
          // setloading(0);
          // setdisable(0);
          console.log("error", error)
        })
    }
   //////////////link dropdown////////////////
   const refsociallinkddRBSheet = useRef();

  //////////dropdownlink data/////////////
  const [linksarray, setlinksarray] = useState()
  const [dddata, setdddata] = useState()
  const [ddpickvalue, setddpickvalue] = useState([])

  ///////////////link function///////////////
  const GetLinks = async () => {
    console.log('here:')
    axios({
      method: 'GET',
      url: BASE_URL + 'admin/get-all-links-admin',
    })
      .then(function (response) {
        console.log("response  in links socilas", JSON.stringify(response.data))
        setdddata(response.data)
        console.log('flatlist data in links socilas:', dddata)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetLinks()
  }, []);

  //////////////////////add Links//////////////////
  const AddSocailLinks = async (item) => {

    console.log('here......', id)
    axios({
      method: 'POST',
      url: BASE_URL + 'user/create-social-link',
      data: {
        userId: id,
        icon: item,
        link: link
      },
    })
      .then(async function (response) {
        console.log("response social links here:", JSON.stringify(response.data))
       // linkclear.current.clear()
        setlinkadded(true)
      //  dispatch(setlinksicon(''))
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
  //////////////////////delete Links//////////////////
  const DeleteSocailLinks = async (item) => {

    console.log('here...... deelete', id,"social links",item)
    axios({
      method: 'DELETE',
      url: BASE_URL + 'user/delete-social-link-user',
      data: {
        userId:id,
      icon: item,
      },
    })
      .then(async function (response) {
        console.log("response dleete social links here:", JSON.stringify(response.data))
        setlinkadded(false)
        linkclear.current.clear()
      //  dispatch(setlinksicon(''))
        dispatch(setlinks(response.data._id))

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
   const [Userid] = useState(id);
   const sociallinkrenderItem = ({ item }) => {
   console.log('here in social link return item:',item)
   return(
    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
    <Image
                        source={{uri:BASE_URL+item.icon}}
                        style={styles.socialicons}
                        resizeMode='contain'
                      />

                
                                 <View style={[Inputstyles.action, { width: wp(80) }]}>       
  <TextInput
    ref={linkclear}
    placeholder="Add Link here"
    onChangeText={setLinks}
    placeholderTextColor="#666666"
    autoCapitalize="none"
    style={[Inputstyles.input, { width: wp(62) }]}
  />
  {linkadded ?
    <TouchableOpacity onPress={() => DeleteSocailLinks(item.Name)}>
      <Image
        source={require('../../../assets/Upload/minusicon.png')}
        style={styles.icon}
        resizeMode='contain'
      />
    </TouchableOpacity>
    :          <TouchableOpacity onPress={() => AddSocailLinks(item.Name)}>
    <Image
      source={require('../../../assets/Upload/checkicon.png')}
      style={[styles.icon]}
      resizeMode='contain'
    />
  </TouchableOpacity>}

  
  
  </View>
  
     
              </View>

   )
};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CustomHeader
          screentitle={'Upload'}
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
                <Text style={styles.uploadtext}>UPLOAD DOC</Text>
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

          <TouchableOpacity onPress={() => { refsociallinkddRBSheet.current.open() }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(3), marginTop: hp(3) }}>
              <Text style={styles.orangetext}>Add Links</Text>
              <Image
                source={require('../../../assets/Upload/plus-icon.png')}
                style={styles.plusicon}
                resizeMode='contain'
              />
            </View>
          </TouchableOpacity>

          <View style={[Inputstyles.inputview, { marginTop: hp(0),width:wp(95) }]}>
          <FlatList
            data={ddpickvalue}
            renderItem={sociallinkrenderItem
            }
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
          </View>


          {/* {linksview === true ?
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
  <Image
                      source={{uri:BASE_URL+ddpickvalue}}
                      style={styles.socialicons}
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
          } */}
        </View>
        <View style={styles.buttonview}>
          <CustomButtonhere
            title={'Upload'}
            widthset={'65%'}
            onPress={() => CreateUserProfileVideo()}
          />
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
        ref={refsociallinkddRBSheet}
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
            backgroundColor: "white"
          },
          container: {
            borderTopLeftRadius:wp(10),
            borderTopRightRadius:wp(10),
              height:hp(35)
          }
        }}
        
        >
        
        <View style={{
          flexDirection: 'row', justifyContent: "space-between",
          marginRight:wp(5),marginBottom:hp(2)
        }}>
        
          <Text style={styles.bottomsheettext}>Add Link</Text>
          <TouchableOpacity    onPress={() => refsociallinkddRBSheet.current.close()}>
     <Image
                 source={require('../../../assets/Icons/close.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
     </TouchableOpacity>
        </View>
        <FlatList
          data={dddata}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity
            onPress={() =>
              {setddpickvalue([...ddpickvalue,item])
                setlinksview(true)
                //props.refRBSheet.current.close(),
                refsociallinkddRBSheet.current.close()
              }}
             >
            <View style={styles.card}>
            <Image
                 source={{uri:BASE_URL+item.icon}}
                    style={styles.socialicons}
                    resizeMode='contain'
                />
                <Text style={styles.cardtext}>
                  {item.Name}
                </Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        
        />

        </RBSheet>
        <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={  <AntDesign
                  name="closecircle"
                  color={'red'}
                  size={60}
              />}
              text={'You can not upload more than 3 documents.'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible(false)}}
                /> 
      </ScrollView>
    </SafeAreaView>

  )
};

export default UploadVideo;