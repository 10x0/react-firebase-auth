import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { firebaseApp } from './firebase';
import { useSyncExternalStore } from 'react';
import { createUser } from './firestore';

const firebaseAuth = getAuth(firebaseApp);
firebaseAuth.setPersistence(browserLocalPersistence);

const googleProvider = new GoogleAuthProvider();

export function useFirebaseAuth() {
  const signInWithGoogle = async () => {
    try {
      const authDetails = await signInWithPopup(firebaseAuth, googleProvider);
      createUser(authDetails.user);
    } catch (error) {
      throw new Error('Error while signing in.');
    }
  };

  const user = useSyncExternalStore(
    (observer) => () => firebaseAuth.onAuthStateChanged(observer),
    () => firebaseAuth.currentUser
  );

  const logOut = () => signOut(firebaseAuth);

  return {
    signInWithGoogle,
    user,
    logOut,
  };
}
