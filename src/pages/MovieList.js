import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';

const MovieList = ({apiPath, title}) => {
  // const [movies, setMovies] = useState([]);
  const { data: movies } = useFetch(apiPath);

  useEffect(()=> {
    document.title = `Cinespot - ${title}`;
  });

  return (
    <main>
        <section className="max-w-7x mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            { movies?.map((movie) => (
              <Card key = {movie.id} movie={movie}/>
            )) }
          </div>
        </section>
    </main>
  )
}

export default MovieList