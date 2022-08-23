// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVH5DOgmcJ4f1ihj_QuotOzjvX9ALgK3U',
  authDomain: 'house-marketplace-app-28308.firebaseapp.com',
  projectId: 'house-marketplace-app-28308',
  storageBucket: 'house-marketplace-app-28308.appspot.com',
  messagingSenderId: '164537782275',
  appId: '1:164537782275:web:867a107734de32bcbebe36',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
