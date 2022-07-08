import React, { useEffect, useState } from 'react';
import {
TextInput,
    Image, View, Text, ImageBackground
} from 'react-native';
import CustomButtonhere from '../../components/Button/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

const VerifyCode = ({ navigation }) => {
//cell number
const CELL_COUNT = 4;

const [value, setValue] = useState('');
const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
const [props, getCellOnLayoutHandler] = useClearByFocusCell({
  value,
  setValue,
});
  //textfields

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <ImageBackground source={require('../../assets/Authimages/BG_1.png')}
      resizeMode="cover" style={styles.container}>
   <View style={{marginTop:'20%',marginLeft:'10%'}}>
                <Image
                 source={require('../../assets/Authimages/Verify.png')}
                    style={styles.topimage}
                    resizeMode='contain'
                />
                 </View>

           
            <View style={Authtextstyles.maintextview}>
            <Text style={Authtextstyles.maintext}>Verify Code</Text>
          </View>
          <View style={Authtextstyles.subtextview}>
            <Text style={Authtextstyles.subtext}>Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod
            </Text>
          </View>

          <View style={styles.Cellview}>
<CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        //style={styles.input}
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      </View>
 
<View style={styles.buttonview}>
<CustomButtonhere
              title={'VERIFY CODE'}
              widthset={'60%'}
              onPress={() => navigation.navigate('UpdatePassword')}
            />
</View>

       </ImageBackground>

  )
};

export default VerifyCode;