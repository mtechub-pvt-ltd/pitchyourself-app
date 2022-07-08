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
    backgroundColor:'white',
    paddingHorizontal:wp('1%')
  },
  topview:
{
  flexDirection:'row',
justifyContent:'space-between',
          alignItems:'center',
          marginTop:wp('10%')
        },
  inputview:
  {
    width: wp('95%'),
    //height:hp('100%'),
    alignSelf: 'center',
    alignContent:"center",
    marginTop:wp('0%'),
    // /backgroundColor:'red'
  },
postcard:
  {
      width:wp('90%'),
      // /height:hp('65%'),
      borderWidth:1,
      borderColor:'#70707038',
      alignSelf:"center",
  borderRadius:25,
  marginTop:'5%',

},
mainusercontainer:
{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    marginTop:wp('4%'),
    marginLeft:wp('2%')
},
userimage:
{
    width:wp('15%'),
    height:wp('12%'),
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
    fontWeight:'400',
    color:'rgba(68, 77, 110, 1)',
    width:wp('80%')

},
card:
{

 alignContent:"center",
 alignItems:'center',
  alignSelf:'center',
  justifyContent:'space-between',

},


postpiccontainer:
{
    //backgroundColor:"red",
    alignItems:"center",
    height:wp('65%'),
},
postpic:
{
    width:wp('90%'),
    height:wp('63%'),
},


});
export default styles;
