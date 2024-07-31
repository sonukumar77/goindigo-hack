
const updateFlightStatus = async (id:string,newStatus:string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/flight/update`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    _id:id,
                    status:newStatus
                })
            }
        );
        
        console.log('UPD==>',response)
        if(response) return true

    } catch (err) {
        console.error(err);
    }
    return false
};

export default updateFlightStatus