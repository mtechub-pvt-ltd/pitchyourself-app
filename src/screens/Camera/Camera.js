import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image,TouchableOpacity,Text } from 'react-native';
import { IconButton } from 'react-native-paper';

//////////////////camera vision pakage//////////////
import { Camera, useCameraDevices} from 'react-native-vision-camera';

////////////app image picker//////////////////
import ImagePicker from 'react-native-image-crop-picker';
import { createThumbnail } from "react-native-create-thumbnail";

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setVideoUrl,setpickvideo,setthumbnails} from '../../redux/actions';

//////////////////////app styles////////////
import styles from './styles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomCamera = ({ navigation,route }) => {
  console.log("navigation place:",route.params)

  /////////////redux states///////
  const { video } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  //////////////camera ref///////////////
  const camera = useRef()

  //////////camera states//////
  const devices = useCameraDevices()
  const device = devices.front;

  ///////////////camera handler////////////
  const requestCameraPermision = React.useCallback(async () => {
    const permission = await Camera.requestCameraPermission()
    if (permission === 'denied') {
      console.log('problem')
    }
  }
    , [])
  React.useEffect(() => {
    requestCameraPermision()
  }, [])
  const[videoduration,setvideoduration]=useState(false)
  //Handles Taking photo
  const handleCapture = async () => {
    const data = camera.current.startRecording({
      flash: 'on',
      onRecordingFinished: async (video) => {
        console.log("camera video duration:",video.duration)
        setvideoduration(video.duration)
        let newfile = { 
          uri:video.path,
          type:"video/"+video.path.substring(video.path.lastIndexOf('.') + 1),
          name:video.path.substring(video.path.lastIndexOf('_') + 1), 
      }

      console.log("camera video after :",newfile,route.params)
        //generateThumbnail(video.path)
        navigation.navigate('CameraVideo',{newfile,place:route.params})
        //generateThumbnail(video)
        //dispatch(setVideoUrl(video))
      },
      onRecordingError: (error) => console.error(error),
    })
    setCapturevideostatus(true)
    setTimeout(async () => {
      await camera.current.stopRecording()
      // navigation.goBack('here') // Stack Name
    }, 6000);
    dispatch(setVideoUrl(data));
    console.log("video path", data);
  }
  const[videostatus,setvideostatus]=useState(false)
  const[capturevideostatus,setCapturevideostatus]=useState(false)
  const StopRecording = async () => {
    console.log('here in stop')
    //setvideostatus('stop')
      await camera.current.stopRecording()
      setCapturevideostatus(false)
  }
  const PauseRecording = async () => {
  
      var pause=await camera.current.pauseRecording()
      console.log('here in pause',pause)
      setvideostatus(true)
      //await timeout(500)
  }
  const ResmeRecording = async () => {

      var resume=await camera.current.resumeRecording()
      console.log('here in resume',resume)
      setvideostatus(false)
  }

  ////////////////////library image//////////////////
  const chooseVideoFromLibrary = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then(async (video) => {
      console.log(video);
      //dispatch(setpickvideo(video))
      //generateThumbnail(video.path)
      //navigation.navigate('CameraVideo', video)
      let newfile = { 
      uri:video.path,
      type:video.mime,
      name:video.path.substring(video.path.lastIndexOf('/') + 1), 
  }
  navigation.navigate('CameraVideo', newfile)
    //handleUpload(newfile)
    });
  }

  function renderCamera() {

    if (device == null) {
      return (
        <View style={{ flex: 1 }}>
        </View>
      )
    }
    else {
      return (

        <View style={{ flex: 1 }}>
          <Camera
            ref={camera}
            //photo={true}
            video={true}
            style={StyleSheet.absoluteFill}
            //style={{flex:1}}
            device={device}
            isActive={true}
            enableZoomGesture
            //position={'front'}
            hasFlash
            //frameProcessor={frameProcessor}
            frameProcessorFps={'auto'}
          />

          <View style={styles.topmainview}>
            <View style={styles.iconsview}>

              <IconButton
                icon={require('../../assets/Camera/arrowback.png')}
                //icon="image"
                //color={Colors.Appthemecolor}
                size={25}
                onPress={() =>
                  navigation.goBack()
                }
              />
              <IconButton
                icon={require('../../assets/Camera/pluscircle.png')}
                color={'orange'}
                size={30}
              />


            </View>

          </View>


          <View style={styles.bottommainview}>
            <View style={styles.iconsview}>

              <IconButton
                icon={require('../../assets/Camera/image.png')}
                color={Colors.Appthemecolor}
                size={30}
                onPress={() =>
                  //imagesearch()
                  //takePicture()
                  //callGoogleVisionAsync()
                  chooseVideoFromLibrary()
                }
              />
              {capturevideostatus === false?
                  <TouchableOpacity onPress={() => handleCapture()}>
                  <Image
                    source={require('../../assets/Camera/capture.png')}
                    style={{ height: hp(8), width:wp(20) }}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
          :
                      <TouchableOpacity onPress={() => StopRecording()}>
                        <View>
                        <Image
                        source={require('../../assets/Camera/stop.png')}
                        style={{ height: hp(8), width:wp(20) }}
                        resizeMode='contain'
                      />
                       {/* <Text style={{color:'black'}}>{videoduration}</Text> */}
                        </View>
              
                    </TouchableOpacity>
           } 
      

            </View>

          </View>

        </View>


      )
    }

  }

  return (
    <View style={{ flex: 1 }} >
      {
        renderCamera()
      }
    </View>
  )
};

export default CustomCamera;