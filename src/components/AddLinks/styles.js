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
    width:wp('6%'),
    height:wp('8%'),
},
card:
{
  borderColor:'rgba(0, 0, 0, 0.2)',
  borderBottomWidth: 1,
  flexDirection:'row',
 alignContent:"center",
 alignItems:'center',
 width: wp('90%'),
  alignSelf:'center',
  justifyContent:'flex-start',
  //borderColor:'  #C3C3C3',
},
cardtext:
{
  color:'black', marginBottom:20,marginTop:20,
   fontFamily:'Poppins',fontSize:18,marginRight:10,
    color:"grey",
},
bottomsheettext:
{
paddingHorizontal:wp(8),
fontWeight:'600',
fontSize:hp(2.5),
color:'black'
},
  });
  export default styles;
  