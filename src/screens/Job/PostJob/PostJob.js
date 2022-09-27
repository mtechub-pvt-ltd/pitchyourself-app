import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, TextInput, ScrollView,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

/////////////////////////app components/////////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import CustomModal from '../../../components/Modal/CustomModal';

//////////////////app pakages////////////
import { Snackbar } from 'react-native-paper';

/////////////////app icons////////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';

/////////////////app styles//////////////////
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Inputstyles from '../../../utills/GlobalStyles/Inputstyles';
import Multilineinputstyles from '../../../utills/GlobalStyles/Multilineinputstyle';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setthumbnails } from '../../../redux/actions';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostJob = ({ navigation, route }) => {

  console.log('here data previous:', route.params)
const[predata]=useState(route.params)

  /////////////redux states///////
  const { video, links, id, thumbnails, } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  /////////TextInput References///////////
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  ///////////////textfields//////////////////
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [reach, setReach] = useState('');
  const [hashtag, setHashtag] = useState('');

  ////////////button states////////////////
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
  const onDismissSnackBar = () => setVisible(false);

  //////////////////////Api Calling/////////////////
  const CreatePostJob = async () => {
    var user = await AsyncStorage.getItem('Userid')
    console.log("userid:", user)
    axios({
      method: 'POST',
      url: BASE_URL + 'user/create-hub',
      data: {
        userId: user,
        Title: predata.jobTitle,
        PostType: 'job',
        Video:predata.video,
        jobCompanyName: predata.companyname,
        jobDescription: predata.jobdesc,
        joblocation: location,
        jobSalaryRange: salary,
        Startdate: startdate,
        Enddate: enddate,
        jobLong: 'longitute',
        jobLat:'lat',
        Tag:reach,
        HashtagHub: hashtag,
        thumbnail: thumbnails
      },
    })
      .then(async function (response) {
        console.log("response", JSON.stringify(response.data))
        setloading(0);
        setdisable(0);
        dispatch(setthumbnails(""))            
        navigation.navigate('JobDetail',{id:response.data._id,navplace:'postjob'})

      })
      .catch(function (error) {
        setModalVisible(true)
        console.log("error", error)
      })
  }

  //Api form validation
  const formValidation = async () => {
    // input validation
    if (location == '') {
      setsnackbarValue({ value: "Please Enter location", color: 'red' });
      setVisible('true');
    }
    else if (salary == '') {
      setsnackbarValue({ value: "Please Enter Salary Range", color: 'red' });
      setVisible('true');
    }
    else if (startdate == '') {
      setsnackbarValue({ value: "Please Enter Start Date", color: 'red' });
      setVisible('true');
    }
    else if (enddate == '') {
      setsnackbarValue({ value: "Please Enter End Date", color: 'red' });
      setVisible('true');
    }
    else if (hashtag == '') {
      setsnackbarValue({ value: "Please Enter Hashtag", color: 'red' });
      setVisible('true');
    }
    else if (reach == '') {
      setsnackbarValue({ value: "Please Enter Reach Tags", color: 'red' });
      setVisible('true');
    }
    else {
      setloading(1);
      setdisable(1);
      CreatePostJob()
    }
  }
  //datepicker states
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [mode1, setMode1] = useState('date');
  const [date1, setDate1] = useState(new Date());
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showyearwise, setshowyearwise] = useState(false);
  const [birthdaydaywise, setbirthdaydaywise] = useState('');
  const [startdate, setstartdate] = useState('');
  const [enddate, setenddate] = useState('');
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
      //setshowyearwise(year + "-" + month + "-" + day)
      setstartdate(day + "-" + month + "-" + year).toISOString()
      // setbirthdaydaywise(day + "-" + month + "-" + year).toISOString()
      console('start date ha yhn',startdate)
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
      //setbirthdaydaywise(day + "-" + month + "-" + year).toISOString()
      setenddate(day + "-" + month + "-" + year).toISOString()
      console('end date ha yhn',enddate)
    }

  }
  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode1(currentMode);
    console.log('mode', mode1)
  };
  const showDatepicker1 = () => {
    showMode1('date');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    console.log('mode', mode)
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
              color: '#1669F',
              textColor: '#1669F'
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
              color: '#1669F',
              textColor: '#1669F'
            }}
          />
        )}

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
          {/* <TouchableOpacity onPress={() => navigation.navigate('ChangeAddress')}> */}
            <View style={Inputstyles.action}>
              <TextInput
                placeholder="Location / Postcode"
                onChangeText={setLocation}
                returnKeyType={"next"}
                onSubmitEditing={() => { ref_input2.current.focus() }}
                blurOnSubmit={false}
                autoFocus={true}
                //editable={false}
                placeholderTextColor={Colors.inputtextcolor}
                autoCapitalize="none"
                style={Inputstyles.input}
              />

            </View>
          {/* </TouchableOpacity> */}
          <View style={Inputstyles.action}>
            <TextInput
              ref={ref_input2}
              placeholder="What’s the salary / Day Range"
              onChangeText={setSalary}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input3.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />

          </View>
          <TouchableOpacity onPress={showDatepicker}>
            <View style={Inputstyles.action}>
              <TextInput
                ref={ref_input3}
                placeholder="Start Date"
                value={startdate}
                onChangeText={onChange}
                returnKeyType={"next"}
                onSubmitEditing={() => { ref_input4.current.focus() }}
                editable={false}
                placeholderTextColor={Colors.inputtextcolor}
                autoCapitalize="none"
                style={Inputstyles.input}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={showDatepicker1}>
            <View style={Inputstyles.action}>
              <TextInput
                ref={ref_input4}
                placeholder="End Date"
                onChangeText={onChange1}
                returnKeyType={"next"}
                onSubmitEditing={() => { ref_input5.current.focus() }}
                editable={false}
                value={enddate}
                placeholderTextColor={Colors.inputtextcolor}
                autoCapitalize="none"
                style={Inputstyles.input}
              />

            </View>
          </TouchableOpacity>
          <View style={Inputstyles.action}>
            <TextInput
              ref={ref_input5}
              placeholder="Unique Hashtag"
              onChangeText={setHashtag}
              returnKeyType={"next"}
              onSubmitEditing={() => { ref_input6.current.focus() }}
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={Inputstyles.input}
            />

          </View>

          <View style={[Multilineinputstyles.action, { height: wp('38%'), marginTop: wp('3%') }]}>
            <TextInput
              ref={ref_input6}
              placeholder="Tag Relevant Profession to increase the reach"
              onChangeText={setReach}
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
            loading={loading}
            disabled={disable}
            onPress={() => formValidation() }
          //onPress={() => navigation.navigate('JobDetail',{item:'Applied'})}
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
        <CustomModal
          modalVisible={modalVisible}
          CloseModal={() => setModalVisible(false)}
          Icon={<AntDesign
            name="closecircle"
            color={'red'}
            size={60}
          />}
          text={'Data not Submitted'}
          buttontext={'OK'}
          onPress={() => { setModalVisible(false) }}
        />
        <CustomModal
          modalVisible={modalVisible1}
          CloseModal={() => setModalVisible1(false)}
          Icon={<AntDesign
            name="closecircle"
            color={'red'}
            size={60}
          />}
          text={'Problem in Submition'}
          buttontext={'OK'}
          onPress={() => { setModalVisible1(false) }}
        />
      </ScrollView>
    </SafeAreaView>

  )
};

export default PostJob;