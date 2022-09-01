import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
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
checktext:
{
  color:Colors.Appthemecolor,
  fontWeight: '500',
  fontSize: hp('1.3%'),
marginLeft:wp('3%')
},
check:
{
    width:wp('6.5%'),
    height:wp('6.5%'),
},
  });
  export default styles;
  