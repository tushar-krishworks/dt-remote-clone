const UnlockCard = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-xl rounded-xl py-5">
      <img
        src="/src/assets/locks/lockIcon.svg"
        alt="unlock"
        className="w-1/2 h-1/2"
      />
      <p className="text-g-2">TAP TO UNLOCK</p>
    </div>
  );
};

export default UnlockCard;
