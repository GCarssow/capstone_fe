import React, { Component } from 'react';
import { Container, Header, Break, Content, Left, Body, Title, Right, List, ListItem, Text } from 'native-base';
import { TouchableOpacity, Form, Item, Input, Label, ScrollView, StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import { Modal, TouchableHighlight } from 'react-native'

export default class SeeEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEquipmentLoaded: false,
      equipment: [],
      modalVisible: false,
    }
  }

  componentDidMount () {
    this.fetchEquipment()
  }
  
  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  fetchEquipment = () => {
    return fetch('https://parks-capstone.herokuapp.com/equipment/') 
    .then((response) => response.json())
    .then((equipment) => {
    this.setState({
      equipment,
      isEquipmentLoaded: true
    })
    })
    .catch((error) => {
    console.error(error);
});
}

render() {
  return (
    <Container>
      <Header>
          <Body>
            <Title style={{justifyContent: 'center', alignItems: 'center'}}>Your Park</Title>
          </Body>
        </Header>
      <Content>
      {this.state.isEquipmentLoaded ? this.state.equipment.equipment.map((equip) => { 
        
        return <View style={styles.parkName}>
        <Modal
          key={equip.id}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}>
          <ScrollView>
            <View>
              <Text style={styles.titles} >Park name</Text>
              <Text style={styles.equipmentList} >{equip.park_name}</Text>
              <Text style={styles.titles} >Equipment 1</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_1}</Text>
              <Text style={styles.titles} >Equipment 2</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_2}</Text>
              <Text style={styles.titles} >Equipment 3</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_3}</Text>
              <Text style={styles.titles} >Equipment 4</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_4}</Text>
              <Text style={styles.titles} >Equipment 5</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_5}</Text>
              <Text style={styles.titles} >Equipment 6</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_6}</Text>
              <Text style={styles.titles} >Equipment 7</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_7}</Text>
              <Text style={styles.titles} >Equipment 8</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_8}</Text>
              <Text style={styles.titles} >Equipment 9</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_9}</Text>
              <Text style={styles.titles} >Equipment 10</Text>
              <Text style={styles.equipmentList}>{equip.equipment_available_10}</Text>
              <Text style={styles.titles} >Source</Text>
              <Text style={styles.equipmentList}>{equip.source}</Text>

              
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={styles.equipmentList}>GO BACK</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true)
          }}>
          <Text>{equip.park_name}</Text>
        </TouchableHighlight>
      </View>
      
        
      }): null}
        
      </Content>
      
    </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  parkName: {
  marginTop: 22,
  marginLeft: 55,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 25,
  height: 40,
  width: 250,
  borderWidth: 2,
  backgroundColor: '#5FBA0B'
  },
  equipmentList: {
  marginTop: 22,
  marginLeft: 45,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 25,
  height: 40,
  width: 250,
  borderWidth: 2,
  backgroundColor: '#5FBA0B'
  },
  titles: {
      marginTop: 22,
      marginLeft: 45,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 25,
      height: 40,
      width: 250,
      borderWidth: 2,
      backgroundColor: '#E50909'
  }
  
});