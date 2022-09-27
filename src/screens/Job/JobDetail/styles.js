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
    width:wp('90%'),
    alignSelf: 'center',
    alignContent:"center",
    marginTop:wp('0%'),
    // /backgroundColor:'red'
  },
postcard:
  {
      width:wp('90%'),
      borderWidth:1,
      borderColor:'#70707038',
      alignSelf:"center",
  borderRadius:25,
  marginTop:'10%',
  marginBottom:wp('5%')
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
horzontaltext:
{
    fontSize:hp('1.5%'),
    fontWeight:'400',
    color:'rgba(68, 77, 110, 1)',
    width:wp('29%'),
    //backgroundColor:'red'

},
horzontaltextright:
{
    fontSize:hp('1.5%'),
    fontWeight:'400',
    color:'rgba(68, 77, 110, 1)',
    width:wp('29%'),
    //backgroundColor:'red',
    textAlign:'right'

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
    color:'#747EA0',
    width:wp('76%')
},
mapcontainer: {
  //position: 'absolute',
  top: 20,
  left: 0,
  right: 0,
  bottom: 10,
  height:wp('45%'),
  width:wp('83%'),
  alignItems: 'center',
  alignSelf:"center",
  marginBottom:wp('15%')
  //justifyContent: 'flex-end',
},
mapStyle: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},
buttonview:
{

marginBottom:hp('5%'),
flexDirection:"row",
//paddingHorizontal:wp('15%'),
justifyContent:"space-between"
},
singlebuttonview:
{

marginBottom:hp('5%'),
alignItems:'center'
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
