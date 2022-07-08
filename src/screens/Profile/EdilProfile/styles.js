import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';
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
    height:wp('45%'),
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
    fontWeight: 'bold',
    fontSize: hp('2%'),
    marginBottom: wp('2%'),
  },
  buttonview:
  {
marginTop:wp('50%'),
marginBottom:wp('5%')
    //marginTop: hp('0.5%'),
  },
  btmimage:
  {
      width:wp('7%'),
      height:wp('7%'),
  },
  checktext:
  {
    color:Colors.Appthemecolor,
    fontWeight: '500',
    fontSize: hp('1.3%'),
  marginLeft:wp('3%')
  },
});
export default styles;
