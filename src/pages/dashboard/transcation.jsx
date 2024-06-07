import { authorsTableData } from "@/data";
import Model from "@/widgets/Models/CashFlow";
import {
  ArrowDownTrayIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon, LinkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Progress,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Transcation() {
  return (
    <div className="mt-2 mb-8 flex flex-col gap-4">
      <div className="flex justify-between">
        <Typography variant="h6" className="ms-2 text-blue-gray-700">
          Transactions
        </Typography>
        <div>
          <Model />
        </div>
        <div className="flex gap-4 justify-center ">
          <div className="flex text-xs gap-3 uppercase text-gray-600">
            <div className="h-5 px-2 border-gray-400 ">00:updated</div>
            <div className="border-l-2 h-5 px-2 border-gray-400 ">00:new</div>
            <div className="border-l-2 h-5 px-2 border-gray-400 ">00:total</div>
          </div>
        </div>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="text-xs font-semibold text-blue-gray-600 flex justify-between my-2  ">
            <div className="flex">
              <div className="w-72  ms-2">
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
                <div className="text-xs font-medium flex gap-2  border-l-2 border-gray-400 px-2">
                  <ArrowDownTrayIcon className="h-4 w-4 text-blue-gray-600" />
                  Download
                </div>
                <div className="text-xs font-medium flex gap-2  border-l-2 border-gray-400 px-2 pr-6">
                  <ArrowUpTrayIcon className="h-4 w-4 text-blue-gray-600" />
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
                  "Txn details",
                  "Drawdown",
                  "Fulfillment Details",
                  "UTR Details",
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
                        <Link to={"/dashboard/invoices"}>
                          <div className="flex flex-col gap-y-4 text-xs font-semibold text-[#00A991] w-32">
                            <div>Bharat Electronics and home appliances</div>
                            <div className=" text-blue-gray-600 ">
                              <div>+91 83567 76544</div>
                              <div>Rippl_2345</div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className={className}>
                        <div className="flex flex-wrap flex-col justify-between  gap-y-3">
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            TRANSACTION ID:
                            <span className="text-blue-gray-900">#3Q34567</span>
                          </Typography>
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            disbursed AMT :
                            <span className="text-blue-gray-900">
                              ₹3,00,000
                            </span>
                          </Typography>
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            invoice id & date :
                            <span className="text-blue-gray-900">
                              #QuID_2345 | 29-03-2024
                            </span>
                          </Typography>
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            invoice AMT :
                            <span className="text-blue-gray-900">
                              ₹3,40,000
                            </span>
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex flex-wrap flex-col justify-between  gap-y-3">
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            01-01-2024, 13:00PM
                          </Typography>
                          <Typography className="text-xs flex gap-3 capitalize font-medium text-blue-gray-600">
                            TXN STATUS{" "}
                            <Chip
                              variant="gradient"
                              color={online ? "green" : "blue-gray"}
                              value={online ? "success" : "pending"}
                              className="py-0.5 px-2 text-[11px] font-medium w-fit"
                            />
                          </Typography>
                        </div>
                      </td>

                      <td className={className}>
                        <div className="flex flex-wrap flex-col justify-between  gap-y-3">
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            Partially
                          </Typography>
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            Del. date : &nbsp;
                            <span className="text-blue-gray-900">
                              29-03-2024
                            </span>
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {" "}
                        <div className="flex flex-col gap-y-3">
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            UTR NO.: &nbsp;
                            <span className="text-blue-gray-900">-</span>
                          </Typography>{" "}
                          <Typography className="text-xs capitalize font-medium text-blue-gray-600">
                            Disbursed Date: &nbsp;
                            <div className="text-blue-gray-900">
                              01-01-2024, 13:00PM
                            </div>
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
    </div>
  );
}

export default Transcation;
