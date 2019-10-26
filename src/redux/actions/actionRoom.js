import Axios from 'axios';

import * as types from '../types';

export const handleGetRoom = () => ({
  type: types.GET_ROOM,
  payload: Axios({
    method: 'GET',
    url: 'http://192.168.0.31:5000/api/v2/room',
  })
});
