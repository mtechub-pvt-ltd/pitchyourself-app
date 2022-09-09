import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList, RefreshControl,ScrollView,
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
  
    //////////////////////////app api/////////////////////////
    import axios from 'axios';
    import { BASE_URL } from '../../../utills/ApiRootUrl';
      import AsyncStorage from '@react-native-async-storage/async-storage';


const SearchResults = ({ navigation,route }) => {

console.log("search data from previous screen:",route.params)

  const[star,setstar]=useState(false)
  //make toggleview
  
  const toggleview=()=>
  {
    if(star=== false)
    {
      setstar(true)
    }
    else{
      setstar(false)
    }
  }

  ///////////////refresh state///////////////
  const [pagecount, setpagecount] = React.useState(18);

    //increment function
    const incrementCount = (props) => {
      // Update state with incremented value
      console.log("is here:",props)
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
    console.log("count page here:",pagecount)
    HomePosts()
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);


/////////////////homepost state////////////
const[data,setdata]=useState('')
    ////////////////////UNSAVE POST//////////////
    const HomePosts=async() => {
      var user = await AsyncStorage.getItem('Userid')
      console.log("userid:", user)
      axios({
        method: 'GET',
        url: BASE_URL+'user/get-all-hubs-page?page='+pagecount+'&limit=10',
      })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))  
        setdata(response.data.results)

      })
      .catch(function (error) {
        if(error)
      {    
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
    const getuserid = async () => {
      var user = await AsyncStorage.getItem('Userid')
      console.log("userid:", user)
      setSaveuserid(user)
    }
    const renderItem = ({ item }) => (

<View style={styles.inputview}>
<View style={styles.postcard}>
<View style={styles.mainusercontainer}>
    <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>
    <View style={styles.userimageview}>
  <TouchableOpacity onPress={()=>navigation.navigate('Profile',{item:'home',id:item.userId._id})}>
  <Image
                 source={{uri: item.userImage}}
                 style={styles.userimage}
                    resizeMode='contain'
                />
  </TouchableOpacity>
    
                </View>
                <View style={{ marginLeft: wp(3) }}>
                <Text style={styles.usermaintext}>{item.userName}</Text>
                {data === '' ? <Text style={styles.usertime}>{item.TimePosted.substring(15,24)}</Text>
                : <View></View>}
              
                </View>
                </View>
                <View style={{ flexDirection: "row", marginLeft: wp(8) }}>
            <BadgeView
              title={item.PostType}
            />
          </View>

            <View style={[styles.iconview, { marginLeft: wp(3) }]}>
              {/* <Image
                                                       source={require('../../assets/Homeimages/orangestart.png')}
                                                       style={{width:wp(5),height:hp(5)}}
                                                           resizeMode='contain'
                                                       /> */}
                                                         {data[0] != '' ?
                                                        
                                                        item.SavedBy.find(item => item === saveuserid) === saveuserid ?
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
                :
 <View></View>
              }
     
            </View>

         
                 </View>
                 <View style={{marginLeft:15,marginBottom:10}}>
                 <Text style={styles.postdesc}>{item.Title}</Text>
                 </View>
              
                 <View style={styles.postpiccontainer}>
      
                <Image
                 source={{uri: item.thumbnail}}
                 style={styles.postpic}
                    resizeMode='contain'
                />
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",justifyContent:"space-around",
                paddingHorizontal:0,width:100,marginBottom:10,
                //backgroundColor:'yellow'
                }}>
   <View   style={[styles.iconview,{marginLeft:30}]}>
  <Image
                      source={require('../../../assets/socialicons/thumbsup.png')}
                      style={{width:50,height:20}}
                    resizeMode='contain'
                />
     </View>
     <View   style={[styles.iconview,{marginLeft:25}]}>
  <Image
                      source={require('../../../assets/socialicons/chated.png')}
                      style={{width:80,height:20}}
                    resizeMode='contain'
                />
     </View>
                         </View>
                         <View style={{flexDirection:"row",justifyContent:'space-between',
               marginRight:20
                //backgroundColor:'yellow'
                }}>
                                  {/* <FlatList
        data={item.userId.UserProfileLinkId}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      /> */}
   <View   style={styles.iconview}>
  <Image
                      source={require('../../../assets/socialicons/facebook.png')}
                      style={{width:80,height:20}}
                    resizeMode='contain'
                />
     </View>
              
     <View   style={styles.iconview}>
  <Image
                      source={require('../../../assets/socialicons/linkedin.png')}
                      style={{width:80,height:20}}
                    resizeMode='contain'
                />
     </View>
     <View   style={styles.iconview}>
  <Image
                      source={require('../../../assets/socialicons/instagram.png')}
                      style={{width:80,height:20}}
                    resizeMode='contain'
                />
     </View>
     <View   style={styles.iconview}>
  <Image
                      source={require('../../../assets/socialicons/share.png')}
                      style={{width:80,height:20}}
                    resizeMode='contain'
                />
     </View>
                </View>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Recomendations')}>
                <View style={{marginLeft:20,marginBottom:10}}>
                <Text style={styles.recomend}>30 Recommendations</Text>
                </View>
                <View style={{marginLeft:20,marginBottom:wp(5)}}>
                <Text style={styles.recomend}>{item.TotalLikes} Likes</Text>
                </View>
                </TouchableOpacity>
         
 

        </View>
    
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
          <View style={{flexDirection:'row',justifyContent:'space-between',
          alignItems:'center',marginTop:20
        //backgroundColor:'red'
        }}>
      
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
                   source={require('../../../assets/Homeimages/menu.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Home</Text>
                 </View>
            </View>
         
     
     
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
                   source={require('../../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
                </TouchableOpacity>
          </View>
          <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />
     <TouchableOpacity onPress={()=>navigation.navigate('CreateVideo')}
     style={{alignItems:"center",justifyContent:"center",alignSelf:"center",
     marginTop:hp('93%'),
     //backgroundColor:'red',
   position:"absolute"}}
     >
     <View style={{alignItems:"center",justifyContent:"center",alignSelf:"center",
     height:40,width:40,
        marginTop:hp('93%'),backgroundColor:"rgba(68, 77, 110, 1)",borderRadius:20,
        //backgroundColor:'red',
      position:"absolute"}}>
        <Image
                      source={require('../../../assets/Homeimages/add.png')}
                      style={{width:80,height:20}}
                    resizeMode='contain'
                />
        </View>
     </TouchableOpacity>
     </ScrollView>
    </SafeAreaView>

  )
};

export default SearchResults;