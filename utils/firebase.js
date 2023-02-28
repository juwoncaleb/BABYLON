import {initializeApp} from 'firebase/app';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAo8k2VBjPEbWdXDF_81lhAQciQ2SuQ3_w",
    authDomain: "babylon-2eaaa.firebaseapp.com",
    projectId: "babylon-2eaaa",
    storageBucket: "babylon-2eaaa.appspot.com",
    messagingSenderId: "756996626878",
    appId: "1:756996626878:web:f3000bc7cc1f4a0c5e41ef",
    measurementId: "G-2KQRYJ4KEL"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)