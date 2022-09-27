import React from 'react';
import {View,Text,TouchableOpacity,Modal,Image} from 'react-native';

////////////////app icons//////////////////
import Icon from 'react-native-vector-icons/MaterialIcons';

///////////////////app components///////////////
import CustomModal from '../Modal/CustomModal';

//////////////////app styles///////////////////
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ReportModal = (props) => {
console.log("props here in modal:",props)

    //Modal States
    const [modalVisible, setModalVisible] = React.useState(false);

    /////////////report reason//////////////
    const [reason, setReason] = React.useState(false);

  ////////////////////Report User//////////////
  const ReportUser = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user,reason)
    console.log('here......')
    axios({
      method: 'POST',
      url: BASE_URL + 'user/create-report',
      data: {
        userProfileId: props.reporteduser,
        userPostId:props.reportedpost,
        reportReason: reason,
        reportedById: user
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        props.CloseModal
        setModalVisible(true)
      })
      .catch(function (error) {
        if (error) {
          console.log('Issue in Appoinments Acceptence')
        }

        console.log("error", error)
      })
  }

    ////////////////////Report User//////////////
    const ReportPost = async () => {
        var user = await AsyncStorage.getItem('Userid')
        console.log("userid:", user)
        console.log('here......')
        axios({
          method: 'POST',
          url: BASE_URL + 'user/create-report',
          data: {
            userProfileId:'',
            userPostId: props.reportedpost,
            reportReason: reason,
            reportedById: user
          },
        })
          .then(async function (response) {
            console.log("response", JSON.stringify(response.data))
            props.CloseModal
            setModalVisible(true)
          })
          .catch(function (error) {
            if (error) {
              console.log('Issue in Appoinments Acceptence')
            }
    
            console.log("error", error)
          })
      }

    return(

        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={props.CloseModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

      
            <View style={{marginBottom:15,
              alignSelf:'center',marginTop:hp(3)}}>
                       <Text style={styles.maintext}>
                            {props.text}</Text>
              </View>
              <View style={{marginBottom:15,
              alignSelf:'center',marginTop:hp(3)}}>
                  <TouchableOpacity onPress={()=> setReason('Inappropriate Content')}>
                       <Text style={styles.contenttext}>
                       Inappropriate Content</Text>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=> setReason('Anonymous User')}>
                       <Text style={styles.contenttext}>
                       Anonymous User</Text>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=> setReason('Inappropriate Content')}>
                       <Text style={styles.contenttext}>
                       Inappropriate Content</Text>
                       </TouchableOpacity>
              </View>
    <View  style={styles.ApprovedView}>
        <TouchableOpacity 
        onPress={()=> ReportUser()}>
        <Text style={styles.Pendingtext}>{props.buttontext}</Text>
        </TouchableOpacity>
    </View>

            </View>
          </View>
          <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={       <Image
                  source={require('../../assets/Icons/sucess.png')}
                     style={styles.sucessimage}
                     resizeMode='contain'
                 />}
              text={'User Sucessfully Reported'}
          buttontext={'Ok'}
 onPress={()=> {setModalVisible(false)}}
                /> 
        </Modal>

    )
};

export default ReportModal;