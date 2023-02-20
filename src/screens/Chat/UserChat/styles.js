import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    //alignContent: 'center',
    backgroundColor:'white',
    paddingHorizontal:wp('2%')
  },

postcard:
  {
    //paddingVertical: 15,
    //marginVertical: 10,
     // alignSelf:"center",
  marginTop:hp(1),
  height:hp('78%')
},
messageContainer: {
  backgroundColor: 'rgba(228, 228, 228, 1)',
  maxWidth: "80%",
  alignSelf: "flex-end",
  flexDirection: "row",
  borderRadius: 15,
  paddingHorizontal: 10,
  marginHorizontal: 10,
  paddingTop: 10,
  paddingBottom: wp(3),
  margin:wp('1.5%'),
  borderTopRightRadius: 0,
},
messageContainerleft: {
	alignSelf: "flex-start",
	backgroundColor: "rgba(255, 151, 39, 0.23)",
  maxWidth: "80%",
  flexDirection: "row",
  borderRadius: 15,
  paddingHorizontal: 10,
  marginHorizontal: 0,
  padding: 10,
  paddingBottom:wp(3),
  margin:wp('1.5%'),
  borderTopLeftRadius: 0,
},
messageView: {
  backgroundColor: "transparent",
  maxWidth: "80%",
},
timeView: {
  backgroundColor: "transparent",
  justifyContent: "flex-end",
  paddingLeft: 10,
},
message: {
  color: "rgba(45, 62, 80, 1)",
  alignSelf: "flex-start",
  fontSize: 15,
},
time: {
  color: "rgba(45, 62, 80, 1)",
  alignSelf: "flex-end",
  fontSize: 10,
},
});
export default styles;
