import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    //alignContent: 'center',
    backgroundColor:'white'
  },

  buttonview:
  {
marginTop:hp(10),
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
  doticon:
  {
      width:wp(3),
      height:wp(3),
  },
  icon:
  {
      width:wp(5),
      height:wp(5),
  },
  plusicon:
  {
      width:wp(6),
      height:wp(6),
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
videotext:
{
  color:Colors.Appthemecolor,
  fontWeight: '500',
  fontSize: hp(1.3),

},
orangetext:
{
  color:Colors.Appthemecolor,
  fontWeight: '500',
  fontSize: hp(1.8),

},
lineview:
{
    borderBottomColor:'rgba(112,112,112,0.1)',
    borderBottomWidth:2,marginTop:hp(2),
    marginBottom:wp(0)},
    card:
    {
      borderColor:'rgba(0, 0, 0, 0.2)',
      borderBottomWidth: 1,
     width: wp(82),
     marginHorizontal:wp(8),
     flexDirection:'row',
     alignItems:'center'
      
    },
    cardtext:
    {
      color:'black', 
      marginBottom:hp(2),
      marginTop:hp(2),
       fontFamily:'Poppins',
       fontSize:hp(2),
       marginLeft:wp(5),
        color:"grey",
    },
    bottomsheettext:
    {
    paddingHorizontal:wp(8),
    fontWeight:'600',
    fontSize:hp(2.5),
    color:'black'
    },
    socialicons:
{
  width:wp(10),
  height:wp(10),
borderRadius:wp(5)
}

});
export default styles;
