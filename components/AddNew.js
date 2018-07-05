import React, { Component } from 'react';
import { Container, Header, Break, Label, Input, Item, Content, Form, List, ListItem, Text } from 'native-base';
import { TouchableOpacity, StyleSheet, ScrollView, View, ActivityIndicator, Alert, Modal, TouchableHighlight } from 'react-native'

export default class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
  }
}

setModalVisible(visible) {
this.setState({ modalVisible: visible })
}

render() {
  return (
  <Container>
  
  <Content>
  
  <View style={{ marginBottom: 55 }}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}>
              <ScrollView style={{ marginTop: 22 }}>
            <View>
            <Form>
            <Item floatingLabel>
              <Label>Park Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Available Equipment #1</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Available Equipment #2</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Available Equipment #3</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Available Equipment #4</Label>
              <Input />
            </Item><Item floatingLabel>
              <Label>Available Equipment #5</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Available Equipment #6</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Available Equipment #7</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Your name</Label>
              <Input />
            </Item>
        
          </Form>
          <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={styles.back}>Submit Your Data!</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={styles.back}>GO BACK</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
          </Modal>
        <TouchableHighlight style={styles.addNew}
          onPress={() => {
            this.setModalVisible(true)
          }}>
          <Text>Add a new Park</Text>
        </TouchableHighlight>
      </View>
      </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  addNew: {
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
  back: {
    marginTop: 22,
  marginLeft: 45,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 25,
  height: 40,
  width: 250,
  borderWidth: 2,
  backgroundColor: '#5FBA0B'
  }
});