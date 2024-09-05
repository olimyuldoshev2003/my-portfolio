import React from "react";

type ILinksMobileSize = {
  pageLink: string;
  page: string;
  closeMenuMobileSize: () => void
};

const LinksMobileSize:React.FC<ILinksMobileSize> = ({ pageLink, page, closeMenuMobileSize }) => {
  return (
    <a 
      className=""
      href={pageLink}
      onClick={closeMenuMobileSize}
    >
      <li className="text-center hover:bg-sky-500 py-1 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff] duration-[0.5s] cursor-pointer hover:underline rounded-[5px]">
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
