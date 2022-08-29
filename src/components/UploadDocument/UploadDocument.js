import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

//////////////////app components///////////
import AddLinks from '../AddLinks/AddLinks';

import { Divider} from 'react-native-paper';

///////////////////app pakages///////////////
import RBSheet from "react-native-raw-bottom-sheet";

////////////app styles//////////////
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

  //////////////////////////app api/////////////////////////
  import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const UploadBottomSheet = (props) => {

      //////////dropdownlink data/////////////
  const [dddata, setdddata] = useState()

  ///////////////link function///////////////
    const GetLinks =async () => {
        console.log('here:')
        axios({
          method: 'GET',
          url: BASE_URL+'admin/get-all-links-admin',
        })
          .then(function (response) {
            console.log("response", JSON.stringify(response.data))
            setdddata(response.data)
            console.log('flatlist data:', dddata)
          })
          .catch(function (error) {
            console.log("error", error)
          })
      }
      useEffect(() => {
        GetLinks()
          }, []);
    //////////////link dropdown////////////////
  const reflinkddRBSheet = useRef();

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
          height:hp(35)
        }
        }}
      >
     <View style={{flexDirection:'row', justifyContent:"space-between",
    marginHorizontal:wp(8),alignItems:"center"
    }}>
     <Text style={styles.maintext}>Upload</Text>
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
          <View style={{justifyContent:'center',marginBottom:hp(15)}}>
          <TouchableOpacity onPress={props.SelectFile}>
          <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Image
                   source={require('../../assets/imagepicker/pdf.png')}
                   style={[styles.uploadicon]}
                    resizeMode='contain'
                />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
      <Text style={styles.Subscriptiontext}>Upload PDF</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Divider 
      bold={true}
      style={{width:wp(70),marginLeft:wp(22)}}
      />
            <TouchableOpacity onPress={props.choosePhotoFromLibrary}>
          <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Image
                   source={require('../../assets/imagepicker/gallery.png')}
                   style={styles.uploadicon}
                    resizeMode='contain'
                />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
      <Text style={styles.Subscriptiontext}>Upload images</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Divider 
      bold={true}
      style={{width:wp(70),marginLeft:wp(22)}}
      />
      <TouchableOpacity  onPress={() => reflinkddRBSheet.current.open()}>
      <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Image
                   source={require('../../assets/imagepicker/link.png')}
                   style={[styles.uploadicon]}
                    resizeMode='contain'
                />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
    
      <Text style={styles.Subscriptiontext}>{props.title}</Text>
          </View>
      </View>
      </TouchableOpacity>
          </View>
          <AddLinks
              refRBSheet={reflinkddRBSheet}
              onClose={() => {reflinkddRBSheet.current.close(),props.refRBSheet.current.close()}}
              onCloseReviewBTM={()=> props.refRBSheet.current.close()}
              title={'Review Added'}
            />
      </RBSheet>
    )
};

export default UploadBottomSheet;