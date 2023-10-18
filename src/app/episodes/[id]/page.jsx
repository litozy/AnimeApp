import Header from "@/components/AnimeList/Header";
import AnimeDetail from "@/components/AnimeDetail";

const Page = async ({ params }) => {
  const id = params.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}/episodes`
  );
  const episodesAnime = await response.json();

  return (
    <>
      <Header title="Episodes" />
      <AnimeDetail api={episodesAnime} />
    </>
  );
};

export default Page;
