import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

import { Divider} from 'react-native-paper';

///////////////////app pakages///////////////
import RBSheet from "react-native-raw-bottom-sheet";

////////////app styles//////////////
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

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
            backgroundColor: "white"
          },
          container: {
        borderTopLeftRadius:wp(10),
        borderTopRightRadius:wp(10),
        height:hp(30)
        }
        }}
      >
     <View style={{flexDirection:'row', justifyContent:"space-between",
    marginHorizontal:wp(8),alignItems:"center"
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
      <Divider 
      bold={true}
      style={{width:wp(70),marginLeft:wp(22)}}
      />
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