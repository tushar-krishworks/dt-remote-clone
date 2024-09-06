import { useNavigate } from "react-router-dom";
import ReservationCard from "../../components/reservations/ReservationCard";

const reservationsList = [1, 2, 3];

const AllReservations = () => {
  const navigate = useNavigate();
  const handleCardClick = (index: number) => {
    navigate("/reservations/" + index);
  };
  return (
    <div className="flex flex-col gap-4">
      {reservationsList?.map((item: any, index: number) => (
        <div
          onClick={() => {
            handleCardClick(index);
          }}
        >
          <ReservationCard />
        </div>
      ))}
    </div>
  );
};

export default AllReservations;
