import BulkUpload from "@/widgets/Models/BulkLead";
import CashFlow from "@/widgets/Models/CashFlow";
import CreateLead from "@/widgets/Models/CreateLead";
import Sharemodel from "@/widgets/Models/Sharemodal";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography
} from "@material-tailwind/react";
import { useState } from "react";
import Leads from "./tabsdata/Leads";
import AllApplication from "./tabsdata/all-application";



export function Home() {
  const [share, setshare] = useState("");
  const [lead, setLead] = useState("");
  const [bulk, setBulk] = useState("");
  const [cash, setCash] = useState("");


   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index) => {
     setActiveTab(index);
   };

     const tabs = [
       { label: "Leads", content: <Leads/> },
       { label: "All Applications", content: <AllApplication/>},
       { label: "Applications - End", content: <div>Content for Tab 3</div> },
     ];

  return (
    <div className="mt-2 mb-8 flex flex-col gap-4">
      <div className="flex mt-2 justify-between flex-wrap">
        <div>
          <div className="tabs">
            <div className="tab-buttons mt-4 flex gap-6 ms-6">
              {tabs.map((tab, index) => (
                <Typography
                  key={index}
                  className={
                    activeTab === index
                      ? "active cursor-pointer border-b-4 px-2  border-[#00A991] font-medium text-blue-gray-800"
                      : "cursor-pointer border-b border-blue-gray-200 px-2 text-blue-gray-800 font-normal"
                  }
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </Typography>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap mt-8">
          <div className="-mt-3">
            {" "}
            <Menu>
              <MenuHandler>
                <Button className="bg-[#00A991] flex gap-2">
                  Create <ChevronDownIcon className="w-3 mt-0.5 h-3" />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => setLead("md")}>Create Lead</MenuItem>
                <MenuItem onClick={() => setBulk("md")}>
                  Upload Bulk Lead
                </MenuItem>
                <MenuItem onClick={() => setCash("md")}>
                  Upload Bulk cash flow
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="flex text-xs gap-3 uppercase text-gray-700">
            <ArrowPathIcon class="h-4 w-4 text-green-500 cursor-pointer" />
            <div className="h-5 px-2 border-gray-400 ">
              <span className=" text-xs text-black font-bold">00</span>&nbsp;:
              updated
            </div>
            <div className="border-l-2 h-5 px-2 border-gray-400 ">
              <span className=" text-xs text-black font-bold">00</span> : new
            </div>
            <div className="border-l-2 h-5 px-2 border-gray-400 ">
              <span className=" text-xs text-black font-bold">00</span> : total
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
      <Sharemodel size={share} setSize={setshare} />
      <CreateLead size={lead} setSize={setLead} />
      <BulkUpload size={bulk} setSize={setBulk} />
      <CashFlow size={cash} setSize={setCash} />
    </div>
  );
}

export default Home;
