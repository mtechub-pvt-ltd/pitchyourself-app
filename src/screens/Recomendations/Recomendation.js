
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView, FlatList,TextInput,
    Image, View, Text, TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-paper';
import styles from './styles';
import Authtextstyles from '../../utills/GlobalStyles/Authtextstyles';
import Inputstyles from '../../utills/GlobalStyles/Inputstyles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58694a0f-3da13-471f-bd96-147671e29d72',
        name: 'Michael Bruno',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad43ybb28ba',
        name: 'Michael Bruno',
    },
    {
        id: '3ac68afc-c625-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58694a0f-3hf71-471f-bd96-145571e29d72',
        name: 'Michael Bruno',
    },
    {
        id: '3ae48afc-c675-48d3-a4f8-fbd91aa97f63',
        name: 'Michael Bruno',
    },
    {
        id: '58904a0f-3hf71-471f-bd96-145571l29d72',
        name: 'Michael Bruno',
    },
    {
        id: '589744a0f-3hf71-471f-bd96-145571l29d72',
        name: 'Michael Bruno',
    },
];


const Recomendations = ({ navigation }) => {

    //textfields
    useEffect(() => {

        //SplashScreen.hide();
    }, []);
    return (

        <SafeAreaView style={styles.container}>
    
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', marginTop: 30
                    //backgroundColor:'red'
                }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Image
                                source={require('../../assets/Icons/back.png')}
                                style={Inputstyles.inputicons}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <View style={{ marginLeft: "12%" }}>
                            <Text style={Authtextstyles.maintext}>Recommendations</Text>
                            <Text style={styles.recomend}>Lorem ipsum dolor sit amet, consetetur</Text>
                        </View>


                    </View>
                </View>
                <View style={{ marginLeft: 20, marginBottom: 10, marginTop: 20 }}>
                    <Text style={styles.recomend}>30 Recommendations</Text>
                </View>
                <Divider/>
                <View style={styles.postcard}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => (

                            <View style={styles.card}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-around', 
                        alignItems: 'center',marginBottom:20 }}>
                            <View style={{}}>
                                <Image
                                    source={require('../../assets/images/user.png')}
                                    style={styles.userimage}
                                    resizeMode='contain'
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, color: '#1B1B1B', fontWeight: '700' }}>Michael Bruno</Text>
                                <Text style={[styles.recomend, { color: '#7A8FA6' }]}>Lorem ipsum dolor sit amet,
                                    consetetur sadipscing </Text>
                            </View>
                            <View style={{marginLeft:30}}>
                                <Image
                                    source={require('../../assets/images/like.png')}
                                    style={styles.likeimage}
                                    resizeMode='contain'
                                />
                            </View>

                    </View>
                           
                     

                            </View>

                        )}
                        //keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                                        />
      
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',
                 alignItems:'center',
            marginHorizontal:25}}>
                <View style={[Inputstyles.action,{width:'77%'}]}>
            <TextInput
              placeholder="Add Comment"
              placeholderTextColor={Colors.inputtextcolor}
              autoCapitalize="none"
              style={[Inputstyles.input]}
            />

          </View>
          <Image
                    source={require('../../assets/images/send.png')}
                    style={styles.userimage}
                    resizeMode='contain'
                />
                </View>
        </SafeAreaView>

    )
};

export default Recomendations;