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
    backgroundColor:'white'
  },
  helptopview:
{
    flexDirection:'row',
justifyContent:'flex-start',
          alignItems:'center',
        marginTop:wp('5%')
        //backgroundColor:'red'
        },
topview:
{
    flexDirection:'row',
justifyContent:'space-between',
          alignItems:'center',
        marginTop:wp('5%')
        //backgroundColor:'red'
        },
topicon:
{
  width:wp('5%'),
  height:wp('5%'),
  marginLeft:wp('3%'),
  marginRight:wp('5%')
},
toplogo:
{
  width:wp('15%'),
  height:wp('15%'),
},
toptext:
{
  color: 'rgba(26, 26, 26, 0.56)',
  fontWeight: '400',
  fontSize: hp('2%'),
marginRight:wp('5%')
},
  buttonview:
  {
marginTop:hp(5)
  },

  lasttext:
  {
    //color: 'rgba(26, 26, 26, 0.56)',
    fontSize: hp(1.7),
  textAlign:'center',
    width:wp('90%'),
    color:'#1D2226',
    fontFamily:fontFamily.Quicksand_Regular
  },
  helpext:
  {
    color: 'rgba(26, 26, 26, 0.56)',
    fontWeight: '400',
    fontSize: hp('1.8%'),
  textAlign:'justify',
    width:wp('80%')
  },
});
export default styles;
