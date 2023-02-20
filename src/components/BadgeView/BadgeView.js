import * as React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const BadgeView = (props) => {
  console.log('props',props)
    return(
<View style={styles.container}>
<View style={{backgroundColor:'white',
                        alignItems:'center',height:wp('8%'),justifyContent:'center'
,                        borderRadius:60,borderColor:Colors.Appthemecolor,borderWidth:1,
width:wp('18%')
}}>
                        <Text style={{color:Colors.Appthemecolor,
                        fontWeight:"400",fontSize:wp('3%')}}>
                            {props.title}</Text>
                        </View>
  </View>
    )
};

export default BadgeView;