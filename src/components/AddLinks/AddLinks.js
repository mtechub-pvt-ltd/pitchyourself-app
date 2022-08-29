import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity,Image,FlatList} from 'react-native';

import { Divider} from 'react-native-paper';

///////////////////app pakages///////////////
import RBSheet from "react-native-raw-bottom-sheet";

////////////app styles//////////////
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setlinks } from '../../redux/actions';

  //////////////////////////app api/////////////////////////
  import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const AddLinks = (props) => {
    console.log('here:',props)
    /////////////redux states///////
    const { links} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

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
    return(
        <RBSheet
        //sstyle={{flex:1}}
        ref={props.refRBSheet}
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
            backgroundColor: "white"
          },
          container: {
            borderTopLeftRadius:wp(10),
            borderTopRightRadius:wp(10),
              height:hp(35)
          }
        }}
        
        >
        
        <View style={{
          flexDirection: 'row', justifyContent: "space-between",
          marginHorizontal: 0
        }}>
        
          <Text style={styles.bottomsheettext}>Select Links</Text>
        
        </View>
        <FlatList
          data={dddata}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity
            onPress={() =>
              {setddpicvalue1(item.type),
                 refddRBSheet1.current.close()}}
             >
            <View style={styles.card}>
            <Image
                 source={{uri:BASE_URL+item.icon}}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                <Text style={styles.cardtext}>
                  {item.Name}
                </Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        
        />
        </RBSheet>
    )
};

export default AddLinks;