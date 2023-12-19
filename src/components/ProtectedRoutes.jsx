import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
       const trainerName = useSelector((store) => store.trainerName.name)

        if(trainerName !== ""){
            // ?le permitimos ver el componente 
            return <Outlet />;
        }else{
            // ? lo vamos a redireccionar al home 
            return <Navigate to="/" />;
        }

  
};
export default ProtectedRoutes;