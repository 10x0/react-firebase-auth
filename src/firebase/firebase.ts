import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCNlyHNuf-aqH9oBJm4sOvy3LQtlxm1FdE',
  authDomain: 'paysa-cc1d9.firebaseapp.com',
  projectId: 'paysa-cc1d9',
  storageBucket: 'paysa-cc1d9.appspot.com',
  messagingSenderId: '211681296545',
  appId: '1:211681296545:web:4f0f2e7f29f8f765bf30e0',
  measurementId: 'G-QRFQNQS2Q7',
};

export const firebaseApp = initializeApp(firebaseConfig);
