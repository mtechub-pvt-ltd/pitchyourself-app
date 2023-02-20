import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, TextInput, ScrollView,
  Image, View, Text, TouchableOpacity
} from 'react-native';

////////////////app components////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';

//////////////////app pakages////////////
import { Snackbar } from 'react-native-paper';

////////////////////app styles///////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Uploadstyles from '../../../utills/GlobalStyles/Upload';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setthumbnails } from '../../../redux/actions';

const Job = ({ navigation }) => {

  /////////////redux states///////
  const { video, links, id, thumbnails, } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();


  /////////TextInput References///////////
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  ///////////////textfields//////////////////
  const [companyname, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobdesc, setJobDesc] = useState('');

  ////////////button states////////////////
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
  const onDismissSnackBar = () => setVisible(false);

  //Api form validation
  const formValidation = async () => {
    // input validation
    if (companyname == '') {
      setsnackbarValue({ value: "Please Enter Company Name", color: 'red' });
      setVisible('true');
    }
    else if (jobTitle == '') {
      setsnackbarValue({ value: "Please Enter Job Title", color: 'red' });
      setVisible('true');
    }
    else if (jobdesc == '') {
      setsnackbarValue({ value: "Please Select Job Description", color: 'red' });
      setVisible('true');
    }
    else if (video == '') {
      setsnackbarValue({ value: "Please Select Video", color: 'red' });
      setVisible('true');
    }
    else {
  
      navigation.navigate('PostJob', { companyname, jobTitle, jobdesc, video })
    }
  }

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/Icons/back.png')}
              style={styles.topicon}
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Text style={Authtextstyles.maintext}>Post a Job</Text>
        </View>
        <View style={[Inputstyles.inputview, { marginTop: '6%' }]}>

          <View style={Inputstyles.action}>
            <TextInput
              placeholder="Company Name"
              onChangeText={setCompanyName}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input2.current.focus() }}
              blurOnSubmit={false}
              autoFocus={true}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />

          </View>
          <View style={Inputstyles.action}>
            <TextInput
              ref={ref_input2}
              placeholder="Job Title"
              onChangeText={setJobTitle}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input3.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />

          </View>
          <View style={[Multilineinputstyles.action, { height: wp('38%'), marginTop: wp('3%') }]}>
            <TextInput
              ref={ref_input3}
              placeholder="Job Description"
              onChangeText={setJobDesc}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              multiline={true}

              style={Multilineinputstyles.input}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('CustomCamera', { navplace: 'job' })}>
            <View style={Uploadstyles.mainview}>
              {thumbnails != '' ?
                <View style={{}}>
                  <Image
                    source={{ uri: thumbnails }}
                    style={Uploadstyles.setimages}
                    resizeMode='cover'
                  />
                </View>
                :
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={require('../../../assets/Icons/upload.png')}
                    style={Uploadstyles.uploadicon}
                    resizeMode='contain'
                  />
                  <Text style={Uploadstyles.uploadtext}>Add Short Video</Text>
                </View>
              }

            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonview}>
          <CustomButtonhere
            title={'CONTINUE'}
            widthset={'65%'}
            loading={loading}
            disabled={disable}
            onPress={() => formValidation()}
          />
        </View>

        <Snackbar
          duration={400}
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={{
            backgroundColor: snackbarValue.color,
            marginBottom: '20%',
            zIndex: 999,
          }}>
          {snackbarValue.value}
        </Snackbar>
      </ScrollView>
    </SafeAreaView>

  )
};

export default Job;