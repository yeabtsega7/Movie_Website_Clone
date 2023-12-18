import { Link } from "react-router-dom";
import Loader from "../Componets/Loader";
import useFetch from "../Hoosks/useFetch";
import { FaCalendarAlt } from "react-icons/fa";

const Movies = () => {
  const { data, loading, error } = useFetch({ url: "/movies" });
  console.log(data);

  if (loading) return <Loader />;
  if (error) return <div>Error...</div>;
  return (
    <>
      <div className="w-[90%] m-auto text-3xl">Popular Movies</div>
      <div className=" w-[90%] m-auto flex flex-wrap justify-center rounded-lg bg-secondary ">
        {data?.movies.map((movie, key) => (
          <Link
            to={`${movie.contentType === "movie" ? "/movie/" : "/show/"}${
              movie._id
            }`}
            key={key}
          >
            <div className=" w-[19rem] h-[30rem] bg-primary p-2 m-2  ">
              <img
                className="w-[18rem] h-[26rem] object-cover rounded-lg"
                src={movie.poster_path}
                alt={movie.original_title}
              />
              <div className=" w-full h-[4rem]">
                <div className="text-lg ">{movie.title}</div>
                <div className="text-sm flex gap-1 items-center">
                  <FaCalendarAlt />
                  {movie.release_date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Movies;
