import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignContent: 'center',
    backgroundColor:'white'
  },
topview:
{flexDirection:'row',
justifyContent:'flex-start',
          alignItems:'center',
          marginTop:wp('10%'),
          marginBottom:wp('5%')
        //backgroundColor:'red'
        },
topicon:
{
  width:wp('5%'),
  height:wp('5%'),
  marginLeft:wp('3%'),
  marginRight:wp('5%')
},
  buttonview:
  {
marginTop:hp('10%')
  },

  lasttext:
  {
    color: 'rgba(26, 26, 26, 0.56)',
    fontWeight: '400',
    fontSize: hp('1.8%'),
    marginLeft:wp('3%'),
    width:wp('70%')
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    width: wp(80),
    backgroundColor: "white",
    borderRadius: wp(8),
    alignItems: "center",
    shadowColor: "#000",
 
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  maintext:
  { 
      paddingTop:hp(3),
      fontSize:hp(3),
      fontWeight:'700',
      color:'#1D2226',
      fontFamily: "Poppins",
      textAlign:'center'
  },
  modaltext:
  { 
    width:wp(60),
      marginTop:hp(3),
      fontSize:hp(1.8),
      fontWeight:'700',
      color:'#1D2226',
      fontFamily: "Poppins",
      textAlign:'center'
  },

  ApprovedView:
  {
    height: hp('5.5%'),
    width: wp('40%'),
     borderRadius:45,
     marginTop:hp(5),
     backgroundColor:Colors.Appthemecolor,
     alignContent:'center',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:wp('12%')
  },
  Pendingtext:
  {
      textAlign:'center',
      margin:10,color:'white',
      fontSize:15,fontWeight:'bold',
      paddingBottom:1
  },


  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 35,
    textAlign: "center"
  },
  buttonview:
  {
      flexDirection:'column', justifyContent:"flex-end",
marginBottom:30,marginTop:'40%',
  },
  maintext:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    fontFamily: "Montserrat Bold",
  },
});
export default styles;
