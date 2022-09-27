import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const videothumbnailstyles = StyleSheet.create({
    postpiccontainer:
    {
       alignSelf:"center",
        alignItems:"center",
        width:wp(90),
        height:hp(30),
        marginTop:hp(1),
        borderRadius:wp(3),
        justifyContent:"center"
    
    },
    postpic:
    {
        width:wp(90),
        height:hp(25),
        alignItems:'center',
        justifyContent:"center"
    },
imagestyle:
{ borderRadius: wp(3) }

});
export default videothumbnailstyles;
