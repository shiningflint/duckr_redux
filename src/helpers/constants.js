import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB0OkX2q-ZavE8FLzeHcZg8A12UgeRtPmI",
  authDomain: "tyler-duckr.firebaseapp.com",
  databaseURL: "https://tyler-duckr.firebaseio.com",
  projectId: "tyler-duckr",
  storageBucket: "tyler-duckr.appspot.com",
  messagingSenderId: "296976320302"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 100000
