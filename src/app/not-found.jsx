import Link from "next/link";

const Page = () => {
  return (
    <div className="text-color-primary max-w-xl mx-auto flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-color-secondary text-2xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="text-color-secondary hover:text-color-hover mt-4 underline transition-all"
        >
          Kembali Ke Halaman Utama
        </Link>
      </div>
    </div>
  );
};

export default Page;
