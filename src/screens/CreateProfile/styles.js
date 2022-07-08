import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignContent: 'center',
    paddingHorizontal:wp('5%')
  },

  image: {
    height:wp('40%'),
    width:wp('50%'),
  },
  forgettextview:
  {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: wp('2%'),
    marginRight: '8%',
    marginTop: '0%'

  },
  forgettext:
  {
    color: Colors.Appthemecolor,
    fontWeight: '400',
    fontSize: hp('1.8%'),
    marginBottom: wp('0%'),
  },
  buttonview:
  {
marginTop:wp('50%')
    //marginTop: hp('0.5%'),
  },

});
export default styles;
