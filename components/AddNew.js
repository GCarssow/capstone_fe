import React, { Component } from 'react';
import { Container, Header, Button, Content, Form, Item, Input, Label } from 'native-base';



export default class AddNew extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Park Name</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Equipment 1</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Equipment 2</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Equipment 3</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Equipment 4</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Equipment 5</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Your Name</Label>
              <Input />
            </Item>
          </Form>
            <Button title="Add New Park">
            </Button>
        </Content>
      </Container>
    );
  }
}