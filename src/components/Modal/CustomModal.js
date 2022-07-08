import React from 'react';
import {View,Text,TouchableOpacity,Modal,Image} from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const CustomModal = (props) => {
    console.log("sheet",props)
    return(
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={props.CloseModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
      
{props.Icon}
  
              <View style={{justifyContent:'center', 
              alignItems:'center',marginBottom:15,
              alignSelf:'center'}}>
                       <Text style={styles.modaltext}>
                            {props.text}</Text>
              </View>
       

    <View  style={styles.ApprovedView}>
        <TouchableOpacity 
        onPress={props.onPress}>
        <Text style={styles.Pendingtext}>{props.buttontext}</Text>
        </TouchableOpacity>
    </View>

            </View>
          </View>
        </Modal>
        </View>
    )
};

export default CustomModal;