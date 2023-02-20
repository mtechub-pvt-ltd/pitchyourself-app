import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,FlatList,
    Image, View, Text, TouchableOpacity, 
} from 'react-native';

/////////////////app cmponents////////////
import CustomPostCard from '../../components/PostCard/CustomPostCard';

///////////////////app styles///////////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

    //////////////////////////app api/////////////////////////
    import axios from 'axios';
    import { BASE_URL } from '../../utills/ApiRootUrl';
      import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedItems = ({ navigation }) => {


/////////////////homepost state////////////
const[data,setdata]=useState([])
    ////////////////////UNSAVE POST//////////////
    const HomePosts=async() => {
      var user = await AsyncStorage.getItem('Userid')
      axios({
        method: 'GET',
        url: BASE_URL+'user/get-all-user-saved-hubs?userId='+user,
      })
      .then(async function (response) {
        console.log("response savedposts user", JSON.stringify(response.data))  
        setdata(response.data)
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
      //onRefresh()
    }, []);
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
onPress={()=>
{  
  {
    item.hubId.PostType === 'post'?
navigation.navigate('PostDetail',{id:item.hubId._id})
:
item.hubId.PostType === 'project'?
navigation.navigate('ProjectDetail',{id:item.hubId._id})
:
item.hubId.PostType === 'job'?
navigation.navigate('JobDetail',{id:item.hubId._id})
:
item.hubId.PostType === 'Question'?
navigation.navigate('QuestionDetail',{id:item.hubId._id})
:null
}
}
}>
      <CustomPostCard
      cardtype={'Save'}
      username={item.hubId.userName}
      userimage={item.hubId.userImage}
      postedtime={item.hubId.TimePosted}
      posttype={item.hubId.PostType}
      postdesc={item.hubId.Title}
      postthumbnail={item.hubId.thumbnail}
      //reason={reason}
      hashtags={"#"+item.hubId.HashtagHub}
      savedBy={item.SavedBy}
      hubpostid={item._id}
      getfunction={()=>HomePosts()}
    />
</TouchableOpacity>
    );
  return (

    <SafeAreaView style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'space-between',
          alignItems:'center',marginTop:20
        //backgroundColor:'red'
        }}>
      
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
                   source={require('../../assets/Homeimages/menu.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Saved Items</Text>
                 </View>
            </View>
          <TouchableOpacity onPress={() => console.log('seqarch')}>
          <Image
                   source={require('../../assets/Homeimages/search.png')}
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
    </SafeAreaView>

  )
};

export default SavedItems;