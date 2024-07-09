import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes";

// Interface for route objects
interface RouteType {
  layout: string;
  path: string;
  name: string;
  component: React.ComponentType<any>;
  secondary?: string;
}

export default function Admin(props: { [x: string]: any }) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  // Handle window resize to toggle sidebar
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update current route based on URL changes
  useEffect(() => {
    const activeRoute = getActiveRoute(routes);
    setCurrentRoute(activeRoute);
  }, [location.pathname]);

  // Get the active route name from routes array
  const getActiveRoute = (routes: RouteType[]): string => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.includes(routes[i].layout + "/" + routes[i].path)) {
        activeRoute = routes[i].name;
        break;
      }
    }
    return activeRoute;
  };

  // Get the secondary navigation item based on current route
  const getActiveNavbar = (routes: RouteType[]): string | undefined => {
    let activeNavbar: string | undefined = undefined;
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.includes(routes[i].layout + routes[i].path)) {
        activeNavbar = routes[i].secondary;
        break;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes: RouteType[]): JSX.Element[] => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return <Route path={`/${prop.path}`} element={<prop.component />} key={key} />;
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleProfileUpdate = (newProfile: any) => {
    console.log("Updating user profile with:", newProfile);
  };

  const navigateToRoute = (route: string) => {
    console.log("Navigating to:", route);
  };

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />

            <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route path="/" element={<Navigate to="/admin/default" replace />} />
              </Routes>
            </div>

            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
