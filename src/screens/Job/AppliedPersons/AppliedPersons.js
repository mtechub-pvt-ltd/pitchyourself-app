import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList, ImageBackground,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////app components/////////////
import CustomModal from '../../../components/Modal/CustomModal';
///////////////app styles///////////////
import styles from './styles';
import videothumbnailstyles from '../../../utills/GlobalStyles/videothumbnailstyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setthumbnails } from '../../../redux/actions';


const AppliedPersons = ({ navigation, route }) => {
  console.log('jobs:', route.params)

        //Modal States
        const [modalVisible, setModalVisible] = useState(false);

  /////////////////Applied Jobs state////////////
  const [applieddata, setapplieddata] = useState('')

  ////////////////////Job Applied Persons Data//////////////
  const JobAppliedPersons = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    axios({
      method: 'GET',
      url: BASE_URL + 'user/get-job-applicants?hubId=' + route.params.id,
    })
      .then(async function (response) {
        console.log("response applied user", JSON.stringify(response.data))
     var data =await response.data
         setapplieddata(data)
      })
      .catch(function (error) {
        if (error) {
          console.log('no dataa found')
        }
        console.log("error", error)
      })
  }

  useEffect(() => {
    JobAppliedPersons()

  }, []);

  ////////////////////ChangeStatu User//////////////
  const ChangeStatus = async (item) => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user,item)
    console.log('here......')
    axios({
      method: 'PUT',
      url: BASE_URL + 'user/change-status-job',
      data: {
_id:user,
Status:item
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        setModalVisible(true)
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }

  const postedjobrenderItems = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('JobDetail', { item: 'Applied' })}>
      <View style={styles.card}>
        <View style={styles.postcard}>
        <TouchableOpacity
            style={videothumbnailstyles.postpiccontainer}
            onPress={() => { navigation.navigate('VideoPlayer', { playvideo: item.hubId.Video }) }}>
            <ImageBackground
              source={{ uri: item.thumbnail }}
              style={videothumbnailstyles.postpic}
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
          <View style={styles.mainusercontainer}>
          <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={styles.userimageview}>
              <TouchableOpacity 
              // onPress={() => 
              //   item.userProfileVideoId[0].hidden == false?
              //   navigation.navigate('Profile', { item: 'home', id: item.userId._id })
              // :
              // null 
              // }
              >
                <Image
                  source={{ uri: item.userId.image }}
                  style={styles.userimage}
                  resizeMode='contain'
                />
              </TouchableOpacity>

            </View>
            <View style={{ marginLeft: wp(3) }}>
              <Text style={styles.usermaintext}>{item.userId.name}</Text>

            </View>

          </View>
          <View style={{width:wp(25)}}>
              <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold' }}>Date Applied</Text>
              <Text style={{ fontSize: hp(1.5), width: wp(30), color: '#1B1B1B' }}>00/00/0000
              </Text>
            </View>
          </View>
          {/* <View style={{ marginHorizontal: wp(5), marginBottom: hp(1) }}>
            <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold' }}>Job Title</Text>
            <Text style={styles.recomend}>Lorem ipsum dolor sit amet,
              consetetur sadipscing Lorem ipsum dolor sit amet,
              consetetur sadipscing  </Text>
          </View> */}


          {/* <View style={{
            flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', marginBottom: hp(2),
            marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold' }}>User Applied</Text>
              <Text style={{ fontSize: hp(1.5), width: wp(45), color: '#1B1B1B' }}>Lorem ipsum dolor sit amet,
                consetetur sadipscing</Text>
            </View>
   
          </View> */}
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(5)}}>
          <View  style={styles.ApprovedView}>
        <TouchableOpacity 
        onPress={()=> ChangeStatus('Approved')}>
        <Text style={styles.Pendingtext}>Approved</Text>
        </TouchableOpacity>
    </View>
    <View  style={styles.ApprovedView}>
        <TouchableOpacity 
        onPress={()=> ChangeStatus('DisApproved')}>
        <Text style={styles.Pendingtext}>Disapproved</Text>
        </TouchableOpacity>
    </View>
          </View>


        </View>


      </View>
    </TouchableOpacity>
  );


  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', marginTop: 20
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
            <Text style={Authtextstyles.maintext}>Job Title</Text>
          </View>
        </View>
      </View>
<View style={{alignItems:'center',marginTop:hp(2),marginLeft:wp(8)}}>
<Text style={styles.recomend}>Lorem ipsum dolor sit amet,
              consetetur sadipscing Lorem ipsum dolor sit amet,
              consetetur sadipscing  </Text>

</View>



          <View style={styles.inputview}>
            <FlatList
              data={applieddata}
              renderItem={postedjobrenderItems}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />

          </View>


          <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={       <Image
                  source={require('../../../assets/Icons/sucess.png')}
                     style={styles.sucessimage}
                     resizeMode='contain'
                 />}
              text={'Successful'}
          buttontext={'OK'}
 onPress={()=> {setModalVisible(false)}}
                /> 
    </SafeAreaView>

  )
};

export default AppliedPersons;