import firebase from 'firebase/app';
import 'firebase/database';
import {Config} from './config'
firebase.initializeApp(Config);
export const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

