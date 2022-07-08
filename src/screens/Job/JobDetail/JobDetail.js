import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,ScrollView,
    Image, View, Text, TouchableOpacity, 
} from 'react-native';
import CustomButtonhere from '../../../components/Button/CustomButton';
import OutlineButton from '../../../components/Button/OutlineButton';
import MapView, {Marker} from 'react-native-maps';
import BadgeView from '../../../components/BadgeView/BadgeView';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Colors from '../../../utills/Colors';


const JobDetail = ({ navigation,route }) => {
console.log('items here:',route.params)
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
          <View style={styles.topview}>
              <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
          <TouchableOpacity onPress={() => navigation.navigate('Question')}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={[Authtextstyles.maintext,{marginLeft:10}]}>Job Detail</Text>
          </View>
          <Image
                   source={require('../../../assets/Homeimages/search.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </View>
      <View style={styles.inputview}>
<View style={styles.postcard}>
<View style={styles.mainusercontainer}>
    <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>
<View style={{}}>
                <Image
                 source={require('../../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                </View>
                <View style={{marginLeft:15}}>
                <Text style={styles.usermaintext}>Lorem ipsum</Text>
                <Text style={styles.usertime}>01 : 00 pm</Text>
                </View>
                </View>
             
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <BadgeView 
                    title='JOB'
                    />
                <Image
                source={require('../../../assets/Homeimages/stars.png')}
                style={styles.iconimages}
                    resizeMode='contain'
                />
                </View>
                 </View>
                 <View style={{marginLeft:25,marginBottom:10}}>
                 <Text style={styles.postdesc}>Title</Text>
                 <Text style={styles.postdesc}>Lorem ipsum dolor sit amet,
                  consetetur</Text>
                 </View>
              
                 <View style={styles.postpiccontainer}>
      
                <Image
                 source={require('../../../assets/Homeimages/postpic.png')}
                 style={styles.postpic}
                    resizeMode='contain'
                />
                </View>
                <View style={{marginLeft:25,marginBottom:10,marginTop:10}}>
                 <Text style={styles.postdesc}>Video Grapher for : Creative HUB</Text>
                 <Text style={styles.postdesc}> 29th June - 1st July</Text>
                  <Text style={styles.postdesc}>London</Text>
                 </View>
                 <View style={{flexDirection:'row',paddingHorizontal:25,
                 justifyContent:'space-between'}}>
                 <Text style={styles.horzontaltext}>UHT : #VID23456</Text>
                 <Text style={styles.horzontaltextright}>300 $ Per Day</Text>
                 </View>
                 <View style={{marginLeft:25,marginTop:10}}>
                 <Text style={[styles.postdesc,{color:'black'}]}>Job Detail</Text>
                 <Text style={[styles.postdesc,{marginTop:10}]}>Lorem ipsum dolor sit amet, 
                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et accusam et justo duo 
                  dolores et ea rebum. Stet clita</Text>
                 </View>
                 <View style={{marginLeft:25,marginBottom:10,marginTop:10}}>
                 <Text style={[styles.postdesc,{color:'black'}]}>Location</Text>
                 </View>
                 <View style={styles.mapcontainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        //  customMapStyle={mapStyle}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
      {route.params.item === 'Applied'?
    <View style={styles.buttonview}>
    <View style={{flex:0.5,
              //backgroundColor:'red'
              }}>
              <OutlineButton
                  widthset={'30%'}
                  title='CANCEL'
                  //onPress={() => navigation.navigate('Screen1')}
              />
              </View>
                  <View style={{flex:0.5,alignSelf:'flex-end',
              //backgroundColor:'red'
              }}>
                  <CustomButtonhere
                  widthset={'20%'}
                  title='APPLY'
                  //onPress={() => navigation.navigate('Screen3')}
              />
              </View>
</View>
    :
    null

    }

        </View>
        </View>
        </ScrollView>
    </SafeAreaView>

  )
};

export default JobDetail;