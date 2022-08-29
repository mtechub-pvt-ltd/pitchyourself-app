import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        //position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        bottom: 10,
        height:wp('140%'),
        width:wp('100%'),
        alignItems: 'center',
        //justifyContent: 'flex-end',
      },
      mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      balancetext:
      {
        color: 'black',
        fontWeight: '600',
        fontSize: hp('3%'),
      },
      predefinedPlacesDescription: {
        color: '#1faadb',
      },
      listView: {
        elevation: 3,
        zIndex: 100,
        position: 'absolute',
        top: 70,
        width: '95%',
        alignSelf:'center',color:"black"
      },
      desc:
      {
        color:"black",
        fontSize:hp('1.6%'),
        fontWeight:'500'
      },
      locationInput: {
      borderWidth: 1,
      borderColor: '#E8E8E8',
      margin: 5,
      //borderRadius:20,
      width: '90%',
      marginHorizontal: 15,
      justifyContent: 'center',
      height: 50
      },
      inputTextStyles: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      width: '80%',
      textAlignVertical: 'center',
      paddingTop: 10
      },
      buttontext:
      {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
      },
      buttonview:
        {
          marginTop:wp('10%'),
          width:wp('65%'),
        alignItems:'center',
        alignSelf:'center',
        borderRadius:50,
        height:hp('6.5%'),
        justifyContent:'center',
        backgroundColor:Colors.Appthemecolor
        }
  });
  export default styles;
  