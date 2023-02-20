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

const Uploadstyles = StyleSheet.create({

 mainview:
 {
     width:wp('78%'),
     height:wp('45%'),
     borderWidth:2,
     alignSelf:"center",
     borderColor:Colors.inputbordercolor,
marginTop:wp('5%'),
borderStyle:'dashed',
borderRadius:20,
alignItems:'center',
justifyContent:'center',
marginBottom:wp('5%')
},
uploadicon:
{
    width:wp('10%'),
    height:wp('10%'),
},
uploadtext:
{
  color: 'rgba(26, 26, 26, 0.56)',
  fontWeight: '500',
  fontSize: hp('1.8%'),
marginTop:wp('3%')
},
setimages:
{height:hp(20),width:wp(75),borderRadius:wp(5)}

});
export default Uploadstyles;
