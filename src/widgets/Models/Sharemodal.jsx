import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  MdOutlineContentCopy,
  MdOutlineMessage,
  MdOutlineWhatsapp,
} from "react-icons/md";

const Sharemodel = ({ size, setSize }) => {
  const handleOpen = (size) => setSize(size);

  return (
    <div>
      <Dialog open={size == "xs"} size={"xs"} handler={handleOpen}>
        <DialogBody className="m-2">
          <div className="flex justify-between">
            <div className=" text-lg mx-2 mb-2  font-semibold text-blue-gray-900">
              Share Link
            </div>
            <div className="flex gap-2">
              <Typography className="text-xs flex gap-1 font-medium cursor-pointer text-[#00A991] ">
                <MdOutlineContentCopy size={16} /> Copy Link
              </Typography>
              <XMarkIcon
                className="h-4 w-4 text-gray-800 cursor-pointer"
                onClick={() => handleOpen(null)}
              />
            </div>
          </div>
          <hr />

          <div>
            <Typography className="text-xs mt-4 ms-1 font-medium text-blue-gray-600">
              Send Payment link via
            </Typography>
            <div className="flex justify-between flex-wrap mt-6">
              <div className="flex gap-1">
                <div className="w-8 h-8 bg-[#00A991] rounded-full p-2">
                  <MdOutlineWhatsapp color="white" />
                </div>
                <Typography className="text-xs mt-2 font-semibold text-blue-gray-600">
                  Whatsapp
                </Typography>
              </div>
              <div className="flex gap-1">
                <div className="w-8 h-8 bg-[#00A991] rounded-full p-2">
                  <MdOutlineMessage color="white" />
                </div>
                <Typography className="text-xs mt-2 font-semibold text-blue-gray-600">
                  Message
                </Typography>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Sharemodel;
