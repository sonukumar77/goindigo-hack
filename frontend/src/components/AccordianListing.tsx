import { getStatusColor } from "@/utils/helper/common";
import Accordian from "./base/Accordian";
import Button from "@/components/base/Button";
import useFlights from "@/hooks/useFlights";
import Spinner from "./base/Spinner";

interface RenderKeyValueProps {
  listKey: string
  listValue: string
}

const RenderKeyValue = ({ listKey, listValue }: RenderKeyValueProps) => {
  return (
    <div className="flex justify-start gap-2 mb-2">
      <span>{listKey} : </span>
      <span>{listValue}</span>
    </div>
  )
}

const AccordianListing = () => {
  const { loading, flightList } = useFlights()

  return loading ? <Spinner /> : (
    <div className="mt-4">
      {flightList.map((singleFlight, index) => {
        const { airline, status, scheduled_arrival, scheduled_departure, departure_gate, actual_arrival, actual_departure, arrival_gate } = singleFlight;
        const statusColor = getStatusColor(status);

        return (
          <Accordian
            key={`{accordian${index}}`}
            header={
              <div className="w-full flex justify-between items-center">
                <p>{airline}</p>
                <Button
                  title={status}
                  onClick={() => null}
                  buttonStyle={`mr-4 ${statusColor}`}
                />
              </div>
            }
          >
            <div className="flex justify-start gap-6">
              <RenderKeyValue listKey='Arrivale Gate' listValue={arrival_gate} />
              <RenderKeyValue listKey='Departure Gate' listValue={departure_gate} />
            </div>
            <div className="flex justify-start gap-6">
              <RenderKeyValue listKey='Scheduled Arrivale' listValue={scheduled_arrival.substring(0, 10)} />
              <RenderKeyValue listKey='Scheduled Departure' listValue={scheduled_departure.substring(0, 10)} />
            </div>
            <div className="flex justify-start gap-6">
              {actual_arrival && <RenderKeyValue listKey='Actual Arrivale' listValue={actual_arrival.substring(0, 10)} />}
              {actual_departure && <RenderKeyValue listKey='Actual Departure' listValue={actual_departure.substring(0, 10)} />}
            </div>


          </Accordian>
        );
      })}
    </div>
  );
};

export default AccordianListing;
