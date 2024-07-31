import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    flight_id: {
      type: String,
      required: true,
    },
    airline: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    departure_gate: {
      type: String,
      required: true,
    },
    arrival_gate: {
      type: String,
      required: true,
    },
    scheduled_departure: {
      type: String,
      required: true,
    },
    scheduled_arrival: {
      type: String,
      required: true,
    },
    actual_departure: {
      type: String || null,
    },
    actual_arrival: {
      type: String || null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Flight", flightSchema, "flights");
