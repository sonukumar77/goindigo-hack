import { DASHBOARD_TITLE } from "@/constants/data";
import Header from "./Subtitle";
import Subtitle from "./Subtitle";

const Admin = () => {
  return (
    <div className="">
      <Subtitle title={DASHBOARD_TITLE} containerStyle="bg-blue-500" />
    </div>
  );
};

export default Admin;
