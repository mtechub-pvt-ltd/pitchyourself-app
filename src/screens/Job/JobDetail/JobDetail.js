import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,ScrollView,
} from 'react-native';

///////////////////app components////////////////////////
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomPostCard from '../../../components/PostCard/CustomPostCard';

/////////////////////app pakages/////////////////
import MapView, {Marker} from 'react-native-maps';

////////////////////app styles/////////////////
import cardcontainerstyles from '../../../utills/GlobalStyles/cardcontainerstyles';

  //////////////////////////app api/////////////////////////
  import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';


const JobDetail = ({ navigation,route }) => {
console.log('items here:',route.params)
  ///////////////textfields//////////////////
  const [username, setusername] = useState('');
  const [userimage, setUserImage] = useState('');
  const [postedtime, setPostedTime] = useState('');
  const [posttype, setPostType] = useState('');
  const [videothumbnailimage, setVideoThumbnailImage] = useState('');
  const [hashtags, setHastags] = useState([]);
  const [postdesc, setPostDesc] = useState('');
  const [Video, setVideo] = useState('');
  const [ProfileStatus, setProfileStatus] = useState('');
  const [reason, setReason] = useState('')
  const [Profilelike, setProfilelikes] = useState('')

  ///////get api for onboarding data//////////
  const GetJobDetail = async () => {
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
        setProfileStatus(response.data.profileStatus)
    
        //setVideoThumbnailImage(response.data.image)
        setReason(response.data.questionReason)
        setProfilelikes(response.data)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetJobDetail()
  }, []);


  return (

    <SafeAreaView style={cardcontainerstyles.container}>
                 <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
                      <CustomHeader
        screentitle={'Job Detail'}
        navigation={()=> navigation.goBack()}
      />

<CustomPostCard
        cardtype={'Job'}
        usertype={'activeuser'}
        username={username}
        userimage={userimage}
        postedtime={postedtime}
        posttype={posttype}
        postdesc={postdesc}
        hashtags={hashtags}
        postvideo={Video}
        onvideoclick={()=>{navigation.navigate('VideoPlayer',{playvideo:Video})}}
        postthumbnail={videothumbnailimage}
      />
    
        </ScrollView>
    </SafeAreaView>

  )
};

export default JobDetail;