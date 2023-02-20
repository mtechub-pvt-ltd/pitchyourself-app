import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
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
        fontSize:hp(2.3),
        fontWeight:'bold',
        color:'black',
        fontFamily: "Montserrat Bold",
      },
      contenttext:{
        fontSize:hp(2),
        fontWeight:'700',
        color:'black',
        fontFamily: "Montserrat Bold",
      },
      ContentView:
      {
        height: hp('5.5%'),
        width: wp(55),
         borderRadius:10,
         //backgroundColor:'rgba(255, 1, 39, 0.8)',
         alignContent:'center',
         alignItems:'center',
         justifyContent:'center',
         borderBottomColor:Colors.inputbordercolor,
         borderBottomWidth:1
         //marginBottom:hp(2)
      },
  });
  export default styles;
  