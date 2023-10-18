import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4 text-color-secondary ml-10 mr-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-l text-sm underline hover:text-color-hover transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
