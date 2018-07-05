import React, { Component } from 'react';
import { Container, Header, Icon, Content, Form, Item, Picker, View } from 'native-base';
import FetchCityParkLocation from './FetchCityParkLocation'

export default class DropDown extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
    this.setState({
      userLocation: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    })
    }, err => console.log(err));
  }
  
  getUserLocationHandler1 = () => {
    navigator.geolocation.getCurrentPosition(position => {
    this.setState({
      userLocation: {
        latitude: 39.7459,
        longitude: -104.9476,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    })
    }, err => console.log(err));
  }
  
  getUserLocationHandler2 = () => {
    navigator.geolocation.getCurrentPosition(position => {
    this.setState({
      userLocation: {
        latitude: 39.6984,
        longitude: -104.9696,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    })
    }, err => console.log(err));
  }
  
  getUserLocationHandler3 = () => {
    navigator.geolocation.getCurrentPosition(position => {
    this.setState({
      userLocation: {
        latitude: 39.7928,
        longitude: -104.8921,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    })
    }, err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                
                style={{ width: 100 }}
                placeholder=""
                placeholderStyle={{ color: "#dfc8ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="City Park" onPress={<FetchCityParkLocation onSetLocation1={this.getUserLocationHandler1}/>}/>
                <Picker.Item label="Wash Park" value="key1" />
                <Picker.Item label="Praire Meadows Park" value="key1" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}


{/* <FetchCityParkLocation onSetLocation1={this.getUserLocationHandler1} />
          <FetchWashParkLocation onSetLocation2={this.getUserLocationHandler2} />
          <FetchPrairieMeadowsParkLocation onSetLocation3={this.getUserLocationHandler3} /> */}


// import React, { Component } from "react";
// import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
// export default class PickerCustomBackButtonExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected3: "key3"
//     };
//   }
//   onValueChange3(value: string) {
//     this.setState({
//       selected3: value
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent onPress={() => this.props.navigation.goBack()}>
//               <Icon name="arrow-back" />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Custom Back Button</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Form>
//             <Picker
//               mode="dropdown"
//               iosIcon={<Icon name="ios-arrow-down-outline" />}
//               headerBackButtonText="Baaack!"
//               style={{ width: undefined }}
//               selectedValue={this.state.selected3}
//               onValueChange={this.onValueChange3.bind(this)}
//             >
//               <Picker.Item label="My Location" value="key0" />
//               <Picker.Item label="Wash Park" value="key1" />
//               <Picker.Item label="City park" value="key2" />
//               <Picker.Item label="Credit Card" value="key3" />
//               <Picker.Item label="Net Banking" value="key4" />
//             </Picker>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }