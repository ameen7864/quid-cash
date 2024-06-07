import { authorsTableData } from "@/data";
import {
  TABLE_ROWS,
  creditDetails,
  customerDetails,
} from "@/data/retailerdata";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { HiOutlineRefresh } from "react-icons/hi";
import {
  MdOutlineCancel,
  MdOutlineCheckCircle,
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
  MdOutlineTurnRight,
} from "react-icons/md";
import { PiEyeLight } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import { Link } from "react-router-dom";

const Retaildata = () => {
  const TABLE_HEAD = ["Name", "Job", "Employed"];

  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    "All Documents",
    "Cash Flow",
    "Customer Details",
    "Business Details",
    "CPV",
    "Underwriting",
    "Lender",
    "All Communications",
  ];

  const handleTabClick = (index, tab) => {
    setActiveTab(index === activeTab ? null : index);
    // alert(`You clicked on ${tab}`);
  };
  return (
    <div>
      <div>
        <div className="flex justify-between my-2 ">
          <Breadcrumbs separator=">" className=" bg-transparent ">
            <Link
              to="/"
              className="opacity-60 text-[#00A991] text-sm font-semibold"
            >
              All Applications
            </Link>
            <a
              href="#"
              className="opacity-60 text-blue-gray-900 text-sm font-semibold"
            >
              Customer Details
            </a>
          </Breadcrumbs>
          <div className="flex gap-6">
            {" "}
            <Menu>
              <MenuHandler>
                <Button className="bg-[#00A991] flex gap-2">
                  Actions <ChevronDownIcon className="w-3 mt-0.5 h-3" />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem className="flex gap-2">
                  <LuRefreshCw className="mt-0.5" />
                  Change Queue
                </MenuItem>
                <MenuItem className="flex gap-2">
                  <MdOutlineCancel className="mt-0.5" color="red" /> Quid
                  Rejection
                </MenuItem>
                <MenuItem className="flex gap-2">
                  <MdOutlineCheckCircle className="mt-0.5" color="green" />
                  Quid Approval
                </MenuItem>
                <MenuItem className="flex gap-2">
                  <MdOutlineTurnRight className="mt-0.5" />
                  Push to Lender
                </MenuItem>
              </MenuList>
            </Menu>
            <Typography className="mt-1 text-sm font-normal">
              STATUS :{" "}
              <select
                name=""
                id=""
                className="bg-[#beedea] p-2 mx-2 pr-3 rounded-lg"
              >
                <option value="">Onboarded</option>
              </select>{" "}
            </Typography>
            <Typography className="mt-1 text-sm font-normal">
              CREDIT LINE :{" "}
              <select
                name=""
                id=""
                className="bg-[#beedea] p-2 mx-2 pr-3 rounded-lg"
              >
                <option value="">Active</option>
              </select>{" "}
            </Typography>
            <div className="flex gap-4 mt-2 mr-2 ">
              <MdOutlineNavigateBefore
                size={24}
                className="rounded bg-[#beedea] text-gray-600"
              />
              <MdOutlineNavigateNext
                size={24}
                className="rounded bg-[#beedea] text-gray-900"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6 sm:flex-nowrap flex-wrap">
          <div className=" w-1/2  ">
            <Card className=" h-40 ">
              <CardBody className="px-0 pt-0 pb-2 mx-2">
                <div className="flex justify-between border-b-2">
                  <div className=" text-sm font-medium pt-3 p-2">
                    Business Details
                  </div>
                </div>
                <div className="flex justify-between mx-4 text-sm font-normal mt-4">
                  <div className="flex flex-col gap-2 capitalize text-blue-gray-400">
                    {customerDetails.slice(0, 3).map((detail, index) => (
                      <div key={index} className="font-light">
                        {detail.label} :{" "}
                        <span className="font-medium text-gray-800">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 capitalize text-blue-gray-400">
                    {customerDetails.slice(3).map((detail, index) => (
                      <div key={index} className="font-light">
                        {detail.label} :{" "}
                        <span className="font-medium text-gray-800">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className=" w-1/3 ">
            <Card className=" h-40">
              <CardBody className="px-0 pt-0 pb-2 mx-2">
                <div className="flex justify-between border-b-2">
                  <div className=" text-sm font-medium pt-3 p-2">
                    Anchor Details
                  </div>
                </div>
                <div className="flex flex-col gap-2  text-sm p-2 capitalize text-blue-gray-400">
                  <div>
                    Anchor NAME :
                    <span className=" font-medium text-gray-800"> Ripplr</span>
                  </div>
                  <div>
                    Anchor id :
                    <span className=" font-medium text-gray-800">
                      Ripplr_2346
                    </span>
                  </div>
                  <div>
                    No. of anchors :
                    <select
                      name=""
                      id=""
                      className=" font-medium text-gray-800 pr-4"
                    >
                      <option value="">02</option>
                    </select>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="w-1/3">
            <Card>
              <CardBody className="px-0 pt-0 pb-2 mx-2">
                <div className="flex justify-between border-b-2">
                  <div className=" text-sm font-medium pt-3 p-2">
                    Onboarding Journey
                  </div>
                  <div className="flex mt-1">
                    <Checkbox
                      color="green"
                      defaultChecked
                      className="h-4 w-4 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    />
                    <Typography className=" text-[10px] mt-3 capitalize font-semibold text-blue-gray-600">
                      All completed
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-x-4 items-center  flex-wrap ">
                  {[
                    "Login",
                    "GST",
                    "PAN",
                    "Aadhar",
                    "Bank Details",
                    "Selfie",
                    "Shop Image",
                    "Agreement",
                    "e-NACH",
                  ].map((val, i) => (
                    <div className="text-center">
                      <Checkbox
                        color="green"
                        defaultChecked
                        className="h-4 w-4 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                      />
                      <Typography className=" text-[10px] capitalize font-semibold text-blue-gray-600">
                        {val}
                      </Typography>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex justify-between  gap-4  mt-6">
          <div className="flex flex-col gap-2">
            <div className="">
              <Card>
                <CardBody className="px-0 pt-0 pb-2 mx-2">
                  <div className="flex justify-between border-b-2">
                    <div className=" text-sm font-medium pt-3 p-2">
                      Approval State
                    </div>
                  </div>
                  <div className="flex">
                    <Checkbox
                      color="green"
                      defaultChecked
                      className="h-4 w-4 rounded-full  border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    />{" "}
                    <Typography className=" text-sm mt-3 capitalize font-semibold text-blue-gray-600">
                      Doc Verification completed
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </div>
            <Card className=" w-[420px] p-3">
              <CardBody className="px-0 pt-0 pb-2 mx-2">
                <div className="flex justify-between border-b-2">
                  <div className=" text-sm font-medium pt-3 p-2">
                    Credit Details
                  </div>
                </div>
                <div className="flex gap-3 items-center flex-wrap p-2">
                  <div className="text-sm mx-2 mt-2 capitalize gap-2 flex flex-col">
                    {creditDetails.map((detail, index) => (
                      <div key={index}>
                        {detail.label} :{" "}
                        <span className="font-medium text-gray-800">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex mt-6 justify-between border-b-2">
                  <div className=" text-sm font-medium pt-3 p-2">
                    Program Details
                  </div>
                </div>
                <div className="flex gap-3 items-center  flex-wrap ">
                  <div className=" text-sm mx-2 mt-2 capitalize gap-2 p-2 flex flex-col">
                    <div>Max. tenure days : 45 Days</div>
                    <div>Interest free days : 15 Days</div>
                    <div>Interest bearing days : 30 Days</div>
                    <div>Interest scheduled </div>
                  </div>
                  <div className="w-full border border-blue-gray-100 rounded-lg ">
                    <table className="w-full rounded-lg min-w-max table-auto text-left">
                      <tbody>
                        {TABLE_ROWS.map(({ name, job, date }, index) => (
                          <tr
                            key={name}
                            className="border-b border-blue-gray-100 rounded-lg"
                          >
                            <td className="p-1 px-3 border-r border-blue-gray-200 rounded-lg">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                            </td>
                            <td className="p-2 border-r border-blue-gray-100 rounded-lg">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {job}
                              </Typography>
                            </td>
                            <td className="p-1 rounded-lg">
                              <select className="ms-4 bg-blue-gray-400 rounded-full text-xs p-1 text-white">
                                <option>Per Day</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div>
            <Typography className="flex gap-7 mx-4 mb-4 pb-2 text-sm font-normal">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    activeTab === index
                      ? " border-b-2  pb-1 border-green-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick(index, tab)}
                >
                  {tab}
                </div>
              ))}
            </Typography>
            <Card className=" w-full">
              <CardBody className="px-0 pt-0 pb-2 mx-2">
                <div className="flex justify-between border-b-2">
                  <div className="flex gap-4 text-sm font-medium pt-3 p-2">
                    <TbReload
                      size={20}
                      color="green"
                      className="cursor-pointer"
                    />{" "}
                    Onboarding Journey
                  </div>
                </div>
                <div>
                  <table className="w-full min-w-[640px] table-auto">
                    <thead>
                      <tr>
                        {[
                          "#",
                          "Document ID",
                          "Document Name",
                          "Document classification",
                          "verification status",
                          "Verification remark",
                          "Actions",
                          "Updated",
                        ].map((el) => (
                          <th
                            key={el}
                            className="border-b border-blue-gray-50 py-3 px-5 text-left"
                          >
                            <Typography
                              variant="small"
                              className="text-[11px] font-bold uppercase text-blue-gray-400"
                            >
                              {el}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {authorsTableData.map(
                        ({ img, name, email, job, online, date }, key) => {
                          const className = `py-3 px-5 ${
                            key === authorsTableData.length
                              ? ""
                              : "border-b border-blue-gray-50"
                          }`;

                          return (
                            <tr key={name}>
                              <td className={className}>
                                <div className="text-xs font-semibold text-blue-gray-600 ">
                                  {key+1}
                                </div>
                              </td>
                              <td className={className}>
                                <div className="flex flex-col gap-y-4 text-xs font-semibold text-[#00A991]">
                                  <div>10203901</div>
                                </div>
                              </td>
                              <td className={className}>
                                <div className="flex  flex-col gap-y-3">
                                  <Typography className="text-xs font-semibold text-blue-gray-600">
                                    PAN Card
                                  </Typography>
                                </div>
                              </td>
                              <td className={className}>
                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                  PAN Updated
                                </Typography>
                              </td>

                              <td className={className}>
                                <Chip
                                  variant="gradient"
                                  color={online ? "green" : "blue-gray"}
                                  value={online ? "valid" : "Invalid"}
                                  className="py-0.5 px-2 text-[11px] font-medium w-fit"
                                />
                              </td>
                              <td className={className}>
                                <div className="flex flex-col gap-y-3">
                                  <Typography className="text-xs font-semibold text-blue-gray-600">
                                    Valid
                                  </Typography>
                                </div>
                              </td>
                              <td className={className}>
                                <div className="flex gap-2">
                                  <PiEyeLight className="h-4 w-4 text-green-800" />
                                  <HiOutlineRefresh />
                                </div>
                              </td>
                              <td className={className}>
                                <div className="w-24">
                                  <Typography className="text-xs font-semibold text-blue-gray-600">
                                    01-01-2024
                                  </Typography>
                                  <Typography className="text-xs font-semibold text-blue-gray-600">
                                    13:00PM
                                  </Typography>
                                  <Typography className="text-xs font-semibold text-blue-gray-600">
                                    By: System
                                  </Typography>
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retaildata;
