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

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignContent: 'center',
    backgroundColor:'white',
    paddingHorizontal:wp(1.5)
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
    width:wp(28),
    height:wp(28),
    borderRadius:wp(18)
},
lastimage:
{
    width:wp(28.5),
    height:wp(31.5),
},
largeimage:
{
    width:wp(60),
    height:wp(63),
},
usermaintext:
{
    fontSize:hp(2),
    fontWeight:'bold',
    color:'black'
},
posttext:
{
    fontSize:hp(3),
    fontWeight:'bold',
    color:'black'
},
userpostimagetext:
{
    fontSize:hp('1.5%'),
    fontWeight:'bold',
    color:'#BABDC9',
    marginLeft: wp(1),
    color: 'white',
    fontWeight: '500', position: 'absolute', alignSelf: "flex-end",
    paddingBottom: wp(2),bottom:0,left:0
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
  width:wp(11),
  height:hp(5),
  backgroundColor:'rgba(101, 113, 144, 0.16)',
borderRadius:wp(10),
alignItems:'center',
justifyContent:'center',
margin:wp(1)
}
});
export default styles;
