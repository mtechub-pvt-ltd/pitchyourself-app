import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
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
  import Tags from "react-native-tags";
  import SelectableChips from 'react-native-chip/SelectableChips'
import { color } from 'react-native-reanimated';

  const array =
  [
    {
      id: '1',
      title: 'Ice cream',
    },
    {
      id: '2',
      title: 'Chicken',
    },
    {
      id: '3',
      title: 'Roast',
    },
    {
      id: '4',
      title: 'McDonald',
    },
    {
      id: '5',
      title: 'Sandwich',
    },
    {
      id: '6',
      title: 'Zinger',
    },
  ];

const Summary = ({ navigation,route }) => {
console.log('route.params',route.params)
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
      
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateVideo')}>
            <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Summary</Text>
                 </View>
  

            </View>
            <View style={{marginLeft:"12%"}}>
                 <Text style={styles.checktext}>HIDDEN</Text>
                 </View>
          </View>
    
          <Image
                 source={require('../../../assets/Video/video.png')}
                 style={{width:'90%',height:'25%',alignSelf:'center'}}
                    resizeMode='contain'
                />
              <View style={{marginLeft:25,marginBottom:10}}>
                 <Text style={styles.postdesc}>Lorem ipsum dolor sit amet,
                  consetetur</Text>
                 </View>
<TouchableOpacity onPress={()=> navigation.navigate('Contacts')}>
<View style={{marginLeft:25,marginBottom:10,flexDirection:"row",
                alignItems:"center"}}>
                 <Image
                source={require('../../../assets/Icons/adduser.png')}
                style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 <Text style={styles.checktext}>ADD CONTACT TO PITCH</Text>
                 </View>
</TouchableOpacity>
<View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:wp('5%'),
marginVertical:wp('5%')}}>
<Chip onPress={() => console.log('Pressed')}
selectedColor={'#00000008'}
showSelectedOverlay={'#00000008'}
textStyle={{}}
style={{padding:wp('1.5%'),borderRadius:20,backgroundColor:"#00000008"}}
>User name</Chip>
<Chip  onPress={() => console.log('Pressed')}
style={{padding:wp('1.5%'),borderRadius:20,backgroundColor:"#00000008"}}
>User name</Chip>
<Chip onPress={() => console.log('Pressed')}
style={{padding:wp('1.5%'),borderRadius:20,backgroundColor:"#00000008"}}
>User name</Chip>
</View>
<View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:wp('5%'),
}}>
<Chip onPress={() => console.log('Pressed')}
style={{padding:wp('1.5%'),borderRadius:20,paddingLeft:wp('10%'),paddingRight:wp('10%'),
backgroundColor:"#00000008"}}
>User name</Chip>
<Chip  onPress={() => console.log('Pressed')}
style={{padding:wp('1.5%'),borderRadius:20,paddingLeft:wp('6%'),paddingRight:wp('6%'),
backgroundColor:"#00000008"}}
>User name</Chip>
</View>
<View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:wp('5%'),
marginVertical:wp('5%')}}>
<Chip onPress={() => console.log('Pressed')}
selectedColor={'#00000008'}
showSelectedOverlay={'#00000008'}
textStyle={{}}
style={{padding:wp('1%'),borderRadius:20,backgroundColor:"#00000008"}}
>User name</Chip>
<Chip  onPress={() => console.log('Pressed')}
style={{padding:wp('1.5%'),borderRadius:20,paddingLeft:wp('2%'),paddingRight:wp('2%'),
backgroundColor:"#00000008"}}
>User name</Chip>
<Chip onPress={() => console.log('Pressed')}
style={{padding:wp('1%'),borderRadius:20,backgroundColor:"#00000008"}}
>User name</Chip>
</View>
                 <View style={styles.buttonview}>
<CustomButtonhere
              title={route.params.item === 'CreateVideo'?'Add Video':'Update'}
              widthset={'65%'}
            onPress={() => navigation.navigate('VideoDetail')}
            />
</View>
{/*            
      <SelectableChips initialChips={["Person", "Chair","Coma","Dog"]} 
      chipStyle={'grey'}
      chipStyleSelected={'grey'}
      onChangeChips={(chips) => console.log(chips)} alertRequired={false}/> */}
 
        {/* </ScrollView> */}
    </SafeAreaView>

  )
};

export default Summary;