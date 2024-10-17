import React, { useEffect, useState } from "react";

type ILinksMobileSize = {
  pageLink: string;
  page: string;
  closeMenuMobileSize: () => void;
};

const LinksMobileSize: React.FC<ILinksMobileSize> = ({
  pageLink,
  page,
  closeMenuMobileSize,
}) => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  // const currentHash = window.location.hash;

  useEffect(() => {
    // Event listener for hash changes
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <a className="" href={pageLink} onClick={closeMenuMobileSize}>
      <li
        className={`text-center py-1 text-[#989898] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff] duration-[0.5s] cursor-pointer hover:underline rounded-[5px]
          ${
            pageLink === currentHash
              ? `bg-sky-500 text-[#fff] underline`
              : `hover:bg-sky-500 hover:text-[#fff]`
          }`}
      >
        <a
          className="text-[20px] font-[400]"
          href={pageLink}
          onClick={closeMenuMobileSize}
        >
          {page}
        </a>
      </li>
    </a>
  );
};

export default LinksMobileSize;
