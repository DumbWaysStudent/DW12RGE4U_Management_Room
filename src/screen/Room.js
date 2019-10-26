import React, { Component } from 'react';
import { Text, View, AsyncStorage, FlatList } from 'react-native';
import { Header, Body, Title } from 'native-base';
import { connect } from 'react-redux';
import * as actionEpisode from '../redux/actions/actionRoom';

export class Room extends Component {
  // eslint-disable-next-line no-undef
  componentDidMount = async () => {
    //const idWebtoon = this.props.navigation.getParam('idWebtoon');
    await this.props.getRoom();
    console.log(this.props.RoomLocal);
  }

  render() {
    return (
      <View>
        <View>
          <Header>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title>Room</Title>
            </Body>
          </Header>
        </View>
        <View>
          <FlatList />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    RoomLocal: state.room
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRoom: (params) => dispatch(actionEpisode.handleGetRoom(params)) // action yah bang
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
