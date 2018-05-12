
import { LOAD_DATA_SUCCESS } from './constants';

export const loadData = () => ({
  type: LOAD_DATA_SUCCESS,
  payload: [4, 5, 6]
});
