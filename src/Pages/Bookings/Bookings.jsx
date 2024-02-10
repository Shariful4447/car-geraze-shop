import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:3000/bookings?email=${user.email}`;
    
    useEffect(() =>{
        fetch(url)
       
        .then(res =>res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h2>All booking here</h2>
        </div>
    );
};

export default Bookings;