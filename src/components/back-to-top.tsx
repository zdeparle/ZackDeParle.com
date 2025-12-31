"use client";
import { useWindowScroll } from "react-use";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function BackToTop() {
  const controls = useAnimation();
  const variants = {
    hidden: {
      x: 0,
      y: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      
      y: 0,
      opacity: 1,
    },
  };
  const { y } = useWindowScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    y > 100 ? setShow(true) : setShow(false);
  }, [y]);
  useEffect(() => {
    show ? controls.start("visible") : controls.start("hidden");
  }, [show]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      className="fixed bottom-5 right-5 z-50"
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group h-12 w-12 rounded-full bg-gradient-to-br from-primary to-indigo-600 p-0 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/50"
              aria-label="Press to return to top"
            >
              <ChevronUp className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:-translate-y-1" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={6}>
            <p>Return to top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
}
