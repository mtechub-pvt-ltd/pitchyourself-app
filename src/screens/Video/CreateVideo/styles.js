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
    backgroundColor:'white'
  },
topview:
{flexDirection:'row',
justifyContent:'flex-start',
          alignItems:'center',
          marginTop:wp('10%')
        //backgroundColor:'red'
        },
topicon:
{
  width:wp('5%'),
  height:wp('5%'),
  marginLeft:wp('3%'),
  marginRight:wp('5%')
},
  buttonview:
  {
marginTop:hp('53%'),
marginBottom:hp('5%')

  },

  lasttext:
  {
    color: 'rgba(26, 26, 26, 0.56)',
    fontWeight: '400',
    fontSize: hp('1.8%'),
    marginLeft:wp('3%'),
    width:wp('70%')
  },
  image:
  {
      width:wp('7%'),
      height:wp('7%'),
  },

  uploadtext:
{
  color:Colors.Appthemecolor,
  fontWeight: '500',
  fontSize: hp('1.3%'),
marginTop:wp('3%')
},
checktext:
{
  color:Colors.Appthemecolor,
  fontWeight: '500',
  fontSize: hp('1.3%'),
marginLeft:wp('3%')
},
check:
{
    width:wp('6.5%'),
    height:wp('6.5%'),
},
});
export default styles;
