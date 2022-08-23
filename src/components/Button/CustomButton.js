import * as React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const CustomButtonhere = ({
    icon,
    mode,
    title,
    onPress,
    loading,
    disable,
    widthset
}) => {
    return(
<View style={styles.container}>
  <Button 
  color={Colors.Appthemecolor}
  icon={icon} 
  mode={mode}
  contentStyle={[styles.buttoncontent,{width:wp(widthset)}]}
  style={[styles.button,{width:wp(widthset)}]}
  labelStyle={styles.label}
  onPress={onPress}
  disabled={disable}
  loading={loading}
  >
    {title}
    {/* {Loading ? (
    <ActivityIndicator color="white" />
  ) : (
    <Text>{title}</Text>
  )} */}
  </Button>
  </View>
    )
};

export default CustomButtonhere;