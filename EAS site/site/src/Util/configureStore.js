//import { Reducer, initialState } from './reducer'
import {Businesses} from './businesses';
import {CurrentICT} from './ict';
import {CurrentEAS} from './eas';


export const ConfigureStore = () => {

    const store = {
        businesses:Businesses,
        responseSearch:[],
        currentICT:CurrentICT,
        currentEAS:CurrentEAS,
      }
    return store;
}
