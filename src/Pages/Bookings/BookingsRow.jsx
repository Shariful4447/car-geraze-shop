

const BookingsRow = ({booking, handleDelete, handleUpdate}) => {
    const {_id, customerName, email, date, service, amount, img, status } = booking;

    

    return (
        
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
            
                <div className="avatar">
                    <div className="rounded w-28 h-18">
                        {
                            img && <img src={img} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>
                
            
            </td>
            <td>{service}</td>
            <td>{customerName}</td>
            <td>{amount}</td>
            <td>{email}</td>
            <td>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span>  :
                    <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </td>
        </tr>
       
    );
};

export default BookingsRow;