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
  marginTop:wp('5%')
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
    width:wp('15%'),
    height:wp('15%'),
},
postdesc:
{
    fontSize:hp('1.5%'),
    fontWeight:'400',
    color:'rgba(68, 77, 110, 1)',
    width:wp('80%')

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
    color:'#444D6E'
},
iconview:
{
  width:35,height:35,backgroundColor:'rgba(101, 113, 144, 0.16)',
borderRadius:20,alignItems:'center',
justifyContent:'center',
margin:8}
});
export default styles;
