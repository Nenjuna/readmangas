// let manga = require("./mangas");

import manga from "./mangas.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// var g:any[] = []
// manga.forEach((m: any) => {
//   m.genres = m.genres.replace(/^\s+/g, "").split(", ");
//   // g = g.concat(m.genres);
//   // console.log(m)
//   m.release = parseInt(m.release, 10);
// });

// manga.forEach((m: any) => {console.log(m.genres)})




async function main() {
  for (let m of manga) {

    try {
      const genre = await prisma.manga.create({
      data: {
        title: m.title.replace(/^\s+/g, ""),
        poster: m.poster.replace(/^\s+/g, ""),
        poster_webp: m.poster_webp.replace(/^\s+/g, ""),
        rating: m.rating.replace(/^\s+/g, "").replace(m.title, ""),
        status: m.status.replace(/^\s+/g, ""),
        alternatives: m.alternative.replace(/^\s+/g, ""),
        artists: m.artists.replace(/^\s+/g, ""),
        genres: m.genres.replace(/^\s+/g, "").split(", "),
        release: m.release.replace(/^\s+/g, ""),
        summary: m.summary.replace(/^\s+/g, ""),
        manga_type: m.manga_type.replace(/^\s+/g, ""),
 
      }
    });
    console.log(genre);
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    // await prisma.$disconnect();
    process.exit(1);
  });
