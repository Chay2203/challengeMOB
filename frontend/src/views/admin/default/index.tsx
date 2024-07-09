
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";
import TaskCard from "views/admin/default/components/TaskCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
