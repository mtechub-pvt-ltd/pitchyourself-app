import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList, RefreshControl, ScrollView,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////////app components////////////
import CustomPostCard from '../../../components/PostCard/CustomPostCard';
import BadgeView from '../../../components/BadgeView/BadgeView';

//////////////app styles////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setsearchresults } from '../../redux/actions';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SearchResults = ({ navigation, route }) => {

  console.log("search data from previous screen:", route.params)
const[predata]=useState(route.params)
  /////////////redux states///////
  const { searchresult } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  console.log("search data from redux:", searchresult)


  ///////////////refresh state///////////////
  const [pagecount, setpagecount] = React.useState(18);

  //increment function
  const incrementCount = (props) => {
    // Update state with incremented value
    console.log("is here:", props)
    setpagecount(pagecount + 1);
  };


  /////////////////refresh timeout function//////////////
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  ///////////////refresh state///////////////
  const [refreshing, setRefreshing] = React.useState(false);

  ///////////////////////refreh function////////////
  const onRefresh = React.useCallback(() => {
    //incrementCount('here')
    console.log("count page here:", pagecount)
    HomePosts()
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);


  /////////////////homepost state////////////
  const [data, setdata] = useState('')
  ////////////////////UNSAVE POST//////////////
  const HomePosts = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    axios({
      method: 'GET',
      url: BASE_URL + 'user/get-all-hubs-page?page=' + pagecount + '&limit=10',
    })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))
        setdata(response.data.results)

      })
      .catch(function (error) {
        if (error) {
          console.log('no dataa found')
        }

        console.log("error", error)
      })
  }

  useEffect(() => {
    HomePosts()
    getuserid()
    //onRefresh()
  }, []);
  ////////////////savepost STATES////////////
  const [saveuserid, setSaveuserid] = React.useState()
    ////////////////////SAVE POST//////////////
    const SavePost = async (item) => {
      var user = await AsyncStorage.getItem('Userid')
      axios({
        method: 'POST',
        url: BASE_URL + 'user/add-saved-item',
        data: {
          userId: user,
          hubId: item,
        },
      })
        .then(async function (response) {
          console.log("response", JSON.stringify(response.data))
          HomePosts()
  
        })
        .catch(function (error) {
          if (error) {
            console.log('Issue in Appoinments Acceptence')
          }
  
          console.log("error", error)
        })
    }
    ////////////////////UNSAVE POST//////////////
    const UnSavePost = async (item) => {
      var user = await AsyncStorage.getItem('Userid')
      axios({
        method: 'GET',
        url: BASE_URL + 'user/unsave-hub?hubId=' + item + '&userId=' + user,
  
      })
        .then(async function (response) {
          console.log("response unlike user", JSON.stringify(response.data))
          HomePosts()
        })
        .catch(function (error) {
          if (error) {
            console.log('Issue in Appoinments Acceptence')
          }
  
          console.log("error", error)
        })
    }
  const getuserid = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    setSaveuserid(user)
    setlikeuserid(user)
  }
  const [likeuserid, setlikeuserid] = useState()

  ////////////////////add likes//////////////
  const likePost = async (item) => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user,item)
    axios({
      method: 'POST',
      url: BASE_URL + 'user/add-hub-like',
      data: {
        hubId: item,
        LikedById: user,
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        HomePosts()
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }
  ////////////////////add likes//////////////
  const UnlikePost = async (item) => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user,item)
    axios({
      method: 'GET',
      url: BASE_URL + 'user/unlike-hub-user?userId=' + user+ '&hubId='+item,
    })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))
        HomePosts()
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }
  const renderItem = ({ item }) => (

    <View style={styles.inputview}>
      <View style={styles.postcard}>
        <View style={styles.mainusercontainer}>
          <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={styles.userimageview}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile', { item: 'home', id: item.userId._id })}>
                <Image
                  source={{ uri: item.userImage }}
                  style={styles.userimage}
                  resizeMode='contain'
                />
              </TouchableOpacity>

            </View>
            <View style={{ marginLeft: wp(2) }}>
              <Text style={styles.usermaintext}>{item.userName}</Text>
              {data === '' ? <Text style={styles.usertime}>{item.TimePosted.substring(15, 24)}</Text>
                : <View></View>}

            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: wp(2) }}>
            <BadgeView
              title={item.PostType}
            />
          </View>

          <View style={[styles.iconview, { marginLeft: wp(3) }]}>

            {data[0] != '' ?

              item.SavedBy.find(item => item === saveuserid) === saveuserid ?
                <TouchableOpacity onPress={() => UnSavePost(item._id)}>
                  <Image
                    source={require('../../../assets/Homeimages/orangestart.png')}
                    style={{ width: wp(5), height: hp(5) }}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
               :
                <TouchableOpacity onPress={() => SavePost(item._id)}>
                  <Image
                    source={require('../../../assets/Homeimages/whitestar.png')}
                    style={{ width: wp(5), height: hp(5) }}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
              :
              <View></View>
            }

          </View>


        </View>
        <View style={{ marginLeft: 15, marginBottom: 10 }}>
          <Text style={styles.postdesc}>{item.Title}</Text>
        </View>

        <View style={styles.postpiccontainer}>

          <Image
            source={{ uri: item.thumbnail }}
            style={styles.postpic}
            resizeMode='contain'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <View style={{
            flexDirection: "row", justifyContent: "space-around",
            paddingHorizontal: 0, width: 100, marginBottom: 10,
            //backgroundColor:'yellow'
          }}>
                        {data[0] != '' ?

item.LikedBy.find(item => item === saveuserid) === saveuserid ?
  <TouchableOpacity onPress={() => UnlikePost(item._id)}>
            <View style={[styles.iconview, { marginLeft: 30 }]}>
              <Image
                source={require('../../../assets/socialicons/thumbsup.png')}
                style={{ width: 50, height: 20 }}
                resizeMode='contain'
              />
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => likePost(item._id)}>
            <View style={[styles.iconview, { marginLeft: 30 }]}>
              <Image
                source={require('../../../assets/socialicons/thumbsup.png')}
                style={{ width: 50, height: 20 }}
                resizeMode='contain'
              />
            </View>
            </TouchableOpacity>
            :
            null}
            <TouchableOpacity onPress={()=>navigation.navigate('PostRecomendations',item._id)}>
            <View style={[styles.iconview, { marginLeft: 25 }]}>
              <Image
                source={require('../../../assets/socialicons/chated.png')}
                style={{ width: 80, height: 20 }}
                resizeMode='contain'
              />
            </View>   
            </TouchableOpacity>

          </View>
          <View style={{
            flexDirection: "row", justifyContent: 'space-between',
            marginRight: 20
            //backgroundColor:'yellow'
          }}>
            <FlatList
              data={item.userSocialLinks}
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
        <TouchableOpacity onPress={() => navigation.navigate('Recomendations')}>
          <View style={{ marginLeft: 20, marginBottom: 10 }}>
            <Text style={styles.recomend}>{item.TotalRecommendations} Recommendations</Text>
          </View>
          <View style={{ marginLeft: 20, marginBottom: wp(5) }}>
            <Text style={styles.recomend}>{item.TotalLikes} Likes</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>

  );
  const sociallinksrenderItem = ({ item }) => (
    <View style={styles.iconview}>
      <Image
        //source={require('../../../assets/socialicons/facebook.png')}
        source={{ uri: BASE_URL + item.icon }}
        style={{ width:wp(8), height:hp(8) }}
        resizeMode='contain'
      />
    </View>
  );
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
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
              <Text style={Authtextstyles.maintext}>Home</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../../../assets/Homeimages/search.png')}
              style={{ width: 50, height: 20 }}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={predata}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />

      </ScrollView>
    </SafeAreaView>

  )
};

export default SearchResults;