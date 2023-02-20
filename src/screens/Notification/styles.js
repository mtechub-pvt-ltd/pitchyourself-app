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
  marginTop:wp('10%'),

},

userimage:
{
    width:wp(10),
    height:wp(10),
    borderRadius:wp(5),
    marginRight:wp(2)
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
  justifyContent:'space-between',
  marginBottom:wp('5%'),
  width:wp('95%')
},
});
export default styles;
