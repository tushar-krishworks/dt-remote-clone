import { useParams } from "react-router-dom";
import Button from "../../components/common/ReusableButton";
import UnlockCard from "../../components/locks/UnlockCard";
import { cn } from "../../lib/utils";

const staticRoomList = [
  { id: "1", name: "Room Main Door" },
  { id: "2", name: "Swimming Pool" },
];

const LocksScreen = () => {
  const { roomId } = useParams();
  return (
    <div className="flex flex-col gap-8">
      <UnlockCard />
      <div className="bg-g-3 rounded-xl">
        <div className="flex justify-between items-center p-4 ">
          <div>
            <p className="font-black text-2xl">****</p>
            <p className="text-xs text-g-1">Access Code</p>
          </div>
          <div>
            <label className="inline-flex items-center  cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
      {true && (
        <div className="bg-g-3 rounded-xl">
          <div className="flex justify-between items-center p-4 ">
            <div className="flex gap-4">
              <img
                src="/src/assets/locks/locked.svg"
                alt="locked"
                // className="w-1/2 h-1/2"
              />
              <div className="flex flex-col">
                <p className="text-sm">Locked</p>
                <p className="text-xs text-g-1">Toggle to unlock</p>
              </div>
            </div>
            <div>
              <label className="inline-flex items-center  cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      )}
      <div>
        {staticRoomList?.map((room) => {
          return (
            <>
              <div className="flex justify-between p-4">
                <p>{room.name}</p>
                <img src="/src/assets/common/rightIcon.svg" />
              </div>
              <hr />
            </>
          );
        })}
      </div>
      <div className="w-full ">
        <Button className={cn("w-full")} variant="secondary">
          Request Pin for {roomId ? "" : "for all locks"}
        </Button>
      </div>
      <div className="bg-g-3 p-4 flex justify-between">
        <div className="flex gap-4">
          <img src="/src/assets/locks/infoIcon.svg" alt="lock" />
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold">Access Details</p>
            <p className="font-light text-[9px]">Accessed by: Arthur</p>
            <p className="font-light text-[9px] text-g-1">
              24 Mar, 2024 | 11:57:05 am
            </p>
          </div>
        </div>
        <img src="src/assets/common/crossIcon.svg" />
      </div>
    </div>
  );
};

export default LocksScreen;
