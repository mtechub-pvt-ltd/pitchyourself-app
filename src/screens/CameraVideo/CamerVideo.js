import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

/////////////////////app components////////////
import CustomModal from '../../components/Modal/CustomModal';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

//////////////////camera vision pakage//////////////
import Video from 'react-native-video';

////////////app image picker//////////////////
import { createThumbnail } from "react-native-create-thumbnail";

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setthumbnails,setVideoUrl } from '../../redux/actions';

//////////////////////app styles////////////
import styles from './styles';
import Colors from '../../utills/Colors';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'


const CameraVideo = ({ navigation, route }) => {

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  const [predata] = useState(route.params)
    /////////////redux states///////
    const {thumbnails, } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    console.log('video hereeee', '...............', thumbnails)

  const Videoset = () => {
    generateThumbnail(predata.newfile.uri)
    UploadVideo(predata.newfile)
    if (predata.place.navplace === 'createprofile') {
      navigation.navigate('CreateProfile')
    }
   else if (predata.place.navplace === 'question') {
      console.log("here:")
      navigation.navigate('Question')
    }
    else if (predata.place.navplace === 'post') {
      console.log("here:")
      navigation.navigate('CreatePost')
    }
    else if (predata.place.navplace === 'project') {
      console.log("here:")
      navigation.navigate('Project')
    }
    else if (predata.place.navplace === 'job') {
      console.log("here:")
      navigation.navigate('Job')
    }
    else if (predata.place.navplace === 'applyjob') {
      console.log("here:")
      navigation.navigate('JobDetail',{navplace:'jobdetail'})
    }
    else if (predata.place.navplace === "uploadprofilevideo") {
      console.log("here:")
      navigation.navigate('UploadVideo')
    }
  }

  ///////////picker state/////////
  const generateThumbnail = async (source) => {
    console.log("here thumbnail ", source)
    createThumbnail({
      url: source,
      timeStamp: 10000,
    })
      .then(response => {
        let newfile = {
          uri: response.path,
          type: response.mime,
          name: response.path.substring(response.path.lastIndexOf('/') + 1)
        }
        Uploadpic(newfile)
      }
      )
      .catch(err => console.log({ err }));

  };

    /////////////////image api calling///////////////
    const Uploadpic =(props)=>{

      RNFetchBlob.fetch('POST',
      BASE_URL + 'upload-image',
      {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
      }, [
      // part file from storage
      {
        name: 'image', filename: 'avatar-foo.jpg', type: 'image/png',
        data: RNFetchBlob.wrap(props.uri)
      }
    ]).then((resp) => {
      console.log('here video thumbnail path:',resp.data)
      dispatch(setthumbnails(resp.data))
      console.log('here video thumbnail path after redux:',thumbnails)
    }).catch((err) => {
      console.log('here error:',err)
    })

    }
    /////////////////image api calling///////////////
    const UploadVideo =(props)=>{

      RNFetchBlob.fetch('POST',
      BASE_URL + 'upload-video',
      {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
      }, [
      // part file from storage
      {
        name:'video', filename: 'avatar-foo.mp4', type: "video/mp4",
        data: RNFetchBlob.wrap(props.uri)
      }
      // elements without property `filename` will be sent as plain text
    ]).then((resp) => {
      //dispatch(setthumbnails(resp.data))
      console.log('here video path:',resp.data)
      dispatch(setVideoUrl(resp.data))
    }).catch((err) => {
      console.log('here error:',err)
    })

    }

  function renderCamera() {

    return (

      <View style={{ flex: 1 }}>
        <Video
          // this will manage the pause and play
          source={{ uri: predata.newfile.uri }}
          style={{ ...StyleSheet.absoluteFill }}
          resizeMode="cover"
          repeat={true}
        />
        <View style={styles.topmainview}>
          <View style={styles.iconsview}>

            <IconButton
              icon={require('../../assets/Camera/arrowback.png')}
              size={25}
              onPress={() =>
                navigation.goBack()
              }
            />
            <IconButton
              icon={require('../../assets/Camera/checkicon.png')}
              color={Colors.Appthemecolor}
              size={30}
              onPress={() =>
                Videoset()
              }
            />
          </View>
        </View>


        <View style={styles.bottommainview}>
          <View style={styles.belowiconsview}>
            <IconButton
              icon={require('../../assets/Camera/delete.png')}
              color={Colors.Appthemecolor}
              size={30}
              onPress={() =>
                navigation.goBack()
              }
            />
          </View>
        </View>
        <CustomModal
        modalVisible={modalVisible}
        CloseModal={() => setModalVisible(false)}
        Icon={<AntDesign
          name="closecircle"
          color={'red'}
          size={60}
        />}
        text={"Error while uploading in video"}
        buttontext={'OK'}
        onPress={() => { setModalVisible(false) }}
      />
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {
        renderCamera()
      }
    </View>
  )
};

export default CameraVideo;