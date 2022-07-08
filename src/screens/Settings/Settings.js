
import React, { useEffect, useState,useRef} from 'react';
import {
    SafeAreaView, ScrollView, FlatList,TextInput,
    Image, View, Text, TouchableOpacity,
} from 'react-native';
import CustomButtonhere from '../../components/Button/CustomButton';
import OutlineButton from '../../components/Button/OutlineButton';
import RBSheet from "react-native-raw-bottom-sheet";
import { Divider,Switch } from 'react-native-paper';
import styles from './styles';
import Multilineinputstyles from '../../utills/GlobalStyles/Multilineinputstyle';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';




const Settings = ({ navigation }) => {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    //textfields

      //btmrefrence
  const refhelpRBSheet = useRef();
    useEffect(() => {

        //SplashScreen.hide();
    }, []);
    return (

        <SafeAreaView style={styles.container}>
         <View style={{flexDirection:'row',justifyContent:'space-between',
          alignItems:'center',marginTop:20
        //backgroundColor:'red'
        }}>
      
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
                   source={require('../../assets/Homeimages/menu.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Settings</Text>
                 </View>
  

            </View>
         
     
     
            <TouchableOpacity onPress={() => console.log('seqarch')}>
          <Image
                   source={require('../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
                </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row",
           justifyContent: 'space-between', 
                        alignItems: 'center',marginBottom:20,marginTop:40,marginHorizontal:20 }}>
                 
                            <View>
                                <Text style={{ fontSize: 15, color: 'rgba(68, 77, 110, 1)',
                                 fontWeight: '400' }}>ALLOW USERS TO
                                 DOWNLOAD MATERIAL
                                </Text>
                       
                            </View>
                            <View style={{marginLeft:110}}>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                             color={Colors.Appthemecolor}/>
                            </View>

                    </View>
                    <View style={{ flexDirection: "row",
                     justifyContent: 'space-between', 
                        alignItems: 'center',marginBottom:20,marginTop:10,marginHorizontal:20  }}>
                  
                            <View>
                                <Text style={{ fontSize: 15, color: 'rgba(68, 77, 110, 1)',
                                 fontWeight: '400' }}>Option 1
                                </Text>
                       
                            </View>
                            <View style={{marginLeft:110}}>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                             color={Colors.Appthemecolor}/>
                            </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', 
                        alignItems: 'center',marginBottom:20,marginTop:0,marginHorizontal:20  }}>
                  
                            <View>
                                <Text style={{ fontSize: 15, color: 'rgba(68, 77, 110, 1)',
                                 fontWeight: '400' }}>Option 2
                                </Text>
                       
                            </View>
                            <View style={{marginLeft:110}}>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                             color={Colors.Appthemecolor}/>
                            </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', 
                        alignItems: 'center',marginBottom:20,marginTop:0,marginHorizontal:20 }}>
                   
                            <View>
                                <Text style={{ fontSize: 15, color: 'rgba(68, 77, 110, 1)',
                                 fontWeight: '400' }}>Option 3
                                </Text>
                       
                            </View>
                            <View style={{marginLeft:110}}>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                             color={Colors.Appthemecolor}/>
                            </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', 
                        alignItems: 'center',marginBottom:20,marginTop:0,marginHorizontal:20 }}>
               
                            <View>
                                <Text style={{ fontSize: 15, color: 'rgba(68, 77, 110, 1)',
                                 fontWeight: '400' }}>Option 4
                                </Text>
                       
                            </View>
                            <View style={{marginLeft:110}}>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                             color={Colors.Appthemecolor}/>
                            </View>

                    </View>
                    <TouchableOpacity     onPress={() => refhelpRBSheet.current.open()}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', 
                        alignItems: 'center',marginBottom:20,marginTop:0,marginHorizontal:20 }}>
                      
                            <View>
                                <Text style={{ fontSize: 15, color: 'rgba(68, 77, 110, 1)',
                                 fontWeight: '400' }}>Help Center
                                </Text>
                       
                            </View>
                            <View style={{marginLeft:110}}>
                            <Image
                   source={require('../../assets/Icons/forward.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
                            </View>

                    </View>
                    </TouchableOpacity>
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
  <Text style={[Authtextstyles.maintext,{marginBottom:10}]}>Help Center</Text>
  <TouchableOpacity     onPress={() => refhelpRBSheet.current.close()}>

     <Image
                 source={require('../../assets/Icons/close.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />

                                </TouchableOpacity>
</View>
<View style={{flexDirection:'row',justifyContent:"space-around",alignItems:"center",
marginHorizontal:wp('5%')}}>

        <View style={[Multilineinputstyles.action,{height:wp('45%'),marginTop:wp('3%')}]}>
            <TextInput
              placeholder="Add Your Detail Here"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}
              
              style={Multilineinputstyles.input}
            />
  
          </View>
</View>

<View style={styles.buttonview}>
    <View style={{flex:0.5,
              //backgroundColor:'red'
              }}>
              <OutlineButton
                  widthset={'30%'}
                  title='CANCEL'
                  //onPress={() => navigation.navigate('Screen1')}
              />
              </View>
                  <View style={{flex:0.5,alignSelf:'flex-end',
              //backgroundColor:'red'
              }}>
                  <CustomButtonhere
                  widthset={'30%'}
                  title='APPROVE'
                  //onPress={() => navigation.navigate('Screen3')}
              />
              </View>
</View>
</RBSheet>
        </SafeAreaView>

    )
};

export default Settings;