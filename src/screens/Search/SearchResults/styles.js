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
    paddingHorizontal:wp('3%')
  },
  inputview:
  {
    width: wp('85%'),
    alignSelf: 'center',
    alignContent:"center",
    marginTop:wp('0%'),
    marginBottom:wp('5%')
    // /backgroundColor:'red'
  },
postcard:
  {
      width:wp('90%'),
      borderWidth:1,
      borderColor:'#70707038',
      alignSelf:"center",
  borderRadius:20,
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
    width:wp('15%'),
    height:wp('15%'),
},
postdesc:
{
    fontSize:hp('1.5%'),
    fontWeight:'bold',
    color:'#444D6E'
},
postpiccontainer:
{
    //backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center',
   // width:wp(89),
    height:wp(59),
},
postpic:
{
    width:wp(82),
    height:wp(50),
    borderRadius:wp(3)
},
icon:
{
    width:wp('30%'),
    height:wp('10%'),
    //backgroundColor:'red'
},
recomend:
{
    fontSize:hp('1.3%'),
    fontWeight:'600',
    color:'#747EA0'
},
iconview:
{
  width:40,
  height:40,
  backgroundColor:'rgba(101, 113, 144, 0.16)',
borderRadius:20,
alignItems:'center',
justifyContent:'center',
margin:5
}
});
export default styles;
