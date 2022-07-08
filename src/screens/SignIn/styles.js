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
    marginBottom: wp('8%'),
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
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.8%'),
  },
  lasttext1:
  {
    color: Colors.Appthemecolor,
    fontWeight: '400',
    fontSize: hp('1.8%'),
  },
});
export default styles;
