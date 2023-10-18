"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const AnimeList = ({ api }) => {
  const router = useRouter();
  /* md itu large, sm itu medium buat tablet, defaultnya untuk hp */
  /* cols dibawah ini berfungsi untuk jumlah card yg akan muncul di page */
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4 hover:text-color-hover ml-10 mr-10">
      {api.data.map((anime) => {
        const handleDetail = (event) => {
          event.preventDefault();
          const id = anime.mal_id;
          router.push(`/episodes/${id}`);
        };

        return (
          <div
            onClick={handleDetail}
            className="shadow-xl text-color-primary hover:text-color-hover transition-all"
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={200}
              height={200}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-l text-md p-4">{anime.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
