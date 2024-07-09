/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;

  const handleItemClick = (route: string) => {
    console.log(`Navigating to ${route}`);
  };

  const items = [
    { id: 1, title: "Home", route: "/" },
    { id: 2, title: "Profile", route: "/profile" },
    { id: 3, title: "Settings", route: "/settings" },
    { id: 4, title: "About", route: "/about" },
    { id: 5, title: "Contact", route: "/contact" },
  ];

  const renderItems = () => {
    return items.map((item) => (
      <li
        key={item.id}
        className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        onClick={() => handleItemClick(item.route)}
      >
        {item.title}
      </li>
    ));
  };

  const isActive = (route: string) => {
    return window.location.pathname === route;
  };

  const getActiveStyle = (route: string) => {
    return isActive(route) ? "text-yellow-500" : "text-gray-700 dark:text-gray-300";
  };

  const logoStyles = {
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "0.05em",
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const user = {
    name: "John Doe",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[50px] mt-[50px] flex items-center bg-navy`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-yellow-400 dark:text-white">
          Challenge<span className="font-medium">MOB</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />

      <ul className="mb-auto pt-1">
        {renderItems()}

        {/* Additional menu items */}
        <li
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${getActiveStyle(
            "/notifications"
          )}`}
          onClick={() => handleItemClick("/notifications")}
        >
          Notifications
        </li>
        <li
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${getActiveStyle(
            "/messages"
          )}`}
          onClick={() => handleItemClick("/messages")}
        >
          Messages
        </li>
        <li
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${getActiveStyle(
            "/dashboard"
          )}`}
          onClick={() => handleItemClick("/dashboard")}
        >
          Dashboard
        </li>
      </ul>

      {/* User information */}
      <div className="flex items-center justify-between px-4 mt-4">
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
