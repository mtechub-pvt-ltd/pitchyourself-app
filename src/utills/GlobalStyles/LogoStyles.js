import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

import { fontFamily } from '../../constant/fonts';

const Logostyles = StyleSheet.create({

  logoview:
  { 
      marginTop:hp(8),
       justifyContent: 'flex-end',
       alignItems:'center'
},
logo: {
  height:hp(12),
  width:wp('30%'),
},
underlogotextview:
{
  justifyContent: 'center',
 alignItems:'center',
 alignSelf:'center',
 marginTop:wp('5%')
},
underlogotext:
{
  color: 'grey',
  //fontWeight: '400',
  fontSize: hp(1.8),
  width: wp(75),
  textAlign:'center',
  marginBottom:wp('5%'),
  fontFamily:fontFamily.Quicksand_Regular
},


});
export default Logostyles;
