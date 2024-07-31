import { DASHBOARD_TITLE, STATUS } from "@/constants/data";
import Subtitle from "./Subtitle";
import useFlights from "@/hooks/useFlights";
import updateFlightStatus from "@/utils/api/updateFlightStatus";
import { useEffect, useState } from "react";
import Spinner from "./base/Spinner";

const Admin = () => {
  const { loading, flightList } = useFlights();
  const [statusList, setStatusList] = useState<{ [key: string]: string }>({});

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const updateResponse = await updateFlightStatus(id, status);
      if (updateResponse) {
        setStatusList((prev) => ({ ...prev, [id]: status }));
        window.alert("Status updated Successfully!");
      } else {
        console.log("Error in update status");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    const initialStatusList = flightList.reduce(
      (acc: { [key: string]: string }, item) => {
        acc[item._id] = item.status;
        return acc;
      },
      {}
    );
    setStatusList(initialStatusList);
  }, [flightList]);

  return (
    <section>
      <Subtitle title={DASHBOARD_TITLE} containerStyle="bg-blue-500" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-4 p-4 space-y-2">
          {flightList.map((singleFlight) => {
            const { _id, status } = singleFlight;
            return (
              <div
                key={`flight${singleFlight._id}`}
                className="border-2 border-blue-500 rounded shadow-lg p-4 flex justify-between"
              >
                <div>
                  <label>Indigo ({singleFlight.flight_id})</label>
                </div>
                <div>
                  <label>Change Status:</label>
                  <select
                    className="min-w-40 border-2 border-blue-500 ml-4 cursor-pointer"
                    onChange={(e) => handleStatusChange(_id, e.target.value)}
                    value={statusList[_id] || ""}
                  >
                    {STATUS.map((item, index) => {
                      return (
                        <option key={`status${index}`} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Admin;
