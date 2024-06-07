import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Drawdown = ({ size, setSize }) => {
  const handleOpen = (value) => setSize(value);

  return (
    <div>
      <Dialog open={size === "md"} size={"md"} handler={handleOpen}>
        <DialogBody className="m-2">
          <div className="flex justify-between">
            <div className=" text-xl mx-2 my-2 font-semibold text-blue-gray-900">
              Drawdown Creation
            </div>
            <XMarkIcon
              className="h-4 w-4 text-gray-800 cursor-pointer"
              onClick={() => handleOpen(null)}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="email1"
                className="text-xs mx-2 font-semibold text-blue-gray-500"
              >
                Invoice Date <span className=" text-red-600">*</span>
              </label>
              <Input
                type="date"
                id="email1"
                placeholder="Email Name"
                className="!border  !border-gray-500 bg-white text-gray-900 "
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[60px] p-1" }}
              />
            </div>
            <div>
              <label
                htmlFor="email1"
                className="text-xs mx-2 font-semibold text-blue-gray-500"
              >
                Order Date<span className=" text-red-600">*</span>
              </label>
              <Input
                type="date"
                id="email1"
                placeholder="Email Name"
                className="!border  !border-gray-500 bg-white text-gray-900 "
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[60px] p-1" }}
              />
            </div>
            <div>
              <label
                htmlFor="email1"
                className="text-xs mx-2 font-semibold text-blue-gray-500"
              >
                Order Date<span className=" text-red-600">*</span>
              </label>
              <Input
                type="date"
                id="email1"
                placeholder="Email Name"
                className="!border  !border-gray-500 bg-white text-gray-900 "
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[60px] p-1" }}
              />
            </div>
          </div>
          <div className="grid mt-3 grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email1"
                className="text-xs mx-2 font-semibold text-blue-gray-500"
              >
                Order Value<span className=" text-gray-600">*</span>
              </label>
              <Input
                type="text"
                id="email1"
                placeholder=""
                className="!border  !border-gray-500 bg-white text-gray-900 "
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px] p-1" }}
              />
            </div>
            <div>
              <label
                htmlFor="email1"
                className="text-xs mx-2 font-semibold text-blue-gray-500"
              >
                Brand (Optional) <span className=" text-red-600">*</span>
              </label>
              <Input
                type="email"
                id="email1"
                className="!border  !border-gray-500 bg-white text-gray-900 "
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px] p-1" }}
              />
            </div>
          </div>
          <div className="grid mt-3 grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email1"
                className="text-xs mx-2 font-semibold text-blue-gray-500"
              >
                Upload Invoice
              </label>
              <Input
                type="file"
              
                className="!border  !border-gray-500 bg-white  text-gray-900 "
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]  -p-3" }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Button
              variant="outlined"
              color="green"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Create</span>
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Drawdown;
