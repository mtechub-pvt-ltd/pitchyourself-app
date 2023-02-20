import * as React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

///////////////app styles////////////////
import styles from './styles';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';



const CustomHeader = (props) => {
  console.log('props',props)

    return(
        <View style={styles.topview}>
        <TouchableOpacity onPress={props.navigation}>
          <Image
            source={require('../../assets/Icons/back.png')}
            style={styles.backicon}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <Text style={styles.maintext}>{props.screentitle}</Text>
{props.navtype === 'home'?

<Image
source={require('../../assets/Homeimages/search.png')}
style={styles.searchicon}
resizeMode='contain'
/>
: 
<View></View>
}

      </View>
    )
};

export default CustomHeader;