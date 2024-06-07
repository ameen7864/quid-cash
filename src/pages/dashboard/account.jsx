import { authorsTableData } from "@/data";
import BulkUpload from "@/widgets/Models/BulkLead";
import CashFlow from "@/widgets/Models/CashFlow";
import CreateLead from "@/widgets/Models/CreateLead";
import Sharemodel from "@/widgets/Models/Sharemodal";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { VscDiffAdded } from "react-icons/vsc";
import { ArrowPathIcon, LinkIcon } from "@heroicons/react/24/solid";
import { AiOutlineFullscreen } from "react-icons/ai";
import {
  Card,
  CardBody,
  Chip,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { GiBackwardTime } from "react-icons/gi";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";
import Pagination from "@/widgets/Pagination/Pagination";
import Drawdown from "@/widgets/Models/Drawdown";

export function Accounts() {
  const [share, setshare] = useState("");

  return (
    <div className="mt-2 mb-8 flex flex-col gap-4">
      <div className="flex justify-between flex-wrap mt-4">
        {/* <div><DrawerPlacement/></div> */}
        <Typography
          variant="small"
          className=" ms-4 font-bold uppercase text-blue-gray-600"
        >
          Accounts
        </Typography>
        <div className="flex gap-4 justify-center flex-wrap ">
          <div className="flex text-xs gap-3 uppercase text-gray-700">
            <ArrowPathIcon class="h-4 w-4 text-green-500 cursor-pointer" />

            <div className=" h-5 px-2 border-gray-400 ">
              <span className=" text-xs text-black font-bold">00</span> : new
            </div>
            <div className="border-l-2 h-5 px-2 border-gray-400 ">
              <span className=" text-xs text-black font-bold">00</span> : total
            </div>
          </div>
        </div>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="text-xs font-semibold text-blue-gray-600 flex justify-between my-2  ">
            <div className="flex">
              <div className="w-72 ms-4">
                <Input
                  label="Search"
                  color="gray"
                  size="xs"
                  icon={<i className="fas fa-search" />}
                />
              </div>
            </div>
            <div className="flex">
              <div className=" w-40 ms-4 my-4">
                Show Columns: &nbsp;
                <select>
                  <option value="">All</option>
                  <option value="">ripplr</option>
                </select>
              </div>
              <div className="flex gap-4 -ms-4 my-4">
                <div className="text-xs font-medium flex gap-2 text-gray-900  border-l-2 border-gray-400 px-2 pr-6">
                  <MdOutlineFileDownload className="h-4 w-4 text-blue-gray-600" />
                  Download
                </div>
                <div className="text-xs font-medium flex gap-2 text-gray-900  border-l-2 border-gray-400 px-2 pr-6">
                  <MdOutlineFileUpload className="h-4 w-4 text-blue-gray-600" />
                  Upload
                </div>
              </div>
            </div>
          </div>

          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "#",
                  "Customer Details",
                  "Credit Limit",
                  "Status",
                  "Action",
                  "DPD & NON-DPD",
                  "CREATED ON",
                ].map((el, index) => (
                  <th
                    key={index}
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
                        <div className="text-xs flex gap-2 font-semibold text-blue-gray-600 ">
                          <span>1</span>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex flex-col gap-y-4 text-xs font-semibold text-[#00A991] w-32">
                          <div>Bharat Electronics and home appliances</div>
                          <div className=" text-blue-gray-600 ">
                            +91 83567 76544{" "}
                          </div>
                          <div className=" text-blue-gray-600 ">
                            Lender: Blacksoil
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex  flex-col gap-y-3">
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            paylater Limit : ₹ 5,00,000
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            Balance : ₹ 4,50,000
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "yellow"}
                          value={online ? "success" : "pending"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>

                      <td className={className}>
                        <div className="flex gap-2">
                          <IoCopyOutline class="h-4 w-4 text-green-500 " />
                          <VscDiffAdded
                            size={20}
                            className=" text-green-500 cursor-pointer"
                            onClick={() => setshare("md")}
                          />
                          <AiOutlineFullscreen className="h-5 w-5 text-green-400" />
                        </div>
                      </td>
                      <td className={className}>
                        {" "}
                        <div className="flex flex-col gap-y-3">
                          <Typography className="text-xs flex gap-1 font font-semibold text-blue-gray-600">
                            Current DPD: -
                          </Typography>
                          <Typography className="text-xs flex gap-1 font font-semibold text-blue-gray-600">
                            HIGHEST DPD: 0
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex flex-col gap-1">
                          <GiBackwardTime size={18} className="text-gray-800" />
                          <Typography className="text-xs  font-semibold text-blue-gray-600">
                            11 Mar, 2024 14:07:57
                          </Typography>
                          <Typography className="text-xs  font-semibold text-blue-gray-600">
                            Updated:
                          </Typography>
                          <Typography className="text-xs  font-semibold text-blue-gray-600">
                            20 Mar 2024, 09:15:20
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Pagination />
      <Drawdown size={share} setSize={setshare} />
    </div>
  );
}

export default Accounts;
