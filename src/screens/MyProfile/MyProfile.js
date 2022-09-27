import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, ScrollView, FlatList, ImageBackground,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////app components////////////////
import Randomlist from '../../../components/RandomList/Randomlist';

/////////////////app pakages//////////////////
import { useIsFocused } from '@react-navigation/native';

/////////////////app styles////////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setthumbnails } from '../../../redux/actions';


const Profile = ({ navigation, route }) => {
  console.log('params:', route.params)

  /////////////previous data///////////
  const [predata] = useState(route.params.item)

  ////////////isfocused//////////
  const isfocussed = useIsFocused()

  /////////////redux states///////
  const { video, links, id, thumbnails, } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  ///////////////textfields//////////////////
  const [Userid, setuserid] = useState('');
  const [Username, setusername] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [Totalposts, settotalposts] = useState('');
  const [Profession, setProfession] = useState('');
  const [Bio, setBio] = useState('');
  const [ProfileStatus, setProfileStatus] = useState('');
  const [Document, setDocument] = useState('')
  const [Userposts, setUserPost] = useState()
  const [ProfileVideo, setProfileVideo] = useState()
  const [ProfileVideoThumbnail, setProfileVideoThumbnail] = useState()
  const [ProfileSociallinks, setProfileSocialLinks] = useState()
  const [Profilelike, setProfilelikes] = useState('')

  ///////get api for onboarding data//////////
  const GetProfileData = async () => {
    axios({
      method: 'GET',
      url: BASE_URL + "user/get-user?_id=" + route.params.id,
    })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data))
        /////////////setuserprofile data//////////
        setuserid(response.data._id)
        setusername(response.data.name)
        setPassword(response.data.password)
        setEmail(response.data.email)
        settotalposts(response.data.userTotalPosts)
        setProfession(response.data.profession)
        setBio(response.data.bio)
        setProfileStatus(response.data.profileStatus)
        setImage(response.data.image)
        setDocument(response.data.uploadDocument)
        setProfileVideo(response.data.profileVideoId[0].link)
        setProfileVideoThumbnail(response.data.profileVideoId[0].thumbnail)
        setProfileSocialLinks(response.data.UserProfileLinkId)
        //setProfilelikes(response.data.LikesUsersId[0].LikedById)
        setUserPost(response.data.userPosts)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  const [likeuserid, setlikeuserid] = useState()
  const getuserid = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    setlikeuserid(user)
  }
  useEffect(() => {

    if (isfocussed) {
      getuserid()
      GetProfileData()
    }
    console.log("user here after set:", likeuserid)
  }, [isfocussed, route.params.id]);

  ////////////////////add likes//////////////
  const Addlikes = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    console.log('here......', route.params.id)
    axios({
      method: 'POST',
      url: BASE_URL + 'user/add-profile-like',
      data: {
        userId: route.params.id,
        LikedById: user,
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        GetProfileData()
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }
  ////////////////////add likes//////////////
  const AddUnlike = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    console.log('here......', route.params.id)
    axios({
      method: 'POST',
      url: BASE_URL + 'user/unlike-profile-user?_id=' + user,
    })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))
        GetProfileData()
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }

  /////////////////////flatlist render item////////////
  const renderItem = ({ item }) => (

    <View>

      <View style={{ margin: wp(1), marginHorizontal: wp(1.3) }}>
        <View  >
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.lastimage}
            resizeMode='contain'
          />
        </View>

        <Text style={styles.userpostimagetext}>
          {item.Title}
        </Text>
      </View>

    </View>
  );
  const sociallinksrenderItem = ({ item }) => (
    <View style={styles.iconview}>
      <Image
        //source={require('../../../assets/socialicons/facebook.png')}
        source={{ uri: BASE_URL + item.icon }}
        style={{ width: 80, height: 20 }}
        resizeMode='contain'
      />
    </View>
  );
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          alignItems: 'center', marginTop: 20
          //backgroundColor:'red'
        }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require('../../../assets/Homeimages/menu.png')}
                style={Inputstyles.inputicons}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <View style={{ marginLeft: "12%" }}>
              {route.params.item === 'profile' ?
                <Text style={Authtextstyles.maintext}>My Profile</Text>
                :
                <Text style={Authtextstyles.maintext}> Profile</Text>
              }
            </View>


          </View>

          <View style={{ marginHorizontal: wp('0%'), flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => console.log('here')}>
              {/* <Image
                   source={require('../../../assets/Profile/heart.png')}
                   style={[styles.topicon,{height:wp('7%')}]}
                    resizeMode='contain'
                /> */}

            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('here')}>
              {route.params.item === 'profile' ?
                <Image
                  source={require('../../../assets/Profile/send.png')}
                  style={[styles.topicon, { width: wp('10%') }]}
                  resizeMode='contain'
                />
                :
                <View>
                  {Profilelike != likeuserid ?
                    <TouchableOpacity onPress={() => Addlikes()}>
                      <Image
                        source={require('../../../assets/Profile/fillheart.png')}
                        style={[styles.topicon, { height: wp('7%') }]}
                        resizeMode='contain'
                      />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => AddUnlike()}>
                      <Image
                        source={require('../../../assets/Profile/heart.png')}
                        style={[styles.topicon, { height: wp('7%') }]}
                        resizeMode='contain'
                      />
                    </TouchableOpacity>
                  }
                </View>



              }

            </TouchableOpacity>
            {/* {route.params.item === 'profile'?    
       <TouchableOpacity onPress={() => console.log('here')}>
          <Image
                   source={require('../../../assets/Profile/add.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
                
                </TouchableOpacity>:
                null} */}

          </View>

        </View>
        <View style={{
          flexDirection: "row", justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: hp(2)
        }}>
          <View style={{
            borderColor: Colors.Appthemecolor, borderWidth: 3, borderRadius: wp(18),
            height: hp(14), width: wp(29), alignItems: 'center', justifyContent: "center"
          }}>
            <Image
              source={{ uri: image }}
              style={styles.userimage}
              resizeMode='contain'
            />
          </View>
          <View>
            <Text style={styles.usermaintext}>{Username}</Text>
            <Text style={styles.usertime}>{Profession}</Text>
            <Text style={[styles.usertime, { width: wp('50%') }]}>{Bio}</Text>
          </View>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: 'flex-start',
          marginLeft: wp(4),
          alignItems: 'center',
          marginTop: hp(1)
        }}>
          {route.params.item === 'profile' ?
            <TouchableOpacity
              style={{
                width: wp(30), height: hp(4.5),
                borderRadius: wp(5),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.Appthemecolor,
              }}
              onPress={() => navigation.navigate('CreateProfile', { navplace: 'MyProfile' })}
            >
              <Text style={{ color: 'white' }}>Edit Profile</Text>
            </TouchableOpacity>
            // <CustomButtonhere
            //   title={'Edit Profile'}  
            //   widthset={'38%'}
            //   onPress={() => navigation.navigate('EditProfile')}
            // />
            :
            <View></View>
          }

          <Text style={[styles.posttext,
          { marginLeft: predata != 'profile' ? wp(8) : wp(36) }]}>{Totalposts}</Text>
          <Text style={[styles.usertime, {
            marginLeft: wp('5%'),
            color: Colors.Appthemecolor,
            fontWeight: '400'
          }]}>Posts</Text>

        </View>
        <TouchableOpacity
          style={styles.postpiccontainer}
          onPress={() => { navigation.navigate('VideoPlayer', { playvideo: ProfileVideo }) }}>
          <ImageBackground
            source={{ uri: ProfileVideoThumbnail }}
            style={styles.postpic}
            imageStyle={styles.imagestyle}
            resizeMode='cover'
          >
            <Image
              source={require('../../../assets/Video/playvideo.png')}
              style={{ width: wp(13), height: hp(6) }}
              resizeMode='cover'
            />
          </ImageBackground>

        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <View style={{
            flexDirection: "row", justifyContent: 'space-between',
            paddingHorizontal: 0, width: 100, marginBottom: 10,
            //backgroundColor:'yellow'
          }}>
            <View style={[styles.iconview, { marginLeft: wp(2) }]}>
              {route.params.item === 'profile' ?
                <TouchableOpacity onPress={() => navigation.navigate('Recomendations',{navplace:'Myprofile',id:Userid})}>
                  <Image
                    source={require('../../../assets/socialicons/recomend.png')}
                    style={{ width: 50, height: 20 }}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => navigation.navigate('Recomendations',{navplace:'profile',id:Userid})}>
                <Image
                  source={require('../../../assets/socialicons/chat.png')}
                  style={{ width: 50, height: 20 }}
                  resizeMode='contain'
                />
                      </TouchableOpacity>
              }
            </View>
            <View style={[styles.iconview]}>
              <Image
                source={require('../../../assets/socialicons/download.png')}
                style={{ width: 80, height: 20 }}
                resizeMode='contain'
              />
            </View>
            {route.params.item === 'profile' ?
              <View></View>
              :
              <View style={[styles.iconview]}>
                <Image
                  source={require('../../../assets/socialicons/report.png')}
                  style={{ width: 80, height: 20 }}
                  resizeMode='contain'
                />
              </View>
            }

          </View>
          <View style={{
            flexDirection: "row", justifyContent: 'space-between',
            marginRight: wp(1)
            //backgroundColor:'yellow'
          }}>
            <FlatList
              data={ProfileSociallinks}
              horizontal={true}
              renderItem={sociallinksrenderItem}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
            <View style={styles.iconview}>
              <Image
                source={require('../../../assets/socialicons/share.png')}
                style={{ width: 80, height: 20 }}
                resizeMode='contain'
              />
            </View>
          </View>
        </View>
        <View>
          <FlatList
            data={Userposts}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
          />

        </View>
      </ScrollView>
    </SafeAreaView>

  )
};

export default Profile;