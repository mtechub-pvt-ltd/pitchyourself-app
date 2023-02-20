import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,View,ImageBackground
} from 'react-native';

///////////////////app components//////////////////////
import Customvideo from '../../components/VideoComponent/CustomVideo';

import Orientation from 'react-native-orientation-locker';
import { useIsFocused } from '@react-navigation/native';

// Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';
import style from '../../components/VideoComponent/styles';

const VideoPlayer = ({ navigation,route }) => {
console.log('previous screen video url:',route.params)

  //useeffect state
  const isfocussed = useIsFocused()

    //modal states
    const [modalVisible, setModalVisible] = useState(false);

    //video state
  const[videoadd,setvideoadd]=useState(route.params.playvideo)
  const[fileUrl,setfileUrl]=useState(route.params.playvideo)
  const[viewvideo,setviewvideo]=useState(false)


// use in video component for video fullscreen 
const toggleview=()=>
{
  if (viewvideo === false )
  {
    setviewvideo(true)
  }
  else{
    setviewvideo(false)
  }
}

//changes the video detail on flatlist item click
const togglevideo=(props)=>
{
  console.log("props video:",props)
setvideoadd(route.params.playvideo)
setfileUrl(route.params.playvideo)
//setModalVisible(true)
}
const videofullscreen = () => {
    //props.viewvideo
    Orientation.lockToPortrait();
  };

//check the library perission for download file
const checkPermission = async () => {
    
  // Function to check the platform
  // If Platform is Android then check for permissions.

  if (Platform.OS === 'ios') {
    downloadFile();
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message:
            'Application needs access to your storage to download File',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        downloadFile();
        console.log('Storage Permission Granted.');
      } else {
        // If permission denied then show alert
        Alert.alert('Error','Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.log("++++"+err);
    }
  }
};

// download file uses here for video download
const downloadFile = () => {
 
  // Get today's date to add the time suffix in filename
  let date = new Date();
  // File URL which we want to download
  let FILE_URL = fileUrl;  
  console.log('fileurl',FILE_URL)  
  // Function to get extention of the file url
  let file_ext = getFileExtention(FILE_URL);
 
  file_ext = '.' + file_ext[0];
 
  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  const { config, fs } = RNFetchBlob;
  let RootDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path:
        RootDir+
        '/file_' + 
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,   
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then(res => {
      // Alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
     // alert('File Downloaded Successfully.');
    });
};

// set the file extension all the function
// checkpermission+downloadfile+ get fileExtension related to each other
const getFileExtention = fileUrl => {
  // To get the file extension
  return /[.]/.exec(fileUrl) ?
           /[^.]+$/.exec(fileUrl) : undefined;
};
  useEffect(() => {

  }, []);
  return (
   < SafeAreaView style={{backgroundColor:'white',alignItems:'center',justifyContent:"center",flex:1}}>
  
<View style={{alignItems:'center',justifyContent:"center",flex:1}}>
<Customvideo
       viewhide={()=>toggleview()}
      repeatvideos={()=> setModalVisible(true)}
      samplevideo={{uri: route.params.playvideo}}
        //samplevideo={require('../../components/VideoComponent/sample.mp4')}
      />
</View>
 {/* <ImageBackground source={require('../../assets/Authimages/BG_1.png')}
     resizeMode="cover" style={{alignItems:'center',justifyContent:"center",flex:1}}>
 </ImageBackground> */}
</SafeAreaView>
  )
};

export default VideoPlayer;