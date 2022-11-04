
import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, ScrollView, FlatList, TextInput,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////app components//////////////////////
import CustomButtonhere from '../../components/Button/CustomButton';
import OutlineButton from '../../components/Button/OutlineButton';
import CustomModal from '../../components/Modal/CustomModal';

///////////////app pakages//////////////
import RBSheet from "react-native-raw-bottom-sheet";
import { Divider, Switch } from 'react-native-paper';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

////////////////app styles/////////////////
import styles from './styles';
import Multilineinputstyles from '../../utills/GlobalStyles/Multilineinputstyle';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({ navigation }) => {


  ////////////////////change status////////////////
  const privatestatus = async () => {
    var user = await AsyncStorage.getItem('Userid')
    var userstatus = await AsyncStorage.getItem('UserProfileStatus')
    console.log("userid private:", user, userstatus)

    axios({
      method: 'PUT',
      url: BASE_URL + 'user/change-privacy-user',
      data: {
        _id: user,

      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        setPrivateModalVisible(true)
      })
      .catch(function (error) {
        setModalVisible(true)
        console.log("error", error)
      })
  }

  const publicstatus = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)

    axios({
      method: 'PUT',
      url: BASE_URL + 'user/change-privacy-user-public',
      data: {
        _id: user,

      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        setPublicModalVisible(true)
      })
      .catch(function (error) {
        setModalVisible(true)
        console.log("error", error)
      })
  }

  //Modal States
  const [modalVisiblepublic, setPublicModalVisible] = useState(false);
  const [modalVisibleprivate, setPrivateModalVisible] = useState(false);

  //////////////toggle states////////////
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  //////////////////optipon1/////////////
  const [isoption1SwitchOn, setIsOption1SwitchOn] = React.useState(false);
  const onOption1ToggleSwitch = () => {
    if (isoption1SwitchOn === false) {
      privatestatus()
      setIsOption1SwitchOn(true)
    }
    else {
      publicstatus()
      setIsOption1SwitchOn(false)
    }
  }

  //////////////////optipon1/////////////
  const [isoption2SwitchOn, setIsOption2SwitchOn] = React.useState(false);
  const onOption2ToggleSwitch = () => setIsOption2SwitchOn(!isoption2SwitchOn);

  //////////////////optipon1/////////////
  const [isoption3SwitchOn, setIsOption3SwitchOn] = React.useState(false);
  const onOption3ToggleSwitch = () => setIsOption3SwitchOn(!isoption3SwitchOn);

  //////////////////optipon1/////////////
  const [isoption4SwitchOn, setIsOption4SwitchOn] = React.useState(false);
  const onOption4ToggleSwitch = () => setIsOption4SwitchOn(!isoption4SwitchOn);



  ////////////////btmrefrence//////////////////
  const refhelpRBSheet = useRef();

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  ///////////data textfields states///////////
  const detailclear = useRef()
  const cleardetail = () => {
    detailclear.current.clear()
    refhelpRBSheet.current.close()
  }
  /////////////////Helpquery state////////////////
  const [detail, setDetail] = React.useState(false);

  //////////////////////Api Calling/////////////////
  const AddHelpQuery = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)

    axios({
      method: 'POST',
      url: BASE_URL + 'user/create-helpquery',
      data: {
        userId: user,
        details: detail
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        setModalVisible(true)
      })
      .catch(function (error) {
        setModalVisible(true)
        console.log("error", error)
      })
  }

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  const logout=async()=>
  {
    await AsyncStorage.removeItem('Userid');
    await AsyncStorage.removeItem('Userdata');
    await AsyncStorage.removeItem('UserEmail');
    await AsyncStorage.removeItem('UserPass');
    props.navigation.navigate('Login')
  }
  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', marginTop: 20
        //backgroundColor:'red'
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../../assets/Homeimages/menu.png')}
              style={Inputstyles.inputicons}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <View style={{ marginLeft: "12%" }}>
            <Text style={Authtextstyles.maintext}>Settings</Text>
          </View>
        </View>
        {/* <TouchableOpacity onPress={() => console.log('seqarch')}>
          <Image
            source={require('../../assets/Homeimages/search.png')}
            style={{ width: 50, height: 20 }}
            resizeMode='contain'
          />
        </TouchableOpacity> */}
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 20, marginTop: 40, marginHorizontal: 20
      }}>

        <View>
          <Text style={styles.text}>ALLOW USERS TO
            DOWNLOAD MATERIAL
          </Text>

        </View>
        <View style={{ marginLeft: 10 }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
            color={Colors.Appthemecolor} />
        </View>

      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 20, marginTop: 10, marginHorizontal: 20
      }}>

        <View>
          <Text style={styles.text}>Option 1
          </Text>

        </View>
        <View style={{ marginLeft: 110 }}>
          <Switch value={isoption1SwitchOn} onValueChange={onOption1ToggleSwitch}
            color={Colors.Appthemecolor} />
        </View>

      </View>
      <View style={{
        flexDirection: "row", justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 20, marginTop: 0, marginHorizontal: 20
      }}>

        <View>
          <Text style={styles.text}>Option 2
          </Text>

        </View>
        <View style={{ marginLeft: 110 }}>
          <Switch value={isoption2SwitchOn} onValueChange={onOption2ToggleSwitch}
            color={Colors.Appthemecolor} />
        </View>

      </View>
      <View style={{
        flexDirection: "row", justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 20, marginTop: 0, marginHorizontal: 20
      }}>

        <View>
          <Text style={styles.text}>Option 3
          </Text>

        </View>
        <View style={{ marginLeft: 110 }}>
          <Switch value={isoption3SwitchOn} onValueChange={onOption3ToggleSwitch}
            color={Colors.Appthemecolor} />
        </View>

      </View>
      <View style={{
        flexDirection: "row", justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 20, marginTop: 0, marginHorizontal: 20
      }}>

        <View>
          <Text style={styles.text}>Option 4
          </Text>

        </View>
        <View style={{ marginLeft: 110 }}>
          <Switch value={isoption4SwitchOn} onValueChange={onOption4ToggleSwitch}
            color={Colors.Appthemecolor} />
        </View>

      </View>
      <TouchableOpacity onPress={() => refhelpRBSheet.current.open()}>
        <View style={{
          flexDirection: "row", justifyContent: 'space-between',
          alignItems: 'center', marginBottom: 20, marginTop: 0, marginHorizontal: 20
        }}>

          <View>
            <Text style={styles.text}>Help Center
            </Text>

          </View>
          <View style={{ marginLeft: 110 }}>
            <Image
              source={require('../../assets/Icons/forward.png')}
              style={{ width: 50, height: 20 }}
              resizeMode='contain'
            />
          </View>

        </View>
      </TouchableOpacity>
      <View style={styles.buttonview}>
