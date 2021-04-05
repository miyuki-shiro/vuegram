// import * as firebase from 'firebase/app'
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyBrvCsuD3eoi8KbDQ-axWa8xGRV-jTep4M',
  authDomain: 'vuegram-23282.firebaseapp.com',
  projectId: 'vuegram-23282',
  storageBucket: 'vuegram-23282.appspot.com',
  messagingSenderId: '1025188190304',
  appId: '1:1025188190304:web:0e8acbf29533ca8eb14b05'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}