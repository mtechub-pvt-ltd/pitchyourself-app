import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../utills/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  topview:
{
  flexDirection:'row',
justifyContent:'space-between',
          alignItems:'center',
          marginTop:wp(10),
          marginHorizontal:wp(5)
        },
        maintext:
        {
          color: 'rgba(29, 34, 38, 1)',
          fontWeight: 'bold',
          fontSize: hp('3%'),
        },
        backicon:
        { 
            width: wp(5),
             height: hp(2)
            },
            searchicon:
            { 
                width: wp(5),
                 height: hp(5)
                }

});
export default styles;
