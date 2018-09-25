import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/firestore';
import {Config} from './config'
firebase.initializeApp(Config);
export const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

