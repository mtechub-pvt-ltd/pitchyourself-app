import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

////////////////////app custom components//////////
import CustomModal from '../../components/Modal/CustomModal';
import BadgeView from '../../components/BadgeView/BadgeView';
import CustomButtonhere from '../../components/Button/CustomButton';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

////////////////app styles/////////////
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
  
////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setsearchresults } from '../../redux/actions';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Search = ({ navigation }) => {

  /////////////redux states///////
  const { video, links,id,thumbnails } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
        //Modal States
        const [modalVisible, setModalVisible] = useState(false);

/////////////////homepost state////////////
const[search,setSearch]=useState('')

/////////////////get person posts state////////////
const[searchresult,setSearchResult]=useState([])
    ////////////////////Search Person POST//////////////
    const SearchByPerson=async() => {
console.log('here data:',search)
      axios({
        method: 'GET',
        url: BASE_URL+'user/search-person?name='+search,
      })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data[0].userPosts))  
        if(response.data === "Wrong Data ") 
        {
          setModalVisible(true)
        }
        else{
          setSearchResult(response.data[0].userPosts)
          dispatch(setsearchresults(response.data[0].userPosts))
        }


      })
      .catch(function (error) {
        if(error)
      {    
        console.log('no dataa found')
        }
    
        console.log("error", error)
      })
    }

////////////////////Search Hashtag POST//////////////
const SearchByHashtag=async() => {
  console.log('hastag here:',search)
  var hashtag=search.substring(1)
  console.log('after removing hastag here:',hashtag)
  axios({
    method: 'GET',
    url: BASE_URL+'user/search-hub?HashtagHub='+hashtag,
  })
  .then(async function (response) {
    console.log("response unlike user", JSON.stringify(response.data)) 
    if(response.data === "Wrong Data ") 
    {
      setModalVisible(true)
    }
    else{
      setSearchResult(response.data)
      dispatch(setsearchresults(response.data))
    }
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

  }, []);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
                   source={require('../../assets/Icons/arrowback.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
                <Image
                 source={require('../../assets/Logo/logo.png')}
                    style={styles.toplogo}
                    resizeMode='contain'
                />
                   <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                   <Text style={styles.toptext}>Help</Text>
                   </TouchableOpacity>

          </View>
          <View style={Inputstyles.inputview}>

          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Search"
              onChangeText={setSearch}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
    <Image
                   source={require('../../assets/Homeimages/search.png')}
                   style={{width:wp(5.5),height:hp(6)}}
                    resizeMode='contain'
                />
          </View>
<View style={{marginBottom:10}}>
          <Text style={styles.lasttext}>I am Looking for</Text>
  
<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,
paddingHorizontal:'25%'
     }}>

       <TouchableOpacity onPress={()=> SearchByPerson()}>
       <BadgeView
             title={'PERSON'}
               />
       </TouchableOpacity>
       <TouchableOpacity onPress={()=> SearchByHashtag()}>
                 <BadgeView
             title={'HASHTAG'}
               />
                 </TouchableOpacity>
</View>
</View>

     
        </View>
    

<View style={styles.buttonview}>
<CustomButtonhere
              title={'SEARCH'}
              widthset={'35%'}
              onPress={() => navigation.navigate('SearchResults',searchresult)}
            />
</View>
<CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={  <AntDesign
                  name="closecircle"
                  color={'red'}
                  size={60}
              />}
              text={'Enter valid data'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible(false)}}
                /> 
  </ScrollView>
    </SafeAreaView>

  )
};

export default Search;