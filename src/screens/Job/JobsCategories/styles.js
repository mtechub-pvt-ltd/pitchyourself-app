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
    backgroundColor:'white'
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
     borderColor:'black',
    //borderWidth: 1,
    marginTop:wp('2%'),
    marginBottom:wp('2%'),
    borderRadius:10,
   alignContent:"center",
   alignItems:'center',
   width: wp('50%'),
    alignSelf:'center',
    //backgroundColor:"red"
    //justifyContent:'space-between',
    //marginHorizontal:wp('5%')
  },

  itemimageView:
  {
      height:wp('30%'),
      width:wp('45%'),
      //margin:wp('3%'),
      borderRadius:15
  
  },
  
  card1:
  {

    marginTop:wp('2%'),
    marginBottom:wp('2%'),
    borderRadius:10,
   width: wp('100%'),
  },

  itemimageView1:
  {
      height:wp('30%'),
      width:wp('32%'),
      //margin:wp('3%'),
      borderRadius:15
  
  },
  useritemtext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('2%'),
    //textAlign:'center'
  },
  itemtext:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('2%'),
    //marginLeft:wp('4%')
    //textAlign:'center'
  },
  itemtext1:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.5%'),
    marginLeft:wp('4%')
    //textAlign:'center'
  },

  cardtext:
  {
    color:'black', 
    marginBottom:20,marginTop:20,
     fontFamily:'Poppins',fontSize:18,
     textAlign:'center'

  },
  inputview:
  {
    width: wp('95%'),
    //height:hp('100%'),
    alignSelf: 'center',
    alignContent:"center",
    marginBottom:hp('23%'),
    // /backgroundColor:'red'
  },
postcard:
  {
      width:wp('90%'),
      // /height:hp('65%'),
      borderWidth:1,
      borderColor:'#70707038',
      alignSelf:"center",
  borderRadius:25,
  marginTop:'5%',

},
mainusercontainer:
{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    marginTop:wp('4%'),
    marginLeft:wp('2%')
},
userimage:
{
    width:wp('15%'),
    height:wp('12%'),
},
usermaintext:
{
    fontSize:hp('2%'),
    fontWeight:'bold',
    color:Colors.Appthemecolor
},
usertime:
{
    fontSize:hp('1.5%'),
    fontWeight:'bold',
    color:'#BABDC9'
},
iconimages:
{
    width:wp('10%'),
    height:wp('15%'),
},
postdesc:
{
    fontSize:hp('1.5%'),
    fontWeight:'400',
    color:'rgba(68, 77, 110, 1)',
    width:wp('80%')

},
card:
{

 alignContent:"center",
 alignItems:'center',
  alignSelf:'center',
  justifyContent:'space-between',

},


postpiccontainer:
{
    //backgroundColor:"red",
    alignItems:"center",
    height:wp('65%'),
},
postpic:
{
    width:wp('90%'),
    height:wp('63%'),
},


});
export default styles;
