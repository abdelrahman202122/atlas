import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";
import Image from "next/image";

const AnimatedCard = ({ title, image }) => {
  return (
    <Card
      className={cn(
        "bg-gray-300 flex flex-col gap-8 items-center justify-between"
      )}
    >
      <CardHeader>
        <CardTitle className={cn("text-secondary text-center")}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-16 w-16">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimatedCard;
