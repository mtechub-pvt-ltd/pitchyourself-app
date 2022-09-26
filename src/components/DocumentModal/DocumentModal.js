import React from 'react';
import {View,Text,TouchableOpacity,Modal,FlatList} from 'react-native';

////////////////app icons//////////////////
import Icon from 'react-native-vector-icons/MaterialIcons';

//////////////////app styles///////////////////
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const DocumentModal = (props) => {
console.log("props here in modal:",props)

      /////////////////////flatlist render item////////////
  const renderItem = ({ item }) => (
      <TouchableOpacity 
      style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        }}
      onPress={()=> {}
        //checkPermission(item)
      }
        >
    <Text style={styles.modaltext}>
      {item}
    </Text>
    <Icon name="file-download" color={'black'} size={32} />
  </TouchableOpacity>

  )
  
    return(

        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={props.CloseModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

      
            <View style={{marginBottom:15,
              alignSelf:'center',marginTop:hp(3)}}>
                       <Text style={styles.maintext}>
                            {props.text}</Text>
              </View>
            <FlatList
            data={props.Docarray}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
    
          />

       

    <View  style={styles.ApprovedView}>
        <TouchableOpacity 
        onPress={props.onPress}>
        <Text style={styles.Pendingtext}>{props.buttontext}</Text>
        </TouchableOpacity>
    </View>

            </View>
          </View>
        </Modal>

    )
};

export default DocumentModal;