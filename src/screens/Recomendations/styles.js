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
    paddingHorizontal:wp('3%')
  },

postcard:
  {
  
      alignSelf:"center",
  marginTop:wp('3%'),
  height:hp('72%')
},

userimage:
{
    width:wp('15%'),
    height:wp('9%'),
},
likeimage:
{
    width:wp('5%'),
    height:wp('12%'),
},





recomend:
{
    fontSize:hp('1.3%'),
    fontWeight:'600',
    color:'#444D6E'
},
card:
{
 borderColor:'#BDC4CC26',
  borderBottomWidth: 1,
  flexDirection:'row',
 alignContent:"center",
 alignItems:'center',
  alignSelf:'center',
  justifyContent:'space-between',
  marginBottom:wp('5%')
},
});
export default styles;
