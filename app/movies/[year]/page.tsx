import { Metadata } from 'next'
import clientPromise from "../../../lib/mongodb";

export const metadata: Metadata = {
    title: 'Movies by Year',
}

async function getMovies(year: any) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    let query = { year: parseInt(year) };
    const movies = await db
        .collection("movies")
        .find(query)
        .sort({ metacritic: -1 })
        .toArray();
    return movies;
}

export default async function movieByYear({ params }: { params: { year: number } }) {
    const { year } = params;
    const movies = await getMovies(year);
    const movieList = movies.map((movie) => (
        <li key={movie.title}
            className="w-[300px] bg-black-400 rounded-lg shadow-md m-2 p-2 text-center"
        >
            <div>
                <h3 className="text-green-500 text-xl font-extrabold">{movie.title}</h3>
                <p className="text-green-200 text-lg">Year: {movie.year}</p>
                <p >Plot: {movie.plot}</p>
                <p>Genres: {movie.genres}</p>
                <p>Metacritic: {movie.metacritic}</p>
            </div>
        </li>
    ));

    return (
        <div className="py-8">
            <h1 className="title text-green-400 text-center text-3xl font-bold mb-16">Top Movies by Metacritic in {year}</h1>
            <ul className="flex flex-wrap justify-center m-0 p-0 list-none">{movieList}</ul>
        </div>
    );
}
