import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import BookingsRow from "./BookingsRow";



const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
     const url = `http://localhost:3000/bookings?email=${user?.email}`;
    
    useEffect(() =>{
        fetch(url)
       
        .then(res =>res.json())
        .then(data => setBookings(data))
        console.log(setBookings);
        
    },[])
    return (
        <div>
            <h2>All booking here : {bookings.length}</h2>

            <div className="overflow-x-auto mt-10 mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-slate-200 text-center">
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Service</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className="">
                    

                        {
                            bookings.map(booking=> <BookingsRow
                            key={booking._id}
                            booking={booking}
                            ></BookingsRow>)
                        }
                
                    
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    );
};

export default Bookings;