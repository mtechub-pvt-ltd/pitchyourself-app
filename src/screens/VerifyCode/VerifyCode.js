import React, { useEffect, useState } from 'react';
import {
TextInput,
    Image, View, Text, ImageBackground
} from 'react-native';

//////////////app components////////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomModal from '../../components/Modal/CustomModal';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

/////////////app styles///////////////
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

const VerifyCode = ({ navigation, route }) => {
  console.log("obj:",route.params)

        //Modal States
        const [modalVisible, setModalVisible] = useState(false);

//cell number
const CELL_COUNT = 4;

const [value, setValue] = useState('');
const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
const [props, getCellOnLayoutHandler] = useClearByFocusCell({
  value,
  setValue,
});
 //check OTP Code
 const verifyno =()=>{
  console.log("obj:",route.params.otp  ,value )
  if(route.params.otp == value)
  {
    navigation.navigate('UpdatePassword',value)
  }
  else{
    setModalVisible(true)
    console.log('Wrong Code, Enter the right Code')
    console.log("not click")
  }
}

//code set in state
  const getcode=()=>{
    console.log("obj:",route.params)
    //setValue(route.params)
  }

  useEffect(() => {

    getcode()
  
  },[]);
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
              onPress={() => verifyno()}
              //onPress={() => navigation.navigate('UpdatePassword')}
            />
</View>
        <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={  <AntDesign
                  name="closecircle"
                  color={'red'}
                  size={60}
              />}
              text={'Wrong Code, Enter the right Code'}
         buttontext={'OK'}
 onPress={()=> {setModalVisible(false)}}
                /> 
       </ImageBackground>

  )
};

export default VerifyCode;