import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
    Image, View, Text, TouchableOpacity, 
} from 'react-native';
import BadgeView from '../../../components/BadgeView/BadgeView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feath from 'react-native-vector-icons/Feather';
import styles from './styles';
import Authtextstyles from '../../../utills/GlobalStyles/Authtextstyles';
import Colors from '../../../utills/Colors';


const ProjectDetail = ({ navigation }) => {

  //textfields


  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <SafeAreaView style={styles.container}>
          <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.navigate('Project')}>
          <Image
                     source={require('../../../assets/Icons/back.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Project Detail</Text>
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
                <View>
                <Text style={styles.usermaintext}>Lorem ipsum</Text>
                <Text style={styles.usertime}>01 : 00 pm</Text>
                </View>
                </View>
             
                <View style={{flexDirection:"row"}}>
                <BadgeView 
                    title='Project'
                    />
                <Image
                source={require('../../../assets/Homeimages/star.png')}
                style={styles.iconimages}
                    resizeMode='contain'
                />
                </View>
                 </View>
                 <View style={{marginLeft:30,marginBottom:10}}>
                 <Text style={styles.postdesc}>Project :</Text>
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
                <View style={{marginLeft:30,marginBottom:10}}>
                 <Text style={styles.postdesc}>Title Here</Text>
                 </View>
                 <View style={{marginLeft:30,marginBottom:10}}>
                 <Text style={[styles.postdesc,{color:Colors.Appthemecolor}]}>The Team</Text>
                 </View>
                 <View style={{flexDirection:'row',marginLeft:30}}>
                 <Image
                 source={require('../../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                   <Image
                 source={require('../../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                   <Image
                 source={require('../../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                   <Image
                 source={require('../../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                   <Image
                 source={require('../../../assets/Homeimages/user.png')}
                 style={styles.userimage}
                    resizeMode='contain'
                />
                 </View>
                <View style={{marginLeft:30,marginTop:10}}>
                <Text style={styles.recomend}>
                    #tag #video #tag #video #tag #video 
                #tag #video #tag #video #tag #video #tag #video #tag #video #tag 
                #video #tag #video #tag #video #tag #video #tag #video
                 #tag #video #tag #video #tag #video #tag #video #tag #video #tag #video #tag #video</Text>
                </View>
             

        </View>
        </View>
    </SafeAreaView>

  )
};

export default ProjectDetail;