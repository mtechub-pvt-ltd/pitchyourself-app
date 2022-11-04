import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { fontFamily } from '../../constant/fonts';

const Authtextstyles = StyleSheet.create({

    maintextview:
    {
      justifyContent: 'center',
      marginTop: wp('2%'),
      marginLeft:wp('10%')
    },
    maintext1:
    {
      color: 'white',
      fontWeight: 'bold',
      fontSize: hp('3.2%'),
      fontFamily: 'Raleway',
      justifyContent: 'center',
    },
    maintext:
  {
    color: 'rgba(29, 34, 38, 1)',
    fontWeight: '700',
    fontSize: hp('3%'),
    marginTop: wp('0%'),
    fontFamily:fontFamily.Quicksand_Bold
  },
    subtextview:
    {
      justifyContent: 'center',
      marginLeft:wp('10%')
    },
    subtext:
    {
      color: 'rgba(29, 34, 38, 0.60)',
      fontSize: hp(1.8),
      width: wp(75),
      marginBottom:hp(3),
      marginTop:hp(1),
      fontFamily:fontFamily.Quicksand_Regular

    },



});
export default Authtextstyles;
