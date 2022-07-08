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
{
  flexDirection:'row',
justifyContent:'space-between',
          alignItems:'center',
          marginTop:wp('10%')
        },
  inputview:
  {
    width: wp('85%'),
    height:hp('100%'),
    alignSelf: 'center',
    alignContent:"center",
    marginTop:wp('0%'),
    // /backgroundColor:'red'
  },
postcard:
  {
      width:wp('90%'),
      height:hp('65%'),
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
    fontWeight:'bold',
    color:'rgba(68, 77, 110, 1)'
},
postpiccontainer:
{
    //backgroundColor:"red",
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
    //backgroundColor:'red'
},
recomend:
{
    fontSize:hp('1.3%'),
    fontWeight:'600',
    color:'#747EA0',
    width:wp('76%')
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
