import { createMovie } from './firebase/firestore';
import { uploadPoster } from './firebase/storage';
import { Movie } from './types/Movie';

export default function CreateMovieCard() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    uploadPoster(file);
  };
  return (
    <section>
      <form className='form' onSubmit={handleSubmit}>
        <input type='file' />
        <button type='submit'>Upload</button>
      </form>
      <button onClick={() => createMovie(movie)}>Create</button>
    </section>
  );
}

const movie: Movie = {
  status: 'UPCOMING',
  title: 'Spider-Man: Across the Spider-Verse',
  rating: 'PG',
  description:
    'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
  genre: 'Animation',
  releasingDate: new Date('June 02, 2023'),
  runTime: 140,
  posterURL:
    'https://firebasestorage.googleapis.com/v0/b/paysa-cc1d9.appspot.com/o/posters%2Fspiderman.jpg?alt=media&token=eb1e4a77-18f3-4909-8684-6f43f98b273c',
};
