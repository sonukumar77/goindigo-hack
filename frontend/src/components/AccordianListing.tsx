import { getStatusColor } from "@/utils/helper/common";
import { flightData } from "../constants/data";
import Accordian from "./base/Accordian";
import Button from "@/components/base/Button";
// const AccordianHeader = () => {
//     return(
//         <div></div>
//     )
// }

const AccordianListing = () => {
  return (
    <div className="mt-4">
      {flightData.map((singleFlight, index) => {
        const { airline, status } = singleFlight;
        const statusColor = getStatusColor(status);
        return (
          <Accordian
            key={`{accordian${index}}`}
            header={
              <div className="w-full flex justify-between">
                <p>{airline}</p>
                <Button
                  title={status}
                  onClick={() => null}
                  className={`mr-4 ${statusColor}`}
                />
              </div>
            }
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              magnam quasi assumenda?
            </p>
          </Accordian>
        );
      })}
    </div>
  );
};

export default AccordianListing;
