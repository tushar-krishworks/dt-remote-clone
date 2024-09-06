import { FC } from "react";
import FeatureCard from "../../components/reservations/FeatureCard";
import ReservationCard from "../../components/reservations/ReservationCard";

const staticFeatureList = [
  { id: "1", value: "Smart Access" },
  { id: "2", value: "Smart Lights" },
  { id: "3", value: "Smart Thermostat" },
];

export interface IReservationsScreenProps {}
const ReservationsScreen: FC<
  IReservationsScreenProps
> = ({}: IReservationsScreenProps) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <ReservationCard />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="font-black text-2xl">Room 0215</p>
            <div className="flex">{/* icons */}</div>
          </div>
          <p className="font-extrabold text-lg">Awesome Queen</p>
          <p className="font-normal">Second Floor</p>
        </div>
      </div>
      <div className="flex flex-col mt-6 gap-6">
        <p className="text-g-1">
          Featuring one or two Queen beds, our Queen rooms are the perfect place
          for guests looking for a great night’s sleep. You’ll enjoy a nice hot
          shower, super fast internet, and plenty of space to get comfortable.
        </p>
        <p>
          <span className="font-black text-lg">Features </span>
          <span> at your fingertips</span>
        </p>
        {/* Features */}
        <div className="flex flex-col gap-2">
          {staticFeatureList.map((item) => (
            <FeatureCard title={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservationsScreen;
