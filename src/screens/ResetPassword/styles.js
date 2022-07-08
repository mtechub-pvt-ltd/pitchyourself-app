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
    alignContent: 'center'
  },
topimage:
{
height:wp('30%'),
width:wp('40%')
},
  buttonview:
  {
marginTop:wp('30%')
    //marginTop: hp('0.5%'),
  },

});
export default styles;
