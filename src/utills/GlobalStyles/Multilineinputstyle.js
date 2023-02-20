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

const Multilineinputstyles = StyleSheet.create({

    inputview:
    {
      width: wp('85%'),
      height:wp('50%'),
      alignSelf: 'center',
      alignContent:"center",
      marginTop:wp('10%'),
      // /backgroundColor:'red'
    },
  
  
    input:
    { 
        height:wp('30%'),
        width:wp('72%'), 
        textAlignVertical: 'top',
        color: 'rgba(26, 26, 26, 0.56)',
        fontWeight:'500',
    //backgroundColor:'red'
    },
    action: {
      borderWidth:1,
      borderColor: 'rgba(26, 26, 26, 0.25)',
      backgroundColor: 'white',
      width: wp('80%'),
      height: wp('30%'),
      alignSelf: 'center',
      marginBottom: wp('2%'),
      alignItems: 'center',
      paddingTop: wp('3%'),
      paddingLeft: wp('5%'),
      paddingRight: wp('5%'),
      borderRadius:30
    },

});
export default Multilineinputstyles;
