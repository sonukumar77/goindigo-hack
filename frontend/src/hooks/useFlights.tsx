import { flightData } from "@/models/List";
import { useEffect, useState } from "react";

const useFlights = () => {
    const [flightList, setFlightList] = useState<flightData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchFlightList = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/flight/all`
            );
            const data = await response.json();
            setFlightList(data.flights);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchFlightList();
    }, []);

    return {
        loading,
        flightList,
    };
};

export default useFlights;
