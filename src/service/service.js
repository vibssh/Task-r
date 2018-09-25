import {Config} from '../firebase/config';
import {db} from '../firebase/db';

const {collectionName} = Config;

//Get All Service
export const Service = {
  //Get All Tasks
  getAllTasks() {
    return db.collection(collectionName);
  },

  //Post A Task
  postATask(data) {
    return db.collection(collectionName).add(data);
  },

  //update A Task
  updateTask(id, data) {
    return db.collection(collectionName).doc(id).set(data);
  },

  //Delete A Task
  deleteTask(id) {
    return db.collection(collectionName).doc(id).delete();
  }
}