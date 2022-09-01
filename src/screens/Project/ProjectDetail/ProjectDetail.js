import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';

//////////////////app components
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomPostCard from '../../../components/PostCard/CustomPostCard';

///////////////////////app styles///////////////
import cardcontainerstyles from '../../../utills/GlobalStyles/cardcontainerstyles';


  //////////////////////////app api/////////////////////////
  import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const ProjectDetail = ({ navigation,route }) => {

  ///////////////textfields//////////////////
  const [username, setusername] = useState('');
  const [userimage, setUserImage] = useState('');
  const [postedtime, setPostedTime] = useState('');
  const [posttype, setPostType] = useState('');
  const [videothumbnailimage, setVideoThumbnailImage] = useState('');
  const [hashtags, setHastags] = useState([]);
  const [postdesc, setPostDesc] = useState('');
  const [Video, setVideo] = useState('');
  const [projectMembers, setProjectMembers] = useState('');
  const [projectTitle, setprojectTitle] = useState('')
  const [Profilelike, setProfilelikes] = useState('')

  ///////get api for onboarding data//////////
  const GetProjectDetail = async () => {
    axios({
      method: 'GET',
      url: BASE_URL + "user/get-hub?_id=" + route.params.id,
    })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data))
        /////////////setuserprofile data//////////
        setusername(response.data.userName)
        setUserImage(response.data.userImage)
        setPostedTime(response.data.TimePosted)
        setPostType(response.data.PostType)
        setHastags(response.data.Hashtags)
        setPostDesc(response.data.projectDescription)
        setVideo(response.data.Video)
        setProjectMembers(response.data.Workedusers)
        //setVideoThumbnailImage(response.data.image)
        setprojectTitle(response.data.Title)
        setProfilelikes(response.data)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetProjectDetail()
    getuserid()
  }, []);

////////////////savepost STATES////////////
const[saveuserid,setSaveuserid]=useState()
  const getuserid=async()=>{
   var user= await AsyncStorage.getItem('Userid')
    console.log("userid:",user)   
    setSaveuserid(user)
  }
  ////////////////////SAVE POST//////////////
  const SavePost=async() => {
    var user= await AsyncStorage.getItem('Userid')
    console.log("userid:",user)
    console.log('here......',route.params.id)
    axios({
      method: 'POST',
      url: BASE_URL+'user/add-saved-item',
      data:{
        userId:user,
        hubId: route.params.id,
      },
    })
    .then(async function (response) {
      console.log("response", JSON.stringify(response.data))  
      GetProfileData()
    })
    .catch(function (error) {
      if(error)
    {    
       console.log('Issue in Appoinments Acceptence')
      }
  
      console.log("error", error)
    })
  }
    ////////////////////UNSAVE POST//////////////
    const UnSavePost=async() => {
      var user= await AsyncStorage.getItem('Userid')
      console.log("userid:",user)
      console.log('here......',route.params.id)
      axios({
        method: 'DELETE',
        url: BASE_URL+'user/unsave-hub?_id='+user,
      })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))  
        GetProfileData()
      })
      .catch(function (error) {
        if(error)
      {    
         console.log('Issue in Appoinments Acceptence')
        }
    
        console.log("error", error)
      })
    }
  return (

    <SafeAreaView style={cardcontainerstyles.container}>
                            <CustomHeader
        screentitle={'Project Detail'}
        navigation={()=> navigation.goBack()}
      />
          
            <CustomPostCard
          cardtype={'Project'}
          username={username}
          userimage={userimage}
          postedtime={postedtime}
          posttype={posttype}
          postdesc={postdesc}
         projectTitle={projectTitle}
         projectMembers={projectMembers}
         hashtags={hashtags}
          />

    </SafeAreaView>

  )
};

export default ProjectDetail;