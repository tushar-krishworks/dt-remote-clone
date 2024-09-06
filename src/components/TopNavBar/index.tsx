import { useLocation, useNavigate, useParams } from "react-router-dom";
import { cn } from "../../lib/utils";

const TopNavBar = () => {
  const location = useLocation();

  const currentLocation = location.pathname.split("/");
  const { reservationId } = useParams();

  const navigate = useNavigate();
  let toShowBack = false;
  if (reservationId) {
    toShowBack = true;
  }
  console.log(currentLocation, reservationId);
  return (
    <div className={cn("flex justify-between shadow-lg px-6 py-1 ")}>
      <div className="flex flex-col">
        <div className="flex gap-3">
          {toShowBack && (
            <p onClick={() => navigate(-1)}>
              <img src="/src/assets/topNav/backButton.svg" alt="" />
            </p>
          )}
          <p className="text-g-2">Awesome Queen</p>
        </div>
        <p className="font-bold text-xl">Room 0215</p>
      </div>
      <div>
        <img src="/src/assets/DefaultProfile.png" alt="" />
      </div>
    </div>
  );
};

export default TopNavBar;
