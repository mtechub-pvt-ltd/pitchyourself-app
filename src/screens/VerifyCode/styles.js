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
    alignContent: 'center'
  },
topimage:
{
height:wp('30%'),
width:wp('40%')
},
Cellview:{
    //flexDirection:'row',
    //justifyContent: 'space-evenly' ,
    marginBottom:10,
    marginTop:0,
    marginHorizontal:wp('18%')
  },
  root: {
    //flex: 1, 
    padding: 0
  },
  title: {
    textAlign: 'center', 
  fontSize:hp('3%'),
  justifyContent:'center',
  alignItems:'center',
  color:'black'
  },
  codeFieldRoot: 
  {
  marginTop: 10
  },
  cell: {
  marginTop:10,
  width: wp('13%'),
  height: hp('6.7%'),
  lineHeight: hp('6.5%'),
  fontSize:hp('3%'),
  color:'black',
  borderWidth: 0.5,
  borderColor: 'rgba(26, 26, 26, 0.54)',
  textAlign: 'center',
  //margin:2,
  borderRadius:12,
  alignItems:'center',
  backgroundColor: 'white',
  justifyContent:'center',  
  alignItems:'center',
  alignSelf:'center'
  },
  focusCell: {
  borderColor: 'gray',
  alignItems:'center',
  textAlign: 'center',
  //margin:10,
  justifyContent:'center',
  },
  Cellmaintext:
  {color:Colors.activeinputs,
  textAlign:'center',
  alignSelf:'center',
  width: wp('50%'),
  fontWeight:'400'
  },
  buttonview:
  {
marginTop:wp('60%')
    //marginTop: hp('0.5%'),
  },

});
export default styles;
