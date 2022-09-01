import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const Inputstyles = StyleSheet.create({

    inputview:
    {
      width: wp(85),
      alignSelf: 'center',
      alignContent:"center",
      marginTop:wp(0),
    },
    input:
{
      backgroundColor: 'white',
       width: wp(65), 
       alignSelf: 'center', 
       color: 'rgba(26, 26, 26, 0.56)',
       fontWeight:'500',
      borderRadius: 40,   
    },
    numberinput:
    {
          backgroundColor: Colors.Appthemecolor,
           width: wp(25),
           color: 'rgba(26, 26, 26, 0.56)',
           fontWeight:'500',
          borderTopLeftRadius: 40,   
          borderBottomLeftRadius: 40,   
          borderWidth:1,
          borderColor:Colors.Appthemecolor,
          paddingLeft:wp(5)
        },
        numberinputaction: {
          flexDirection: 'row',
          marginTop: 10,
          borderWidth:1,
          borderColor: 'rgba(26, 26, 26, 0.25)',
          backgroundColor: 'white',
          width: wp(80),
          height: wp(13),
          alignSelf: 'center',
          marginBottom: wp(2),
          borderRadius: 40,
       
          paddingRight: wp(4),
          alignItems: 'center'
        },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderWidth:1,
      borderColor: 'rgba(26, 26, 26, 0.25)',
      backgroundColor: 'white',
      width: wp(80),
      height: wp(13),
      alignSelf: 'center',
      marginBottom: wp(2),
      borderRadius: 40,
      paddingLeft: wp(5),
      paddingRight: wp(4),
      alignItems: 'center'
    },
inputicons:
{
  width:wp(5),
  height:wp(5)}
});
export default Inputstyles;
