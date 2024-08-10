import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const HeaderButtons = () => {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="lg" className={cn("text-secondary")}>
        Join Us
      </Button>
      <Button variant="outline" size="lg" className={cn("text-secondary")}>
        AR
      </Button>
    </div>
  );
};

export default HeaderButtons;
