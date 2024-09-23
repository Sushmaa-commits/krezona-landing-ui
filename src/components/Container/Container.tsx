import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.PropsWithChildren {
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <section
      className={cn(
        "flex flex-col md:flex-row items-center justify-between px-[20px] md:px-[66px] lg:max-w[94px] xl:px-[120px] 2xl:px-[304px] mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}

export default Container;
