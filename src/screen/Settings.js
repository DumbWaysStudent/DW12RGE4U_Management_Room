import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Header, Body, Title } from 'native-base';

import Button from './../components/Button';

export class Settings extends Component {
  async handleLogout() {
    await AsyncStorage.removeItem('token');
    await this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View>
        <View>
          <Header>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title>Settings</Title>
            </Body>
          </Header>
        </View>
        <View style={{ alignItems: 'center', marginTop: 100 }}>
          <Button>
            <Text onPress={() => this.handleLogout()}> Log Out </Text>
          </Button>
        </View>
      </View>
    );
  }
}
export default Settings;
