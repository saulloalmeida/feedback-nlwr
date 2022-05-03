import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>Hello Headless</Popover.Panel>
      <Popover.Button
        className="bg-brad-500 rounded-full 
      px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
