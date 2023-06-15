import { firebaseApp } from './firebase';
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const storage = getStorage(firebaseApp);

export const uploadPoster = (file: File) => {
  const storageRef = ref(storage, `posters/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  console.log(uploadTask);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log('Uploading ', progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('ImageURL: ', downloadURL);
      });
    }
  );
};
