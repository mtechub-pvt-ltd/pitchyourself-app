import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

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
    fontWeight: 'bold',
    fontSize: hp('3%'),
    marginTop: wp('0%')
  },
    subtextview:
    {
      justifyContent: 'center',
      marginLeft:wp('10%')
    },
    subtext:
    {
      color: 'rgba(29, 34, 38, 0.6)',
      fontWeight: '400',
      fontSize: hp('2%'),
      width: wp("72%"),
      marginBottom:wp('5%')
    },



});
export default Authtextstyles;
