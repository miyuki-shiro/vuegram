// import * as firebase from 'firebase/app'
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import env from '../env.js'

// firebase configuration
const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId
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
export { db, auth, usersCollection, postsCollection, commentsCollection, likesCollection }