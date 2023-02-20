import * as React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

/////////////////app components/////////////
import BadgeView from '../BadgeView/BadgeView';

///////////////app styles////////////////
import styles from './styles';
//import Hubspostheaderstyles from '../../utills/GlobalStyles/hubspostheaderstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomPostCard = (props) => {
  console.log('props', props)

  React.useEffect(() => {
    getuserid()
  }, []);

  ////////////////savepost STATES////////////
  const [saveuserid, setSaveuserid] = React.useState()
  const getuserid = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    setSaveuserid(user)
  }
  ////////////////////SAVE POST//////////////
  const SavePost = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user, props.hubpostid)

    axios({
      method: 'POST',
      url: BASE_URL + 'user/add-saved-item',
      data: {
        userId: user,
        hubId: props.hubpostid,
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        if (response.data === '') {
          props.getfunction
        }


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
    console.log("userid:", user, props.hubpostid)
    axios({
      method: 'GET',
      url: BASE_URL + 'user/unsave-hub?hubId=' + props.hubpostid + '&userId=' + user,

    })
      .then(async function (response) {
        console.log("response unlike user", JSON.stringify(response.data))
        if (response.data === '') {
          props.getfunction
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }
  return (
    <View style={styles.inputview}>
      <View style={styles.postcard}>
        <View style={styles.mainusercontainer}>
          <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={styles.userimageview}>
              <Image
                source={{ uri: props.userimage }}
                style={styles.userimage}
                resizeMode='contain'
              />
            </View>
            <View style={{ marginLeft: wp(3) }}>
              <Text style={styles.usermaintext}>{props.username}</Text>
              {/* <Text style={styles.usertime}>{props.postedtime.substring(15,24)}</Text> */}
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: wp(8) }}>
            <BadgeView
              title={props.posttype}
            />
          </View>
          {props.usertype === "activeuser" ?
            <View></View> :
            <View style={[styles.iconview, { marginLeft: wp(3) }]}>
              {/* <Image
                                                       source={require('../../assets/Homeimages/orangestart.png')}
                                                       style={{width:wp(5),height:hp(5)}}
                                                           resizeMode='contain'
                                                       /> */}
              {props.savedBy === saveuserid ?
                <TouchableOpacity onPress={() => UnSavePost()}>
                  <Image
                    source={require('../../assets/Homeimages/orangestart.png')}
                    style={{ width: wp(5), height: hp(5) }}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => SavePost()}>
                  <Image
                    source={require('../../assets/Homeimages/whitestar.png')}
                    style={{ width: wp(5), height: hp(5) }}
                    resizeMode='contain'
                  />
                </TouchableOpacity>

              }
            </View>

          }

        </View>
        <View style={{ marginLeft: 30, marginBottom: 10 }}>
          <Text style={styles.postdesc}>{props.cardtype} :</Text>
          <Text style={styles.postdesc}>{props.postdesc}</Text>
        </View>
        <View style={styles.postpiccontainer}>
          <TouchableOpacity onPress={props.onvideoclick}>
            <Image
              source={{ uri: props.postthumbnail }}
              //source={require('../../assets/Homeimages/postpic.png')}
              style={styles.postpic}
              resizeMode='cover'
            />
          </TouchableOpacity>

        </View>
        {props.cardtype === 'Question' ?
          <View style={{
            flexDirection: 'row', marginLeft: 20,
            marginRight: 20,
            justifyContent: 'space-between'
          }}>

            <BadgeView
              title={props.reason}
            />
            <BadgeView
              title={props.reason}
            />
            <BadgeView
              title={props.reason}
            />
            <BadgeView
              title={props.reason}
            />
          </View> :
          props.cardtype === 'Project' ?
            <View style={{ marginLeft: 30, marginBottom: 10 }}>
              <Text style={styles.postdesc}>{props.projectTitle}</Text>
              <Text style={[styles.postdesc, { color: Colors.Appthemecolor }]}>The Team</Text>
              <Text style={styles.postdesc}>{props.projectMembers}</Text>
            </View>
            : null}
        <View style={{ marginLeft: wp(10), marginTop: hp(2), marginBottom: hp(3) }}>
          <Text style={styles.recomend}>
            {props.hashtags}
          </Text>
        </View>

      </View>
    </View>
  )
};

export default CustomPostCard;