import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};

const contacts: Contact[] = [
  // Other contacts can be added here
];

export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className,
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer" // Add rel attribute for security
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon icon={contact.icon} className="w-fit" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
