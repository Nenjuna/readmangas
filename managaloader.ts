let manga = require("./mangas");

// import manga from "./mangas.json" assert {type: "json"};

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


var g:any[] = []
manga.forEach((m: any) => {
  m.genres = m.genres.replace(/^\s+/g, "").split(", ");
  g = g.concat(m.genres);
  console.log(m.genres)
  m.release = parseInt(m.release, 10);
  return m;
});
console.log(g)
console.log(new Set(g))
// for(let i = 0; i < manga.length; i++){
//   console.log(manga[i])
// }

// async function gg(){
// for (let m of manga){
// g.
// }
// }

// async function main() {
//   for (let m of manga) {

//     try {
//       const genre = await prisma.manga.create({
//       data: {
//         title: m.title,
//         poster: m.poster,
//         poster_webp: m.poster_webp,
//         rating: m.rating,
//         status: m.status,
//         alternatives: m.alternative,
//         artists: m.artists,
//         release: parseInt(m.release),
//         summary: m.summary,
//         manga_type: m.manga_type,
 
//       }
//     });
//     console.log(genre);
      
//     } catch (error) {
//       console.log(error);
      
//     }
    
//   }
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     // await prisma.$disconnect();
//     process.exit(1);
//   });
