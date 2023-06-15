import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from './firebase';
import { User } from 'firebase/auth';
import { Movie } from '../types/Movie';

const firestore = getFirestore(firebaseApp);

export const createUser = async (user: User) => {
  try {
    const ref = await addDoc(collection(firestore, 'users'), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      role: 'PUBLIC',
    });
    console.log(ref.id);
  } catch (error) {
    console.error(error);
    throw new Error('Error creating user doc.');
  }
};

export const createMovie = async (movie: Movie) => {
  try {
    const ref = await addDoc(collection(firestore, 'movies'), movie);
    console.log(ref.id);
  } catch (error) {
    console.error(error);
    throw new Error('Error creating movie doc.');
  }
};

export const getMovies = async () => {
  try {
    const docs = await getDocs(collection(firestore, 'movies'));
    return docs.docs;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating movie doc.');
  }
};
