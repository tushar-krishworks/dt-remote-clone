import { Outlet, useLocation } from "react-router-dom";
import BottomNavBar from "../BottomNavBar";
import TopNavBar from "../TopNavBar";

{
  /*const bottomNavbarItems = [
  { id: "1", title: "Concierge", icon: <ReservationsIcon /> },
  { id: "2", title: "Reservations", icon: <ReservationsIcon /> },
  { id: "3", title: "Digital Locks", icon: <ReservationsIcon /> },
  { id: "4", title: "Smart Tv", icon: <ReservationsIcon /> },
];*/
}

const MainLayout = () => {
  //const [selectedIcon, setSelectedIcon] = useState(0);

  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];

  let disablePadding = false;
  if (currentLocation === "welcomeScreen") {
    disablePadding = true;
  }

  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen max-h-screen">
      <TopNavBar />
      {/* top navbar 
      <div className={cn("flex justify-between shadow-lg px-6 py-1 ")}>
        <div className="flex flex-col">
          <p className="text-g-2 ">Awesome Queen</p>
          <p className="font-bold text-xl">Room 0215</p>
        </div>
        <div>
          <img src="/src/assets/DefaultProfile.png" alt="" />
        </div>
      </div>*/}
      <div className={`${disablePadding ? "" : "px-6 pt-8"}  overflow-auto`}>
        <Outlet />
      </div>
      <BottomNavBar />
      {/*BottomNavBar
      <div className="bottom-0 h-28 w-full flex flex-col justify-end">
        <div className="relative flex bg-blue-900   h-24 bottom-0 overflow-visible">
          <div className="flex gap-6 px-4 bg-opacity-0">
            {bottomNavbarItems?.map((item, index) => {
              const isSelected = index === selectedIcon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center relative ${
                    isSelected ? "-mt-6" : ""
                  }`}
                  onClick={() => setSelectedIcon(index)}
                >
                  <div
                    className={`rounded-full p-2 relative ${
                      isSelected
                        ? 'bg-white text-blue-900 before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-16 before:h-16 before:rounded-full before:box-shadow-[0_0_0_100vmax_rgba(0,0,255,0.8),_inset_0_0_0_100vmax_rgba(255,255,255,1)] before:pointer-events-none'
                        : "text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <p className="text-xs text-white mt-1">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default MainLayout;

// box-shadow: 0px 1px 4px 0px #0000001C;
