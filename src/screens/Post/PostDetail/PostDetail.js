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

const PostDetail = ({ navigation, route }) => {

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
        setPostDesc(response.data.Title)
        setVideo(response.data.Video)
        setAboutPost(response.data.profileStatus)
        //setVideoThumbnailImage(response.data.image)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetPostDetail()
  }, []);


  return (

    <SafeAreaView style={cardcontainerstyles.container}>
            <CustomHeader
        screentitle={'Post'}
        navigation={()=> navigation.goBack()}
      />

      <CustomPostCard
        cardtype={'Post'}
        username={username}
        userimage={userimage}
        postedtime={postedtime}
        posttype={posttype}
        postdesc={postdesc}
        aboutpost={aboutpost}
        hashtags={hashtags}
      />

    </SafeAreaView>

  )
};

export default PostDetail;