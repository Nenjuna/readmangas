import prismadb from "@/lib/prismadb";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page({ params }: { params: { genre: string } }) {
  const query = params.genre;
  let search = query[0].toUpperCase() + query.slice(1);
  let Genre = await prismadb.manga.findMany({
    where: {
      genres: {
        hasSome: [search],
      },
    },
    take: 10,
  });

  return (
    <div className="grid grid-cols-2 gap-4">
      {Genre.map((genre, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{genre.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={genre.poster_webp}
              alt={genre.title}
              className="rounded hover:scale-110 transition-all"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
