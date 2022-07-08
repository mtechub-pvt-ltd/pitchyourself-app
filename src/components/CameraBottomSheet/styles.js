import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
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
          fontSize:15,
          color:'black',
          fontFamily: "Montserrat Bold",
          fontWeight:'bold',
      },
      maintext:{
          fontSize:25,
          fontWeight:'bold',
          color:'grey',
          fontFamily: "Montserrat Bold",
        },
        modaltextview:
  {
    flexDirection:'row',
    justifyContent:'center',
    alignContent:"center",
    alignItems:"center",
   // borderColor:Colors.Appthemecolor,
        //borderWidth:1,
        //margin:8,
        width:300,
        borderRadius:25,
        backgroundColor:'white'
  },
  uploadicon:
{
    width:wp('6%'),
    height:wp('8%'),
},
  });
  export default styles;
  