import { FLIGHT_STATUS } from "@/constants/common";

export const getStatusColor = (status: string) => {
  switch (status as FLIGHT_STATUS) {
    case FLIGHT_STATUS.DELAYED:
      return "bg-yellow-500";
    case FLIGHT_STATUS.CANCELLED:
      return "bg-red-500";
    case FLIGHT_STATUS.ON_TIME:
      return "bg-green-500";
    default:
      return "";
  }
};
