import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {}

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
