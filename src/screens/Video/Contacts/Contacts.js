import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,FlatList,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import { Divider,Chip } from 'react-native-paper';
import styles from './styles';
import CustomButtonhere from '../../../components/Button/CustomButton';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
  import RemovableChips from 'react-native-chip/RemovableChips'

  const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58694a0f-3da13-471f-bd96-147671e29d72',
        name: 'Michael Bruno',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad43ybb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c625-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58694a0f-3hf71-471f-bd96-145571e29d72',
        name: 'Michael Bruno',
    },
    {
        id: '3ae48afc-c675-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58904a0f-3hf71-471f-bd96-145571l29d72',
        name: 'Michael Bruno',
    },
    {
        id: '589744a0f-3hf71-471f-bd96-145571l29d72',
        name: 'Michael Bruno',
    },
];

const Contacts = ({ navigation }) => {

  //textfields

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <SafeAreaView style={styles.container}>
                      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        > */}
          <View style={{flexDirection:'row',justifyContent:'space-between',
          alignItems:'center',marginTop:30
        //backgroundColor:'red'
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateVideo')}>
            <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Add Contact</Text>

  

            </View>
            <View style={{marginLeft:"12%"}}>
      
                 </View>
          </View>
    
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Type To Search"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
                  <Image
                    source={require('../../../assets/Icons/search.png')}
                    style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
          </View>       
                 {/* <RemovableChips label="" initialChips={["Person", "Chair"]}
                  onChangeChips={(chips) => console.log(chips)} alertRequired={true}/> */}
<View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:wp('0%'),
marginVertical:wp('5%')}}>
<Chip onPress={() => console.log('Pressed')}
icon={require('../../../assets/Chat/close.png')}
selectedColor={'white'}
showSelectedOverlay={'#00000008'}
textStyle={{color:'white',fontWeight:'bold'}}
closeIcon={true}
style={{padding:wp('1%'),borderRadius:30,backgroundColor:Colors.Appthemecolor}}
>Emma</Chip>
<Chip  onPress={() => console.log('Pressed')}
icon={require('../../../assets/Chat/close.png')}
selectedColor={'white'}
showSelectedOverlay={'#00000008'}
textStyle={{color:'white',fontWeight:'bold'}}
closeIcon={true}
style={{padding:wp('1%'),borderRadius:30,backgroundColor:Colors.Appthemecolor}}
>Emma</Chip>
<Chip onPress={() => console.log('Pressed')}
icon={require('../../../assets/Chat/close.png')}
selectedColor={'white'}
showSelectedOverlay={'#00000008'}
textStyle={{color:'white',fontWeight:'bold'}}
closeIcon={true}
style={{padding:wp('1%'),borderRadius:30,backgroundColor:Colors.Appthemecolor}}
>Emma</Chip>
<Chip onPress={() => console.log('Pressed')}
icon={require('../../../assets/Chat/close.png')}
selectedColor={'white'}
showSelectedOverlay={'#00000008'}
textStyle={{color:'white',fontWeight:'bold'}}
closeIcon={true}
style={{padding:wp('1%'),borderRadius:30,backgroundColor:Colors.Appthemecolor}}
>Emma</Chip>
</View>

 <View style={styles.postcard}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => (

                            <View style={styles.card}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-around', 
                        alignItems: 'center',marginBottom:20 }}>
                            <View style={{}}>
                                <Image
                                    source={require('../../../assets/Chat/user.png')}
                                    style={styles.userimage}
                                    resizeMode='contain'
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, color: '#1B1B1B', fontWeight: '700' }}>Michael Bruno</Text>
                                <Text style={[styles.recomend, { color: '#7A8FA6' }]}>Emma
                                 </Text>
                            </View>
                    </View>     
                    <View style={{marginLeft:110}}>
                            <Text style={[styles.checktext]}>ADD CONTACT
                             </Text>
                            </View>

                            </View>

                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />
      
                </View>
                <View style={styles.buttonview}>
<CustomButtonhere
              title={'ADD NOW'}
              widthset={'65%'}
            onPress={() => navigation.navigate('VideoDetail')}
            />
</View>
        {/* </ScrollView> */}
    </SafeAreaView>

  )
};

export default Contacts;