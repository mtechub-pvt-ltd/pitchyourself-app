import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';

//////////////////app components////////////////
import CustomPostCard from '../../../components/PostCard/CustomPostCard';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';

/////////////////app styles///////////////////
import cardcontainerstyles from '../../../utills/GlobalStyles/cardcontainerstyles';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';

import Orientation from 'react-native-orientation-locker';
import { useIsFocused } from '@react-navigation/native';

const PostDetail = ({ navigation, route }) => {
console.log('post id here:',route.params.id)

const isfocussed = useIsFocused()

  ///////////////textfields//////////////////
  const [username, setusername] = useState('');
  const [userimage, setUserImage] = useState('');
  const [postedtime, setPostedTime] = useState('');
  const [posttype, setPostType] = useState('');
  const [videothumbnailimage, setVideoThumbnailImage] = useState('');
  const [hashtags, setHastags] = useState([]);
  const [postdesc, setPostDesc] = useState('');
  const [Video, setVideo] = useState('');
  const [aboutpost, setAboutPost] = useState('');

  ///////get api for onboarding data//////////
  const GetPostDetail = async () => {
    axios({
      method: 'GET',
      url: BASE_URL + "user/get-hub?_id="+route.params.id,
    })
      .then(function (response) {
        console.log(" post response here with data", JSON.stringify(response.data))
        /////////////setuserprofile data//////////
        setusername(response.data.userName)
        setUserImage(response.data.userImage)
        setPostedTime(response.data.TimePosted)
        setPostType(response.data.PostType)
        setHastags(response.data.HashtagHub)
        setPostDesc(response.data.Title)
        setVideo(response.data.Video)
        setAboutPost(response.data.profileStatus)
        setVideoThumbnailImage(response.data.thumbnail)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    if (isfocussed) {
      videofullscreen()
    }
    GetPostDetail()
  }, [isfocussed]);
  const videofullscreen = () => {
    //props.viewvideo
    Orientation.lockToPortrait();
  };


  return (

    <SafeAreaView style={cardcontainerstyles.container}>
            <CustomHeader
        screentitle={'Post'}
        navigation={()=> navigation.goBack()}
      />

      <CustomPostCard
        cardtype={'Post'}
        usertype={'activeuser'}
        username={username}
        userimage={userimage}
        postedtime={postedtime}
        posttype={posttype}
        postdesc={postdesc}
        postvideo={Video}
        onvideoclick={()=>{navigation.navigate('VideoPlayer',{playvideo:Video})}}
        postthumbnail={videothumbnailimage}
        aboutpost={aboutpost}
        hashtags={hashtags}
      />

    </SafeAreaView>

  )
};

export default PostDetail;