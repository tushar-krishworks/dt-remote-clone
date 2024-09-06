const bottomCardItems = () => {
  const bottomCardItems = [
    { id: "1", value: "Check Out: 12 Jul, 2024" },
    { id: "2", value: "12:00 - 01:00 PM" },
  ];
  return bottomCardItems;
};
const ReservationCard = () => {
  return (
    <div className="bg-primary-1 rounded-xl text-white">
      <div className="flex flex-col gap-4 p-5">
        <div className="flex gap-3 w-[80%] mx-auto items-center">
          <img src="/src/assets/DefaultProfile.png" alt="" />
          <div className="flex flex-col">
            <div>
              <span className="font-semibold">03 Days </span>
              <span className="font-extralight"> / </span>
              <span className="text-[10px]">STANDARD</span>
            </div>
            <div>
              <span className="text-[10px]">
                Checked In: 10 Jul, 2024 | 2:33 PM
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          {bottomCardItems()?.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img src="/src/assets/reservationCard/calendarIcon.svg" alt="" />
              <p className="text-[10px]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
