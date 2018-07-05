import React from 'react';
import { PureComponent } from 'react'; 
import { TouchableHightLight, Text, View } from 'react-native';
import AtoZListView from 'react-native-atoz-listview';
import Search from 'react-native-search-box';

const rowHeight = 20;
 
class SearchBar extends PureComponent {
 state = {
    data: {
      
    }
}
renderRow = (item, sectionId, index) => {
      return (
        <TouchableHightLight
          style={{
            height: rowHeight,
            justifyContent: 'center',
            alignItems: 'center'}}
        >
          <Text>{item.name}</Text>
        </TouchableHightLight>
      );
    }

    // Important: You must return a Promise
    beforeFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus');
            resolve();
        });
    }
 
    // Important: You must return a Promise
    onFocus = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onFocus', text);
            resolve();
        });
    }
 
    // Important: You must return a Promise
    afterFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('afterFocus');
            resolve();
        });
    }
 
  render() {
    // inside your render function
    return (
      <View style={{ flex: 1}}>
        <Search
          ref="search_box"
          /**
          * There many props that can customizable
          * Please scroll down to Props section
          */
        />
 
        <AtoZListView
          data={this.state.data}
          renderRow={this.renderRow}
          rowHeight={rowHeight}
          sectionHeaderHeight={20}
        />
      </View>
    );
  }
}