import React,{useState,useEffect} from 'react';
// Import required components
import {SafeAreaView, StyleSheet,Image,
     View,Text,TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButtonhere from '../../components/Button/CustomButton';
// Import Map and Marker
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import { HalaguestApi } from '../../utills/HalaguestApi';
import styles from './styles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Colors from '../../utills/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
const ChangeAddress = ({navigation}) => {
    const [eror, setError]=useState()
const [region, setRegion] = useState();
const [marker, setMarker] = useState();

const GetcurrLocation=()=>{

  Geocoder.init(HalaguestApi); 
    Geolocation.getCurrentPosition(
                  (position) => {
                  setRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0462,
                    longitudeDelta: 0.0261,
                  });
                  setMarker({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0462,
                    longitudeDelta: 0.0261,
                  });
                      Geocoder.from(position.coords.latitude,
                         position.coords.longitude)
                          .then(json => {
                              console.log(json);
      var addressComponent = json.results[0].address_components;
                          })

                          .catch(error => console.warn(error));
                  },
                  (error) => {
                      // See error code charts below.
                  
                              setError(error.message)
                     
                          console.log(error.code, error.message);
                  },
                  {
                      enableHighAccuracy: false,
                      timeout: 10000,
                      maximumAge: 100000
                  }
              );
}
useEffect(() => {
    GetcurrLocation()
  },[]);
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white',}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',
          alignItems:'center',marginTop:20
        //backgroundColor:'red'
        }}>
      
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
                   source={require('../../assets/Homeimages/menu.png')}
                   style={Inputstyles.inputicons}
                    resizeMode='contain'
                />
                 </TouchableOpacity>
                 <View style={{marginLeft:"12%"}}>
                 <Text style={Authtextstyles.maintext}>Location</Text>
                 </View>
  

            </View>
         
 
          </View>
       <View style={{height:'10%',marginTop:'3%',
       //backgroundColor:'red'
       }}>
   <GooglePlacesAutocomplete
           //ref={ref}
      placeholder='Search'
      styles={{
        textInputContainer: styles.locationInput,
        textInput: styles.inputTextStyles,
        listView: styles.listView,
        description:styles.desc,
        predefinedPlacesDescription: {
          color: 'yellow'
      }
    }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        console.log(data, details.description);
        Geocoder.init(HalaguestApi); 
        Geocoder.from(details.description)
        .then(json => {
          var location = json.results[0].geometry.location;
          console.log(location.lat, location.lng);
          setRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0462,
            longitudeDelta: 0.0261,
          });
          global.lat=location.latitude
          passLat(location)
          setMarker({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0462,
            longitudeDelta: 0.0261,
          });
        })
        .catch(error => console.warn(error));
      }}
      query={{
        key: 'AIzaSyBI8rEv2hwtOGBcvmHyBKYgw3EsV1obr0Q',
        language: 'en',
      }}
    />
</View>
      <View style={styles.container}>
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
      <TouchableOpacity onPress={()=>navigation.navigate('BottomTab')}>
      <View style={styles.buttonview}>
     <Text style={styles.buttontext}>Update</Text>
 </View>  
 </TouchableOpacity>
    </SafeAreaView>
  );
};
 
export default ChangeAddress;

