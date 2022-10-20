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
import { setVideoUrl, setlinks, setthumbnails } from '../../redux/actions';

//////////////////////app styles////////////
import styles from './styles';
import Colors from '../../utills/Colors';


const CameraVideo = ({ navigation, route }) => {

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  console.log("video url here in player::", route.params)

  const [predata] = useState(route.params)
  /////////////redux states///////
  const dispatch = useDispatch();

  const Videoset = () => {
    generateThumbnail(predata.newfile.uri)
    videohandleUpload(predata.newfile)
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
        handleUpload(newfile)
      }
      )
      .catch(err => console.log({ err }));

  };
  const handleUpload = (uploadimage) => {
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
        dispatch(setthumbnails(data.url))

      }).catch(err => {
        alert("error while uploading in thumbnail pic")
      })
  }
  const videohandleUpload = (uploadimage) => {
    console.log("camer video here url:", uploadimage)
    const data = new FormData()
    data.append('file', uploadimage)
    data.append('upload_preset', 'nrrfyy0m')
    data.append("cloud_name", "mtechub")

    fetch("https://api.cloudinary.com/v1_1/mtechub/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        console.log("video data here:", data.url)
        dispatch(setVideoUrl(data.url))

      }).catch(err => {
        setModalVisible(true)
        console.log("error while uploading in video")
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