import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    centeredView: {
        zIndex:0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      },
      modalView: {
        width: wp('75%'),
        paddingTop:wp(5),
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
      modaltext:
      { 
        width:wp('60%'),
          marginTop:hp(3),
          fontSize:hp(2),
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
  