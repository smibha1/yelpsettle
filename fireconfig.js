import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBBYvA5YavHvPbPJzZGXRYt3b9OV7rgF4E",
  authDomain: "yelpsettle.firebaseapp.com",
  databaseURL: "https://yelpsettle.firebaseio.com",
  projectId: "yelpsettle",
  storageBucket: "yelpsettle.appspot.com",
  messagingSenderId: "737656551674"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export default firebase;