import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=5`
  );
  const topAnime = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=5`
  );
  const newAnime = await response2.json();

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* anime terbaru */}
      <section>
        <Header
          title="Paling Terbaru"
          linkTitle="Lihat Semua"
          linkHref="/new"
        />
        <AnimeList api={newAnime} />
      </section>
    </>
  );
};

export default Page;
