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

    const handleDelete = id =>{
        const procced = confirm('are you sure you want to delete');
        if(procced){
            fetch(`http://localhost:3000/bookings/${id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !==id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleUpdate = id =>{
        const procced = confirm('are you sure you want to Update');
        if(procced){
            fetch(`http://localhost:3000/bookings/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm' })
            })
            .then(res=>res.json())
            .then(data=>{
                 console.log(data);
                // if(data.modifiedCount > 0){
                //     alert('update successfully');
                //     const remaining = bookings.filter(booking => booking._id !==id);
                //     const updated = bookings.find(booking => booking._id ===id);
                //     updated.status = 'confirm'

                //     const newBookings = [updated, ...remaining];
                //     setBookings(newBookings);

                }
            )
        }
    }
    return (
        <div>
            <h2>All booking here : {bookings.length}</h2>

            <div className="overflow-x-auto mt-10 mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-slate-200 text-center">
                        <th>

                        </th>
                        <th></th>
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
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            ></BookingsRow>)
                        }
                
                    
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    );
};

export default Bookings;