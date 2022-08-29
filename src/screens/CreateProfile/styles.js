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

  buttonview:
  {
    //bottom:0,
    marginTop:wp('10%'),
marginBottom:wp('10%')
    //marginTop: hp('0.5%'),
  },
  imagecontainer: {
    height:wp(25),
    width:wp(57),
    marginBottom:hp(5),
  marginTop:hp(4),
  alignItems:'center',
  justifyContent:"center",
  },
  imageview:{
    height:wp(27),
    width:wp(27),
borderRadius:80,
borderWidth:2,
borderColor:"grey",
alignItems:'center',
justifyContent:'center'
  },
  image: {
    height:wp(27),
    width:wp(27),
borderRadius:80,
  },
  userimage: {
    height:wp(8),
    width:wp(8),
  },
  addimage: {
    height:wp(10),
    width:wp(10),
borderRadius:50,
position:"absolute",
marginTop:hp(3)
  },
});
export default styles;
