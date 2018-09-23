import {Config} from '../firebase/config';
import {db} from '../firebase/db';

const {collectionName} = Config;

//Get All Service
export const Service = {
  //Get All Tasks
  getAllTasks() {
    return db.collection(collectionName);
  }
}

