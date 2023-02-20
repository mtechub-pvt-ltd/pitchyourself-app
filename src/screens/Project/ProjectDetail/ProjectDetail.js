import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';

//////////////////app components////////////////
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomPostCard from '../../../components/PostCard/CustomPostCard';

///////////////////////app styles///////////////
import cardcontainerstyles from '../../../utills/GlobalStyles/cardcontainerstyles';


  //////////////////////////app api/////////////////////////
  import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';


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
        setHastags(response.data.HashtagHub)
        setPostDesc(response.data.projectDescription)
        setVideo(response.data.Video)
        setProjectMembers(response.data.Workedusers)
        setVideoThumbnailImage(response.data.thumbnail)
        setprojectTitle(response.data.Title)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetProjectDetail()
  }, []);


  return (

    <SafeAreaView style={cardcontainerstyles.container}>
                            <CustomHeader
        screentitle={'Project Detail'}
        navigation={()=> navigation.goBack()}
      />  
         <CustomPostCard
          cardtype={'Project'}
          usertype={'activeuser'}
          username={username}
          userimage={userimage}
          postedtime={postedtime}
          posttype={posttype}
          postdesc={postdesc}
         projectTitle={projectTitle}
         projectMembers={projectMembers}
         hashtags={hashtags}
         postvideo={Video}
         onvideoclick={()=>{navigation.navigate('VideoPlayer',{playvideo:Video})}}
         postthumbnail={videothumbnailimage}
          />

    </SafeAreaView>

  )
};

export default ProjectDetail;