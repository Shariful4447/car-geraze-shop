

const BookingsRow = ({booking}) => {
    const {customerName, email, date, service, amount, img } = booking;

    return (
        
        <tr>
            <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <td>
            
                <div className="avatar">
                    <div className="rounded w-28 h-18">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{service}</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>
            
            </td>
            <td>{customerName}</td>
            <td>{amount}</td>
            <td>{email}</td>
            <th>
            <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
       
    );
};

export default BookingsRow;