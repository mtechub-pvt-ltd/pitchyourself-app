
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

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58694a0f-3da13-471f-bd96-147671e29d72',
        name: 'Michael Bruno',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad43ybb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c625-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58694a0f-3hf71-471f-bd96-145571e29d72',
        name: 'Michael Bruno',
    },
    {
        id: '3ae48afc-c675-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58904a0f-3hf71-471f-bd96-145571l29d72',
        name: 'Michael Bruno',
    },
    {
        id: '589744a0f-3hf71-471f-bd96-145571l29d72',
        name: 'Michael Bruno',
    },
];


const Recomendations = ({ navigation }) => {
 //faltlist state
 const [DATA, setdata]=useState()
 const [totalrecomendations, setotalrecomendations] = useState()

 //get DoctorRequests api calling
const GetProfileRecomendations= async() => {
 //var user= await AsyncStorage.getItem('Userid')
 axios({
   method: 'GET',
   url:BASE_URL+'user/get-profile-comments?userId=6306071865e01ba9030410aa'
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

        console.log('here......',comments)
        axios({
          method: 'POST',         
          url: BASE_URL+'user/create-profile-comment',
          data:{
            userId:'6306071865e01ba9030410aa',
            CommenterId: '6306071865e01ba9030410aa',
            Comment: comments
          },
        })
        .then(async function (response) {
          console.log("response", JSON.stringify(response.data)) 
          GetProfileRecomendations() 
          alert('Appointment Accepted')

        })
        .catch(function (error) {
          if(error)
        {    
           alert('Issue in Appoinments Acceptence')

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
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
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
                                    source={require('../../assets/images/user.png')}
                                    //source={{uri: item.image}}
                                    style={styles.userimage}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{marginLeft:wp(3)}}>
                                <Text style={{ fontSize:hp(1.8), color: '#1B1B1B', fontWeight: '700' }}>Michael Bruno</Text>
                                <Text style={[styles.recomend, { color: '#7A8FA6' }]}>{item.Comment}</Text>
                            </View>
                            <View style={{marginLeft:wp(5),marginRight:wp(5)}}>
                                <Image
                                    source={require('../../assets/images/like.png')}
                                    style={styles.likeimage}
                                    resizeMode='contain'
                                />
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
        </SafeAreaView>

    )
};

export default Recomendations;