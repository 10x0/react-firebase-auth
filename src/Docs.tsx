import { useEffect, useState } from 'react';
import { getMovies } from './firebase/firestore';

export default function Docs() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const movies = await getMovies();
    })();
  }, []);
  return <section>Hello</section>;
}
