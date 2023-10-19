import Link from "next/link";

interface Genre {
  genre: String;
  color: String;
}

type Genres = Genre[];

const Genre = () => {
  const g: Genres = [
    {
      genre: "Comedy",
      color: "bg-emerald-900",
    },
    {
      genre: "Fantasy",
      color: "bg-cyan-700",
    },
    {
      genre: "Martial Arts",
      color: "bg-blue-600",
    },
    {
      genre: "Shounen",
      color: "bg-purple-700",
    },
    {
      genre: "Webtoons",
      color: "bg-teal-900",
    },
    {
      genre: "Action",
      color: "",
    },
    {
      genre: "Horror",
      color: "",
    },
    {
      genre: "Sci-fi",
      color: "bg-zinc-500",
    },
    {
      genre: "Adventure",
      color: "bg-yellow-500",
    },
    {
      genre: "Harem",
      color: "bg-fuchsia-500",
    },
    {
      genre: "Supernatural",
      color: "bg-violet-900",
    },
    {
      genre: "Drama",
      color: "bg-indigo-700",
    },
    {
      genre: "Romance",
      color: "bg-pink-900",
    },
    {
      genre: "Seinen",
      color: "bg-emerald-900",
    },
    {
      genre: "Mature",
      color: "bg-yellow-500",
    },
    {
      genre: "Tragedy",
      color: "bg-rose-500",
    },
    {
      genre: "Historical",
      color: "bg-blue-900",
    },
    {
      genre: "Josei",
      color: "bg-indigo-900",
    },
    {
      genre: "Shoujo",
      color: "",
    },
    {
      genre: "Mystery",
      color: "bg-emerald-900",
    },
    {
      genre: "Psychological",
      color: "bg-purple-900",
    },
    {
      genre: "Gender Bender",
      color: "bg-pink-600",
    },
    {
      genre: "Adult",
      color: "bg-lime-500",
    },
    {
      genre: "Ecchi",
      color: "bg-sky-300",
    },
    {
      genre: "School Life",
      color: "bg-cyan-800",
    },
    {
      genre: "Yuri",
      color: "bg-amber-800",
    },
    {
      genre: "Shoujo Ai",
      color: "bg-red-600",
    },
    {
      genre: "Smut",
      color: "bg-emerald-400",
    },
    {
      genre: "Doujinshi",
      color: "bg-violet-800",
    },
    {
      genre: "Manga",
      color: "bg-teal-500",
    },
    {
      genre: "Manhua",
      color: "bg-green-500",
    },
    {
      genre: "Manhwa",
      color: "bg-orange-600",
    },
  ];
  return (
    <div className="flex items-center justify-center w-10/11 mt-5 mb-5">
      <div className="grid grid-cols-2 gap-1 sm:gap-1 md-gap-4 lg:gap-4 w-full">
        {g
          .sort((a, b) =>
            a.genre.toLowerCase().localeCompare(b.genre.toLowerCase())
          )
          .map((genre, index) => (
            <Link href={`/${genre.genre.toLowerCase().split(" ").join("-")}`}>
              <div
                className={`w-48 sm:w-48 p-4 lg:w-96 md:w-60 h-32 break-all text-center sm:h-32 lg:h-72 md:h-52 border opacity-75 border-inherit bg-blend-normal font-mono shadow-inherit font-semibold flex tracking-wide shadow-xl rounded-lg justify-center items-center text-lg sm:text-lg md:text-2xl lg:text-3xl ${genre.color}`}
                key={index}
              >
                {genre.genre}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Genre;
