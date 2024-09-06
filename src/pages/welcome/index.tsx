import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/ReusableButton";
import { cn } from "../../lib/utils";
import "./index.css";

const carouselArray = [
  {
    id: 1,
    img: "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    title: "Welcome to Hotel Pommier",
    description: "You deserve local hospitality",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/traveltripperweb/image/upload/c_limit,h_2500,w_2500/v1577116161/ll0o3bieakyihutuj0me.jpg",
    title: "About Hotel Pommier",
    description: "100% Independent, 100% Awesome",
  },
  {
    id: 3,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/04/38/44/27/front-of-hotel.jpg",
    title: "Staying local since 1985",
    description: "Staying local since 1985",
  },
];

const WelcomePage = () => {
  const [currentIndexCarousel, setCurrentIndexCarousel] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexCarousel((prev) => (prev + 1) % carouselArray.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNextClick = () => {
    navigate("/welcome");
  };

  return (
    <div className="flex flex-col h-screen overflow-y-clip">
      <div className="img-container">
        <img
          src={carouselArray[currentIndexCarousel].img}
          alt="Carousel Image"
          className="image"
        />
      </div>
      <div className="flex flex-col items-center justify-between p-4 bg-white">
        <div className="flex space-x-2 mb-2">
          {carouselArray.map((item, idx) => (
            <div
              key={item.id}
              className={cn(
                "w-2 h-2 rounded-full",
                currentIndexCarousel === idx ? "bg-primary-1" : "bg-gray-300"
              )}
            ></div>
          ))}
        </div>
        <div className="text-xl font-black mb-1">
          {carouselArray[currentIndexCarousel].title}
        </div>
        <div className="text-2xl text-g-1 font-extralight mb-4">
          {carouselArray[currentIndexCarousel].description}
        </div>
        <Button
          className="w-full"
          variant="secondary"
          onClick={handleNextClick}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
