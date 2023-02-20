import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList,Dimensions,
    Image, View, Text, StyleSheet
} from 'react-native';



const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ];
  const Width = Dimensions.get("window").width;
  const Height = Dimensions.get("screen").height;
  import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
const numcolumns=1

import styles from './styles';

const Randomlist = ({ navigation }) => {

  ///////////////refresh state///////////////
  const [pagecount, setpagecount] = React.useState(1);


 useEffect(() => {

    }, []);
  
    const renderItem = ({ item }) => (

<View >
    {/* <Text style={styles.itemtext}>me here to this</Text> */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{}}>
          
        <Image
          source={require('../../assets/Profile/user4.png')}
          style={styles.lastimage}
          resizeMode='contain'
        />
        <Text style={styles.userpostimagetext}>
            Rhoncus ipsum
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/Profile/user3.png')}
          style={styles.lastimage}
          resizeMode='contain'
        />
         <Text style={styles.userpostimagetext}>
            Rhoncus ipsum
        </Text>
      </View>
      <View>
      <Image
        source={require('../../assets/Profile/user2.png')}
        style={styles.lastimage}
        resizeMode='contain'
      />
        <Text style={styles.userpostimagetext}>
          Rhoncus ipsum
      </Text>
      </View>

    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{}}>
        <View>

          <Image
            source={require('../../assets/Profile/user5.png')}
            style={styles.lastimage}
            resizeMode='contain'
          />
        <Text style={styles.userpostimagetext}>
              Rhoncus ipsum
          </Text>

        </View>
        <View>
          <Image
            source={require('../../assets/Profile/user6.png')}
            style={styles.lastimage}
            resizeMode='contain'
          />
        <Text style={styles.userpostimagetext}>
              Rhoncus ipsum
          </Text>

        </View>
      </View>
      <View>
      <Image
        source={require('../../assets/Profile/user1.png')}
        style={styles.largeimage}
        resizeMode='contain'
      />
        <Text style={styles.userpostimagetext}>
          Rhoncus ipsum
      </Text>
      </View>

    </View>
    </View>
    );


  return (

    <SafeAreaView style={styles.container}>

          <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        //numColumns={numcolumns}
                                        />

    </SafeAreaView>

  )
};

export default Randomlist;
