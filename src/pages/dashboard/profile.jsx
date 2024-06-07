
import { authorsTableData } from "@/data";
import { ArrowUpTrayIcon, DocumentDuplicateIcon, LinkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import {
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Progress,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export function Profile() {
  const TABLE_HEAD = ["Name", "Job", "Employed",];

  const TABLE_ROWS = [
    {
      name: "0-15 Days",
      job: "0%",
      date: "23/04/18",
    },
    {
      name: "15-30 Days ",
      job: "0%",
      date: "23/04/18",
    },
    {
      name: "30-45 Days",
      job: "0%",
      date: "19/09/17",
    },
    {
      name: "45-60 Days ",
      job: "0%",
      date: "24/12/08",
    },
    {
      name: "60-75 Days ",
      job: "0.06%",
      date: "04/10/21",
    },
  ];
  return (
    <div>
      <Breadcrumbs separator=">" className=" bg-transparent ">
        <a href="#" className="opacity-60 text-[#00A991] text-sm font-semibold">
          All Applications
        </a>
        <a
          href="#"
          className="opacity-60 text-blue-gray-900 text-sm font-semibold"
        >
          Customer Details
        </a>
      </Breadcrumbs>

      <div className="flex gap-4">
        <Card className=" w-2/3">
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
                  Pan card
                </Typography>
              </div>
            </div>
            <div className="flex gap-3 items-center  flex-wrap ">
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
        <div className=" w-2/3  ">
          <Card className=" h-32 ">
            <CardBody className="px-0 pt-0 pb-2 mx-2">
              <div className="flex justify-between border-b-2">
                <div className=" text-sm font-medium pt-3 p-2">
                  Approval State
                </div>
                <div className="flex mt-1">
                  <Checkbox
                    color="green"
                    defaultChecked
                    className="h-4 w-4 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                  />
                  <Typography className=" text-[10px] mt-3 capitalize font-semibold text-blue-gray-600">
                    Pan card
                  </Typography>
                </div>
              </div>
              <div className="flex items-center justify-center mt-6">
                <Progress value={50} color="green" className="h-2" />
              </div>
            </CardBody>
          </Card>
          <div className="flex justify-between mt-6 text-blue-gray-600 text-sm mx-2 font-medium">
            <div>STATUS : Onboarded</div>
            <div>CREDIT LINE : Active</div>
          </div>
        </div>
        <div className="w-full">
          <Card className=" w-full h-32 ">
            <CardBody className="px-0 pt-0 pb-2 mx-2">
              <div className="flex justify-between border-b-2">
                <div className=" text-sm font-medium pt-3 p-2">
                  Lender Details
                </div>
              </div>
              <div className="flex justify-between mx-4 text-sm font-medium mt-4 ">
                <div className="flex flex-col gap-2 capitalize">
                  <div>Lender NAME : Blacksoil</div>
                  <div>Lender ID : MFL/RUF/OFF/325</div>
                </div>
                <div className="flex flex-col gap-2 capitalize">
                  <div>Credit line id : Blacksoil_2345</div>
                  <div>lender approval date : 24 Mar, 2024</div>
                </div>
              </div>
            </CardBody>
          </Card>
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outlined" color="green">
              Quid Rejection
            </Button>
            <Button color="green">Quid Approval</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4  mt-6">
        <Card className=" w-[520px] p-3">
          <CardBody className="px-0 pt-0 pb-2 mx-2">
            <div className="flex justify-between border-b-2">
              <div className=" text-sm font-medium pt-3 p-2">
                Business Details
              </div>
            </div>
            <div className="flex gap-3 items-center  flex-wrap p-2">
              <div className=" text-sm mx-2 mt-2 capitalize gap-2 flex flex-col">
                <div>CUSTOMER NAME : Abhishek Jain</div>
                <div>Business Name : Ripplr_789012347</div>
                <div>PHONE NO. : +91 95647 76550</div>
                <div>User ID : +91 95647 76550</div>
              </div>
            </div>
            <div className="flex mt-6 justify-between border-b-2">
              <div className=" text-sm font-medium pt-3 p-2">
                Anchor Details
              </div>
            </div>
            <div className="flex gap-3 items-center  flex-wrap ">
              <div className=" text-sm mx-2 mt-2 capitalize gap-2 p-2 flex flex-col">
                <div>Anchor NAME : Ripplr</div>
                <div>anchor id : Ripplr_789012347</div>
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
        <Card className=" w-full">
          <CardBody className="px-0 pt-0 pb-2 mx-2">
            <div className="flex justify-between border-b-2">
              <div className=" text-sm font-medium pt-3 p-2">
                Onboarding Journey
              </div>
            </div>
            <div>
              {" "}
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {[
                      "#",
                      "business",
                      "Category",
                      "PAN No",
                      "Upload cash Flow/Status",
                      "Updated",
                      "Action",
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
                            <div className="flex flex-col gap-y-4 text-xs font-semibold text-[#00A991] w-32">
                              <div>Bharat Electronics and home appliances</div>
                              <div className=" text-blue-gray-600 ">
                                +91 83567 76544{" "}
                              </div>
                            </div>
                          </td>
                          <td className={className}>
                            <div className="flex  flex-col gap-y-3">
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
                              <ArrowUpTrayIcon class="h-4 w-4 text-green-500" />
                              <Chip
                                variant="gradient"
                                color={online ? "green" : "blue-gray"}
                                value={online ? "success" : "pending"}
                                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                              />
                            </div>
                          </td>
                          <td className={className}>
                            {" "}
                            <div className="flex flex-col gap-y-3">
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                25 days ago
                              </Typography>
                              <div className="text-xs font-semibold text-blue-gray-400">
                                14:07:57
                              </div>
                            </div>
                          </td>
                          <td className={className}>
                            <div className="flex gap-2">
                              <LinkIcon className="h-5 w-5 text-green-500" />

                              <DocumentDuplicateIcon className="h-5 w-5 text-gray-900" />
                              <PencilSquareIcon className="h-5 w-5 text-gray-900" />
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
  );
}

export default Profile;
