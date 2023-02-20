import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, ScrollView, ImageBackground,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////////app components///////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import OutlineButton from '../../../components/Button/OutlineButton';
import BadgeView from '../../../components/BadgeView/BadgeView';
import CustomModal from '../../../components/Modal/CustomModal';

//////////////app pakages//////////////////
import MapView, { Marker } from 'react-native-maps';

///////////////////app styles//////////////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import videothumbnailstyles from '../../../utills/GlobalStyles/videothumbnailstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const JobDetail = ({ navigation, route }) => {
  console.log('items here:', route.params)

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  /////////////redux states///////
  const { video, links, id, thumbnails, } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  console.log('video hereeee', '...............', links)
  //const videoname=video.substring(video.lastIndexOf('/') + 1)

  ///////////////textfields//////////////////
  const [hubid, sethubid] = useState('');
  const [username, setusername] = useState('');
  const [userid, setuserid] = useState('');
  const [userimage, setUserImage] = useState('');
  const [usersavedpost, setSavedPost] = useState('');
  const [postedtime, setPostedTime] = useState('');
  const [posttype, setPostType] = useState('');
  const [videothumbnailimage, setVideoThumbnailImage] = useState('');
  const [hashtags, setHastags] = useState([]);
  const [postdesc, setPostDesc] = useState('');
  const [Video, setVideo] = useState('');
  const [ProfileStatus, setProfileStatus] = useState('');
  const [reason, setReason] = useState('')
  const [Profilelike, setProfilelikes] = useState('')
  const [JobSalary, setJobSalary] = useState('')
  const [JobStartDate, setJobStartDate] = useState('')
  const [JobEndDate, setJobEndDate] = useState('')
  const [JobLocation, setJobLocation] = useState('')
  const [JobCompany, setJobCompany] = useState('')
  const [JobDesc, setJobDesc] = useState('')
  const [JobPurpose, setJobPurpose] = useState('')
  const [JobLocationLat, setJobLocationLat] = useState('')
  const [JobLocationLog, setJobLocationLog] = useState('')

  ///////get api for onboarding data//////////
  const GetJobDetail = async () => {
    axios({
      method: 'GET',
      url: BASE_URL + "user/get-hub?_id=" + route.params.id,
    })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data))
        var savedposts = response.data.SavedBy.find(item => item === saveuserid) === saveuserid
        console.log("saved user", savedposts)
        /////////////setuserprofile data//////////
        sethubid(response.data._id)
        setuserid(response.data.userId._id)
        setusername(response.data.userName)
        setUserImage(response.data.userImage)
        setSavedPost(response.data.SavedBy.find(item => item === saveuserid) === saveuserid)
        setPostedTime(response.data.TimePosted)
        setPostType(response.data.PostType)
        setHastags(response.data.Hashtags)
        setPostDesc(response.data.Title)
        setVideo(response.data.Video)
        setProfileStatus(response.data.profileStatus)
        setJobLocation(response.data.joblocation)
        setJobSalary(response.data.jobSalaryRange)
        setJobStartDate(response.data.Startdate)
        setJobEndDate(response.data.Enddate)
        setJobCompany(response.data.jobCompanyName)
        setJobDesc(response.data.jobDescription)
        //JobPurpose(response.data.Purpose)
        setJobLocationLat(response.data.jobLong)
        setJobLocationLog(response.data.jobLat)
        setVideoThumbnailImage(response.data.thumbnail)
        setReason(response.data.questionReason)
        setProfilelikes(response.data)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    GetJobDetail()
    getuserid()
  }, []);

  ////////////////savepost STATES////////////
  const [loginuserid, setLoginuserid] = React.useState()
  const [saveuserid, setSaveuserid] = React.useState()

  const getuserid = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    setLoginuserid(user)
    setSaveuserid(user)
  }
  ////////////////////SAVE POST//////////////
  const SavePost = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user, route.params.id)

    axios({
      method: 'POST',
      url: BASE_URL + 'user/add-saved-item',
      data: {
        userId: user,
        hubId: route.params.id,
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        GetJobDetail()


      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }
  ////////////////////UNSAVE POST//////////////
  const UnSavePost = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user, route.params.id)
    axios({
      method: 'GET',
      url: BASE_URL + 'user/unsave-hub?hubId=' + route.params.id + '&userId=' + user,

    })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))
        GetJobDetail()
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }

  ////////////////////Apply Job////////////////////
  const Applyjob = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user,hubid)
    var currdate= new Date().getDate() + '-' + new Date().getMonth() + 1 + '-' + new Date().getFullYear();
    axios({
      method: 'POST',
      url: BASE_URL + 'user/apply-for-job',
      data: {
        userId: user,
        hubId: hubid,
        video: video,
        thumbnail: thumbnails,
        AppliedDate: currdate
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        ApplyNotification(response.data.HubUserId)
        //setModalVisible(true)
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }

    ////////////////////Apply Notification//////////////
    const ApplyNotification = async (item) => {


     var user = await AsyncStorage.getItem('Userid')
     console.log('here in notification:',item,"uerid",user)
     var username = await AsyncStorage.getItem('Userdata')
     var currdate= new Date().getDate() + '-' + new Date().getMonth() + 1 + '-' + new Date().getFullYear();
     console.log("date:",currdate)
     axios({
       method: 'POST',
       url: BASE_URL + 'user/create-msg',
       data: {
         from: user,
         to: item,
         msgContent:"Applied on Your Job",
         dateTime:currdate
       },
     })
       .then(async function (response) {
         console.log("response", JSON.stringify(response.data))
         //HomePosts()
 
       })
       .catch(function (error) {
         if (error) {
           console.log('Issue in Appoinments Acceptence')
         }
 
         console.log("error", error)
       })
   }
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topview}>
          <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/Icons/back.png')}
                style={{ width: 50, height: 20 }}
                resizeMode='contain'
              />
            </TouchableOpacity>

            <Text style={[Authtextstyles.maintext, { marginLeft: 10 }]}>Job Detail</Text>
          </View>
          {/* <Image
                   source={require('../../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                /> */}
        </View>
        <View style={styles.inputview}>
          <View style={styles.postcard}>
            <View style={styles.mainusercontainer}>
              <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{}}>
                  <Image
                    source={{ uri: userimage }}
                    style={styles.userimage}
                    resizeMode='contain'
                  />
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.usermaintext}>{username}</Text>
                  <Text style={styles.usertime}>{postedtime.substring(15, 24)}</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <BadgeView
                  title={posttype}
                />
                <View style={[styles.iconview, { marginLeft: wp(3) }]}>
                  {

                    usersavedpost ?
                      <TouchableOpacity onPress={() => UnSavePost()}>
                        <Image
                          source={require('../../../assets/Homeimages/orangestart.png')}
                          style={{ width: wp(5), height: hp(5) }}
                          resizeMode='contain'
                        />
                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={() => SavePost()}>
                        <Image
                          source={require('../../../assets/Homeimages/whitestar.png')}
                          style={{ width: wp(5), height: hp(5) }}
                          resizeMode='contain'
                        />
                      </TouchableOpacity>
                  }
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 25, marginBottom: 10 }}>
              <Text style={styles.postdesc}>Title</Text>
              <Text style={styles.postdesc}>{postdesc}</Text>
            </View>

            <TouchableOpacity
              style={[videothumbnailstyles.postpiccontainer, { width: wp(80) }]}
              onPress={() => { navigation.navigate('VideoPlayer', { playvideo: Video }) }}>
              <ImageBackground
                source={{ uri: videothumbnailimage }}
                style={[videothumbnailstyles.postpic, { width: wp(80) }]}
                imageStyle={videothumbnailstyles.imagestyle}
                resizeMode='cover'
              >
                <Image
                  source={require('../../../assets/Video/playvideo.png')}
                  style={{ width: wp(13), height: hp(6) }}
                  resizeMode='cover'
                />
              </ImageBackground>

            </TouchableOpacity>
            <View style={{ marginLeft: 25, marginBottom: 10, marginTop: 10 }}>
              <Text style={styles.postdesc}>Video Grapher for : {JobPurpose}</Text>
              <Text style={styles.postdesc}> {JobStartDate} / {JobEndDate}</Text>
              <Text style={styles.postdesc}>{JobLocation}</Text>
            </View>
            <View style={{
              flexDirection: 'row', paddingHorizontal: 25,
              justifyContent: 'space-between'
            }}>
              <Text style={styles.horzontaltext}>UHT : #VID23456</Text>
              <Text style={styles.horzontaltextright}>{JobSalary} $ Per Day</Text>
            </View>
            <View style={{ marginLeft: 25, marginTop: 10 }}>
              <Text style={[styles.postdesc, { color: 'black' }]}>Job Detail</Text>
              <Text style={[styles.postdesc, { marginTop: 10 }]}>{JobDesc}</Text>
            </View>
            <View style={{ marginLeft: 25, marginBottom: 10, marginTop: 10 }}>
              <Text style={[styles.postdesc, { color: 'black' }]}>Location</Text>
            </View>
            <View style={styles.mapcontainer}>
              <MapView
                style={styles.mapStyle}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              //  customMapStyle={mapStyle}
              >
                <Marker
                  draggable
                  coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                  }}
                  onDragEnd={
                    (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                  }
                  title={'Test Marker'}
                  description={'This is a description of the marker'}
                />
              </MapView>
            </View>
            {route.params.navplace === 'jobdetail' ?
              <View>
                <Text style={{ color: 'black',fontSize:hp(1.6),marginLeft:wp(5),marginBottom:hp(3),fontWeight:'600' }}>{video}</Text>

              </View> :
              null
            }
            {
              loginuserid === userid ?
              <View></View> :
                route.params.navplace === 'postjob' ?
                  <View></View> :
                  route.params.navplace === 'jobdetail' ?
                    <View style={styles.buttonview}>
                      <View style={{
                        flex: 0.5,
                        //backgroundColor:'red'
                      }}>
                        <OutlineButton
                          widthset={'35%'}
                          title='CANCEL'
                        //onPress={() => navigation.navigate('Screen1')}
                        />
                      </View>
                      <View style={{
                        flex: 0.5, alignSelf: 'flex-end',
                        //backgroundColor:'red'
                      }}>
                        <CustomButtonhere
                          widthset={'35%'}
                          title='APPLY'
                          onPress={() => Applyjob()}
                        />
                      </View>
                    </View> :
                    <View style={styles.singlebuttonview}>
                      <CustomButtonhere
                        widthset={'55%'}
                        title='Upload Video'
                        onPress={() => navigation.navigate('CustomCamera', { navplace: 'applyjob' })}
                      />
                    </View>
              
            }


            {/* { 
   route.params.navplace === 'jobdetail'?
  <View style={styles.buttonview}>
  <View style={{flex:0.5,
            //backgroundColor:'red'
            }}>
            <OutlineButton
                widthset={'35%'}
                title='CANCEL'
                //onPress={() => navigation.navigate('Screen1')}
            />
            </View>
                <View style={{flex:0.5,alignSelf:'flex-end',
            //backgroundColor:'red'
            }}>
                <CustomButtonhere
                widthset={'35%'}
                title='APPLY'
              onPress={()=> Applyjob()}
            />
            </View>
</View>
:
null
} */}



          </View>
        </View>
      </ScrollView>
      <CustomModal
        modalVisible={modalVisible}
        CloseModal={() => setModalVisible(false)}
        Icon={<Image
          source={require('../../../assets/Icons/sucess.png')}
          style={styles.sucessimage}
          resizeMode='contain'
        />}
        text={'Successful Applied'}
        buttontext={'OK'}
        onPress={() => { navigation.navigate('Home'), setModalVisible(false) }}
      />
    </SafeAreaView>

  )
};

export default JobDetail;