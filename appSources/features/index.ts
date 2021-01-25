import {combineReducers} from 'redux';
import light from '../features/LightsControler/LightsControlerSlice';
import motor from '../features/motorsControler/motorsControlerSlice';

export default combineReducers({
  light,
  motor,
});
