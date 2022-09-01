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
    width:wp(11),
    height:wp(11),
    borderRadius:wp(10)
    //smarginRight:wp()
},
sendimage:
{
    width:wp(10),
    height:wp(10),
},
likeimage:
{
    width:wp('5%'),
    height:wp('12%'),
},





recomend:
{
    fontSize:hp(1.5),
    fontWeight:'400',
    color:'#444D6E',
    width:wp(60)
},
card:
{
 borderColor:'#BDC4CC26',
  borderBottomWidth: 1,
  flexDirection:'row',
 alignItems:'center',
  justifyContent:'space-between',
  marginBottom:wp('5%'),

},
});
export default styles;
