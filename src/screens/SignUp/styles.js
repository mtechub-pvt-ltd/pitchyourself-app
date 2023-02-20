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


  buttonview:
  {
marginTop:wp(28)
    //marginTop: hp('0.5%'),
  },
  lasttextview:
  { 
    flexDirection: 'row',

     alignContent:'center',
    justifyContent:'center',
   alignItems:'center',
   //backgroundColor:'red',
   marginTop:wp(12),
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
    fontWeight: '300',
    fontSize: hp('1.8%'),
  },
  lasttext2:
  {
    color: 'white',
    fontWeight: '300',
    fontSize: hp(1.8),
// width:wp(50),
    textAlign:"center"
  },
  lasttext3:
  {
    color: 'white',
    fontWeight: '300',
    fontSize: hp(1.8),
    // width:wp(50),
    textAlign:"center",
    borderBottomColor:'white',
    borderBottomWidth:1,
    //textDecorationLine: 'underline'
  },
  lasttextview1:
  { 
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center',
   alignItems:'center',
  },
  lasttextvieworange:
  { 
    alignContent:'center',
    justifyContent:'center',
   alignItems:'center',
   marginTop:wp(13),
   marginBottom:wp('10%'),
  },
});
export default styles;
