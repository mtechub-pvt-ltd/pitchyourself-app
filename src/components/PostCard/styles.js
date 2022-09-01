import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  inputview:
  {
    alignSelf: 'center',
    alignContent:"center",
  },
postcard:
  {
      width:wp('90%'),
      borderWidth:1,
      borderColor:'#70707038',
      alignSelf:"center",
  borderRadius:25,
  marginTop:'10%'
},
mainusercontainer:
{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    margin:wp('3%')
},
userimageview:
{
    width:wp(13),
    height:wp(13),
    borderColor:Colors.Appthemecolor,
    borderRightWidth:5,
    borderRadius:wp(20),
    alignItems:'center',
    justifyContent:'center'
},
userimage:
{
    width:wp(12),
    height:wp(12),
    borderRadius:wp(20)
},
usermaintext:
{
    fontSize:hp('2%'),
    fontWeight:'bold',
    color:Colors.Appthemecolor
},
usertime:
{
    fontSize:hp('1.5%'),
    fontWeight:'bold',
    color:'#BABDC9'
},
iconimages:
{
    width:wp('10%'),
    height:wp('15%'),
},
postdesc:
{
    fontSize:hp('1.5%'),
    fontWeight:'bold',
    color:'rgba(68, 77, 110, 1)'
},
postpiccontainer:
{
    alignItems:"center",
    width:wp('90%'),
    height:wp('65%'),
},
postpic:
{
    width:wp('80%'),
    height:wp('60%'),
},
icon:
{
    width:wp('30%'),
    height:wp('10%'),
},
recomend:
{
    fontSize:hp('1.3%'),
    fontWeight:'600',
    color:'#747EA0',
    width:wp(76)
},
iconview:
{
  width:wp(9.5),
  height:hp(4.5),
  backgroundColor:'rgba(101, 113, 144, 0.16)',
borderRadius:20,
alignItems:'center',
justifyContent:'center',
margin:5
}
});
export default styles;