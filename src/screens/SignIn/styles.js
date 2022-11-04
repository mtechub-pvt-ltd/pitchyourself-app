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
    alignContent: 'center'
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
    fontSize: hp(1.6),
    marginBottom: hp(3),
    marginTop: hp(1),
    fontFamily:fontFamily.Quicksand_Regular
  },
  buttonview:
  {
marginTop:wp('20%')
    //marginTop: hp('0.5%'),
  },
  lasttextview:
  { 
    flexDirection: 'row',

     alignContent:'center',
    justifyContent:'center',
   alignItems:'center',
   //backgroundColor:'red',
   marginTop:wp('10%'),
  },
  lasttext:
  {
    color: '#1A1A1A',
    fontSize: hp(1.5),
    fontFamily:fontFamily.Quicksand_Regular
  },
  lasttext1:
  {
    color: Colors.Appthemecolor,
    fontSize: hp(1.5),
    fontFamily:fontFamily.Quicksand_Regular,
    borderBottomWidth:1,
    borderBottomColor:Colors.Appthemecolor
  },
});
export default styles;