<CustomButtonhere
              title={'LOGOUT'}
              widthset={'60%'}
              onPress={() => logout()}
            />
</View>

      <RBSheet

        //sstyle={{flex:1}}
        ref={refhelpRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        openDuration={50}
        closeDuration={50}
        animationType="fade"

        //height={500}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: "grey"
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: hp('52%')
          }
        }}

      >

        <View style={{
          flexDirection: 'row', justifyContent: "space-between",
          marginHorizontal: 20
        }}>
          <Text style={[Authtextstyles.maintext, { marginBottom: 10 }]}>Help Center</Text>
          <TouchableOpacity onPress={() => refhelpRBSheet.current.close()}>

            <Image
              source={require('../../assets/Icons/close.png')}
              style={Inputstyles.inputicons}
              resizeMode='contain'
            />

          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row', justifyContent: "space-around", alignItems: "center",
          marginHorizontal: wp('5%')
        }}>

          <View style={[Multilineinputstyles.action, { height: wp('45%'), marginTop: wp('3%') }]}>
            <TextInput
              ref={detailclear}
              placeholder="Add Your Detail Here"
              onChangeText={setDetail}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}
              style={Multilineinputstyles.input}
            />

          </View>
        </View>

        <View style={styles.buttonview}>
          <View style={{
            flex: 0.5,
            //backgroundColor:'red'
          }}>
            <OutlineButton
              widthset={'30%'}
              title='CANCEL'
              onPress={() => cleardetail()}
            />
          </View>
          <View style={{
            flex: 0.5, alignSelf: 'flex-end',
            //backgroundColor:'red'
          }}>
            <CustomButtonhere
              widthset={'30%'}
              title='APPROVE'
              onPress={() => AddHelpQuery()}
            />
          </View>
        </View>
      </RBSheet>
      <CustomModal
        modalVisible={modalVisible}
        CloseModal={() => setModalVisible(false)}
        Icon={<Image
          source={require('../../assets/Icons/sucess.png')}
          style={styles.sucessimage}
          resizeMode='contain'
        />}
        text={'Successfully Submitted Query'}
        buttontext={'OK'}
        onPress={() => { setModalVisible(false), refhelpRBSheet.current.close() }}
      />
      <CustomModal
        modalVisible={modalVisibleprivate}
        CloseModal={() => setPrivateModalVisible(false)}
        Icon={<Image
          source={require('../../assets/Icons/sucess.png')}
          style={styles.sucessimage}
          resizeMode='contain'
        />}
        text={'Profile Status Private'}
        buttontext={'OK'}
        onPress={() => { setPrivateModalVisible(false) }}
      />
      <CustomModal
        modalVisible={modalVisiblepublic}
        CloseModal={() => setPublicModalVisible(false)}
        Icon={<Image
          source={require('../../assets/Icons/sucess.png')}
          style={styles.sucessimage}
          resizeMode='contain'
        />}
        text={'Profiel Status Public'}
        buttontext={'OK'}
        onPress={() => { setPublicModalVisible(false) }}
      />
      <CustomModal
        modalVisible={modalVisible1}
        CloseModal={() => setModalVisible1(false)}
        Icon={<AntDesign
          name="closecircle"
          color={'red'}
          size={60}
        />}
        text={'Problem in Query Submission'}
        buttontext={'OK'}
        onPress={() => { setModalVisible1(false) }}
      />
    </SafeAreaView>

  )
};

export default Settings;