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
  functionimage: {
    height:wp('8%'),
    width:wp('8%'),
  },
  functionmaincontainer:
  {
flexDirection:'row',
justifyContent:'space-around',
marginTop:wp('5%')
  },
  functionviews:
  {
    borderColor:'rgba(26, 26, 26, 0.21)',
    borderWidth:1,
    shadowOpacity: 0.1,
    borderRadius:15,
    width:wp('34%'),
  height:hp('15%'),
  alignItems:'center',
  justifyContent:"center"
  },
  functiontext:
  {
    color: 'rgba(26, 26, 26, 0.56)',
    fontWeight: '300',
    fontSize: hp('1.8%'),
    width: wp("72%"),
    textAlign:'center',
    marginTop:wp('5%')
  },


  buttonview:
  {
marginTop:wp('20%')
    //marginTop: hp('0.5%'),
  },



});
export default styles;
