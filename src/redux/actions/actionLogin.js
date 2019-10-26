import Axios from 'axios';

import * as types from '../types';

export const handleActionLogin = (email, password) => ({
  type: types.LOGIN,
  payload: Axios({
    method: 'POST',
    url: 'http://192.168.0.31:5000/api/v2/login',
    data: { email, password }
  })
});
