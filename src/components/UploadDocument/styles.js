import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    bottomtext:
    {
        color:'black',
        textAlign:'center',
         fontFamily:"Poppins",
         fontSize:15,
      },
      Subscriptiontext:
      {
          fontSize:hp(1.8),
          color:'#1D2226',
          fontFamily: "Montserrat Bold",
          fontWeight:'300',
      },
      maintext:{
          fontSize:hp(3),
          fontWeight:'700',
          color:'black',
          fontFamily: "Montserrat Bold",
        },
        modaltextview:
  {
    flexDirection:'row',
    justifyContent:'flex-start',
alignSelf:"center",
    alignItems:"center",
        width:wp(90),
        borderRadius:25,
        backgroundColor:'white'
  },
  uploadicon:
{
    width:wp(6.5),
    height:wp(6.5),
},
  });
  export default styles;
  