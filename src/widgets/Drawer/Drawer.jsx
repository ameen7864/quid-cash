import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function DrawerPlacement() {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const TABLE_HEAD = ["Anchors", "Job", "Employed"];

  const TABLE_ROWS = [
    {
      name: "Bhawar",
      name_id: "Bhawar_7667",
      job: "Finzy",
      status: "e-NACH completed",
      loan: "₹10,000",
      assignloan: "₹5,00,000",
      date: "Inactive",
    },
  ];

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button onClick={openDrawerRight}>Open Drawer Right</Button>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        size={600}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h6" color="blue-gray">
            Details
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography
          color="gray"
          className="mb-8 pr-4 font-semibold text-[#00A991]"
        >
          Bharat Electronics and home appliances
        </Typography>
        <div>
          {" "}
          <Typography className=" text-sm font-medium text-blue-gray-900">
            Business Details
          </Typography>
          <hr className="my-2" />
          <div className="flex justify-between  mt-4">
            <div className="flex flex-col gap-1 text-sm font-normal text-blue-gray-600">
              <div>UNIQUE ID : Ripplr_789012347</div>
              <div>CUSTOMER NAME : Abhishek Jain</div>
              <div>LENDER : Finzy</div>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-blue-gray-600 mr-5">
              <div>QUID ID : QUID_2346</div>
              <div>PHONE NO. : +91 95647 76550</div>
              <div>SANCTION ID : MFL/RUF/OFF/325</div>
            </div>
          </div>
          <div className="mt-6">
            <Typography className=" text-sm font-medium text-blue-gray-900">
              All Anchors Mapped
            </Typography>
            <hr className="my-2" />
            <div className="w-full border border-blue-gray-100 rounded-lg ">
              <table className="w-full rounded-lg min-w-max table-auto text-left">
                <thead>
                  <tr>
                  
                    {[
                      "business",
                      "Category",
                      "PAN No",
                      "Upload cash Flow/Status",
                      "Updated",
                      "Action",
                      "Action",
                    ].map((el, index) => (
                      <th
                        key={index}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[8px] font-bold uppercase w-4 text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(
                    (
                      { name, name_id, job, status, loan, assignloan, date },
                      index
                    ) => (
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
                            {name_id}
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
                        <td className="p-2 border-r border-blue-gray-100 rounded-lg">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {status}
                          </Typography>
                        </td>
                        <td className="p-2 border-r border-blue-gray-100 rounded-lg">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {loan}
                          </Typography>
                        </td>
                        <td className="p-2 border-r border-blue-gray-100 rounded-lg">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {assignloan}
                          </Typography>
                        </td>
                        <td className="p-2  border-blue-gray-100 rounded-lg">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
