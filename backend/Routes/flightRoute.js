import {Router} from "express"
import FlightModal from "../Modal/Flight.js"
import { flightData } from "../Constants/data.js";

const router = Router();

const getAllFlights = async (req,res) => {

    try{
        const flights = await FlightModal.find()
        if(flights){
            res.status(200).send({message:"Record found!",flights})
            return;
        }else{
            res.status(400).send({message:"Record Not found!"})
            return;
        }

    }catch(err){
        console.error(err)
        res.status(500).send({message:"Try again later!"})
        return
    }
}

const postFlightsData = async (req,res) => {

    try{
        const insertFlightsData = await FlightModal.insertMany(flightData)
        if(insertFlightsData){
            res.status(200).send({message:"Data inserted successfully"})
            return;
        }else{
            res.status(400).send({message:"Failed to insert!"})
            return;
        }

    }catch(err){
        console.error('Error in inserting data:', err);
        res.status(500).send({message:"Try again later!"})
        return
    }
}

const updateFlightStatus = async (req,res) => {

    const {_id,status} = req.body;
    try{
     const updatedFlight = await FlightModal.findByIdAndUpdate(_id,{status},{new:true})
     if(updatedFlight){
        res.status(200).send({ message: "Flight status updated successfully", updatedFlight });
     }else{
        res.status(404).send({ message: "Failed to update status!" });
     }

    }catch(err){
      console.error("Error in update status",err)
      res.status(500).send({message:"Failed to update"})
    }

}

router.get("/all",getAllFlights)
router.post("/insert",postFlightsData)
router.patch("/update",updateFlightStatus)

export default router;

