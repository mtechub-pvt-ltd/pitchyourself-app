import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList, ImageBackground,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////app components/////////////
import TabsBadgeView from '../../../components/TabsBadgeView/TabsBadgeView';
import BadgeView from '../../../components/BadgeView/BadgeView';

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


const Jobs = ({ navigation, route }) => {
  console.log('jobs:', route.params)
  //status states
  const [appoinments, setappointments] = useState(true)
  const [requests, setrequests] = useState(false)

  /////////////////posted job state////////////
  const [posteddata, setposteddata] = useState('')

  ////////////////////POsted Jobs DATA//////////////
  const Postedjobs = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    axios({
      method: 'GET',
      url: BASE_URL + 'user/get-user-posted-jobs?userId=' +user,
    })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))
        setposteddata(response.data)

      })
      .catch(function (error) {
        if (error) {
          console.log('no dataa found')
        }

        console.log("error", error)
      })
  }

  /////////////////Applied Jobs state////////////
  const [applieddata, setapplieddata] = useState('')

  ////////////////////Applied Jobs Data//////////////
  const Appliedjobs = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    axios({
      method: 'GET',
      url: BASE_URL + 'user/get-user-applications?userId=' + user,
    })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))
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
    Appliedjobs()
    Postedjobs()
  }, []);
  const postedjobrenderItems = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('AppliedPersons', { item: 'Applied',id:item._id })}>
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

          <View style={{ marginHorizontal: wp(5), marginBottom: hp(1) }}>
            <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold' }}>{item.Title}</Text>
            <Text style={styles.recomend}>{item.jobDescription} </Text>
          </View>


          <View style={{
            flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', marginBottom: hp(3),
            marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold' }}>User Applied</Text>
              <Text style={{ fontSize: hp(1.5), width: wp(45), color: '#1B1B1B' }}>002</Text>
            </View>
            <View style={{width:wp(30)}}>
              <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold',textAlign:'right' }}>Date Posted</Text>
              <Text style={{ fontSize: hp(1.5), width: wp(30), color: '#1B1B1B',textAlign:'right' }}>01/06/2022
              </Text>
            </View>
          </View>
        </View>


      </View>
    </TouchableOpacity>
  );

  const appliedjobrenderItems = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('JobDetail', { itemnav: 'Applied' })}>
      {applieddata === ''?
      <Text style={{color:'black'}}>Nodata found</Text>:
      <View style={styles.card}>
        <View style={styles.postcard}>
          <TouchableOpacity
            style={videothumbnailstyles.postpiccontainer}
            onPress={() => { navigation.navigate('VideoPlayer', { playvideo: item.hubId.Video }) }}>
            <ImageBackground
              //source={{ uri: applieddata != ''?item.hubId.thumbnail : null }}
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
          <View style={{
            flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',
            marginBottom: hp(1)
          }}>

            <View style={{ width: wp(35) }}>
              <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold' }}>{applieddata != ''?item.userId:null}</Text>
              <Text style={styles.recomend}>{applieddata === ''?item.hubId.jobDescription:null}</Text>
            </View>
            <TouchableOpacity
              onPress={() => { navigation.navigate('VideoPlayer', { playvideo: item.video }) }}>
              <TabsBadgeView
                title={'My Pitch'}
                width={'30%'}
                state={true}
                type={'User'}
              />
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: "row", justifyContent: 'space-around', alignItems: 'center',
            marginBottom: 10
          }}>
            <View style={{width:wp(40)}}>
              <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold' }}>Location</Text>
              <Text style={{ fontSize: hp(1.5), width: wp(35), color: '#1B1B1B' }}>
                {applieddata === ''?item.hubId.joblocation:null}</Text>
            </View>
            <View style={{width:wp(30)}}>
              <Text style={{ fontSize: hp(2), color: '#1B1B1B', fontWeight: 'bold',textAlign:'right' }}>Date Applied</Text>
              <Text style={{ fontSize: hp(1.5), width: wp(30), color: '#1B1B1B',textAlign:'right'  }}>Lorem ipsum dolor sit amet,
              </Text>
            </View>
          </View>
        </View>


      </View>
    }

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
            <Text style={Authtextstyles.maintext}>My Jobs</Text>
          </View>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        //backgroundColor:'red'
      }}>
        <TouchableOpacity onPress={() => { setappointments(true), setrequests(false) }}>
          <TabsBadgeView
            title={'Posted'}
            width={'30%'}
            state={appoinments}
            type={'User'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setappointments(false), setrequests(true) }}>
          <TabsBadgeView
            title={'Applied'}
            width={'30%'}
            state={requests}
            type={'Job name here'}
          />
        </TouchableOpacity>

      </View>
      {
        appoinments === true ?

          <View style={styles.inputview}>
            <FlatList
              data={posteddata}
              renderItem={postedjobrenderItems}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />

          </View>

          :
          null
      }
      {
        requests === true ?
          <View style={styles.inputview}>
            <FlatList
              data={applieddata}
              renderItem={appliedjobrenderItems}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />

          </View>

          :
          null
      }

      {/* </ScrollView> */}
    </SafeAreaView>

  )
};

export default Jobs;