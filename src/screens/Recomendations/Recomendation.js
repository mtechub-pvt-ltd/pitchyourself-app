
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, FlatList,TextInput,
    Image, View, Text, TouchableOpacity,
} from 'react-native';

/////////////app pakages///////////////
import { Divider } from 'react-native-paper';

//////////////app styles/////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Recomendations = ({ navigation,route }) => {

console.log("previous screen",route.params)

 //faltlist state
 const [DATA, setdata]=useState()
 const [totalrecomendations, setotalrecomendations] = useState()

 //get DoctorRequests api calling
const GetProfileRecomendations= async() => {
 //var user= await AsyncStorage.getItem('Userid')
 axios({
   method: 'GET',
   url:BASE_URL+'user/get-profile-comments?userId='+route.params.id
   //+user,
 })
 .then(function (response) {
   console.log("response", JSON.stringify(response.data))
   var items=response.data.length
   setotalrecomendations(items)
   setdata(response.data)
 })
 .catch(function (error) {
   console.log("error", error)
 })
 }
    useEffect(() => {
        GetProfileRecomendations()
    }, []);

/////////////////add coments states///////////////
const [comments, setComments] = useState(new Date());

    //////////////////////add comments to profile api//////////////
    const AddComments=async() => {
         var user= await AsyncStorage.getItem('Userid')
        console.log('here......',comments,user)
        axios({
          method: 'POST',         
          url: BASE_URL+'user/create-profile-comment',
          data:{
            userId:route.params.id,
            CommenterId: user,
            Comment: comments
          },
        })
        .then(async function (response) {
          console.log("response", JSON.stringify(response.data)) 
          RecomendationNotification(response.data.userId) 
          GetProfileRecomendations() 
        console.log('Appointment Accepted')

        })
        .catch(function (error) {
          if(error)
        {    
            console.log('Issue in Appoinments Acceptence')

          }
      
          console.log("error", error)
        })
      }

                   ////////////////////Recomendation Notifications//////////////
     const RecomendationNotification = async (item) => {
      console.log('here in notification:',item)
     var user = await AsyncStorage.getItem('Userid')
     var username = await AsyncStorage.getItem('Userdata')
     var currdate= new Date().getDate() + '-' + new Date().getMonth() + 1 + '-' + new Date().getFullYear();
     console.log("date:",currdate)
     axios({
       method: 'POST',
       url: BASE_URL + 'user/create-msg',
       data: {
         from: user,
         to: item,
         msgContent:username+" Recomended on your profile "+comments,
         dateTime:currdate
       },
     })
       .then(async function (response) {
         console.log("response", JSON.stringify(response.data))
         GetProfileRecomendations()
 
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
    
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', marginTop: 30
                    //backgroundColor:'red'
                }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../assets/Icons/back.png')}
                                style={Inputstyles.inputicons}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <View style={{ marginLeft: "12%" }}>
                            <Text style={Authtextstyles.maintext}>Recommendations</Text>
                            <Text style={styles.recomend}>Lorem ipsum dolor sit amet, consetetur</Text>
                        </View>


                    </View>
                </View>
                <View style={{ marginLeft: 20, marginBottom: 10, marginTop: 20 }}>
                    <Text style={styles.recomend}>{totalrecomendations} Recommendations</Text>
                </View>
                <Divider/>
                <View style={styles.postcard}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => (

                            <View style={styles.card}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-around', 
                        alignItems: 'center',marginBottom:20 }}>
                            <View style={{}}>
                                <Image
                                    //source={require('../../assets/images/user.png')}
                                    source={{uri: item.CommenterImage}}
                                    style={styles.userimage}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{marginLeft:wp(3)}}>
                                <Text style={{ fontSize:hp(1.8), color: '#1B1B1B', fontWeight: '700' }}>{item.CommenterName}</Text>
                                <Text style={[styles.recomend, { color: '#7A8FA6' }]}>{item.Comment}</Text>
                            </View>
                            <View style={{marginLeft:wp(5),marginRight:wp(5)}}>
                                {/* <Image
                                    source={require('../../assets/images/like.png')}
                                    style={styles.likeimage}
                                    resizeMode='contain'
                                /> */}
                            </View>

                    </View>
                           
                     

                            </View>

                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />
      
                </View>
                {
                    route.params.navplace === 'Myprofile'?
                    <View></View>:
                    <View style={{flexDirection:'row',justifyContent:'space-around',
                    alignItems:'center',
               marginHorizontal:wp(5)}}>
                   <View style={[Inputstyles.action,{width:wp(70)}]}>
               <TextInput
                 placeholder="Add Comment"
                 onChangeText={setComments}
                 placeholderTextColor={Colors.inputtextcolor}
                 autoCapitalize="none"
                 style={[Inputstyles.input,{width:wp(50)}]}
               />
   
             </View>
             <TouchableOpacity onPress={()=> AddComments()}>
             <Image
                       source={require('../../assets/images/send.png')}
                       style={styles.sendimage}
                       resizeMode='contain'
                   />
             </TouchableOpacity>
      
                   </View>
      
                }
        
        </SafeAreaView>

    )
};

export default Recomendations;