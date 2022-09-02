import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';

//////////////////app components/////////////////////
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomPostCard from '../../../components/PostCard/CustomPostCard';

//////////////////////app styles/////////////////
import cardcontainerstyles from '../../../utills/GlobalStyles/cardcontainerstyles'

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';

const QuestionDetail = ({ navigation, route }) => {

  ///////////////textfields//////////////////
  const [username, setusername] = useState('');
  const [userimage, setUserImage] = useState('');
  const [postedtime, setPostedTime] = useState('');
  const [posttype, setPostType] = useState('');
  const [videothumbnailimage, setVideoThumbnailImage] = useState('');
  const [hashtags, setHastags] = useState([]);
  const [postdesc, setPostDesc] = useState('');
  const [Video, setVideo] = useState('');
  const [reason, setReason] = useState('')
  const [savedBy, setSavedBy] = useState([])
  const [hubpostid, setHubPostId] = useState([])

  ///////get api for onboarding data//////////
  const GetQuestionDetail = async () => {
    axios({
      method: 'GET',
      url: BASE_URL + "user/get-hub?_id=" + route.params.id,
    })
      .then(function (response) {
        // console.log("response", JSON.stringify(response.data))
        /////////////setuserprofile data//////////
        setusername(response.data.userName)
        setUserImage(response.data.userImage)
        setPostedTime(response.data.TimePosted)
        setPostType(response.data.PostType)
        setHastags(response.data.Hashtags)
        setPostDesc(response.data.Title)
        setVideo(response.data.Video)
        setSavedBy(response.data.SavedBy)
        setVideoThumbnailImage(response.data.thumbnail)
        setReason(response.data.questionReason)
        setHubPostId(response.data._id)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetQuestionDetail()
  }, []);

  return (

    <SafeAreaView style={cardcontainerstyles.container}>
      <CustomHeader
        screentitle={'Question Detail'}
        navigation={() => navigation.goBack()}
      /> 

      <CustomPostCard
        cardtype={'Question'}
        usertype={'activeuser'}
        username={username}
        userimage={userimage}
        postedtime={postedtime}
        posttype={posttype}
        postdesc={postdesc}
        reason={reason}
        hashtags={hashtags}
        savedBy={savedBy[0]}
        hubpostid={hubpostid}
        postvideo={Video}
        onvideoclick={()=>{navigation.navigate('VideoPlayer',{playvideo:Video})}}
        postthumbnail={videothumbnailimage}
      />

    </SafeAreaView>

  )
};

export default QuestionDetail;