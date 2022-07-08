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


const QuestionDetail = ({ navigation }) => {

  //textfields
const[star,setstar]=useState(false)
//make toggleview

const toggleview=()=>
{
  if(star=== false)
  {
    setstar(true)
  }
  else{
    setstar(false)
  }
}

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <SafeAreaView style={styles.container}>
          <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.navigate('Question')}>
          <Image
                   source={require('../../../assets/Icons/back.png')}
                   style={{width:50,height:20}}
                    resizeMode='contain'
                />
          </TouchableOpacity>
     
          <Text style={Authtextstyles.maintext}>Question Detail</Text>
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
                    title='JOB'
                    />
    
                </View>
                                                <View   style={[styles.iconview,{marginLeft:30}]}>
                                            <Image
                                          source={require('../../../assets/Homeimages/orangestart.png')}
                                          style={{width:80,height:20}}
                                              resizeMode='contain'
                                          />
                                          </View>
                                       
                             
                 </View>
                 <View style={{marginLeft:30,marginBottom:10}}>
                 <Text style={styles.postdesc}>Question :</Text>
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
            
                 <View style={{flexDirection:'row',marginLeft:20,
                 marginRight:20,
                 justifyContent:'space-between'}}>
                 <BadgeView 
                    title='Advice'
                    />
                 <BadgeView 
                    title='Advice'
                    />
                      <BadgeView 
                    title='Advice'
                    />
                      <BadgeView 
                    title='Advice'
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

export default QuestionDetail;