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
userimage:
{
    width:wp('35%'),
    height:wp('42%'),
},
lastimage:
{
    width:wp('30%'),
    height:wp('35%'),
},
largeimage:
{
    width:wp('62%'),
    height:wp('68%'),
},
usermaintext:
{
    fontSize:hp('2%'),
    fontWeight:'bold',
    color:'black'
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
   alignSelf:"center",
    alignItems:"center",

},
postpic:
{
    width:wp('90%'),
    height:wp('60%'),
},
icon:
{
    width:wp('30%'),
    height:wp('10%'),
    //backgroundColor:'red'
},
topicon:
{
    width:wp('12%'),
    height:wp('8%'),
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