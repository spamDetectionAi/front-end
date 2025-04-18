import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextEditor from "./textEditor/TextEditor";

import { MessagesSquareIcon } from "lucide-react";

import "react-quill/dist/quill.snow.css";

export default function NewMsg() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="font-black  bg-[rgb(236,236,240)]  w-full py-2 rounded-sm flex items-center gap-1.5 justify-center ">
            <MessagesSquareIcon />
            new message
          </button>
        </DialogTrigger>
        <DialogContent className="w-[900px] h-[600px]">
          <TextEditor />
        </DialogContent>
      </Dialog>
    </div>
  );
}
