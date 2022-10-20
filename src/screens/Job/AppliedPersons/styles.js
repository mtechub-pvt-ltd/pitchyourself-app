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
    justifyContent: 'flex-start',
    // alignContent: 'center',
    backgroundColor: 'white'
  },

  balancetext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('3%'),
  },
  balanceprice:
  {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },

  card:
  {
    borderColor: 'black',
    marginTop: wp('2%'),
    borderRadius: 10,
    alignContent: "center",
    alignItems: 'center',
    width: wp('50%'),
    alignSelf: 'center',
  },
  itemimageView:
  {
    height: wp('30%'),
    width: wp('45%'),
    borderRadius: 1
  },
  recomend:
  {
    fontSize: hp(2),
    fontWeight: '400',
    color: '#1A1A1A',
    width: wp(90),
    
  },
  card1:
  {
    marginTop: wp('2%'),
    marginBottom: wp('2%'),
    borderRadius: 10,
    width: wp('100%'),
  },

  itemimageView1:
  {
    height: wp('30%'),
    width: wp('32%'),
    borderRadius: 15

  },
  useritemtext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('2%'),
  },
  itemtext:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('2%'),
  },
  itemtext1:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.5%'),
    marginLeft: wp('4%')
  },

  cardtext:
  {
    color: 'black',
    marginBottom: 20, marginTop: 20,
    fontFamily: 'Poppins', fontSize: 18,
    textAlign: 'center'

  },
  inputview:
  {
    width: wp('95%'),
    alignSelf: 'center',
    alignContent: "center",
    marginBottom: hp(2),
    paddingBottom: hp(15)
  },
  postcard:
  {
    width: wp('90%'),
    borderWidth: 1,
    borderColor: '#70707038',
    alignSelf: "center",
    borderRadius: 25,
    marginTop: hp(2),
  },
  mainusercontainer:
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: wp('4%'),
    marginLeft: wp('2%'),
    marginHorizontal:wp(5),
    marginBottom:hp(3)
  },
  userimageview:
{
    width:wp(13),
    height:wp(13),
    borderColor:Colors.Appthemecolor,
    borderRightWidth:5,
    borderRadius:wp(20),
    alignItems:'center',
    justifyContent:'center'
},
  userimage:
  {
    width: wp(12),
    height: wp(12),
    
  },
  usermaintext:
  {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: Colors.Appthemecolor
  },
  usertime:
  {
    fontSize: hp('1.5%'),
    fontWeight: 'bold',
    color: '#BABDC9'
  },
  iconimages:
  {
    width: wp('10%'),
    height: wp('15%'),
  },
  postdesc:
  {
    fontSize: hp('1.5%'),
    fontWeight: '400',
    color: 'rgba(68, 77, 110, 1)',
    width: wp('80%')

  },
  card:
  {

    alignContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',

  },

  ApprovedView:
  {
    height: hp('5.5%'),
    width: wp(37),
     borderRadius:15,
     //marginTop:hp(5),
     backgroundColor:Colors.Appthemecolor,
     alignContent:'center',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:wp('12%')
  },
  Pendingtext:
  {
      textAlign:'center',
      margin:10,
      color:'white',
      fontSize:hp(1.8),
      fontWeight:'400',
      paddingBottom:1
  },
});
export default styles;
