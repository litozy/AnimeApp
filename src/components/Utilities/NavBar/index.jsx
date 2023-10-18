import Link from "next/link";
import InputSearch from "./InputSearch";

const NavBar = () => {
  return (
    <header className="bg-color-dark shadow-xl">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <div>
          <Link href="/" className="font-bold text-color-primary text-2xl">
            Ren
          </Link>
          <Link href="/" className="font-bold text-color-secondary text-2xl">
            AnimeList
          </Link>
        </div>

        <InputSearch />
      </div>
    </header>
  );
};

export default NavBar;
