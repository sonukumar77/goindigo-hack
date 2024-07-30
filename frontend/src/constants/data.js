export const BRAND_NAME = "GoIndigo";
export const DASHBOARD_TITLE = "Admin Dashboard";

export const flightData = [
  {
    flight_id: "6E 2341",

    airline: "Indigo",

    status: "On Time",

    departure_gate: "A12",

    arrival_gate: "B7",

    scheduled_departure: "2024-07-26T14:00:00Z",

    scheduled_arrival: "2024-07-26T18:00:00Z",

    actual_departure: null,

    actual_arrival: null,
  },

  {
    flight_id: "6E 2342",

    airline: "Indigo",

    status: "Delayed",

    departure_gate: "C3",

    arrival_gate: "D4",

    scheduled_departure: "2024-07-26T16:00:00Z",

    scheduled_arrival: "2024-07-26T20:00:00Z",

    actual_departure: null,

    actual_arrival: null,
  },

  {
    flight_id: "6E 2343",

    airline: "Indigo",

    status: "Cancelled",

    departure_gate: "E2",

    arrival_gate: "F1",

    scheduled_departure: "2024-07-26T12:00:00Z",

    scheduled_arrival: "2024-07-26T16:00:00Z",

    actual_departure: null,

    actual_arrival: null,
  },
];

export const notificationData = [
  {
    notification_id: "1",
    flight_id: "6E 2341",
    message: "Your flight 6E 2341 is on time. Departure gate: A12.",
    timestamp: "2024-07-26T13:00:00Z",
    method: "SMS",
    recipient: "+1234567890",
  },
  {
    notification_id: "2",
    flight_id: "6E 2342",
    message:
      "Your flight 6E 2342 is delayed. New departure time: 2024-07-26T17:00:00Z. Departure gate: C3.",
    timestamp: "2024-07-26T15:30:00Z",
    method: "Email",
    recipient: "user@example.com",
  },
  {
    notification_id: "3",
    flight_id: "6E 2343",
    message: "Your flight 6E 2343 has been cancelled.",
    timestamp: "2024-07-26T11:00:00Z",
    method: "App",
    recipient: "user_app_id_12345",
  },
];
