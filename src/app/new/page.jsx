import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now`
  );
  const newAnime = await response.json();

  return (
    <div>
      <Header title="Paling Terbaru" />
      <AnimeList api={newAnime} />
    </div>
  );
};

export default Page;
