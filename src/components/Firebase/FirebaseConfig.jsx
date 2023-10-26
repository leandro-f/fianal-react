import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCmLdMmBQ60WavaeE6TNS3oscrsVudUvA8",
  authDomain: "ecomerce-edd85.firebaseapp.com",
  projectId: "ecomerce-edd85",
  storageBucket: "ecomerce-edd85.appspot.com",
  messagingSenderId: "77343275642",
  appId: "1:77343275642:web:5c8acdf35118b9f8a099c3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); 

export { db, storage };


