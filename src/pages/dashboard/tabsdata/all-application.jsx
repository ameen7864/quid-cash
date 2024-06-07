import { authorsTableData } from "@/data";
import Pagination from "@/widgets/Pagination/Pagination";
import {
    Card,
    CardBody,
    Checkbox,
    Chip,
    Input,
    Progress,
    Typography
} from "@material-tailwind/react";
import { GiBackwardTime } from "react-icons/gi";
import { MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";

const AllApplication = () => {
  return (
    <div className=" mb-8 flex flex-col gap-4">
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
                  "business",
                  "Details",
                  "Applications steps",
                  "Approval state",
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
                          1{" "}
                        </div>
                      </td>
                      <td className={className}>
                        <Link to={"/dashboard/retailer"}>
                          <div className="flex flex-col gap-y-4 text-xs font-semibold text-[#00A991] w-32">
                            <div>Bharat Electronics and home appliances</div>
                            <div className=" text-blue-gray-600 ">
                              Abhishek Jain
                              <div>+91 83567 76544</div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className={className}>
                        <div className="flex flex-wrap justify-between  gap-y-3">
                          <Typography className="text-xs capitalize font-semibold text-blue-gray-600">
                            approved
                          </Typography>
                          <Chip
                            variant="gradient"
                            color={online ? "green" : "blue-gray"}
                            value={online ? "₹ 3,40,000" : "₹ 3,40,000"}
                            className="py-0.5 px-2 text-[11px] font-medium w-fit"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex gap-3 items-center w-72 flex-wrap ">
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
                              <Typography className=" text-xs capitalize font-semibold text-blue-gray-600">
                                {val}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      </td>

                      <td className={className}>
                        <div className="flex flex-col gap-2">
                          <Progress value={25} size="sm" color="green" />
                          <div className=" text-xs font-medium text-gray-600">
                            Approved for ₹20,00,000.
                            <div>Activation pending</div>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        {" "}
                        <div className="flex flex-col gap-y-3">
                          <Typography className="text-xs flex gap-1 font font-semibold text-blue-gray-600">
                            <GiBackwardTime
                              size={18}
                              className="text-gray-800"
                            />
                            25 days ago
                          </Typography>
                          <div className="text-xs font-semibold ms-6 -mt-1.5 text-blue-gray-400">
                            14:07:57
                          </div>
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
    </div>
  );
};

export default AllApplication;
