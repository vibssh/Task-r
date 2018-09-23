import firebase from 'firebase';
import {Config} from './config'
firebase.initializeApp(Config);
export const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

