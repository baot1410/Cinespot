import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { useSearchParams , Link} from 'react-router-dom';

const Search = ({apiPath}) => {
  // const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies} = useFetch(apiPath, queryTerm);

  return (
    <main>
        <section className="py-7">
          <p className="text-3xl text-gray-700 dark:text-white">{
            movies.length === 0 
            ? `No result found for '${queryTerm}'` 
            : `Result for '${queryTerm}'` }
          </p>
        </section>
        <section className="max-w-7x mx-auto py-7">
          {movies.length === 0 
          ?
          <div className="flex justify-center my-4">
            <Link to="/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Back To Home
              </span>
              </button>
            </Link>
          </div>
          :
          <div className="flex justify-start flex-wrap">
            { movies?.map((movie) => (
              <Card key = {movie.id} movie={movie}/>
            )) }
          </div>
        }
        </section>
    </main>
  )
}

export default Search