import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, TextInput,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';
import CustomButtonhere from '../../components/Button/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feath from 'react-native-vector-icons/Feather';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Logostyles from '../../utills/GlobalStyles/LogoStyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';


const Hubs = ({ navigation }) => {

  //textfields



  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <ImageBackground source={require('../../assets/Authimages/BG.png')}
      resizeMode="cover" style={styles.container}>
              <View style={{flexDirection:'row',
          alignItems:'center',marginTop:20,
        // /backgroundColor:'red'
        }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
                   source={require('../../assets/Homeimages/menu.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Hubs</Text>

          </View>
   <View style={{alignItems:"center",marginTop:30}}>
                <Image
                 source={require('../../assets/Logo/logo.png')}
                    style={Logostyles.logo}
                    resizeMode='contain'
                />
                 </View>
   <View style={{alignItems:"center"}}>
            <Text style={Logostyles.underlogotext}>What you would like to share?
            </Text>
          </View>
           <View style={{marginTop:50,marginHorizontal:20}}>
               <View style={styles.functionmaincontainer}>
               <TouchableOpacity onPress={()=>navigation.navigate('Question')}>
                   <View style={styles.functionviews}>
                   <Image
                          source={require('../../assets/Hub/question.png')}
                    style={styles.functionimage}
                    resizeMode='contain'
                />

                   <Text style={styles.functiontext}>
                     Question
            </Text>
                   </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>navigation.navigate('CreatePost')}>
                   <View style={styles.functionviews}>
                   <Image
                          source={require('../../assets/Hub/file.png')}
                          style={styles.functionimage}
                    resizeMode='contain'
                />
             <Text style={styles.functiontext}>
                     Post
            </Text>
                   </View>
                   </TouchableOpacity>
               </View>
         
        
               <View style={styles.functionmaincontainer}>
               <TouchableOpacity onPress={()=>navigation.navigate('Project')}>
                   <View style={styles.functionviews}>
                   <Image
                 source={require('../../assets/Hub/list.png')}
                 style={styles.functionimage}
                    resizeMode='contain'
                />
            <Text style={styles.functiontext}>
                     Project
            </Text>
                   </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>navigation.navigate('Job')}>
                   <View style={styles.functionviews}>
                   <Image
                           source={require('../../assets/Hub/paper.png')}
                 style={styles.functionimage}
                    resizeMode='contain'
                />
               <Text style={styles.functiontext}>
                     Job
            </Text>
                   </View>
                   </TouchableOpacity>
               </View>
           </View>
    </ImageBackground>

  )
};

export default Hubs;