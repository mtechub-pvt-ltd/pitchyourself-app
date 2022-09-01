import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

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
  fontWeight: '400',
  fontSize: hp('2%'),
  width: wp("72%"),
  textAlign:'center',
  marginBottom:wp('5%')
},


});
export default Logostyles;
