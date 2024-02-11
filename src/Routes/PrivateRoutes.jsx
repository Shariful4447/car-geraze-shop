import { useContext } from 'react';
import { AuthContext } from "../Pages/Providers/AuthProviders";
import { Navigate } from 'react-router-dom';



const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);

    
    if(user?.email){
        return children;
    }

    return <Navigate to="/bookings" replace></Navigate>;
};

export default PrivateRoutes;