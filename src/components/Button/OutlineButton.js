import * as React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const OutlineButton = ({
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
 buttonColor={Colors.Appthemecolor}
  icon={icon} 
  mode={"outlined"}
  contentStyle={[styles.buttoncontent1,{width:wp(widthset)}]}
  style={[styles.button1,{width:wp(widthset)}]}
  labelStyle={[styles.label1]}
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

export default OutlineButton;