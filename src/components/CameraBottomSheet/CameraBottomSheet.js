import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';


const CamerBottomSheet = (props) => {
    return(
  <RBSheet
        ref={props.refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: "grey"
          },
          container: {
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
            height: 300
        }
        }}
      >
     <View style={{flexDirection:'row', justifyContent:"space-between",
     marginVertical:10, marginHorizontal:15
    }}>
     <Text style={styles.maintext}>Upload From</Text>
     <TouchableOpacity    onPress={() =>  props.refRBSheet.current.close()}>
     <Image
                 source={require('../../assets/Icons/close.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
     </TouchableOpacity>


     </View>   
     <View style={{marginVertical:10,marginHorizontal:0}}>
</View>
          <View style={{justifyContent:'center',}}>
            <TouchableOpacity onPress={props.takePhotoFromCamera}>
          <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Image
                   source={require('../../assets/imagepicker/camera.png')}
                   style={styles.uploadicon}
                    resizeMode='contain'
                />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
      <Text style={styles.Subscriptiontext}>From Camera</Text>
          </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.choosePhotoFromLibrary}>
      <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Image
                   source={require('../../assets/imagepicker/gallery.png')}
                   style={styles.uploadicon}
                    resizeMode='contain'
                />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
    
      <Text style={styles.Subscriptiontext}>{props.title}</Text>
          </View>
      </View>
      </TouchableOpacity>
          </View>
      </RBSheet>
    )
};

export default CamerBottomSheet;