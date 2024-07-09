import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "assets/img/avatars/avatar4.png";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
}) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[205px] xl:gap-2">
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  Mark all read
                </p>
              </div>
              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex h-28 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="mt-3 ml-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    👋 Hey, Harshith
                  </p>
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />
              <div className="mt-3 ml-4 flex flex-col">
                <a
                  href="/auth"
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
      
      {/* Additional lines start here */}
      <div className="flex justify-center mt-8">
        <div className="bg-gray-200 dark:bg-navy-700 rounded-md p-4">
          <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
            Additional Features
          </h5>
          <ul className="list-disc ml-5">
            <li className="text-base text-gray-600 dark:text-white">
              Integration with third-party services.
            </li>
            <li className="text-base text-gray-600 dark:text-white">
              Enhanced security measures.
            </li>
            <li className="text-base text-gray-600 dark:text-white">
              User-friendly interface updates.
            </li>
          </ul>
        </div>
        <div className="ml-8 bg-lightPrimary dark:bg-navy-800 rounded-md p-4">
          <h5 className="text-lg font-semibold text-navy-700 dark:text-white mb-3">
            Support Options
          </h5>
          <ul className="list-disc ml-5">
            <li className="text-base text-navy-700 dark:text-white">
              24/7 customer support.
            </li>
            <li className="text-base text-navy-700 dark:text-white">
              Comprehensive documentation.
            </li>
            <li className="text-base text-navy-700 dark:text-white">
              Community forums for assistance.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="bg-gray-200 dark:bg-navy-700 rounded-md p-4">
          <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
            Privacy Policy
          </h5>
          <p className="text-base text-gray-600 dark:text-white">
            Our commitment to protecting your privacy.
          </p>
        </div>
        <div className="ml-8 bg-lightPrimary dark:bg-navy-800 rounded-md p-4">
          <h5 className="text-lg font-semibold text-navy-700 dark:text-white mb-3">
            Terms of Service
          </h5>
          <p className="text-base text-navy-700 dark:text-white">
            Legal agreement details for using our services.
          </p>
        </div>
      </div>
      {/* Additional lines end here */}
    </nav>
  );
};

export default Navbar;
