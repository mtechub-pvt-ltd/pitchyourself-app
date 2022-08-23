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

const Inputstyles = StyleSheet.create({

    inputview:
    {
      width: wp('85%'),
      height:wp('50%'),
      alignSelf: 'center',
      alignContent:"center",
      marginTop:wp('0%'),
      // /backgroundColor:'red'
    },
    input:
    {
      backgroundColor: 'white',
       width: '90%', 
       alignSelf: 'center', 
       color: 'rgba(26, 26, 26, 0.56)',
       fontWeight:'500',
      borderRadius: 40,   
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderWidth:1,
      borderColor: 'rgba(26, 26, 26, 0.25)',
      paddingBottom: 5,
      backgroundColor: 'white',
      width: wp('80%'),
      height: wp('13%'),
      alignSelf: 'center',
      marginBottom: wp('2%'),
      borderRadius: 40,
      paddingLeft: wp('2%'),
      paddingRight: wp('4%'),
      alignItems: 'center'
    },
inputicons:
{
  width:wp('5%'),
  height:wp('5%')}
});
export default Inputstyles;