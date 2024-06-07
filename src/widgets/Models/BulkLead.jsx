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
import { MdOutlineFileDownload } from "react-icons/md";

const BulkUpload = ({size, setSize}) => {
  const handleOpen = (value) => setSize(value);

  return (
    <div>
      <Dialog open={size === "md"} size={"md"} handler={handleOpen}>
        <DialogBody className="m-2">
          <div className="flex justify-between">
            <div className=" text-xl mx-2 my-2 font-semibold text-blue-gray-900">
              Bulk Upload
            </div>
            <XMarkIcon
              className="h-4 w-4 text-gray-800 cursor-pointer"
              onClick={() => handleOpen(null)}
            />
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#FBF1CC] dark:hover:[#FBF1CC] dark:bg-gray-700 hover:bg-[#FBF1CC] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:[#FBF1CC]"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-green-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-900 dark:text-gray-900 font-semibold">
                  Upload .xls file
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </DialogBody>
        <div className="flex p-4 rounded flex-col bg-[#E6F6F5] mt-6">
          <div className="mx-2 text-sm font-semibold text-gray-800">
            {" "}
            Template
          </div>
          <div className="mx-2 text-xs font-medium mt-1">
            A sample Excel file is provided to assist you in entering details in
            a structured format, ensuring an error-free process.
          </div>

          <div className="text-[#00A991] flex gap-2 font-medium text-base mx-2 mt-4">
            Sample Create Lead.xls <MdOutlineFileDownload className="mt-0.5" size={20}/>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BulkUpload;
