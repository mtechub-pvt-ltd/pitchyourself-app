import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container:
    {
alignSelf:'center',
    },
buttoncontent:
{
    height: hp('6%'),
    backgroundColor:Colors.Appthemecolor,
    padding:0,
    color:Colors.Appthemecolor
},
button:
{
    borderRadius:25,
    height: hp('6%'),
    //width: wp('63%'),
    alignItems:'center',
    backgroundColor:Colors.Appthemecolor,
},
label:
{
    color:'white',
    width:hp('100%'),
    fontSize: hp('1.5%') ,
    fontWeight:'bold',
    backgroundColor:Colors.Appthemecolor,
},
buttoncontent1:
{
    height: hp('6.2%'),
   // width: wp('63%'),
   // backgroundColor:Colors.Appthemecolor,
    padding:0,
    color:Colors.Appthemecolor
},
button1:
{
    borderRadius:25,
    //margin:5,
    height: hp('6.2%'),
   // width: wp('53%'),
    alignItems:'center',
    borderWidth:1,
    borderColor:Colors.Appthemecolor,
    color:Colors.Appthemecolor,
    //backgroundColor:Colors.Appthemecolor,
},
label1:
{
    color:Colors.Appthemecolor,
    fontSize: hp('1.8%') ,
    fontWeight:'bold',
   // backgroundColor:Colors.Appthemecolor,
}
  });
  export default styles;
  