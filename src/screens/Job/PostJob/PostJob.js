import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import CustomButtonhere from '../../../components/Button/CustomButton';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const PostJob = ({ navigation }) => {

        //datepicker states
const [date, setDate] = useState(new Date());
const [mode, setMode] = useState('date');
const [mode1, setMode1] = useState('date');
const [date1, setDate1] = useState(new Date());
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const [showyearwise, setshowyearwise] = useState(false);
const [birthdaydaywise, setbirthdaydaywise] = useState('');

//datepicker
const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
  var d = new Date();
  d = selectedDate
  if (d != undefined) {
    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");
    console.log(year + '-' + month + '-' + day);
    console.log(typeof (year + '-' + month + '-' + day))
    setshowyearwise(year + "-" + month + "-" + day)
   // setbirthdaydaywise(day + "-" + month + "-" + year).toISOString()
    //console('date ha yhn',showyearwise)
  }

}
const onChange1 = (event, selectedDate) => {
  const currentDate = selectedDate || date1;
  setShow1(Platform.OS === 'ios');
  setDate1(currentDate);
  var d = new Date();
  d = selectedDate
  if (d != undefined) {
    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");
    console.log(year + '-' + month + '-' + day);
    console.log(typeof (year + '-' + month + '-' + day))
    //setshowyearwise(year + "-" + month + "-" + day)
    setbirthdaydaywise(day + "-" + month + "-" + year).toISOString()
    //console('date ha yhn',showyearwise)
  }

}
const showMode1 = (currentMode) => {
  setShow1(true);
  setMode1(currentMode);
  console.log('mode',mode1)
};
const showDatepicker1 = () => {
  showMode1('date');
};
const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
  console.log('mode',mode)
};
const showDatepicker = () => {
  showMode('date');
};

  //textfields


  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
            <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
              {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          
          is24Hour={true}
          display="default"
          textColor="red"
          themeVariant="light"
          onChange={onChange}
          style={{
            shadowColor: '#fff',
            shadowRadius: 0,
            shadowOpacity: 1,
            shadowOffset: { height: 0, width: 0 },
            color:'#1669F',
            textColor:'#1669F'
          }}
        />
      )}
                   {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode1}
          
          is24Hour={true}
          display="default"
          textColor="red"
          themeVariant="light"
          onChange={onChange1}
          style={{
            shadowColor: '#fff',
            shadowRadius: 0,
            shadowOpacity: 1,
            shadowOffset: { height: 0, width: 0 },
            color:'#1669F',
            textColor:'#1669F'
          }}
        />
      )}
  
          <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.navigate('Hubs')}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={styles.topicon}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Post a Job</Text>
          </View>
          <View style={[Inputstyles.inputview,{marginTop:'6%'}]}>
          <TouchableOpacity  onPress={()=> navigation.navigate('ChangeAddress')}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Location / Postcode"
              editable={false}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          </TouchableOpacity>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="What’s the salary / Day Range"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          <TouchableOpacity  onPress={showDatepicker}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Start Date"
              value={showyearwise}
              editable={false}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={showDatepicker1}>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="End Date"
              editable={false}
              value={birthdaydaywise}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
          </TouchableOpacity>
          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Unique Hashtag"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />
  
          </View>
     
          <View style={[Multilineinputstyles.action,{height:wp('38%'),marginTop:wp('3%')}]}>
            <TextInput
              placeholder="Tag Relevant Profession to increase the reach"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}
              
              style={Multilineinputstyles.input}
            />
  
          </View>


        </View>
    

<View style={styles.buttonview}>
<CustomButtonhere
              title={'COMPLETE'}
              widthset={'65%'}
              onPress={() => navigation.navigate('JobDetail',{item:'Applied'})}
            />
</View>

  </ScrollView>
    </SafeAreaView>

  )
};

export default PostJob;