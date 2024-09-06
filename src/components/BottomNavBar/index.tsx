import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservationsIcon from "../../assets/BottomNav/ReservationsIcon";
import "./BottomNavBar.css";

const bottomNavbarItems = [
  { id: "1", title: "Concierge", icon: <ReservationsIcon /> },
  { id: "2", title: "Reservations", icon: <ReservationsIcon /> },
  { id: "3", title: "Digital Locks", icon: <ReservationsIcon /> },
  { id: "4", title: "Smart TV", icon: <ReservationsIcon /> },
  { id: "5", title: "Thermostat", icon: <ReservationsIcon /> },
];

const BottomNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    switch (activeIndex) {
      case 0:
        navigate("/welcomeScreen")
        break;
      case 1:
        navigate("/reservations");
        break;
      case 2:
        navigate("/locks");
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }, [activeIndex]);
  return (
    <div className="bottom-navigation">
      {bottomNavbarItems.map((item, index) => (
        <div
          key={item.id}
          className={`menu-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          <div className="navigation-icon">
            <div className="img-fluid">{item.icon}</div>
          </div>
          <span className="menu-text">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavBar;
