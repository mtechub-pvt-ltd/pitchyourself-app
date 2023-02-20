import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../utills/Colors";
import {
    responsiveFontSize,
    responsiveHeight,
  } from 'react-native-responsive-dimensions';
  const {width} = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
  //      flex: 1,

  //       backgroundColor: 'rgba(0,0,0,0.9)',
  // justifyContent: 'center',
  //       paddingBottom: responsiveHeight(10),
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
      },
      overlaySet: {
        flex: 1,
        flexDirection: 'row',
      },
      icon: {
        color: 'white',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        // backgroundColor: 'red',
        height: responsiveHeight(15),
        alignSelf: 'center',
      },
      sliderCont: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
      timer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
      },
      video: {

        width:width/1.05,
        height: width * 0.6,
        backgroundColor: 'rgba(0,0,0,0.2)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    
        elevation: 9,
      },
      fullscreenVideoportrait: {
          flex:1,
        backgroundColor: 'black',
        ...StyleSheet.absoluteFill,
        elevation: 1,
        height: width * 0.5,
    alignSelf:'center',
    justifyContent:'center',
    marginTop:'80%'

      },
      fullscreenVideolandscpae: {
        backgroundColor: 'black',
        ...StyleSheet.absoluteFill,
        elevation: 1,
      },
  });
  export default style;