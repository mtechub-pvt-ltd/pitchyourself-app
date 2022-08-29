import {
    StyleSheet,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    topmainview:
    {
        backgroundColor:'white',
        height:hp(8),
        width:wp(100),
        alignItems:'center',
        justifyContent:'center',
            //padding:'5%',
            position:"absolute",
            top:0,
             
         },
    bottommainview:
    {
        backgroundColor:'white',
        height:hp(12),
        width:wp(100),
            alignItems:'center',
            justifyContent:'center',
            position:"absolute",
            //top:0,
            bottom:0         
         },
         iconsview:  
         {
           width:wp(100),
            alignItems:'center',
            flexDirection:'row',
           justifyContent:"space-between",
       paddingHorizontal:wp(3),
           },
  

});

export default styles