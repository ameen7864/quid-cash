import { authorsTableData } from "@/data";
import Sharemodel from "@/widgets/Models/Sharemodal";
import Pagination from "@/widgets/Pagination/Pagination";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  Chip,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { GiBackwardTime } from "react-icons/gi";
import { MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";

const Leads = () => {
  const [share, setshare] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allRowNames = authorsTableData.map(({ name }) => name);
      setSelectedRows(allRowNames);
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (event, name) => {
    if (event.target.checked) {
      setSelectedRows((prevSelected) => [...prevSelected, name]);
    } else {
      setSelectedRows((prevSelected) =>
        prevSelected.filter((selectedName) => selectedName !== name)
      );
    }
  };
  return (
    <div>
      {" "}
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
                <th className="border-b border-blue-gray-50 py-3 px-5 flex gap-2 text-left text-blue-gray-400">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedRows.length === authorsTableData.length}
                  />
                  <span className="text-sm">#</span>
                </th>
                {[
                  "business",
                  "Category",
                  "PAN No",
                  "Upload cash Flow/Status",
                  "Updated",
                  "Action",
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
              {authorsTableData.map(({ name, online }, key) => {
                const className = `py-3 px-5 ${
                  key === authorsTableData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <div className="text-xs flex gap-2 font-semibold text-blue-gray-600 ">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(name)}
                          onChange={(event) => handleSelectRow(event, name)}
                        />{" "}
                        <span>1</span>
                      </div>
                    </td>
                    <td className={className}>
                      <div className="flex flex-col gap-y-4 text-xs font-semibold text-[#00A991] w-32">
                        <div>Bharat Electronics and home appliances</div>
                        <div className="text-blue-gray-600">
                          +91 83567 76544
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <div className="flex flex-col gap-y-3">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          Electronics
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          Mobile Phones
                        </Typography>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        AAJFN2389N
                      </Typography>
                    </td>

                    <td className={className}>
                      <div className="flex gap-16">
                        <div className="h-5 w-5 bg-green-600 rounded text-center pt-0.5 ps-0.5">
                          <MdOutlineFileUpload className="h-4 w-4 text-white" />
                        </div>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "yellow"}
                          value={online ? "success" : "pending"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </div>
                    </td>
                    <td className={className}>
                      <div className="flex flex-col gap-y-3">
                        <Typography className="text-xs flex gap-1 font font-semibold text-blue-gray-600">
                          <GiBackwardTime size={18} className="text-gray-800" />
                          25 days ago
                        </Typography>
                        <div className="text-xs ms-6 -mt-1.5 font-semibold text-blue-gray-400">
                          14:07:57
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <div className="flex gap-3">
                        <LinkIcon
                          className="h-5 w-5 text-green-500 cursor-pointer"
                          onClick={() => setshare("xs")}
                        />
                        <PencilSquareIcon className="h-4 w-4 text-gray-900" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Pagination />
      <Sharemodel size={share} setSize={setshare} />
    </div>
  );
};

export default Leads;
