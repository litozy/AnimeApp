import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const topAnime = await response.json();

  return (
    <div>
      <Header title="Paling Populer" />
      <AnimeList api={topAnime} />
    </div>
  );
};

export default Page;
