import { cn } from "../../lib/utils";

const FeatureCard = ({ title }: { title: string }) => {
  return <div className={cn("bg-g-3 p-4 rounded-xl")}>{title}</div>;
};

export default FeatureCard;
