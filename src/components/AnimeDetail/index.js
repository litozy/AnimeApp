import Link from "next/link";

const AnimeDetail = ({ api }) => {
  /* md itu large, sm itu medium buat tablet, defaultnya untuk hp */
  /* cols dibawah ini berfungsi untuk jumlah card yg akan muncul di page */
  return (
    <div className="grid md:grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-4 px-4 ml-10 mr-10">
      {api.data.map((anime, index) => {
        return (
          <Link href="/" className="cursor_pointer shadow-xl">
            <h3 className="font-bold md:text-l text-md p-4 text-color-primary">
              {index + 1}.{anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeDetail;
