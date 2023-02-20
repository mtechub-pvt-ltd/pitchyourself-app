import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity,Image,FlatList} from 'react-native';

//////////////////app components///////////
import AddLinksView from '../AddLinksView/AddLinksView';

///////////////////app pakages///////////////
import RBSheet from "react-native-raw-bottom-sheet";

////////////app styles//////////////
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
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

   //////////////link dropdown////////////////
   const reflinkddRBSheet = useRef();

  //////////dropdownlink data/////////////
  const [dddata, setdddata] = useState()
  const [ddpickvalue, setddpickvalue] = useState()

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
              {setddpickvalue(item.icon),
                //props.refRBSheet.current.close(),
                reflinkddRBSheet.current.open()
              }}
             >
            <View style={styles.card}>
            {/* <Image
                 source={{uri:BASE_URL+item.icon}}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                /> */}
                <Text style={styles.cardtext}>
                  {item.Name}
                </Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        
        />
                  <AddLinksView
              refRBSheet={reflinkddRBSheet}
              onClose={() => {reflinkddRBSheet.current.close(),props.refRBSheet.current.close()}}
              onCloseReviewBTM={()=> props.refRBSheet.current.close()}
              icon={ddpickvalue}
              title={'Review Added'}
            />
        </RBSheet>
    )
};

export default AddLinks;