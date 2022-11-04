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

  import { fontFamily } from '../../constant/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignContent: 'center',
    backgroundColor:'white',
    paddingHorizontal:wp('3%')
  },
text:
{
  fontSize: hp(1.8),
   color: '#444D6E',
  fontFamily:fontFamily.Quicksand_Regular
},

buttonview:
{
marginTop:wp(90)
  //marginTop: hp('0.5%'),
},
});
export default styles;
