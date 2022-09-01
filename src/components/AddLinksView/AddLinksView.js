import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

////////////////////app components//////////////
import CustomButtonhere from '../Button/CustomButton';
import CustomModal from '../Modal/CustomModal';

///////////////////app pakages///////////////
import RBSheet from "react-native-raw-bottom-sheet";

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

////////////app styles//////////////
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setlinks } from '../../redux/actions';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddLinksView = (props) => {
    console.log('here:', props)
    /////////////redux states///////
    const { links,id } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

              //Modal States
              const [modalVisible, setModalVisible] = useState(false);
              const [modalVisible1, setModalVisible1] = useState(false);

    /////////////////////add links states/////////////////
    const [link, setLinks] = useState();

        ///////////data textfields states///////////
        const linkclear=useRef()

    //////////////////////add Links//////////////////
    const AddSocailLinks=async() => {

        console.log('here......',id)
        axios({
          method: 'POST',
          url: BASE_URL+'user/create-social-link',
          data:{
            userId:id,
            icon: props.icon,
            link: link
          },
        })
        .then(async function (response) {
          console.log("response", JSON.stringify(response.data))  
          linkclear.current.clear()
          dispatch(setlinks(response.data._id))
          setModalVisible(true)
  

        })
        .catch(function (error) {
          if(error)
        {    
            setModalVisible1(true)
           console.log('Issue in Appoinments Acceptence')
    
          }
      
          console.log("error", error)
        })
      }

    useEffect(() => {
    }, []);
    return (
        <RBSheet
            ref={props.refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            openDuration={50}
            closeDuration={50}
            animationType="fade"
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
                marginHorizontal: 20
            }}>
                <Text style={[Authtextstyles.maintext, { marginBottom: 10 }]}>Add Link</Text>
                <TouchableOpacity onPress={() => props.onClose()}>
                    <Image
                        source={require('../../assets/Icons/close.png')}
                        style={Inputstyles.inputicons}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
            <View style={Inputstyles.action}>
                <TextInput
                  ref={linkclear}
                    placeholder="Add Link here"
                    onChangeText={setLinks}
                    placeholderTextColor="#666666"
                    autoCapitalize="none"
                    style={Inputstyles.input}
                />
            </View>
            <TouchableOpacity onPress={()=> props.refRBSheet.current.close()}>
            <View style={{
                justifyContent: "flex-end", alignItems: 'flex-end', paddingHorizontal: wp('15%'),
                marginTop: wp('3%')
            }}>
                <Text style={styles.checktext}>ADD More</Text>
            </View>
            </TouchableOpacity>

            <View style={{ marginTop: hp('7%') }}>
                <CustomButtonhere
                    title={'Add'}
                    widthset={'65%'}
            onPress={() => AddSocailLinks()}
                />
            </View>
            <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={       <Image
                  source={require('../../assets/Icons/sucess.png')}
                     style={styles.sucessimage}
                     resizeMode='contain'
                 />}
              text={'Link Added Sucessfully'}
          buttontext={'OK'}
 onPress={()=> {setModalVisible(false)}}
                /> 
                        <CustomModal 
                modalVisible={modalVisible1}
                CloseModal={() => setModalVisible1(false)}
                Icon={  <AntDesign
                  name="closecircle"
                  color={'red'}
                  size={60}
              />}
              text={'Problem in Links Submision'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible1(false)}}
                /> 
        </RBSheet>
    )
};

export default AddLinksView;