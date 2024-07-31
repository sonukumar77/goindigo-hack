import { ReactNode } from "react";

export interface ListItem {
  id: string;
  title: string;
  component: ReactNode;
}

export interface flightData {
    _id: string
    flight_id: string
    airline: string
    status: string
    departure_gate:string
    arrival_gate:string
    scheduled_departure: string
    scheduled_arrival: string
    actual_departure: string | null,
    actual_arrival:string | null,
}