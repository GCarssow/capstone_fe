import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { TouchableOpacity, View, ActivityIndicator, Alert} from 'react-native';


fetch('https://parks-capstone.herokuapp.com/equipment/', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}).then((response) => response.json())
    .then((responseJSON) => {
      return responseJSON.equipments;
    })
    .catch((error) => {
      console.error(error);
    });

export default class SeeEquipment extends Component {
  render() {
    
    return (
      <Container>
        <Header />
        <Content>
          <List dataArray={equipments}
            renderRow={(equipment) =>
              <ListItem>
                <Text>{equipment.park_name}</Text>
                <Text>{equipment.equipment_available_1}</Text>
                <Text>{equipment.equipment_available_2}</Text>
                <Text>{equipment.equipment_available_3}</Text>
                <Text>{equipment.equipment_available_4}</Text>
                <Text>{equipment.equipment_available_5}</Text>
                <Text>{equipment.equipment_available_6}</Text>
                <Text>{equipment.equipment_available_7}</Text>
                <Text>{equipment.equipment_available_8}</Text>
                <Text>{equipment.equipment_available_9}</Text>
                <Text>{equipment.equipment_available_10}</Text>
                <Text>{equipment.source}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}