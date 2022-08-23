import React from 'react';
import {View,Text,TouchableOpacity,Modal} from 'react-native';

//////////////////app styles///////////////////
import styles from './styles';

const CustomModal = (props) => {
    return(

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

    )
};

export default CustomModal;